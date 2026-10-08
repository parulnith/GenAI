(function () {
  var GRADE_KEY = "btj-grade";
  var DEFAULT_GRADE = 5;

  var buttonsEl = document.getElementById("grade-buttons");
  var label = document.getElementById("grade-label");

  function readGrade() {
    try {
      var saved = Number(window.localStorage.getItem(GRADE_KEY));
      if (saved >= 1 && saved <= 10) return saved;
    } catch (e) {
      // Storage can be blocked (private windows, strict settings). Fall back to the default.
    }
    return DEFAULT_GRADE;
  }

  function saveGrade(grade) {
    try {
      window.localStorage.setItem(GRADE_KEY, String(grade));
    } catch (e) {
      // Not saved, but the picker still works for this visit.
    }
  }

  function applyGrade(grade) {
    label.textContent = "Grade " + grade;
    buttonsEl.querySelectorAll("button").forEach(function (btn) {
      btn.setAttribute("aria-checked", String(Number(btn.value) === grade));
    });
  }

  // Build the 1 to 10 grade buttons.
  for (var g = 1; g <= 10; g++) {
    var btn = document.createElement("button");
    btn.type = "button";
    btn.setAttribute("role", "radio");
    btn.value = String(g);
    btn.textContent = String(g);
    btn.setAttribute("aria-label", "Grade " + g);
    buttonsEl.appendChild(btn);
  }

  var current = readGrade();
  applyGrade(current);

  buttonsEl.addEventListener("click", function (event) {
    var btn = event.target.closest("button");
    if (!btn) return;
    current = Number(btn.value);
    applyGrade(current);
    saveGrade(current);
  });

  // Demo Pip: set replies, no API call. Each reply asks a question before it tells, as in the brief.
  var PIP_REPLIES = [
    { words: ["cold", "ice", "snow", "freez"], reply: "Somewhere really cold is Antarctica! Before I fly there, what do you think people wear to stay warm?" },
    { words: ["old", "ancient", "history"], reply: "Some of the oldest wonders were built thousands of years ago. What do you think it took to build them with no machines?" },
    { words: ["hot", "desert", "sun"], reply: "Deserts can get very hot! What do you think keeps the animals that live there cool?" },
    { words: ["hi", "hello", "hey"], reply: "Hi, I'm Pip! Ask me to take you somewhere cold, old or hot, and I'll show you." }
  ];
  var PIP_FALLBACK = "Good question! In demo mode I only know a few things. Try asking about a cold place, an old place or a hot place.";

  var askForm = document.getElementById("ask-form");
  var askInput = document.getElementById("ask-input");
  var askReply = document.getElementById("ask-reply");

  function pipReply(question) {
    var q = question.toLowerCase();
    for (var i = 0; i < PIP_REPLIES.length; i++) {
      var hit = PIP_REPLIES[i].words.some(function (w) { return q.indexOf(w) !== -1; });
      if (hit) return PIP_REPLIES[i].reply;
    }
    return PIP_FALLBACK;
  }

  askForm.addEventListener("submit", function (event) {
    event.preventDefault();
    var question = askInput.value.trim();
    if (!question) return;
    askReply.textContent = pipReply(question);
  });
})();
