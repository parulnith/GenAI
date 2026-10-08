(function () {
  var data = window.BTJ;
  var KEYS = { grade: "btj-grade", interests: "btj-interests", solved: "btj-solved", path: "btj-path" };
  var BADGES = [
    { at: 0, name: "New Explorer" },
    { at: 3, name: "Curious Explorer" },
    { at: 6, name: "Super Solver" },
    { at: 10, name: "Jargon Breaker" }
  ];

  // Storage can be blocked (private windows, strict settings). Everything still works for the visit.
  function load(key, fallback) {
    try {
      var raw = window.localStorage.getItem(key);
      return raw === null ? fallback : JSON.parse(raw);
    } catch (e) {
      return fallback;
    }
  }

  function save(key, value) {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      // Not saved; fine for this visit.
    }
  }

  var worldById = {};
  data.worlds.forEach(function (w) { worldById[w.id] = w; });
  var puzzleById = {};
  data.puzzles.forEach(function (p) { puzzleById[p.id] = p; });
  var pathById = {};
  data.paths.forEach(function (p) { pathById[p.id] = p; });
  var interestIds = data.interests.map(function (i) { return i.id; });

  var savedGrade = Number(load(KEYS.grade, 5));
  var savedPath = load(KEYS.path, null);
  var state = {
    grade: savedGrade >= 1 && savedGrade <= 10 ? savedGrade : 5,
    interests: (load(KEYS.interests, []) || []).filter(function (id) { return interestIds.indexOf(id) !== -1; }),
    solved: (load(KEYS.solved, []) || []).filter(function (id) { return puzzleById[id]; }),
    path: pathById[savedPath] ? savedPath : null
  };

  var el = {
    gradeButtons: document.getElementById("grade-buttons"),
    gradeLabel: document.getElementById("grade-label"),
    starCount: document.getElementById("star-count"),
    badgeName: document.getElementById("badge-name"),
    askForm: document.getElementById("ask-form"),
    askInput: document.getElementById("ask-input"),
    starters: document.getElementById("starters"),
    convo: document.getElementById("convo"),
    interestChips: document.getElementById("interest-chips"),
    worldCards: document.getElementById("world-cards"),
    pathCards: document.getElementById("path-cards"),
    pathPanel: document.getElementById("path-panel"),
    languageList: document.getElementById("language-list"),
    confetti: document.getElementById("confetti")
  };

  function isSolved(id) {
    return state.solved.indexOf(id) !== -1;
  }

  function make(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function sharesInterest(item) {
    return item.interests.some(function (id) { return state.interests.indexOf(id) !== -1; });
  }

  // ---- Class (grade) picker ----

  for (var g = 1; g <= 10; g++) {
    var gradeBtn = make("button", "", String(g));
    gradeBtn.type = "button";
    gradeBtn.value = String(g);
    gradeBtn.setAttribute("role", "radio");
    gradeBtn.setAttribute("aria-label", "Class " + g);
    el.gradeButtons.appendChild(gradeBtn);
  }

  function renderGrade() {
    el.gradeLabel.textContent = "Class " + state.grade;
    el.gradeButtons.querySelectorAll("button").forEach(function (btn) {
      btn.setAttribute("aria-checked", String(Number(btn.value) === state.grade));
    });
  }

  el.gradeButtons.addEventListener("click", function (event) {
    var btn = event.target.closest("button");
    if (!btn) return;
    state.grade = Number(btn.value);
    save(KEYS.grade, state.grade);
    renderGrade();
  });

  // ---- Stars and badges ----

  function badgeFor(count) {
    var current = BADGES[0];
    BADGES.forEach(function (b) { if (count >= b.at) current = b; });
    return current;
  }

  function renderStars() {
    var count = state.solved.length;
    el.starCount.textContent = String(count);
    el.badgeName.textContent = badgeFor(count).name;
  }

  // ---- Dream paths ----

  function pathPuzzles(path) {
    var ids = [];
    path.steps.forEach(function (step) {
      step.puzzles.forEach(function (id) { if (ids.indexOf(id) === -1) ids.push(id); });
    });
    return ids;
  }

  function stepDone(step) {
    return step.puzzles.length > 0 && step.puzzles.every(isSolved);
  }

  function renderPaths() {
    el.pathCards.innerHTML = "";
    data.paths.forEach(function (path) {
      var ids = pathPuzzles(path);
      var done = ids.filter(isSolved).length;
      var card = make("button", "path-card");
      card.type = "button";
      card.style.setProperty("--tint", path.tint);
      card.setAttribute("aria-pressed", String(state.path === path.id));
      card.appendChild(make("span", "path-icon", path.icon)).setAttribute("aria-hidden", "true");
      card.appendChild(make("span", "path-title", path.title));
      card.appendChild(make("span", "path-progress", done ? done + " of " + ids.length + " puzzles done" : ids.length + " puzzles to start"));
      card.addEventListener("click", function () {
        state.path = path.id;
        save(KEYS.path, state.path);
        renderPaths();
        el.pathPanel.scrollIntoView({ behavior: "smooth", block: "start" });
      });
      el.pathCards.appendChild(card);
    });
    renderPathPanel();
  }

  function renderPathPanel() {
    var path = pathById[state.path];
    el.pathPanel.hidden = !path;
    el.pathPanel.innerHTML = "";
    if (!path) return;
    el.pathPanel.style.setProperty("--tint", path.tint);

    var ids = pathPuzzles(path);
    var done = ids.filter(isSolved).length;

    var head = make("div", "panel-head");
    head.appendChild(make("span", "path-icon big", path.icon)).setAttribute("aria-hidden", "true");
    var headText = make("div");
    headText.appendChild(make("p", "eyebrow", "Your dream path"));
    headText.appendChild(make("h3", "", path.title));
    headText.appendChild(make("p", "", path.dream));
    head.appendChild(headText);
    el.pathPanel.appendChild(head);

    el.pathPanel.appendChild(make("p", "inspire", "💡 " + path.hero));

    var bar = make("div", "progress");
    bar.setAttribute("role", "progressbar");
    bar.setAttribute("aria-valuemin", "0");
    bar.setAttribute("aria-valuemax", String(ids.length));
    bar.setAttribute("aria-valuenow", String(done));
    bar.setAttribute("aria-label", "Path progress");
    var fill = make("span", "progress-fill");
    fill.style.width = (ids.length ? Math.round((done / ids.length) * 100) : 0) + "%";
    bar.appendChild(fill);
    el.pathPanel.appendChild(bar);
    el.pathPanel.appendChild(make("p", "progress-text", done + " of " + ids.length + " puzzles solved"));

    var nextMarked = false;
    var list = make("ol", "path-steps");
    path.steps.forEach(function (step) {
      var li = make("li", "path-step");
      var status;
      if (stepDone(step)) {
        status = "done";
      } else if (!nextMarked && step.puzzles.length) {
        status = "next";
        nextMarked = true;
      } else {
        status = step.puzzles.length ? "later" : "world";
      }
      li.classList.add("is-" + status);

      var marker = { done: "✅", next: "👉", later: "⬜", world: "🌟" }[status];
      li.appendChild(make("span", "step-marker", marker)).setAttribute("aria-hidden", "true");

      var body = make("div", "step-body");
      var title = make("p", "step-title", step.title);
      if (status === "next") title.appendChild(make("span", "next-tag", "Next step"));
      body.appendChild(title);
      body.appendChild(make("p", "skill" + (stepDone(step) ? " earned" : ""), (stepDone(step) ? "🏅 Skill earned: " : "Skill: ") + step.skill));

      var actions = make("div", "step-actions");
      step.puzzles.forEach(function (id) {
        actions.appendChild(starterButton(puzzleById[id]));
      });
      if (!step.puzzles.length) {
        var world = worldById[step.world];
        if (world && world.status === "live") {
          var go = make("a", "btn btn-small", "Go to " + world.name);
          go.href = world.url;
          go.target = "_blank";
          go.rel = "noopener";
          actions.appendChild(go);
        } else if (world) {
          actions.appendChild(make("span", "badge", world.name + ": coming soon"));
        }
      }
      body.appendChild(actions);
      li.appendChild(body);
      list.appendChild(li);
    });
    el.pathPanel.appendChild(list);

    var change = make("button", "btn btn-ghost btn-small", "Choose a different dream");
    change.type = "button";
    change.addEventListener("click", function () {
      el.pathCards.scrollIntoView({ behavior: "smooth", block: "center" });
    });
    el.pathPanel.appendChild(change);
  }

  // ---- Languages ----

  function renderLanguages() {
    data.languages.forEach(function (name) {
      el.languageList.appendChild(make("li", "", name));
    });
  }

  // ---- Interests ----

  function renderInterests() {
    el.interestChips.innerHTML = "";
    data.interests.forEach(function (interest) {
      var chip = make("button", "chip", interest.icon + " " + interest.label);
      chip.type = "button";
      chip.setAttribute("aria-pressed", String(state.interests.indexOf(interest.id) !== -1));
      chip.addEventListener("click", function () {
        var at = state.interests.indexOf(interest.id);
        if (at === -1) state.interests.push(interest.id);
        else state.interests.splice(at, 1);
        save(KEYS.interests, state.interests);
        renderInterests();
        renderStarters();
        renderWorlds();
      });
      el.interestChips.appendChild(chip);
    });
  }

  // ---- Puzzle starters ----

  function suggestedPuzzles(limit) {
    var pool = data.puzzles.slice();
    if (state.interests.length) {
      var matching = pool.filter(sharesInterest);
      if (matching.length) pool = matching;
    }
    // Unsolved first, so there's always a new star to chase.
    pool.sort(function (a, b) {
      return (state.solved.indexOf(a.id) !== -1) - (state.solved.indexOf(b.id) !== -1);
    });
    return pool.slice(0, limit);
  }

  function starterButton(puzzle) {
    var solved = state.solved.indexOf(puzzle.id) !== -1;
    var btn = make("button", "chip starter" + (solved ? " solved" : ""), (solved ? "⭐ " : "") + puzzle.starter);
    btn.type = "button";
    btn.addEventListener("click", function () { startPuzzle(puzzle, true); });
    return btn;
  }

  function renderStarters() {
    el.starters.innerHTML = "";
    suggestedPuzzles(6).forEach(function (p) { el.starters.appendChild(starterButton(p)); });
  }

  // ---- Worlds ----

  function renderWorlds() {
    var worlds = data.worlds.slice();
    if (state.interests.length) {
      worlds.sort(function (a, b) { return sharesInterest(b) - sharesInterest(a); });
    }
    el.worldCards.innerHTML = "";
    worlds.forEach(function (world) {
      var card = make("article", "card" + (world.status === "soon" ? " card-soon" : ""));
      card.style.setProperty("--tint", world.tint);

      if (state.interests.length && sharesInterest(world)) {
        card.appendChild(make("span", "ribbon", "Matches what you love"));
      }
      card.appendChild(make("span", "icon", world.icon)).setAttribute("aria-hidden", "true");
      card.appendChild(make("p", "tag", world.subject));
      card.appendChild(make("h3", "", world.name));
      card.appendChild(make("p", "", world.blurb));

      var actions = make("div", "card-actions");
      if (world.status === "live") {
        var link = make("a", "btn", world.cta);
        link.href = world.url;
        link.target = "_blank";
        link.rel = "noopener";
        actions.appendChild(link);
      } else {
        actions.appendChild(make("span", "badge", "Coming soon"));
      }
      var worldPuzzles = data.puzzles.filter(function (p) { return p.world === world.id; });
      if (worldPuzzles.length) {
        var tryBtn = make("button", "btn btn-ghost", "Try a puzzle");
        tryBtn.type = "button";
        tryBtn.addEventListener("click", function () {
          var next = worldPuzzles.filter(function (p) { return state.solved.indexOf(p.id) === -1; })[0] || worldPuzzles[0];
          startPuzzle(next, true);
        });
        actions.appendChild(tryBtn);
      }
      card.appendChild(actions);
      el.worldCards.appendChild(card);
    });
  }

  // ---- Conversation with Pip ----

  function say(who, text) {
    var msg = make("div", "msg msg-" + who);
    if (who === "pip") msg.appendChild(make("span", "avatar", "✈️")).setAttribute("aria-hidden", "true");
    var body = make("p", "", "");
    var label = make("span", "sr-only", who === "pip" ? "Pip says: " : "You said: ");
    body.appendChild(label);
    body.appendChild(document.createTextNode(text));
    msg.appendChild(body);
    el.convo.appendChild(msg);
    return msg;
  }

  function resetConvo() {
    el.convo.innerHTML = "";
  }

  function showConvo() {
    el.convo.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  function startPuzzle(puzzle, fromChip) {
    if (fromChip) {
      resetConvo();
      say("kid", puzzle.starter);
      document.getElementById("ask").scrollIntoView({ behavior: "smooth", block: "start" });
    }
    say("pip", puzzle.think);

    var group = make("div", "choices");
    group.setAttribute("role", "group");
    group.setAttribute("aria-label", "Your guess");
    shuffle(puzzle.choices.slice()).forEach(function (choice) {
      var btn = make("button", "choice", choice.text);
      btn.type = "button";
      btn.addEventListener("click", function () {
        say("kid", choice.text);
        if (choice.correct) {
          group.querySelectorAll("button").forEach(function (b) { b.disabled = true; });
          btn.classList.add("right");
          solve(puzzle);
        } else {
          btn.disabled = true;
          btn.classList.add("wrong");
          say("pip", "Hmm, not quite! " + choice.nudge + " Have another go!");
          el.convo.appendChild(group); // Keep the choices under the latest hint.
        }
        showConvo();
      });
      group.appendChild(btn);
    });
    el.convo.appendChild(group);
    showConvo();
  }

  function solve(puzzle) {
    say("pip", state.grade <= 4 ? puzzle.young : puzzle.older);

    var isNew = state.solved.indexOf(puzzle.id) === -1;
    var before = badgeFor(state.solved.length);
    if (isNew) {
      state.solved.push(puzzle.id);
      save(KEYS.solved, state.solved);
    }
    var after = badgeFor(state.solved.length);
    renderStars();

    var win = make("div", "win");
    win.appendChild(make("p", "win-title", isNew ? "You figured it out! ⭐ +1 star" : "You figured it out again! ⭐"));
    if (after.name !== before.name) {
      win.appendChild(make("p", "win-badge", "🏅 New badge: " + after.name + "!"));
    }
    var path = pathById[state.path];
    if (path && isNew) {
      path.steps.forEach(function (step) {
        if (step.puzzles.indexOf(puzzle.id) !== -1) {
          win.appendChild(make("p", "win-badge",
            stepDone(step)
              ? path.icon + " You earned the skill \"" + step.skill + "\" on your " + path.title + " path!"
              : path.icon + " That's a step forward on your " + path.title + " path!"));
        }
      });
    }
    win.appendChild(make("p", "win-text", puzzle.action));

    var actions = make("div", "card-actions");
    var world = worldById[puzzle.world];
    if (world && world.status === "live") {
      var go = make("a", "btn", "Explore " + world.name);
      go.href = world.url;
      go.target = "_blank";
      go.rel = "noopener";
      actions.appendChild(go);
    }
    var again = make("button", "btn btn-ghost", "Ask another question");
    again.type = "button";
    again.addEventListener("click", function () {
      resetConvo();
      el.askInput.focus();
    });
    actions.appendChild(again);
    win.appendChild(actions);
    win.appendChild(make("p", "win-share", "Tell a grown-up what you found out!"));
    el.convo.appendChild(win);

    renderStarters();
    renderPaths();
    renderWorlds();
    celebrate();
  }

  // ---- Matching a typed question to a puzzle ----

  var PRIVATE = /(my name is|i live|address|phone|my school is|my number|password|email)/;
  var GREETING = ["hi", "hello", "hey", "namaste", "hii"];

  function findPuzzle(question) {
    var words = question.toLowerCase().split(/[^a-z0-9-]+/).filter(Boolean);
    var best = null;
    var bestScore = 0;
    data.puzzles.forEach(function (p) {
      var score = 0;
      p.keywords.forEach(function (k) {
        if (words.some(function (w) { return w.indexOf(k) === 0; })) score++;
      });
      if (score > bestScore) { best = p; bestScore = score; }
    });
    return best;
  }

  function suggestInConvo(text) {
    say("pip", text);
    var ideas = make("div", "starters");
    suggestedPuzzles(4).forEach(function (p) { ideas.appendChild(starterButton(p)); });
    el.convo.appendChild(ideas);
  }

  el.askForm.addEventListener("submit", function (event) {
    event.preventDefault();
    var question = el.askInput.value.trim();
    if (!question) return;
    el.askInput.value = "";
    resetConvo();
    say("kid", question);

    var lower = question.toLowerCase();
    if (PRIVATE.test(lower)) {
      say("pip", "Let's keep personal things private, even from me! Ask me about the world, science, stories or code instead.");
    } else {
      var puzzle = findPuzzle(question);
      if (puzzle) {
        startPuzzle(puzzle, false);
      } else if (GREETING.indexOf(lower.replace(/[^a-z]/g, "")) !== -1) {
        suggestInConvo("Hi there! I love a good puzzle. Here are some to start with:");
      } else {
        suggestInConvo("Ooh, great question! In this preview I only know some puzzles so far. Soon I'll be able to explore anything with you. Try one of these:");
      }
    }
    showConvo();
  });

  // ---- Celebration ----

  function celebrate() {
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    var pieces = ["⭐", "🎉", "✨", "🌟", "🎈"];
    for (var i = 0; i < 28; i++) {
      var bit = make("span", "bit", pieces[i % pieces.length]);
      bit.style.left = Math.random() * 100 + "vw";
      bit.style.animationDelay = Math.random() * 0.4 + "s";
      bit.style.fontSize = 18 + Math.random() * 18 + "px";
      el.confetti.appendChild(bit);
    }
    setTimeout(function () { el.confetti.innerHTML = ""; }, 2600);
  }

  function shuffle(list) {
    for (var i = list.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = list[i];
      list[i] = list[j];
      list[j] = tmp;
    }
    return list;
  }

  renderGrade();
  renderStars();
  renderPaths();
  renderInterests();
  renderStarters();
  renderWorlds();
  renderLanguages();
})();
