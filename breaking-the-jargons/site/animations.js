// Interactive animations that open from "Show me!" after a puzzle is solved.
// These are made by hand for the preview. Later, Mitthu (Claude) will write a new one on demand
// for any question, run in a sandboxed frame. Each animation: { title, hint, puzzles, mount(host, tr) },
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
    puzzles: ["lit-sun"],
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
    puzzles: ["sci-float", "lit-float"],
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
    puzzles: ["art-colours", "lit-colours"],
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

  var list = { moon: moon, daynight: dayNight, sky: sky, float: floatSink, paint: paint };
  var forPuzzle = {};
  Object.keys(list).forEach(function (id) {
    list[id].puzzles.forEach(function (pid) { forPuzzle[pid] = list[id]; });
  });

  window.BTJ.animations = { list: list, forPuzzle: forPuzzle };
})();
