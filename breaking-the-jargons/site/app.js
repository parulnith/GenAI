(function () {
  var data = window.BTJ;
  var KEYS = { lang: "btj-lang", grade: "btj-grade", solved: "btj-solved", path: "btj-path" };
  var VIEWS = ["start", "home", "path", "ask", "grown-ups"];

  // Age levels by class. Explanations use "young" up to Class 4 and "older" from Class 5;
  // at-home activities and the level name use these three bands.
  var LEVELS = [
    { id: "little", from: 1, to: 3, name: { en: "Little Explorer", hi: "नन्हा खोजी" } },
    { id: "young", from: 4, to: 7, name: { en: "Young Builder", hi: "युवा निर्माता" } },
    { id: "future", from: 8, to: 10, name: { en: "Future Maker", hi: "भविष्य निर्माता" } }
  ];

  var BADGES = [
    { at: 0, name: { en: "New Explorer", hi: "नया खोजी" } },
    { at: 3, name: { en: "Curious Explorer", hi: "जिज्ञासु खोजी" } },
    { at: 6, name: { en: "Super Solver", hi: "सुपर सॉल्वर" } },
    { at: 10, name: { en: "Jargon Breaker", hi: "जार्गन ब्रेकर" } }
  ];

  // Every piece of interface text, in English and Hindi.
  var UI = {
    starsLabel: { en: "stars", hi: "सितारे" },
    tabHome: { en: "Home", hi: "होम" },
    tabPath: { en: "My path", hi: "मेरा रास्ता" },
    tabAsk: { en: "Ask Pip", hi: "पिप से पूछो" },
    classChip: { en: "Class {n}", hi: "कक्षा {n}" },
    welcome: { en: "Namaste! I'm Pip. Let's start!", hi: "नमस्ते! मैं पिप हूँ। चलो शुरू करें!" },
    classTitle: { en: "Which class are you in?", hi: "तुम किस कक्षा में हो?" },
    equaliser: { en: "Where you live doesn't decide what you become.", hi: "तुम कहाँ रहते हो, इससे तय नहीं होता कि तुम क्या बनोगे।" },
    homeBubble: { en: "Pick a dream. I'll walk the path with you, one step at a time.", hi: "एक सपना चुनो। मैं हर कदम पर तुम्हारे साथ चलूँगा।" },
    homeTitle: { en: "What do you want to become?", hi: "तुम क्या बनना चाहते हो?" },
    orAsk: { en: "Just have a question?", hi: "बस कोई सवाल है?" },
    orAskLink: { en: "Ask Pip", hi: "पिप से पूछो" },
    started: { en: "⭐ {d} of {n}", hi: "⭐ {n} में से {d}" },
    backToDreams: { en: "← All dreams", hi: "← सारे सपने" },
    myDream: { en: "My dream", hi: "मेरा सपना" },
    levelLine: { en: "{level} · Class {n}", hi: "{level} · कक्षा {n}" },
    soCanYou: { en: "So can you!", hi: "तुम भी कर सकते हो!" },
    solvedOf: { en: "⭐ {d} of {n} puzzles solved", hi: "⭐ {n} में से {d} पहेलियाँ हल कीं" },
    doNext: { en: "Do this next", hi: "अब यह करो" },
    earn: { en: "Earn: {skill}", hi: "कमाओ: {skill}" },
    earned: { en: "🏅 You earned: {skill}", hi: "🏅 तुमने कमाया: {skill}" },
    soon: { en: "{name} is coming soon", hi: "{name} जल्द आ रहा है" },
    goTo: { en: "Go to {name}", hi: "{name} पर जाओ" },
    atHomeTitle: { en: "🏡 Try this at home", hi: "🏡 घर पर करके देखो" },
    atHomeNote: { en: "No phone needed!", hi: "फ़ोन की ज़रूरत नहीं!" },
    indiaTitle: { en: "🇮🇳 India did it", hi: "🇮🇳 भारत ने कर दिखाया" },
    askTitle: { en: "Ask Pip!", hi: "पिप से पूछो!" },
    askLabel: { en: "Your question for Pip", hi: "पिप के लिए तुम्हारा सवाल" },
    askPlaceholder: { en: "Type your question...", hi: "अपना सवाल लिखो..." },
    askButton: { en: "Ask", hi: "पूछो" },
    ideasTitle: { en: "Or try one of these:", hi: "या इनमें से कोई आज़माओ:" },
    previewNote: { en: "Preview: Pip knows a few puzzles for now.", hi: "झलक: अभी पिप कुछ ही पहेलियाँ जानता है।" },
    pipSays: { en: "Pip says: ", hi: "पिप कहता है: " },
    youSaid: { en: "You said: ", hi: "तुमने कहा: " },
    yourGuess: { en: "Your guess", hi: "तुम्हारा अंदाज़ा" },
    notQuite: { en: "Hmm, not quite! {hint} Have another go!", hi: "हम्म, पूरा सही नहीं! {hint} एक बार और कोशिश करो!" },
    winNew: { en: "You figured it out! ⭐ +1 star", hi: "तुमने पता लगा लिया! ⭐ +1 सितारा" },
    winAgain: { en: "You figured it out again! ⭐", hi: "तुमने फिर से पता लगा लिया! ⭐" },
    newBadge: { en: "🏅 New badge: {name}!", hi: "🏅 नया बैज: {name}!" },
    earnedSkill: { en: "{icon} You earned \"{skill}\" on your {path} path!", hi: "{icon} तुमने अपने {path} वाले रास्ते पर \"{skill}\" कमाया!" },
    share: { en: "Tell a grown-up what you found out!", hi: "किसी बड़े को बताओ कि तुमने क्या सीखा!" },
    backToPath: { en: "Back to my path", hi: "मेरे रास्ते पर वापस" },
    askAnother: { en: "Ask another question", hi: "एक और सवाल पूछो" },
    explore: { en: "Explore {name}", hi: "{name} में घूमो" },
    privacy: { en: "Let's keep personal things private, even from me! Ask me about the world, science, stories or code instead.", hi: "अपनी निजी बातें निजी ही रखो, मुझसे भी! इसके बजाय दुनिया, विज्ञान, कहानियों या कोड के बारे में पूछो।" },
    greet: { en: "Hi there! I love a good puzzle. Try one of these:", hi: "नमस्ते! मुझे पहेलियाँ बहुत पसंद हैं। इनमें से कोई आज़माओ:" },
    unknown: { en: "Ooh, great question! I don't know that one yet. Try one of these:", hi: "वाह, बढ़िया सवाल! यह मैं अभी नहीं जानता। इनमें से कोई आज़माओ:" },

    gEyebrow: { en: "For parents and teachers", hi: "माता-पिता और शिक्षकों के लिए" },
    gTitle: { en: "Technology as an equaliser", hi: "तकनीक, सबके लिए बराबरी" },
    gLead: {
      en: "A child in a village should have the same chance to become a scientist, a doctor or an engineer as a child in a big city. Breaking the Jargons gives every child in Class 1 to 10 a clear path towards their dream, in English and Hindi, on any phone.",
      hi: "गाँव के बच्चे को भी वैज्ञानिक, डॉक्टर या इंजीनियर बनने का उतना ही मौक़ा मिलना चाहिए जितना बड़े शहर के बच्चे को। Breaking the Jargons कक्षा 1 से 10 के हर बच्चे को उसके सपने तक का साफ़ रास्ता देता है, अंग्रेज़ी और हिंदी में, किसी भी फ़ोन पर।"
    },
    g1Title: { en: "Paths, not just lessons", hi: "सिर्फ़ पाठ नहीं, रास्ते" },
    g1Text: {
      en: "Each dream is broken into small steps. Every step builds a real skill, and every path shows an Indian who did it first.",
      hi: "हर सपने को छोटे कदमों में बाँटा गया है। हर कदम एक असली हुनर सिखाता है, और हर रास्ता किसी ऐसे भारतीय को दिखाता है जिसने यह पहले कर दिखाया।"
    },
    g2Title: { en: "Right for their age", hi: "उम्र के हिसाब से" },
    g2Text: {
      en: "Explanations change with the child's class, and each path has an at-home activity for Class 1–3, 4–7 and 8–10 that needs no phone at all.",
      hi: "समझाने का तरीक़ा बच्चे की कक्षा के साथ बदलता है, और हर रास्ते में कक्षा 1–3, 4–7 और 8–10 के लिए घर पर करने की एक गतिविधि है, जिसमें फ़ोन की ज़रूरत ही नहीं।"
    },
    g3Title: { en: "Thinking first", hi: "पहले सोचना" },
    g3Text: {
      en: "Pip asks for a guess before explaining and gives hints when a child is stuck. It never hands over homework answers.",
      hi: "पिप समझाने से पहले अंदाज़ा पूछता है और अटकने पर इशारे देता है। वह होमवर्क के जवाब कभी नहीं देता।"
    },
    g4Title: { en: "Works anywhere", hi: "हर जगह चलता है" },
    g4Text: {
      en: "Runs in a phone's web browser, with no sign-up and no app. English and Hindi today, more Indian languages next:",
      hi: "फ़ोन के ब्राउज़र में चलता है, न साइन-अप, न ऐप। आज अंग्रेज़ी और हिंदी, आगे और भारतीय भाषाएँ:"
    },
    g5Title: { en: "Safe by design", hi: "सुरक्षित" },
    g5Text: {
      en: "Short answers, no personal information collected, and Pip stays on the subject. Progress is saved only on this phone.",
      hi: "छोटे जवाब, कोई निजी जानकारी नहीं ली जाती, और पिप विषय पर ही रहता है। प्रगति सिर्फ़ इसी फ़ोन में सेव होती है।"
    },
    cEyebrow: { en: "Built with Claude", hi: "Claude से बना" },
    cTitle: { en: "Pip runs on Claude, by Anthropic", hi: "पिप Anthropic के Claude पर चलता है" },
    cLead: {
      en: "Pip is powered by Claude, an AI model made by Anthropic. Claude understands a child's question in English, Hindi or a mix of both, teaches by asking, and acts inside each learning world with tools, like flying the plane to Antarctica or replaying the step where code went wrong.",
      hi: "पिप को Anthropic का बनाया AI मॉडल Claude चलाता है। Claude बच्चे का सवाल अंग्रेज़ी, हिंदी या दोनों के मेल में समझता है, सवाल पूछकर सिखाता है, और हर दुनिया के अंदर टूल्स से काम करता है, जैसे प्लेन को अंटार्कटिका ले जाना या कोड की गलती वाला कदम दोबारा दिखाना।"
    },
    cNote: {
      en: "The Claude key stays on our server, never in the browser. Pip is in preview while live Claude answers are switched on.",
      hi: "Claude की चाबी हमारे सर्वर पर रहती है, ब्राउज़र में कभी नहीं। पिप अभी झलक में है, लाइव Claude जवाब जल्द चालू होंगे।"
    },
    footerLink: { en: "For parents and teachers", hi: "माता-पिता और शिक्षकों के लिए" },
    footerText: {
      en: "Pip is powered by Claude, made by Anthropic. Breaking the Jargons is an independent project by parulnith, not made by Anthropic. No personal information is collected.",
      hi: "पिप Anthropic के बनाए Claude से चलता है। Breaking the Jargons, parulnith का एक स्वतंत्र प्रोजेक्ट है, Anthropic का बनाया नहीं। कोई निजी जानकारी नहीं ली जाती।"
    }
  };

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

  var savedLang = load(KEYS.lang, null);
  var savedGrade = Number(load(KEYS.grade, 0));
  var savedPath = load(KEYS.path, null);
  var state = {
    lang: savedLang === "hi" || savedLang === "en" ? savedLang : "en",
    langChosen: savedLang === "hi" || savedLang === "en",
    grade: savedGrade >= 1 && savedGrade <= 10 ? savedGrade : 5,
    gradeChosen: savedGrade >= 1 && savedGrade <= 10,
    solved: (load(KEYS.solved, []) || []).filter(function (id) { return puzzleById[id]; }),
    path: pathById[savedPath] ? savedPath : null
  };

  var el = {
    langToggle: document.getElementById("lang-toggle"),
    langButtons: document.querySelectorAll("[data-lang]"),
    classStep: document.getElementById("class-step"),
    gradeButtons: document.getElementById("grade-buttons"),
    classChip: document.getElementById("class-chip"),
    starCount: document.getElementById("star-count"),
    pathCards: document.getElementById("path-cards"),
    pathPanel: document.getElementById("path-panel"),
    askForm: document.getElementById("ask-form"),
    askInput: document.getElementById("ask-input"),
    ideas: document.getElementById("ideas"),
    starters: document.getElementById("starters"),
    convo: document.getElementById("convo"),
    languageList: document.getElementById("language-list"),
    confetti: document.getElementById("confetti")
  };

  // ---- Text helpers ----

  // t() picks the current language from a { en, hi } object; plain strings pass through.
  function t(value) {
    if (typeof value === "string") return value;
    return value[state.lang] || value.en;
  }

  function ui(key, vars) {
    var text = t(UI[key]);
    Object.keys(vars || {}).forEach(function (k) { text = text.split("{" + k + "}").join(vars[k]); });
    return text;
  }

  function make(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function isSolved(id) {
    return state.solved.indexOf(id) !== -1;
  }

  function levelFor(grade) {
    return LEVELS.filter(function (l) { return grade >= l.from && grade <= l.to; })[0];
  }

  // ---- Screens: one at a time, driven by the URL hash ----

  function currentView() {
    var name = window.location.hash.replace("#", "");
    if ((!state.langChosen || !state.gradeChosen) && name !== "grown-ups") return "start";
    if (name === "path" && !state.path) return "home";
    return VIEWS.indexOf(name) !== -1 ? name : "home";
  }

  function render() {
    var view = currentView();
    VIEWS.forEach(function (name) {
      document.getElementById("view-" + name).hidden = name !== view;
    });
    document.querySelectorAll(".tabs a").forEach(function (tab) {
      if (tab.getAttribute("data-tab") === view) tab.setAttribute("aria-current", "page");
      else tab.removeAttribute("aria-current");
    });
    document.body.setAttribute("data-view", view);
    el.classStep.hidden = !state.langChosen;
    if (view === "path") renderPathPage();
    window.scrollTo(0, 0);
  }

  function go(view) {
    if (window.location.hash === "#" + view) render();
    else window.location.hash = view;
  }

  window.addEventListener("hashchange", render);

  // ---- Language ----

  function applyLanguage() {
    document.documentElement.lang = state.lang;
    document.querySelectorAll("[data-i18n]").forEach(function (node) {
      node.textContent = ui(node.getAttribute("data-i18n"));
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (node) {
      node.placeholder = ui(node.getAttribute("data-i18n-placeholder"));
    });
    el.langToggle.textContent = state.lang === "en" ? "हिंदी" : "English";
    el.langToggle.lang = state.lang === "en" ? "hi" : "en";
    el.langButtons.forEach(function (btn) {
      btn.setAttribute("aria-checked", String(state.langChosen && btn.getAttribute("data-lang") === state.lang));
    });
    renderGrade();
    renderPathCards();
    renderStarters();
    resetConvo();
    if (currentView() === "path") renderPathPage();
  }

  function setLanguage(lang) {
    state.lang = lang;
    state.langChosen = true;
    save(KEYS.lang, lang);
    applyLanguage();
  }

  el.langButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      setLanguage(btn.getAttribute("data-lang"));
      el.classStep.hidden = false;
      el.classStep.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  el.langToggle.addEventListener("click", function () {
    setLanguage(state.lang === "en" ? "hi" : "en");
  });

  // ---- Class picker ----

  for (var g = 1; g <= 10; g++) {
    var gradeBtn = make("button", "", String(g));
    gradeBtn.type = "button";
    gradeBtn.value = String(g);
    gradeBtn.setAttribute("role", "radio");
    el.gradeButtons.appendChild(gradeBtn);
  }

  function renderGrade() {
    el.classChip.textContent = ui("classChip", { n: state.grade });
    el.gradeButtons.querySelectorAll("button").forEach(function (btn) {
      btn.setAttribute("aria-label", ui("classChip", { n: btn.value }));
      btn.setAttribute("aria-checked", String(state.gradeChosen && Number(btn.value) === state.grade));
    });
  }

  el.gradeButtons.addEventListener("click", function (event) {
    var btn = event.target.closest("button");
    if (!btn) return;
    state.grade = Number(btn.value);
    state.gradeChosen = true;
    save(KEYS.grade, state.grade);
    renderGrade();
    go(state.path ? "path" : "home");
  });

  // ---- Stars ----

  function badgeFor(count) {
    var current = BADGES[0];
    BADGES.forEach(function (b) { if (count >= b.at) current = b; });
    return current;
  }

  function renderStars() {
    el.starCount.textContent = String(state.solved.length);
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

  function renderPathCards() {
    el.pathCards.innerHTML = "";
    data.paths.forEach(function (path) {
      var ids = pathPuzzles(path);
      var done = ids.filter(isSolved).length;
      var card = make("button", "path-card");
      card.type = "button";
      card.style.setProperty("--tint", path.tint);
      card.appendChild(make("span", "path-icon", path.icon)).setAttribute("aria-hidden", "true");
      card.appendChild(make("span", "path-title", t(path.title)));
      if (done) card.appendChild(make("span", "path-progress", ui("started", { d: done, n: ids.length })));
      card.addEventListener("click", function () {
        state.path = path.id;
        save(KEYS.path, state.path);
        go("path");
      });
      el.pathCards.appendChild(card);
    });
  }

  function renderPathPage() {
    var path = pathById[state.path];
    var page = el.pathPanel;
    page.innerHTML = "";
    if (!path) return;
    page.style.setProperty("--tint", path.tint);
    var level = levelFor(state.grade);

    var top = make("div", "path-top");
    var back = make("a", "back-link", ui("backToDreams"));
    back.href = "#home";
    top.appendChild(back);

    var head = make("div", "path-head");
    head.appendChild(make("span", "path-icon big", path.icon)).setAttribute("aria-hidden", "true");
    var headText = make("div");
    headText.appendChild(make("p", "eyebrow", ui("myDream")));
    headText.appendChild(make("h1", "", t(path.title)));
    headText.appendChild(make("p", "level-badge", ui("levelLine", { level: t(level.name), n: state.grade })));
    head.appendChild(headText);
    top.appendChild(head);
    top.appendChild(make("p", "dream", t(path.dream)));
    page.appendChild(top);

    var hero = make("div", "info-card hero-card");
    hero.appendChild(make("p", "", "💡 " + t(path.hero)));
    hero.appendChild(make("p", "so-can-you", ui("soCanYou")));
    page.appendChild(hero);

    var ids = pathPuzzles(path);
    var done = ids.filter(isSolved).length;
    var bar = make("div", "progress");
    bar.setAttribute("role", "progressbar");
    bar.setAttribute("aria-valuemin", "0");
    bar.setAttribute("aria-valuemax", String(ids.length));
    bar.setAttribute("aria-valuenow", String(done));
    var fill = make("span", "progress-fill");
    fill.style.width = (ids.length ? Math.round((done / ids.length) * 100) : 0) + "%";
    bar.appendChild(fill);
    page.appendChild(bar);
    page.appendChild(make("p", "progress-text", ui("solvedOf", { d: done, n: ids.length })));

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
      li.appendChild(make("span", "step-marker", { done: "✅", next: "👉", later: "⬜", world: "🌟" }[status])).setAttribute("aria-hidden", "true");

      var body = make("div", "step-body");
      var title = make("p", "step-title", t(step.title));
      if (status === "next") title.appendChild(make("span", "next-tag", ui("doNext")));
      body.appendChild(title);
      body.appendChild(make("p", "skill" + (status === "done" ? " earned" : ""),
        status === "done" ? ui("earned", { skill: t(step.skill) }) : ui("earn", { skill: t(step.skill) })));

      // Only the next step (and finished ones) show puzzles, so there's one clear thing to do.
      if (status === "next" || status === "done") {
        var actions = make("div", "step-actions");
        step.puzzles.forEach(function (id) { actions.appendChild(starterButton(puzzleById[id])); });
        body.appendChild(actions);
      } else if (status === "world") {
        var world = worldById[step.world];
        if (world && world.status === "live") {
          var link = make("a", "btn btn-small", ui("goTo", { name: t(world.name) }));
          link.href = world.url;
          link.target = "_blank";
          link.rel = "noopener";
          body.appendChild(link);
        } else if (world) {
          body.appendChild(make("p", "soon-text", ui("soon", { name: t(world.name) })));
        }
      }
      li.appendChild(body);
      list.appendChild(li);
    });
    page.appendChild(list);

    var home = make("div", "info-card home-card");
    home.appendChild(make("p", "info-title", ui("atHomeTitle")));
    home.appendChild(make("p", "", t(path.atHome[level.id])));
    home.appendChild(make("p", "info-note", ui("atHomeNote")));
    page.appendChild(home);

    var india = make("div", "info-card india-card");
    india.appendChild(make("p", "info-title", ui("indiaTitle")));
    india.appendChild(make("p", "", t(path.india)));
    page.appendChild(india);
  }

  // ---- Puzzle ideas ----

  function suggestedPuzzles(limit) {
    var pool = data.puzzles.slice();
    var path = pathById[state.path];
    if (path) {
      // Puzzles from the child's own path come first.
      var mine = pathPuzzles(path);
      pool.sort(function (a, b) { return (mine.indexOf(b.id) !== -1) - (mine.indexOf(a.id) !== -1); });
    }
    // Unsolved first, so there's always a new star to chase. (Array sort is stable.)
    pool.sort(function (a, b) { return isSolved(a.id) - isSolved(b.id); });
    return pool.slice(0, limit);
  }

  function starterButton(puzzle) {
    var solved = isSolved(puzzle.id);
    var btn = make("button", "chip starter" + (solved ? " solved" : ""), (solved ? "⭐ " : "") + t(puzzle.starter));
    btn.type = "button";
    btn.addEventListener("click", function () { startPuzzle(puzzle, true); });
    return btn;
  }

  function renderStarters() {
    el.starters.innerHTML = "";
    suggestedPuzzles(4).forEach(function (p) { el.starters.appendChild(starterButton(p)); });
  }

  // ---- Conversation with Pip ----

  function say(who, text) {
    var msg = make("div", "msg msg-" + who);
    if (who === "pip") msg.appendChild(make("span", "avatar", "✈️")).setAttribute("aria-hidden", "true");
    var body = make("p", "", "");
    body.appendChild(make("span", "sr-only", ui(who === "pip" ? "pipSays" : "youSaid")));
    body.appendChild(document.createTextNode(text));
    msg.appendChild(body);
    el.convo.appendChild(msg);
    return msg;
  }

  function resetConvo() {
    el.convo.innerHTML = "";
    el.ideas.hidden = false;
  }

  function showLatest() {
    var last = el.convo.lastElementChild;
    if (last) last.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  function startPuzzle(puzzle, fromIdea) {
    if (fromIdea) {
      if (currentView() !== "ask") go("ask");
      resetConvo();
      say("kid", t(puzzle.starter));
    }
    el.ideas.hidden = true; // One puzzle at a time.
    say("pip", t(puzzle.think));

    var group = make("div", "choices");
    group.setAttribute("role", "group");
    group.setAttribute("aria-label", ui("yourGuess"));
    shuffle(puzzle.choices.slice()).forEach(function (choice) {
      var btn = make("button", "choice", t(choice.text));
      btn.type = "button";
      btn.addEventListener("click", function () {
        say("kid", t(choice.text));
        if (choice.correct) {
          group.querySelectorAll("button").forEach(function (b) { b.disabled = true; });
          btn.classList.add("right");
          solve(puzzle);
        } else {
          btn.disabled = true;
          btn.classList.add("wrong");
          say("pip", ui("notQuite", { hint: t(choice.nudge) }));
          el.convo.appendChild(group); // Keep the choices under the latest hint.
        }
        showLatest();
      });
      group.appendChild(btn);
    });
    el.convo.appendChild(group);
    showLatest();
  }

  function solve(puzzle) {
    say("pip", t(state.grade <= 4 ? puzzle.young : puzzle.older));

    var isNew = !isSolved(puzzle.id);
    var before = badgeFor(state.solved.length);
    if (isNew) {
      state.solved.push(puzzle.id);
      save(KEYS.solved, state.solved);
    }
    var after = badgeFor(state.solved.length);
    renderStars();

    var win = make("div", "win");
    win.appendChild(make("p", "win-title", ui(isNew ? "winNew" : "winAgain")));
    if (after !== before) win.appendChild(make("p", "win-badge", ui("newBadge", { name: t(after.name) })));

    var path = pathById[state.path];
    var onPath = path && pathPuzzles(path).indexOf(puzzle.id) !== -1;
    if (onPath && isNew) {
      path.steps.forEach(function (step) {
        if (step.puzzles.indexOf(puzzle.id) !== -1 && stepDone(step)) {
          win.appendChild(make("p", "win-badge", ui("earnedSkill", { icon: path.icon, skill: t(step.skill), path: t(path.title) })));
        }
      });
    }
    win.appendChild(make("p", "win-share", ui("share")));

    var actions = make("div", "card-actions");
    if (onPath) {
      var back = make("a", "btn", ui("backToPath"));
      back.href = "#path";
      actions.appendChild(back);
    }
    var world = worldById[puzzle.world];
    if (world && world.status === "live") {
      var explore = make("a", "btn btn-ghost", ui("explore", { name: t(world.name) }));
      explore.href = world.url;
      explore.target = "_blank";
      explore.rel = "noopener";
      actions.appendChild(explore);
    }
    var again = make("button", "btn btn-ghost", ui("askAnother"));
    again.type = "button";
    again.addEventListener("click", function () {
      resetConvo();
      renderStarters();
      window.scrollTo(0, 0);
      el.askInput.focus();
    });
    actions.appendChild(again);
    win.appendChild(actions);
    el.convo.appendChild(win);

    renderPathCards();
    renderStarters();
    celebrate();
  }

  // ---- Matching a typed question (English or Hindi) to a puzzle ----

  var PRIVATE = /(my name is|i live|address|phone|my school is|my number|password|email|मेरा नाम|मेरा पता|फ़ोन नंबर|फोन नंबर|मोबाइल नंबर|पासवर्ड)/;
  var GREETING = ["hi", "hello", "hey", "namaste", "hii", "नमस्ते", "हेलो", "हाय"];

  function words(text) {
    return text.toLowerCase().split(/[\s,.!?।"'()\-:;]+/).filter(Boolean);
  }

  function findPuzzle(question) {
    var ws = words(question);
    var best = null;
    var bestScore = 0;
    data.puzzles.forEach(function (p) {
      var score = 0;
      p.keywords.forEach(function (k) {
        if (ws.some(function (w) { return w.indexOf(k) === 0; })) score++;
      });
      if (score > bestScore) { best = p; bestScore = score; }
    });
    return best;
  }

  function suggestInConvo(text) {
    say("pip", text);
    var ideas = make("div", "starters");
    suggestedPuzzles(3).forEach(function (p) { ideas.appendChild(starterButton(p)); });
    el.convo.appendChild(ideas);
  }

  el.askForm.addEventListener("submit", function (event) {
    event.preventDefault();
    var question = el.askInput.value.trim();
    if (!question) return;
    el.askInput.value = "";
    resetConvo();
    el.ideas.hidden = true;
    say("kid", question);

    var lower = question.toLowerCase();
    var ws = words(question);
    if (PRIVATE.test(lower)) {
      say("pip", ui("privacy"));
    } else {
      var puzzle = findPuzzle(question);
      if (puzzle) startPuzzle(puzzle, false);
      else if (ws.length <= 2 && ws.some(function (w) { return GREETING.indexOf(w) !== -1; })) suggestInConvo(ui("greet"));
      else suggestInConvo(ui("unknown"));
    }
    showLatest();
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

  data.languages.forEach(function (name) { el.languageList.appendChild(make("li", "", name)); });
  renderStars();
  applyLanguage();
  render();
})();
