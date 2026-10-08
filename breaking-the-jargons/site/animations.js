// Interactive animations, made with Claude. They appear inside path modules and open from
// "Show me!" after a matching puzzle is solved. Later, Mitthu (Claude) will write new ones on
// demand for any question, run in a sandboxed frame. Each animation: { title, hint, puzzles, mount(host, tr) },
// where tr() picks English or Hindi and mount() returns a cleanup function.
(function () {
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var FONT = "Mukta, system-ui, sans-serif";

  // ---- Small helpers shared by the animations ----

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  // A crisp canvas that fills the host's width and redraws when the window resizes.
  function makeCanvas(host, height, draw) {
    var canvas = el("canvas", "anim-canvas");
    canvas.style.height = height + "px";
    host.appendChild(canvas);
    var c = canvas.getContext("2d");
    var size = { w: 300, h: height };
    function fit() {
      var dpr = window.devicePixelRatio || 1;
      size.w = Math.max(240, Math.round(canvas.clientWidth || host.clientWidth));
      canvas.width = Math.round(size.w * dpr);
      canvas.height = Math.round(height * dpr);
      c.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw();
    }
    window.addEventListener("resize", fit);
    return { c: c, size: size, fit: fit, stop: function () { window.removeEventListener("resize", fit); } };
  }

  function slider(host, label, min, max, step, value, onInput) {
    var wrap = el("label", "anim-slider");
    wrap.appendChild(el("span", "", label));
    var input = el("input");
    input.type = "range";
    input.min = String(min);
    input.max = String(max);
    input.step = String(step);
    input.value = String(value);
    input.addEventListener("input", function () { onInput(Number(input.value)); });
    wrap.appendChild(input);
    host.appendChild(wrap);
    return input;
  }

  function button(host, text, onClick, className) {
    var b = el("button", "anim-btn" + (className ? " " + className : ""), text);
    b.type = "button";
    b.addEventListener("click", onClick);
    host.appendChild(b);
    return b;
  }

  // "Play" that moves a slider forward until pressed again.
  function player(host, tr, input, speed, onInput) {
    var playing = false;
    var raf = 0;
    var labels = { play: tr({ en: "Play", hi: "चलाओ" }), pause: tr({ en: "Pause", hi: "रोको" }) };
    var b = button(host, labels.play, function () {
      playing = !playing;
      b.textContent = playing ? labels.pause : labels.play;
      if (playing) tick();
      else cancelAnimationFrame(raf);
    });
    function tick() {
      if (!playing) return;
      var max = Number(input.max);
      var v = Number(input.value) + speed;
      if (v > max) v = Number(input.min);
      input.value = String(v);
      onInput(v);
      raf = requestAnimationFrame(tick);
    }
    return function stop() { playing = false; cancelAnimationFrame(raf); };
  }

  function mix(a, b, t) {
    var pa = parseInt(a.slice(1), 16), pb = parseInt(b.slice(1), 16);
    var r = Math.round(((pa >> 16) & 255) + (((pb >> 16) & 255) - ((pa >> 16) & 255)) * t);
    var g = Math.round(((pa >> 8) & 255) + (((pb >> 8) & 255) - ((pa >> 8) & 255)) * t);
    var bl = Math.round((pa & 255) + ((pb & 255) - (pa & 255)) * t);
    return "rgb(" + r + "," + g + "," + bl + ")";
  }

  function text(c, str, x, y, size, colour, align, weight) {
    c.font = (weight || 600) + " " + size + "px " + FONT;
    c.fillStyle = colour;
    c.textAlign = align || "left";
    c.textBaseline = "middle";
    c.fillText(str, x, y);
  }

  // ---- 1. Moon phases ----

  var PHASES = [
    { upTo: 0.03, en: "New moon", hi: "अमावस" },
    { upTo: 0.22, en: "Waxing crescent", hi: "बढ़ता पतला चाँद" },
    { upTo: 0.28, en: "First quarter (half moon)", hi: "आधा चाँद (बढ़ता)" },
    { upTo: 0.47, en: "Waxing gibbous", hi: "लगभग पूरा (बढ़ता)" },
    { upTo: 0.53, en: "Full moon", hi: "पूर्णिमा" },
    { upTo: 0.72, en: "Waning gibbous", hi: "लगभग पूरा (घटता)" },
    { upTo: 0.78, en: "Last quarter (half moon)", hi: "आधा चाँद (घटता)" },
    { upTo: 0.97, en: "Waning crescent", hi: "घटता पतला चाँद" },
    { upTo: 1.01, en: "New moon", hi: "अमावस" }
  ];

  // The Moon as seen from Earth: lit part for phase p (0 new, 0.5 full).
  function drawPhase(c, cx, cy, r, p) {
    c.fillStyle = "#2A3350";
    c.beginPath();
    c.arc(cx, cy, r, 0, Math.PI * 2);
    c.fill();
    var k = Math.cos(p * Math.PI * 2);
    c.fillStyle = "#F4F1DE";
    c.beginPath();
    if (p <= 0.5) {
      c.arc(cx, cy, r, -Math.PI / 2, Math.PI / 2, false);
      c.ellipse(cx, cy, r * Math.abs(k), r, 0, Math.PI / 2, -Math.PI / 2, k > 0);
    } else {
      c.arc(cx, cy, r, Math.PI / 2, Math.PI * 1.5, false);
      c.ellipse(cx, cy, r * Math.abs(k), r, 0, Math.PI * 1.5, Math.PI / 2, k > 0);
    }
    c.fill();
  }

  var moon = {
    title: { en: "Watch the Moon's phases", hi: "चाँद के रूप देखो" },
    hint: { en: "Slide through the month. On the left, the Moon goes around the Earth. On the right, see what we see from Earth.", hi: "महीने भर स्लाइड करो। बाईं ओर चाँद धरती के चारों ओर घूमता है। दाईं ओर देखो कि धरती से हमें क्या दिखता है।" },
    puzzles: ["sci-moon"],
    mount: function (host, tr) {
      var day = 4;
      var cv = makeCanvas(host, 230, draw);
      var readout = el("p", "anim-readout");
      host.appendChild(readout);
      var controls = el("div", "anim-controls");
      host.appendChild(controls);
      var input = slider(controls, tr({ en: "Day of the Moon's month", hi: "चाँद के महीने का दिन" }), 0, 29.5, 0.25, day, function (v) { day = v; draw(); });
      var stopPlay = player(controls, tr, input, 0.08, function (v) { day = v; draw(); });

      function draw() {
        var c = cv.c, w = cv.size.w, h = cv.size.h;
        var p = day / 29.53;
        c.fillStyle = "#16213F";
        c.fillRect(0, 0, w, h);
        // Sunlight from the left
        var glow = c.createRadialGradient(-30, h / 2, 10, -30, h / 2, 120);
        glow.addColorStop(0, "rgba(255,214,90,0.95)");
        glow.addColorStop(1, "rgba(255,214,90,0)");
        c.fillStyle = glow;
        c.fillRect(0, 0, 140, h);
        text(c, tr({ en: "Sunlight", hi: "धूप" }), 10, 18, 13, "#FFE29A");
        c.strokeStyle = "rgba(255,226,154,0.5)";
        c.lineWidth = 1.5;
        for (var i = 0; i < 3; i++) {
          var yy = h / 2 + (i - 1) * 50;
          c.beginPath();
          c.moveTo(14, yy);
          c.lineTo(46, yy);
          c.lineTo(40, yy - 5);
          c.moveTo(46, yy);
          c.lineTo(40, yy + 5);
          c.stroke();
        }
        // Orbit seen from above
        var ex = w * 0.3, ey = h / 2, R = Math.min(w * 0.16, h * 0.36);
        c.setLineDash([4, 5]);
        c.strokeStyle = "rgba(255,255,255,0.35)";
        c.beginPath();
        c.arc(ex, ey, R, 0, Math.PI * 2);
        c.stroke();
        c.setLineDash([]);
        c.fillStyle = "#3C7BE0";
        c.beginPath();
        c.arc(ex, ey, 13, 0, Math.PI * 2);
        c.fill();
        c.fillStyle = "#4FB06A";
        c.beginPath();
        c.arc(ex - 3, ey - 3, 5, 0, Math.PI * 2);
        c.fill();
        text(c, tr({ en: "Earth", hi: "धरती" }), ex, ey + 24, 12, "#C9D3F0", "center");
        var a = Math.PI + p * Math.PI * 2;
        var mx = ex + R * Math.cos(a), my = ey - R * Math.sin(a);
        c.fillStyle = "#2A3350";
        c.beginPath();
        c.arc(mx, my, 9, 0, Math.PI * 2);
        c.fill();
        c.fillStyle = "#F4F1DE";
        c.beginPath();
        c.arc(mx, my, 9, Math.PI / 2, Math.PI * 1.5, false);
        c.fill();
        // What we see from Earth
        var vx = w * 0.76, vy = h / 2 + 8, vr = Math.min(w * 0.15, h * 0.32);
        text(c, tr({ en: "Seen from Earth", hi: "धरती से ऐसा दिखता है" }), vx, 20, 13, "#C9D3F0", "center");
        drawPhase(c, vx, vy, vr, p);
        var phase = PHASES.filter(function (ph) { return p < ph.upTo; })[0];
        readout.textContent = tr(phase) + " · " + tr({ en: "Day ", hi: "दिन " }) + Math.round(day);
      }

      cv.fit();
      return function () { stopPlay(); cv.stop(); };
    }
  };

  // ---- 2. Day and night ----

  var dayNight = {
    title: { en: "Turn the Earth", hi: "धरती को घुमाओ" },
    hint: { en: "The Sun stays still. Turn the Earth and watch your home move from day into night.", hi: "सूरज अपनी जगह पर रहता है। धरती घुमाओ और देखो तुम्हारा घर दिन से रात में कैसे जाता है।" },
    puzzles: [],
    mount: function (host, tr) {
      var spin = 30;
      var cv = makeCanvas(host, 230, draw);
      var readout = el("p", "anim-readout");
      host.appendChild(readout);
      var controls = el("div", "anim-controls");
      host.appendChild(controls);
      var input = slider(controls, tr({ en: "Turn the Earth", hi: "धरती घुमाओ" }), 0, 360, 1, spin, function (v) { spin = v; draw(); });
      var stopPlay = player(controls, tr, input, 1.2, function (v) { spin = v; draw(); });

      function draw() {
        var c = cv.c, w = cv.size.w, h = cv.size.h;
        c.fillStyle = "#16213F";
        c.fillRect(0, 0, w, h);
        var glow = c.createRadialGradient(-20, h / 2, 20, -20, h / 2, 150);
        glow.addColorStop(0, "#FFE07A");
        glow.addColorStop(0.45, "rgba(255,190,60,0.85)");
        glow.addColorStop(1, "rgba(255,190,60,0)");
        c.fillStyle = glow;
        c.fillRect(0, 0, 170, h);
        text(c, tr({ en: "Sun", hi: "सूरज" }), 16, 20, 14, "#16213F", "left", 700);
        var cx = w * 0.6, cy = h / 2, r = Math.min(h * 0.4, w * 0.26);
        c.fillStyle = "#2E6FD8";
        c.beginPath();
        c.arc(cx, cy, r, 0, Math.PI * 2);
        c.fill();
        // Land, turning with the Earth
        c.fillStyle = "#4FB06A";
        [0, 75, 150, 230, 300].forEach(function (offset, i) {
          var ang = (spin + offset) * Math.PI / 180;
          c.beginPath();
          c.ellipse(cx + Math.cos(ang) * r * 0.62, cy + Math.sin(ang) * r * 0.62, r * (0.18 + (i % 2) * 0.08), r * 0.13, ang, 0, Math.PI * 2);
          c.fill();
        });
        // Night side, away from the Sun
        c.save();
        c.beginPath();
        c.arc(cx, cy, r, 0, Math.PI * 2);
        c.clip();
        c.fillStyle = "rgba(6,10,30,0.62)";
        c.fillRect(cx, cy - r, r, r * 2);
        c.restore();
        // Your home
        var ha = spin * Math.PI / 180;
        var hx = cx + Math.cos(ha) * r * 0.86, hy = cy + Math.sin(ha) * r * 0.86;
        c.fillStyle = "#FFFFFF";
        c.strokeStyle = "#1F2A44";
        c.lineWidth = 2;
        c.beginPath();
        c.moveTo(hx - 8, hy + 6);
        c.lineTo(hx - 8, hy - 2);
        c.lineTo(hx, hy - 9);
        c.lineTo(hx + 8, hy - 2);
        c.lineTo(hx + 8, hy + 6);
        c.closePath();
        c.fill();
        c.stroke();
        text(c, tr({ en: "Your home", hi: "तुम्हारा घर" }), hx, hy + 18, 12, "#FFFFFF", "center", 700);
        var side = (hx - cx) / r;
        var label;
        if (Math.abs(side) < 0.18) label = { en: "Sunrise or sunset", hi: "सूर्योदय या सूर्यास्त" };
        else if (side < 0) label = { en: "Day: your home faces the Sun", hi: "दिन: तुम्हारा घर सूरज की ओर है" };
        else label = { en: "Night: your home faces away from the Sun", hi: "रात: तुम्हारा घर सूरज से दूर है" };
        readout.textContent = tr(label);
      }

      cv.fit();
      return function () { stopPlay(); cv.stop(); };
    }
  };

  // ---- 3. Why the sky changes colour ----

  var sky = {
    title: { en: "Move the Sun across the sky", hi: "सूरज को आसमान में ऊपर-नीचे करो" },
    hint: { en: "Lower the Sun towards sunset. Its light passes through more air, the blue gets scattered away, and the sky turns orange.", hi: "सूरज को सूर्यास्त की ओर नीचे लाओ। उसकी रोशनी ज़्यादा हवा से गुज़रती है, नीला रंग बिखर जाता है, और आसमान नारंगी हो जाता है।" },
    puzzles: ["sci-sky"],
    mount: function (host, tr) {
      var height = 65;
      var cv = makeCanvas(host, 230, draw);
      var readout = el("p", "anim-readout");
      host.appendChild(readout);
      var controls = el("div", "anim-controls");
      host.appendChild(controls);
      slider(controls, tr({ en: "Height of the Sun", hi: "सूरज की ऊँचाई" }), 0, 90, 1, height, function (v) { height = v; draw(); });

      function draw() {
        var c = cv.c, w = cv.size.w, h = cv.size.h;
        var s = Math.pow(height / 90, 0.7); // 0 at sunset, 1 at noon
        var ground = h - 44;
        var top = mix("#2E3770", "#2F6FCF", s);
        var middle = mix("#E9785A", "#6FA8E8", s);
        var horizon = mix("#FFC46E", "#B8DBF8", s);
        var g = c.createLinearGradient(0, 0, 0, ground);
        g.addColorStop(0, top);
        g.addColorStop(0.65, middle);
        g.addColorStop(1, horizon);
        c.fillStyle = g;
        c.fillRect(0, 0, w, ground);
        var sx = w * 0.72, sy = ground - (ground - 34) * Math.sin(height * Math.PI / 180) - 4;
        var sunColour = mix("#FF7A2F", "#FFF6C8", s);
        var halo = c.createRadialGradient(sx, sy, 8, sx, sy, 70);
        halo.addColorStop(0, sunColour);
        halo.addColorStop(1, "rgba(255,240,200,0)");
        c.fillStyle = halo;
        c.beginPath();
        c.arc(sx, sy, 70, 0, Math.PI * 2);
        c.fill();
        c.fillStyle = sunColour;
        c.beginPath();
        c.arc(sx, sy, 20, 0, Math.PI * 2);
        c.fill();
        // Fields and a home
        c.fillStyle = mix("#3D6B37", "#4F9A4A", s);
        c.fillRect(0, ground, w, h - ground);
        c.fillStyle = mix("#2F5530", "#43853F", s);
        for (var x = 0; x < w; x += 36) c.fillRect(x, ground + 14, 22, 4);
        var hx = w * 0.16;
        c.fillStyle = "#8A5A3B";
        c.fillRect(hx, ground - 22, 34, 22);
        c.fillStyle = "#B5452F";
        c.beginPath();
        c.moveTo(hx - 6, ground - 20);
        c.lineTo(hx + 17, ground - 40);
        c.lineTo(hx + 40, ground - 20);
        c.closePath();
        c.fill();
        // The path sunlight takes through the air
        c.setLineDash([5, 6]);
        c.strokeStyle = "rgba(255,255,255,0.8)";
        c.lineWidth = 2;
        c.beginPath();
        c.moveTo(sx, sy);
        c.lineTo(hx + 17, ground - 44);
        c.stroke();
        c.setLineDash([]);
        var label;
        if (height > 50) label = { en: "Midday: light passes through a little air, and scattered blue fills the sky", hi: "दोपहर: रोशनी थोड़ी हवा से गुज़रती है, और बिखरा हुआ नीला रंग आसमान भर देता है" };
        else if (height > 15) label = { en: "Afternoon: the light's path through the air is getting longer", hi: "दोपहर बाद: हवा में रोशनी का रास्ता लंबा हो रहा है" };
        else label = { en: "Sunset: light passes through lots of air, the blue is scattered away, and orange and red are left", hi: "सूर्यास्त: रोशनी बहुत सारी हवा से गुज़रती है, नीला बिखर जाता है, और नारंगी व लाल बचते हैं" };
        readout.textContent = tr(label);
      }

      cv.fit();
      return function () { cv.stop(); };
    }
  };

  // ---- 4. Float or sink ----

  var THINGS = [
    { id: "leaf", name: { en: "Leaf", hi: "पत्ता" }, floats: true, w: 30, h: 7, colour: "#4FAF5A", depth: 0.3, why: { en: "The leaf floats: it is light and flat, so the water holds it up.", hi: "पत्ता तैरता है: वह हल्का और चपटा है, इसलिए पानी उसे ऊपर रखता है।" } },
    { id: "stone", name: { en: "Stone", hi: "पत्थर" }, floats: false, w: 22, h: 16, colour: "#8A8F99", why: { en: "The stone sinks: it is heavy for its size and can't push away enough water.", hi: "पत्थर डूबता है: वह अपने आकार के हिसाब से भारी है और उतना पानी नहीं हटा पाता।" } },
    { id: "coin", name: { en: "Steel coin", hi: "स्टील का सिक्का" }, floats: false, w: 18, h: 5, colour: "#C9CED8", why: { en: "The coin sinks: it is solid metal, heavy for its size.", hi: "सिक्का डूबता है: वह ठोस धातु है, अपने आकार के हिसाब से भारी।" } },
    { id: "boat", name: { en: "Steel boat", hi: "स्टील की नाव" }, floats: true, w: 50, h: 16, colour: "#C9CED8", depth: 0.55, boat: true, why: { en: "The boat floats: it is the same metal as the coin, but hollow, so it pushes away lots of water.", hi: "नाव तैरती है: वह सिक्के जैसी ही धातु है, पर खोखली है, इसलिए बहुत सारा पानी हटाती है।" } },
    { id: "wood", name: { en: "Wooden block", hi: "लकड़ी का टुकड़ा" }, floats: true, w: 30, h: 16, colour: "#B07A45", depth: 0.6, why: { en: "The wood floats: it is lighter than the same amount of water.", hi: "लकड़ी तैरती है: वह उतने ही पानी से हल्की होती है।" } }
  ];

  var floatSink = {
    title: { en: "Float or sink?", hi: "तैरेगा या डूबेगा?" },
    hint: { en: "Guess first, then drop each thing into the water. Compare the coin and the boat: both are steel!", hi: "पहले अंदाज़ा लगाओ, फिर हर चीज़ पानी में डालो। सिक्के और नाव की तुलना करो: दोनों स्टील के हैं!" },
    puzzles: ["sci-float", "fut-density"],
    mount: function (host, tr) {
      var dropped = [];
      var raf = 0;
      var cv = makeCanvas(host, 240, draw);
      var readout = el("p", "anim-readout", tr({ en: "Pick something to drop.", hi: "डालने के लिए कोई चीज़ चुनो।" }));
      host.appendChild(readout);
      var controls = el("div", "anim-controls anim-choices");
      host.appendChild(controls);
      THINGS.forEach(function (thing) {
        button(controls, tr(thing.name), function () { drop(thing); });
      });
      button(controls, tr({ en: "Empty the tank", hi: "टंकी ख़ाली करो" }), function () {
        dropped = [];
        readout.textContent = tr({ en: "Pick something to drop.", hi: "डालने के लिए कोई चीज़ चुनो।" });
        draw();
      }, "anim-btn-quiet");

      function layout() {
        var w = cv.size.w, h = cv.size.h;
        return { left: 16, right: w - 16, water: h * 0.42, bottom: h - 14 };
      }

      function drop(thing) {
        if (dropped.length >= 5) dropped.shift();
        var L = layout();
        var item = { thing: thing, y: 14, vy: 0, done: false };
        item.target = thing.floats ? L.water - thing.h * (1 - thing.depth) : L.bottom - thing.h;
        dropped.push(item);
        readout.textContent = tr(thing.why);
        if (reduceMotion) { item.y = item.target; item.done = true; draw(); return; }
        cancelAnimationFrame(raf);
        step();
      }

      function step() {
        var L = layout();
        var moving = false;
        dropped.forEach(function (it) {
          if (it.done) return;
          var inWater = it.y + it.thing.h > L.water;
          if (it.thing.floats) {
            it.vy += inWater ? -(it.y - it.target) * 0.06 : 0.6;
            it.vy *= inWater ? 0.86 : 1;
          } else {
            it.vy += 0.6;
            if (inWater) it.vy = Math.min(it.vy, 2.2);
          }
          it.y += it.vy;
          if (!it.thing.floats && it.y >= it.target) { it.y = it.target; it.done = true; }
          if (it.thing.floats && inWater && Math.abs(it.vy) < 0.05 && Math.abs(it.y - it.target) < 0.5) { it.y = it.target; it.done = true; }
          if (!it.done) moving = true;
        });
        draw();
        if (moving) raf = requestAnimationFrame(step);
      }

      function drawThing(c, it, x) {
        var t = it.thing, y = it.y;
        c.fillStyle = t.colour;
        c.strokeStyle = "#1F2A44";
        c.lineWidth = 2;
        c.beginPath();
        if (t.boat) {
          c.moveTo(x - t.w / 2, y);
          c.lineTo(x + t.w / 2, y);
          c.lineTo(x + t.w / 2 - 8, y + t.h);
          c.lineTo(x - t.w / 2 + 8, y + t.h);
          c.closePath();
        } else if (t.id === "leaf" || t.id === "coin") {
          c.ellipse(x, y + t.h / 2, t.w / 2, t.h / 2, 0, 0, Math.PI * 2);
        } else if (t.id === "stone") {
          c.ellipse(x, y + t.h / 2, t.w / 2, t.h / 2, 0.3, 0, Math.PI * 2);
        } else {
          c.rect(x - t.w / 2, y, t.w, t.h);
        }
        c.fill();
        c.stroke();
      }

      function draw() {
        var c = cv.c, w = cv.size.w, h = cv.size.h, L = layout();
        c.fillStyle = "#F6F8FD";
        c.fillRect(0, 0, w, h);
        var slot = (L.right - L.left) / 5;
        dropped.forEach(function (it, i) { drawThing(c, it, L.left + slot * (i + 0.5)); });
        c.fillStyle = "rgba(76,150,230,0.45)";
        c.fillRect(L.left, L.water, L.right - L.left, L.bottom - L.water);
        c.strokeStyle = "#2D6FC4";
        c.lineWidth = 2;
        c.beginPath();
        c.moveTo(L.left, L.water);
        c.lineTo(L.right, L.water);
        c.stroke();
        c.strokeStyle = "#1F2A44";
        c.lineWidth = 3;
        c.strokeRect(L.left, 8, L.right - L.left, L.bottom - 8);
        dropped.forEach(function (it, i) {
          if (!it.done) return;
          var x = L.left + slot * (i + 0.5);
          var label = it.thing.floats ? tr({ en: "Floats", hi: "तैरता" }) : tr({ en: "Sinks", hi: "डूबता" });
          text(c, label, x, it.thing.floats ? L.water - 30 : L.bottom - it.thing.h - 12, 12, it.thing.floats ? "#1E7A45" : "#B23A30", "center", 700);
        });
      }

      cv.fit();
      return function () { cancelAnimationFrame(raf); cv.stop(); };
    }
  };

  // ---- 5. Mixing paints ----

  var PAINTS = [
    { id: "red", colour: "#E2473B", name: { en: "Red", hi: "लाल" } },
    { id: "yellow", colour: "#F6C624", name: { en: "Yellow", hi: "पीला" } },
    { id: "blue", colour: "#2D5BD0", name: { en: "Blue", hi: "नीला" } },
    { id: "white", colour: "#FFFFFF", name: { en: "White", hi: "सफ़ेद" } }
  ];

  var MIXES = {
    "red+yellow": { colour: "#F28A1E", name: { en: "Orange", hi: "नारंगी" } },
    "blue+yellow": { colour: "#3E9B48", name: { en: "Green", hi: "हरा" } },
    "blue+red": { colour: "#7B3FA0", name: { en: "Purple", hi: "बैंगनी" } },
    "red+white": { colour: "#F7A1B4", name: { en: "Pink", hi: "गुलाबी" } },
    "white+yellow": { colour: "#FFF1A8", name: { en: "Cream", hi: "हल्का पीला" } },
    "blue+white": { colour: "#9CC7F2", name: { en: "Light blue", hi: "हल्का नीला" } }
  };

  var paint = {
    title: { en: "Mix your own colours", hi: "अपने रंग ख़ुद मिलाओ" },
    hint: { en: "Pick two paints and see what they make. Can you make orange, green and purple?", hi: "दो रंग चुनो और देखो वे क्या बनाते हैं। क्या तुम नारंगी, हरा और बैंगनी बना सकते हो?" },
    puzzles: ["art-colours"],
    mount: function (host, tr) {
      var pick = ["red", "yellow"];
      var stage = el("div", "paint-stage");
      host.appendChild(stage);
      var readout = el("p", "anim-readout");
      host.appendChild(readout);
      var rows = [];
      [0, 1].forEach(function (slot) {
        var row = el("div", "anim-controls paint-row");
        row.appendChild(el("span", "paint-row-label", slot === 0 ? tr({ en: "First paint", hi: "पहला रंग" }) : tr({ en: "Second paint", hi: "दूसरा रंग" })));
        PAINTS.forEach(function (p) {
          var b = button(row, "", function () { pick[slot] = p.id; render(); }, "paint-pot");
          b.style.setProperty("--pot", p.colour);
          b.setAttribute("aria-label", tr(p.name));
          b.dataset.paint = p.id;
        });
        host.appendChild(row);
        rows.push(row);
      });

      function paintById(id) { return PAINTS.filter(function (p) { return p.id === id; })[0]; }

      function render() {
        var a = paintById(pick[0]), b = paintById(pick[1]);
        var result = pick[0] === pick[1] ? { colour: a.colour, name: a.name } : MIXES[[pick[0], pick[1]].sort().join("+")];
        stage.innerHTML = "";
        [a, null, b, "=", result].forEach(function (part) {
          if (part === null || part === "=") {
            stage.appendChild(el("span", "paint-sign", part === null ? "+" : "="));
            return;
          }
          var blob = el("span", "paint-blob" + (part === result ? " paint-result" : ""));
          blob.style.setProperty("--pot", part.colour);
          blob.appendChild(el("span", "paint-name", tr(part.name)));
          stage.appendChild(blob);
        });
        readout.textContent = tr(a.name) + " + " + tr(b.name) + " = " + tr(result.name);
        rows.forEach(function (row, slot) {
          row.querySelectorAll(".paint-pot").forEach(function (pot) {
            pot.setAttribute("aria-pressed", String(pot.dataset.paint === pick[slot]));
          });
        });
      }

      render();
      return function () {};
    }
  };

  // ---- 6. Newton's cannon: from falling to orbiting ----

  var orbit = {
    title: { en: "Fire a cannonball into orbit", hi: "तोप के गोले को कक्षा में भेजो" },
    hint: { en: "A cannon on a very tall mountain fires sideways. Speed it up. Slow balls fall back. Fast enough, and it falls all the way around the Earth: an orbit.", hi: "एक बहुत ऊँचे पहाड़ पर रखी तोप बगल की ओर गोला दागती है। रफ़्तार बढ़ाओ। धीमे गोले वापस गिरते हैं। काफ़ी तेज़ हो, तो वह पूरी धरती के चारों ओर गिरता रहता है: यही कक्षा है।" },
    puzzles: ["sci-fall", "fut-gravity"],
    mount: function (host, tr) {
      var speed = 6;
      var raf = 0;
      var trail = [];
      var cv = makeCanvas(host, 260, draw);
      var readout = el("p", "anim-readout");
      host.appendChild(readout);
      var controls = el("div", "anim-controls");
      host.appendChild(controls);
      slider(controls, tr({ en: "Launch speed (km per second)", hi: "दागने की रफ़्तार (किमी प्रति सेकंड)" }), 2, 12, 0.1, speed, function (v) { speed = v; cancelAnimationFrame(raf); trail = path(); draw(); });
      button(controls, tr({ en: "Fire!", hi: "दागो!" }), fire);

      function geometry() {
        var w = cv.size.w, h = cv.size.h;
        var R = Math.min(w, h) * 0.26;
        return { cx: w / 2, cy: h / 2 + 6, R: R, r0: R + 14 };
      }

      // Step-by-step fall towards the Earth's centre. 7.9 km/s gives a circular orbit; 11.2 km/s escapes.
      function path() {
        var g = geometry();
        var vc = 1.6;
        var GM = vc * vc * g.r0;
        var x = 0, y = -g.r0, vx = (speed / 7.9) * vc, vy = 0;
        var pts = [[x, y]];
        for (var i = 0; i < 2400; i++) {
          var r = Math.sqrt(x * x + y * y);
          var a = GM / (r * r);
          vx += -a * x / r;
          vy += -a * y / r;
          x += vx;
          y += vy;
          pts.push([x, y]);
          r = Math.sqrt(x * x + y * y);
          if (r < g.R) break;
          if (r > g.r0 * 6) break;
          if (i > 40 && Math.abs(x) < 2 && y < 0) break; // back at the mountain: a full orbit
        }
        return pts;
      }

      function fire() {
        cancelAnimationFrame(raf);
        var all = path();
        if (reduceMotion) { trail = all; draw(); return; }
        var n = 0;
        (function step() {
          n = Math.min(all.length, n + 6);
          trail = all.slice(0, n);
          draw();
          if (n < all.length) raf = requestAnimationFrame(step);
        })();
      }

      function draw() {
        var c = cv.c, w = cv.size.w, h = cv.size.h, g = geometry();
        c.fillStyle = "#16213F";
        c.fillRect(0, 0, w, h);
        c.fillStyle = "#2E6FD8";
        c.beginPath();
        c.arc(g.cx, g.cy, g.R, 0, Math.PI * 2);
        c.fill();
        c.fillStyle = "#4FB06A";
        c.beginPath();
        c.ellipse(g.cx - g.R * 0.3, g.cy + g.R * 0.1, g.R * 0.35, g.R * 0.22, 0.4, 0, Math.PI * 2);
        c.fill();
        // The mountain and cannon
        c.fillStyle = "#8A6A4B";
        c.beginPath();
        c.moveTo(g.cx - 16, g.cy - g.R + 4);
        c.lineTo(g.cx, g.cy - g.r0);
        c.lineTo(g.cx + 16, g.cy - g.R + 4);
        c.closePath();
        c.fill();
        c.fillStyle = "#1F2A44";
        c.fillRect(g.cx - 3, g.cy - g.r0 - 4, 12, 5);
        if (trail.length > 1) {
          c.strokeStyle = "#FFD15C";
          c.lineWidth = 2.5;
          c.beginPath();
          c.moveTo(g.cx + trail[0][0], g.cy + trail[0][1]);
          trail.forEach(function (p) { c.lineTo(g.cx + p[0], g.cy + p[1]); });
          c.stroke();
          var last = trail[trail.length - 1];
          c.fillStyle = "#FFFFFF";
          c.beginPath();
          c.arc(g.cx + last[0], g.cy + last[1], 4, 0, Math.PI * 2);
          c.fill();
        }
        text(c, tr({ en: "Earth", hi: "धरती" }), g.cx, g.cy + 4, 13, "#FFFFFF", "center", 700);
        var label;
        if (speed < 7.6) label = { en: "Falls back to Earth. Try faster!", hi: "वापस धरती पर गिरता है। और तेज़ करो!" };
        else if (speed < 8.4) label = { en: "In orbit! It keeps falling, but keeps missing the Earth.", hi: "कक्षा में! वह गिरता रहता है, पर धरती से चूकता रहता है।" };
        else if (speed < 11.2) label = { en: "A stretched orbit: it swings far out and comes back.", hi: "खिंची हुई कक्षा: वह दूर तक जाकर वापस आता है।" };
        else label = { en: "Escape speed! It leaves Earth's gravity behind.", hi: "पलायन वेग! वह धरती के गुरुत्वाकर्षण से बाहर निकल जाता है।" };
        readout.textContent = speed.toFixed(1) + " " + tr({ en: "km/s", hi: "किमी/से" }) + " · " + tr(label);
      }

      trail = path();
      cv.fit();
      return function () { cancelAnimationFrame(raf); cv.stop(); };
    }
  };

  // ---- 7. Lever and see-saw ----

  var lever = {
    title: { en: "Lift the rock with a lever", hi: "उत्तोलक से पत्थर उठाओ" },
    hint: { en: "A 6 kg rock sits 1 step from the pivot. Choose how hard you push and how far from the pivot you push. Can you lift it with a small push?", hi: "6 किलो का पत्थर धुरी से 1 कदम दूर है। चुनो कि तुम कितना ज़ोर लगाओगे और धुरी से कितनी दूर धक्का दोगे। क्या तुम छोटे धक्के से उसे उठा सकते हो?" },
    puzzles: ["sci-lever", "fut-lever"],
    mount: function (host, tr) {
      var push = 2, dist = 2, rock = 6, rockDist = 1;
      var cv = makeCanvas(host, 220, draw);
      var readout = el("p", "anim-readout");
      host.appendChild(readout);
      var controls = el("div", "anim-controls");
      host.appendChild(controls);
      slider(controls, tr({ en: "Your push (kg)", hi: "तुम्हारा धक्का (किलो)" }), 1, 6, 1, push, function (v) { push = v; draw(); });
      slider(controls, tr({ en: "Distance from the pivot (steps)", hi: "धुरी से दूरी (कदम)" }), 1, 5, 1, dist, function (v) { dist = v; draw(); });

      function draw() {
        var c = cv.c, w = cv.size.w, h = cv.size.h;
        var left = rock * rockDist, right = push * dist;
        var tilt = Math.max(-1, Math.min(1, (right - left) / 6)) * 0.22;
        var px = w / 2, py = h - 60, unit = Math.min(w * 0.085, 46);
        c.fillStyle = "#F6F8FD";
        c.fillRect(0, 0, w, h);
        c.fillStyle = "#D7DEEE";
        c.fillRect(0, py + 30, w, h - py - 30);
        c.fillStyle = "#4C5875";
        c.beginPath();
        c.moveTo(px, py);
        c.lineTo(px - 18, py + 30);
        c.lineTo(px + 18, py + 30);
        c.closePath();
        c.fill();
        c.save();
        c.translate(px, py);
        c.rotate(tilt);
        c.fillStyle = "#B07A45";
        c.fillRect(-unit * 5.4, -8, unit * 10.8, 10);
        for (var i = -5; i <= 5; i++) {
          if (i === 0) continue;
          text(c, String(Math.abs(i)), i * unit, 12, 10, "#7A849E", "center");
        }
        // The rock, left of the pivot
        c.fillStyle = "#8A8F99";
        c.strokeStyle = "#1F2A44";
        c.lineWidth = 2;
        c.beginPath();
        c.ellipse(-rockDist * unit, -26, 22, 18, 0, 0, Math.PI * 2);
        c.fill();
        c.stroke();
        text(c, rock + " kg", -rockDist * unit, -26, 12, "#FFFFFF", "center", 700);
        // The push, right of the pivot
        var hx = dist * unit;
        c.fillStyle = "#2D4BC4";
        c.beginPath();
        c.moveTo(hx - 10, -50);
        c.lineTo(hx + 10, -50);
        c.lineTo(hx, -12);
        c.closePath();
        c.fill();
        text(c, push + " kg", hx, -62, 12, "#2D4BC4", "center", 700);
        c.restore();
        var state;
        if (right > left) state = { en: "You lift the rock!", hi: "तुमने पत्थर उठा लिया!" };
        else if (right === left) state = { en: "Perfectly balanced.", hi: "बिल्कुल संतुलित।" };
        else state = { en: "The rock wins. Push harder or further out.", hi: "पत्थर भारी पड़ा। ज़्यादा ज़ोर लगाओ या और दूर से धक्का दो।" };
        readout.textContent = tr({ en: "Rock: ", hi: "पत्थर: " }) + rock + " × " + rockDist + " = " + left + " · " + tr({ en: "You: ", hi: "तुम: " }) + push + " × " + dist + " = " + right + " · " + tr(state);
      }

      cv.fit();
      return function () { cv.stop(); };
    }
  };

  // ---- 8. Binary cards ----

  var binary = {
    title: { en: "Make numbers with bits", hi: "बिट्स से संख्याएँ बनाओ" },
    hint: { en: "Each card is a bit: on (1) or off (0). Each card is worth double the one on its right. Turn cards on and off to make any number from 0 to 31.", hi: "हर कार्ड एक बिट है: चालू (1) या बंद (0)। हर कार्ड की क़ीमत अपने दाएँ वाले से दोगुनी है। कार्ड चालू-बंद करके 0 से 31 तक कोई भी संख्या बनाओ।" },
    puzzles: ["fut-binary"],
    mount: function (host, tr) {
      var values = [16, 8, 4, 2, 1];
      var on = [false, true, false, true, true];
      var row = el("div", "bit-row");
      host.appendChild(row);
      var big = el("p", "bit-total");
      host.appendChild(big);
      var readout = el("p", "anim-readout");
      host.appendChild(readout);
      var controls = el("div", "anim-controls");
      host.appendChild(controls);
      var cards = values.map(function (v, i) {
        var b = el("button", "bit-card");
        b.type = "button";
        b.addEventListener("click", function () { on[i] = !on[i]; render(); });
        row.appendChild(b);
        return b;
      });
      button(controls, tr({ en: "Count up by 1", hi: "1 बढ़ाओ" }), function () {
        var n = (total() + 1) % 32;
        values.forEach(function (v, i) { on[i] = (n & v) !== 0; });
        render();
      });

      function total() {
        return values.reduce(function (sum, v, i) { return sum + (on[i] ? v : 0); }, 0);
      }

      function render() {
        cards.forEach(function (b, i) {
          b.setAttribute("aria-pressed", String(on[i]));
          b.innerHTML = "";
          b.appendChild(el("span", "bit-digit", on[i] ? "1" : "0"));
          var dots = el("span", "bit-dots");
          for (var d = 0; d < values[i]; d++) dots.appendChild(el("i"));
          b.appendChild(dots);
          b.appendChild(el("span", "bit-value", String(values[i])));
        });
        var parts = values.filter(function (v, i) { return on[i]; });
        big.textContent = on.map(function (x) { return x ? "1" : "0"; }).join("") + " = " + total();
        readout.textContent = parts.length ? parts.join(" + ") + " = " + total() : tr({ en: "All cards off: 0", hi: "सारे कार्ड बंद: 0" });
      }

      render();
      return function () {};
    }
  };

  // ---- 9. The heart at rest and at work ----

  var ACTIVITY = [
    { name: { en: "Resting", hi: "आराम" }, bpm: 80 },
    { name: { en: "Walking", hi: "चलना" }, bpm: 105 },
    { name: { en: "Running", hi: "दौड़ना" }, bpm: 150 }
  ];

  var heart = {
    title: { en: "Watch your heart work", hi: "अपने दिल को काम करते देखो" },
    hint: { en: "Choose what you're doing. Working muscles need more oxygen, so the heart beats faster and blood moves faster.", hi: "चुनो कि तुम क्या कर रहे हो। काम करती मांसपेशियों को ज़्यादा ऑक्सीजन चाहिए, इसलिए दिल तेज़ धड़कता है और ख़ून तेज़ बहता है।" },
    puzzles: ["sci-heart", "fut-blood"],
    mount: function (host, tr) {
      var mode = 0;
      var raf = 0;
      var t0 = performance.now();
      var cv = makeCanvas(host, 220, function () { draw(performance.now()); });
      var readout = el("p", "anim-readout");
      host.appendChild(readout);
      var controls = el("div", "anim-controls anim-choices");
      host.appendChild(controls);
      var buttons = ACTIVITY.map(function (a, i) {
        return button(controls, tr(a.name), function () { mode = i; update(); });
      });

      function update() {
        buttons.forEach(function (b, i) { b.setAttribute("aria-pressed", String(i === mode)); });
        var a = ACTIVITY[mode];
        readout.textContent = tr(a.name) + ": " + tr({ en: "about ", hi: "लगभग " }) + a.bpm + " " + tr({ en: "beats a minute", hi: "धड़कन प्रति मिनट" });
        if (reduceMotion) draw(t0);
      }

      function heartPath(c, x, y, s) {
        c.beginPath();
        c.moveTo(x, y + s * 0.35);
        c.bezierCurveTo(x - s * 0.9, y - s * 0.25, x - s * 0.45, y - s * 0.95, x, y - s * 0.45);
        c.bezierCurveTo(x + s * 0.45, y - s * 0.95, x + s * 0.9, y - s * 0.25, x, y + s * 0.35);
        c.closePath();
      }

      function draw(now) {
        var c = cv.c, w = cv.size.w, h = cv.size.h;
        var bpm = ACTIVITY[mode].bpm;
        var beat = ((now - t0) / 1000) * (bpm / 60);
        var pulse = reduceMotion ? 0 : Math.pow(Math.max(0, Math.sin(beat * Math.PI * 2)), 6);
        c.fillStyle = "#FFF4F4";
        c.fillRect(0, 0, w, h);
        // The loop of blood vessels around the body
        var lx = w / 2, ly = h / 2, rx = Math.min(w * 0.38, 190), ry = h * 0.36;
        c.strokeStyle = "#F3B7B7";
        c.lineWidth = 10;
        c.beginPath();
        c.ellipse(lx, ly, rx, ry, 0, 0, Math.PI * 2);
        c.stroke();
        var count = 18;
        var flow = reduceMotion ? 0 : ((now - t0) / 1000) * (bpm / 60) * 0.25;
        for (var i = 0; i < count; i++) {
          var a = (i / count + flow) * Math.PI * 2;
          c.fillStyle = Math.cos(a) > 0 ? "#D9473B" : "#7A3A8C";
          c.beginPath();
          c.arc(lx + Math.cos(a) * rx, ly + Math.sin(a) * ry, 4, 0, Math.PI * 2);
          c.fill();
        }
        text(c, tr({ en: "Lungs: blood picks up oxygen", hi: "फेफड़े: ख़ून ऑक्सीजन लेता है" }), lx, ly - ry - 2 < 12 ? 12 : ly - ry - 14, 12, "#4C5875", "center");
        text(c, tr({ en: "Muscles: oxygen is used", hi: "मांसपेशियाँ: ऑक्सीजन ख़र्च होती है" }), lx, Math.min(h - 10, ly + ry + 14), 12, "#4C5875", "center");
        var s = 46 * (1 + pulse * 0.18);
        c.fillStyle = "#D9473B";
        c.strokeStyle = "#1F2A44";
        c.lineWidth = 2.5;
        heartPath(c, lx, ly + 6, s);
        c.fill();
        c.stroke();
        text(c, String(bpm), lx, ly - 2, 18, "#FFFFFF", "center", 800);
        if (!reduceMotion) raf = requestAnimationFrame(draw);
      }

      update();
      cv.fit();
      if (!reduceMotion) raf = requestAnimationFrame(draw);
      return function () { cancelAnimationFrame(raf); cv.stop(); };
    }
  };

  // ---- 10. Sound: pitch and loudness ----

  var sound = {
    title: { en: "See and hear a sound wave", hi: "ध्वनि तरंग देखो और सुनो" },
    hint: { en: "Faster vibrations make a higher note. Bigger vibrations make a louder sound. Change them, then press Play to hear it.", hi: "तेज़ कंपन ऊँचा सुर बनाता है। बड़ा कंपन तेज़ आवाज़ बनाता है। इन्हें बदलो, फिर सुनने के लिए 'बजाओ' दबाओ।" },
    puzzles: ["sci-thunder", "fut-sound"],
    mount: function (host, tr) {
      var freq = 330, amp = 0.5;
      var audio = null;
      var cv = makeCanvas(host, 200, draw);
      var readout = el("p", "anim-readout");
      host.appendChild(readout);
      var controls = el("div", "anim-controls");
      host.appendChild(controls);
      slider(controls, tr({ en: "Pitch: vibrations per second (Hz)", hi: "सुर: हर सेकंड कंपन (Hz)" }), 130, 880, 1, freq, function (v) { freq = v; draw(); });
      slider(controls, tr({ en: "Loudness", hi: "आवाज़ की तेज़ी" }), 0.1, 1, 0.05, amp, function (v) { amp = v; draw(); });
      button(controls, tr({ en: "Play", hi: "बजाओ" }), play);

      function play() {
        try {
          var Ctx = window.AudioContext || window.webkitAudioContext;
          if (!Ctx) return;
          audio = audio || new Ctx();
          var osc = audio.createOscillator();
          var gain = audio.createGain();
          osc.frequency.value = freq;
          gain.gain.setValueAtTime(0, audio.currentTime);
          gain.gain.linearRampToValueAtTime(0.15 * amp, audio.currentTime + 0.05);
          gain.gain.linearRampToValueAtTime(0, audio.currentTime + 1);
          osc.connect(gain);
          gain.connect(audio.destination);
          osc.start();
          osc.stop(audio.currentTime + 1.05);
        } catch (e) {
          // Sound isn't available here; the picture still shows the wave.
        }
      }

      function draw() {
        var c = cv.c, w = cv.size.w, h = cv.size.h;
        c.fillStyle = "#F4EEFF";
        c.fillRect(0, 0, w, h);
        c.strokeStyle = "#D9CCFF";
        c.lineWidth = 1;
        c.beginPath();
        c.moveTo(0, h / 2);
        c.lineTo(w, h / 2);
        c.stroke();
        var waves = freq / 110; // how many waves fit across the picture
        c.strokeStyle = "#6A3FD1";
        c.lineWidth = 3;
        c.beginPath();
        for (var x = 0; x <= w; x += 2) {
          var y = h / 2 - Math.sin((x / w) * waves * Math.PI * 2) * amp * (h * 0.4);
          if (x === 0) c.moveTo(x, y); else c.lineTo(x, y);
        }
        c.stroke();
        var pitch = freq < 260 ? { en: "Low note", hi: "नीचा सुर" } : freq < 520 ? { en: "Middle note", hi: "बीच का सुर" } : { en: "High note", hi: "ऊँचा सुर" };
        var loud = amp < 0.35 ? { en: "soft", hi: "धीमा" } : amp < 0.7 ? { en: "medium", hi: "मध्यम" } : { en: "loud", hi: "तेज़" };
        readout.textContent = Math.round(freq) + " Hz · " + tr(pitch) + ", " + tr(loud);
      }

      cv.fit();
      return function () { cv.stop(); try { if (audio) audio.close(); } catch (e) { /* already closed */ } };
    }
  };

  // ---- 11. Plant growth: sunlight and water ----

  var plant = {
    title: { en: "Grow a healthy plant", hi: "एक स्वस्थ पौधा उगाओ" },
    hint: { en: "Plants need sunlight to make food, and water, but not too much: soggy soil leaves roots without air. Find the best mix.", hi: "पौधों को भोजन बनाने के लिए धूप और पानी चाहिए, पर बहुत ज़्यादा पानी नहीं: गीली मिट्टी में जड़ों को हवा नहीं मिलती। सबसे अच्छा मेल ढूँढो।" },
    puzzles: ["sci-plant", "fut-photosynthesis"],
    mount: function (host, tr) {
      var sun = 70, water = 50;
      var cv = makeCanvas(host, 230, draw);
      var readout = el("p", "anim-readout");
      host.appendChild(readout);
      var controls = el("div", "anim-controls");
      host.appendChild(controls);
      slider(controls, tr({ en: "Sunlight", hi: "धूप" }), 0, 100, 1, sun, function (v) { sun = v; draw(); });
      slider(controls, tr({ en: "Water", hi: "पानी" }), 0, 100, 1, water, function (v) { water = v; draw(); });

      function draw() {
        var c = cv.c, w = cv.size.w, h = cv.size.h;
        var sunF = sun / 100;
        var waterF = water <= 60 ? water / 60 : Math.max(0, 1 - (water - 60) / 40);
        var health = Math.min(sunF, waterF);
        var sky = c.createLinearGradient(0, 0, 0, h);
        sky.addColorStop(0, mix("#6B7486", "#BFE3FF", sunF));
        sky.addColorStop(1, mix("#A9B0BC", "#F2FAFF", sunF));
        c.fillStyle = sky;
        c.fillRect(0, 0, w, h);
        c.fillStyle = mix("#C9CED8", "#FFD23F", sunF);
        c.beginPath();
        c.arc(w - 46, 40, 14 + sunF * 12, 0, Math.PI * 2);
        c.fill();
        // Pot and soil
        var px = w / 2, base = h - 20;
        c.fillStyle = "#C2683E";
        c.strokeStyle = "#1F2A44";
        c.lineWidth = 2;
        c.beginPath();
        c.moveTo(px - 46, base - 50);
        c.lineTo(px + 46, base - 50);
        c.lineTo(px + 34, base);
        c.lineTo(px - 34, base);
        c.closePath();
        c.fill();
        c.stroke();
        c.fillStyle = mix("#C8A57A", "#4A3424", Math.min(1, water / 70));
        c.fillRect(px - 44, base - 50, 88, 8);
        // Stem and leaves
        var height = 20 + health * 110;
        var leafColour = mix("#D8C35A", "#2F9E58", Math.min(1, sunF * 1.3));
        if (water > 85) leafColour = mix(leafColour, "#8C7A3A", 0.5);
        c.strokeStyle = mix("#B8A65A", "#2F7A43", sunF);
        c.lineWidth = 5;
        c.beginPath();
        c.moveTo(px, base - 50);
        c.quadraticCurveTo(px + (1 - health) * 18, base - 50 - height / 2, px, base - 50 - height);
        c.stroke();
        var leaves = 1 + Math.round(health * 5);
        for (var i = 0; i < leaves; i++) {
          var ly = base - 58 - (i + 1) * (height / (leaves + 1));
          var side = i % 2 ? 1 : -1;
          var droop = (1 - health) * 0.9;
          c.fillStyle = leafColour;
          c.beginPath();
          c.ellipse(px + side * 16, ly + droop * 8, 16, 7, side * (0.5 + droop), 0, Math.PI * 2);
          c.fill();
        }
        var label;
        if (sun < 30) label = { en: "Too little sunlight: pale and weak, it can't make enough food.", hi: "बहुत कम धूप: पीला और कमज़ोर, वह पूरा भोजन नहीं बना पाता।" };
        else if (water < 25) label = { en: "Too dry: the leaves droop without water.", hi: "बहुत सूखा: पानी के बिना पत्तियाँ मुरझा जाती हैं।" };
        else if (water > 85) label = { en: "Too much water: soggy soil leaves the roots without air.", hi: "बहुत ज़्यादा पानी: गीली मिट्टी में जड़ों को हवा नहीं मिलती।" };
        else if (health > 0.75) label = { en: "Healthy and growing well!", hi: "स्वस्थ और अच्छी तरह बढ़ रहा है!" };
        else label = { en: "Growing, but it could do better.", hi: "बढ़ रहा है, पर और बेहतर हो सकता है।" };
        readout.textContent = tr(label);
      }

      cv.fit();
      return function () { cv.stop(); };
    }
  };

  // ---- 12. Story builder ----

  var STORY = {
    who: [
      { en: "Meera, a girl from a fishing village", hi: "मछुआरों के गाँव की एक लड़की, मीरा", name: { en: "Meera", hi: "मीरा" }, verb: "चाहती थी" },
      { en: "Arjun, a boy who loves cricket", hi: "क्रिकेट का दीवाना एक लड़का, अर्जुन", name: { en: "Arjun", hi: "अर्जुन" }, verb: "चाहता था" },
      { en: "Chotu, a clever goat", hi: "छोटू नाम का एक चतुर बकरा", name: { en: "Chotu", hi: "छोटू" }, verb: "चाहता था" }
    ],
    want: [
      { en: "to win the school science fair", hi: "स्कूल का विज्ञान मेला जीतना" },
      { en: "to cross the river to see Grandma", hi: "नदी पार करके नानी से मिलना" },
      { en: "to find a lost kite", hi: "खोई हुई पतंग ढूँढना" }
    ],
    problem: [
      { en: "the monsoon rain flooded the road", hi: "मानसून की बारिश ने रास्ता डुबो दिया" },
      { en: "there was no money for materials", hi: "सामान ख़रीदने के पैसे नहीं थे" },
      { en: "a big dog guarded the path", hi: "रास्ते में एक बड़ा कुत्ता पहरा दे रहा था" }
    ],
    fix: [
      { en: "built a raft from plastic bottles", hi: "प्लास्टिक की बोतलों से एक बेड़ा बनाया" },
      { en: "asked friends for help", hi: "दोस्तों से मदद माँगी" },
      { en: "came up with a clever trick", hi: "एक चतुर तरकीब लगाई" }
    ]
  };

  var story = {
    title: { en: "Build a story", hi: "एक कहानी बनाओ" },
    hint: { en: "Every story has a shape: a character who wants something, a problem in the way, and a way through. Pick one of each and read your story.", hi: "हर कहानी का एक ढाँचा होता है: एक किरदार जो कुछ चाहता है, रास्ते में एक मुश्किल, और उससे निकलने का रास्ता। हर एक में से एक चुनो और अपनी कहानी पढ़ो।" },
    puzzles: ["eng-story", "fut-pov"],
    mount: function (host, tr) {
      var pick = { who: 0, want: 1, problem: 0, fix: 0 };
      var rows = {};
      var labels = {
        who: { en: "Character", hi: "किरदार" },
        want: { en: "Wants", hi: "चाहत" },
        problem: { en: "Problem", hi: "मुश्किल" },
        fix: { en: "Way through", hi: "रास्ता" }
      };
      var out = el("p", "story-out");
      host.appendChild(out);
      Object.keys(labels).forEach(function (part) {
        var row = el("div", "anim-controls story-row");
        row.appendChild(el("span", "story-label story-" + part, tr(labels[part])));
        STORY[part].forEach(function (option, i) {
          var b = button(row, part === "who" ? tr(option.name) : tr(option), function () { pick[part] = i; render(); });
          b.dataset.index = String(i);
        });
        host.appendChild(row);
        rows[part] = row;
      });

      function render() {
        var who = STORY.who[pick.who], want = STORY.want[pick.want], problem = STORY.problem[pick.problem], fix = STORY.fix[pick.fix];
        var name = tr(who.name);
        out.textContent = tr({
          en: "Once upon a time there was " + who.en + ". " + name + " wanted " + want.en + ". But " + problem.en + ". So " + name + " " + fix.en + ", and everything changed.",
          hi: "एक बार की बात है, " + who.hi + "। " + name + " " + want.hi + " " + who.verb + "। लेकिन " + problem.hi + "। तब " + name + " ने " + fix.hi + ", और सब बदल गया।"
        });
        Object.keys(rows).forEach(function (part) {
          rows[part].querySelectorAll(".anim-btn").forEach(function (b) {
            b.setAttribute("aria-pressed", String(Number(b.dataset.index) === pick[part]));
          });
        });
      }

      render();
      return function () {};
    }
  };

  // ---- 13. The water cycle ----

  var water = {
    title: { en: "Watch the water cycle", hi: "जल-चक्र देखो" },
    hint: { en: "The Sun heats the sea, water rises as invisible vapour, cools into clouds, and falls as rain. Turn up the Sun's heat.", hi: "सूरज समुद्र को गरम करता है, पानी अदृश्य भाप बनकर उठता है, ठंडा होकर बादल बनता है, और बारिश बनकर गिरता है। सूरज की गर्मी बढ़ाओ।" },
    puzzles: [],
    mount: function (host, tr) {
      var heat = 60;
      var raf = 0;
      var cloud = 0.3;
      var bits = [];
      var drops = [];
      var cv = makeCanvas(host, 240, function () { frame(); });
      var readout = el("p", "anim-readout");
      host.appendChild(readout);
      var controls = el("div", "anim-controls");
      host.appendChild(controls);
      slider(controls, tr({ en: "Sun's heat", hi: "सूरज की गर्मी" }), 0, 100, 1, heat, function (v) { heat = v; if (reduceMotion) frame(); });

      function scene(c, w, h) {
        c.fillStyle = "#DDEFFF";
        c.fillRect(0, 0, w, h);
        c.fillStyle = mix("#FFE9A0", "#FFB020", heat / 100);
        c.beginPath();
        c.arc(40, 40, 18 + heat / 10, 0, Math.PI * 2);
        c.fill();
        // Sea on the left, land and a hill on the right
        c.fillStyle = "#3E8EDB";
        c.fillRect(0, h - 60, w * 0.45, 60);
        c.fillStyle = "#6FB35A";
        c.beginPath();
        c.moveTo(w * 0.45, h);
        c.lineTo(w * 0.45, h - 50);
        c.quadraticCurveTo(w * 0.72, h - 150, w, h - 90);
        c.lineTo(w, h);
        c.closePath();
        c.fill();
        // A river back to the sea
        c.strokeStyle = "#3E8EDB";
        c.lineWidth = 5;
        c.beginPath();
        c.moveTo(w * 0.8, h - 98);
        c.quadraticCurveTo(w * 0.62, h - 60, w * 0.45, h - 52);
        c.stroke();
        text(c, tr({ en: "Sea", hi: "समुद्र" }), w * 0.18, h - 24, 12, "#FFFFFF", "center", 700);
        text(c, tr({ en: "River flows back", hi: "नदी वापस बहती है" }), w * 0.66, h - 34, 11, "#1F4A2A", "center", 700);
      }

      function drawCloud(c, x, y, s) {
        c.fillStyle = mix("#FFFFFF", "#8C96A8", Math.min(1, cloud));
        [[0, 0, 1], [-0.9, 0.2, 0.7], [0.9, 0.2, 0.75], [0.4, -0.4, 0.7]].forEach(function (p) {
          c.beginPath();
          c.arc(x + p[0] * s, y + p[1] * s, p[2] * s, 0, Math.PI * 2);
          c.fill();
        });
      }

      function frame() {
        var c = cv.c, w = cv.size.w, h = cv.size.h;
        scene(c, w, h);
        var cx = w * 0.62, cy = 56;
        if (!reduceMotion) {
          if (Math.random() < heat / 260) bits.push({ x: Math.random() * w * 0.42, y: h - 62 });
          bits.forEach(function (b) { b.y -= 1.2; b.x += (cx - b.x) * 0.006; });
          bits = bits.filter(function (b) {
            if (b.y < cy + 10) { cloud = Math.min(1.4, cloud + 0.01); return false; }
            return true;
          });
          if (cloud > 0.9 && Math.random() < 0.5) {
            drops.push({ x: cx - 40 + Math.random() * 80, y: cy + 24 });
            cloud -= 0.004;
          }
          drops.forEach(function (d) { d.y += 4; });
          drops = drops.filter(function (d) { return d.y < h - 90; });
        } else {
          cloud = 0.3 + heat / 100;
        }
        c.fillStyle = "rgba(62,142,219,0.55)";
        bits.forEach(function (b) { c.fillRect(b.x, b.y, 2, 6); });
        drawCloud(c, cx, cy, 16 + cloud * 14);
        c.strokeStyle = "#2D6FC4";
        c.lineWidth = 2;
        drops.forEach(function (d) { c.beginPath(); c.moveTo(d.x, d.y); c.lineTo(d.x - 2, d.y + 8); c.stroke(); });
        text(c, tr({ en: "Evaporation", hi: "वाष्पीकरण" }), w * 0.22, h * 0.45, 12, "#1F2A44", "center", 700);
        text(c, tr({ en: "Clouds form", hi: "बादल बनते हैं" }), cx, 16, 12, "#1F2A44", "center", 700);
        if (drops.length || reduceMotion && heat > 50) text(c, tr({ en: "Rain", hi: "बारिश" }), cx + 64, cy + 50, 12, "#1F2A44", "center", 700);
        var label;
        if (heat < 20) label = { en: "Cool Sun: very little water evaporates, so few clouds form.", hi: "हल्की धूप: बहुत कम पानी भाप बनता है, इसलिए कम बादल बनते हैं।" };
        else if (cloud > 0.9) label = { en: "The cloud is heavy with water: it's raining on the hills!", hi: "बादल पानी से भारी है: पहाड़ियों पर बारिश हो रही है!" };
        else label = { en: "Water vapour rises and cools into a cloud.", hi: "भाप ऊपर उठकर ठंडी होती है और बादल बनती है।" };
        readout.textContent = tr(label);
        if (!reduceMotion) raf = requestAnimationFrame(frame);
      }

      cv.fit();
      return function () { cancelAnimationFrame(raf); cv.stop(); };
    }
  };

  var list = {
    moon: moon, daynight: dayNight, sky: sky, float: floatSink, paint: paint,
    orbit: orbit, lever: lever, binary: binary, heart: heart, sound: sound, plant: plant, story: story, water: water
  };
  var forPuzzle = {};
  Object.keys(list).forEach(function (id) {
    list[id].puzzles.forEach(function (pid) { forPuzzle[pid] = list[id]; });
  });

  window.BTJ.animations = { list: list, forPuzzle: forPuzzle };
})();
