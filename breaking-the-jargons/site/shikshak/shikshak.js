(function () {
  var GRADE_KEY = "btj-grade";
  var MAX_PHOTOS = 5;
  var MAX_SIDE = 1600; // Shrink photos before upload to stay under the serverless body limit.
  var API = "../api/shikshak";

  var photosInput = document.getElementById("photos");
  var thumbs = document.getElementById("thumbs");
  var analyseBtn = document.getElementById("analyse");
  var statusEl = document.getElementById("status");
  var resultEl = document.getElementById("result");
  var buddyEl = document.getElementById("buddy");
  var synopsisEl = document.getElementById("synopsis");
  var linesEl = document.getElementById("lines");
  var wordsEl = document.getElementById("words");
  var listenAllBtn = document.getElementById("listen-all");
  var chatEl = document.getElementById("chat");
  var chatForm = document.getElementById("chat-form");
  var questionEl = document.getElementById("question");

  var pages = []; // { media_type, data, url }
  var lesson = null;
  var history = [];

  function grade() {
    try {
      var saved = window.localStorage.getItem(GRADE_KEY);
      if (saved && Number(saved) >= 1 && Number(saved) <= 10) return Number(saved);
    } catch (e) {
      // Storage blocked: use the default.
    }
    return 5;
  }

  function setStatus(text, isError) {
    statusEl.textContent = text;
    statusEl.classList.toggle("error", !!isError);
  }

  function fileToPage(file) {
    return new Promise(function (resolve, reject) {
      var url = URL.createObjectURL(file);
      var img = new Image();
      img.onload = function () {
        var scale = Math.min(1, MAX_SIDE / Math.max(img.width, img.height));
        var canvas = document.createElement("canvas");
        canvas.width = Math.round(img.width * scale);
        canvas.height = Math.round(img.height * scale);
        canvas.getContext("2d").drawImage(img, 0, 0, canvas.width, canvas.height);
        var dataUrl = canvas.toDataURL("image/jpeg", 0.85);
        resolve({
          media_type: "image/jpeg",
          data: dataUrl.split(",")[1],
          url: url,
        });
      };
      img.onerror = function () {
        URL.revokeObjectURL(url);
        reject(new Error("That file is not a photo I can read."));
      };
      img.src = url;
    });
  }

  function renderThumbs() {
    thumbs.innerHTML = "";
    pages.forEach(function (page, index) {
      var li = document.createElement("li");
      var img = document.createElement("img");
      img.src = page.url;
      img.alt = "Page " + (index + 1);
      li.appendChild(img);
      thumbs.appendChild(li);
    });
    analyseBtn.disabled = pages.length === 0;
  }

  photosInput.addEventListener("change", function () {
    var files = Array.prototype.slice.call(photosInput.files || []);
    if (files.length === 0) return;
    var room = MAX_PHOTOS - pages.length;
    if (room <= 0) {
      setStatus("You can add up to " + MAX_PHOTOS + " pages.", true);
      return;
    }
    setStatus("Getting your photos ready...");
    Promise.all(files.slice(0, room).map(fileToPage))
      .then(function (newPages) {
        pages = pages.concat(newPages);
        renderThumbs();
        setStatus(files.length > room ? "Only the first " + room + " pages were added." : "");
      })
      .catch(function (err) {
        setStatus(err.message, true);
      });
    photosInput.value = "";
  });

  function post(payload) {
    return fetch(API, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    }).then(function (res) {
      return res.json().then(function (body) {
        if (!res.ok) throw new Error(body.error || "Something went wrong. Please try again.");
        return body;
      });
    });
  }

  function speak(text) {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    var utter = new SpeechSynthesisUtterance(text);
    utter.lang = "hi-IN";
    window.speechSynthesis.speak(utter);
  }

  function renderLesson(data) {
    synopsisEl.textContent = data.synopsis || "No synopsis this time.";

    linesEl.innerHTML = "";
    data.lines.forEach(function (line) {
      var li = document.createElement("li");
      var hi = document.createElement("span");
      hi.className = "hi";
      hi.textContent = line.hindi || "";
      var en = document.createElement("span");
      en.className = "en";
      en.textContent = line.english_meaning || "";
      var listen = document.createElement("button");
      listen.type = "button";
      listen.textContent = "Listen";
      listen.addEventListener("click", function () { speak(line.hindi || ""); });
      li.appendChild(hi);
      li.appendChild(en);
      li.appendChild(listen);
      linesEl.appendChild(li);
    });

    wordsEl.innerHTML = "";
    data.difficult_words.forEach(function (word) {
      var li = document.createElement("li");
      var strong = document.createElement("strong");
      strong.textContent = word.hindi_word || "";
      li.appendChild(strong);
      li.appendChild(document.createTextNode(" means " + (word.english_meaning || "")));
      wordsEl.appendChild(li);
    });

    resultEl.hidden = false;
    buddyEl.hidden = false;
  }

  analyseBtn.addEventListener("click", function () {
    analyseBtn.disabled = true;
    setStatus("Reading your lesson. This can take a moment...");
    var images = pages.map(function (p) { return { media_type: p.media_type, data: p.data }; });
    post({ action: "analyse", grade: grade(), images: images })
      .then(function (data) {
        lesson = data;
        history = [];
        chatEl.innerHTML = "";
        renderLesson(data);
        setStatus("Done! Scroll down to read your lesson.");
        resultEl.scrollIntoView({ behavior: "smooth", block: "start" });
      })
      .catch(function (err) {
        setStatus(err.message, true);
      })
      .finally(function () {
        analyseBtn.disabled = pages.length === 0;
      });
  });

  listenAllBtn.addEventListener("click", function () {
    if (!lesson) return;
    speak(lesson.lines.map(function (l) { return l.hindi; }).join(" "));
  });

  function addBubble(text, who) {
    var p = document.createElement("p");
    p.className = "bubble-msg " + who;
    p.textContent = text;
    chatEl.appendChild(p);
    chatEl.scrollTop = chatEl.scrollHeight;
  }

  chatForm.addEventListener("submit", function (event) {
    event.preventDefault();
    var question = questionEl.value.trim();
    if (!question || !lesson) return;

    questionEl.value = "";
    addBubble(question, "user");
    history.push({ role: "user", content: question });

    var submit = chatForm.querySelector("button");
    submit.disabled = true;
    post({ action: "chat", grade: grade(), lesson: lesson, messages: history })
      .then(function (data) {
        history.push({ role: "assistant", content: data.reply });
        addBubble(data.reply, "bot");
      })
      .catch(function (err) {
        addBubble(err.message, "bot");
      })
      .finally(function () {
        submit.disabled = false;
        questionEl.focus();
      });
  });
})();
