/* ============================================================
   NOCTA — interactions
   ============================================================ */
(function () {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isTouch = window.matchMedia("(hover: none)").matches;

  /* ---------- nav: scrolled state + burger ---------- */
  const nav = document.querySelector(".nav");
  if (nav) {
    const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }
  const burger = document.querySelector(".burger");
  const links = document.querySelector(".nav-links");
  if (burger && links) {
    burger.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      burger.setAttribute("aria-expanded", String(open));
    });
    links.querySelectorAll("a").forEach(a => a.addEventListener("click", () => links.classList.remove("open")));
  }

  /* ---------- marquee: duplicate track for seamless loop ---------- */
  document.querySelectorAll(".marquee-track").forEach(tr => {
    tr.innerHTML += tr.innerHTML;
  });

  /* ---------- reveal on scroll ---------- */
  const revs = document.querySelectorAll(".reveal");
  if (revs.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("shown"); io.unobserve(e.target); } });
    }, { threshold: 0.14, rootMargin: "0px 0px -8% 0px" });
    revs.forEach(el => io.observe(el));
  }

  /* ---------- rack focus: blur -> sharp when in view ---------- */
  const racks = document.querySelectorAll(".rack");
  if (racks.length) {
    const rio = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("in-focus"); });
    }, { threshold: 0.35 });
    racks.forEach(el => rio.observe(el));
  }

  /* ---------- count-up stats (handles prefix / decimals / suffix) ---------- */
  document.querySelectorAll("[data-count]").forEach(el => {
    const target = el.textContent.trim();
    const m = target.match(/^(\D*?)(\d+(?:[.,]\d+)?)(\D*)$/);
    if (!m || reduce) return;
    const prefix = m[1], numStr = m[2], suffix = m[3];
    const decimals = (numStr.split(/[.,]/)[1] || "").length;
    const usesComma = numStr.indexOf(",") > -1;
    const num = parseFloat(numStr.replace(",", "."));
    let started = false;
    const fmt = (v) => { let t = v.toFixed(decimals); if (usesComma) t = t.replace(".", ","); return prefix + t + suffix; };
    const cio = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting && !started) {
          started = true;
          const dur = 1200, t0 = performance.now();
          const tick = (t) => {
            const p = Math.min((t - t0) / dur, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            el.textContent = fmt(num * eased);
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.6 });
    cio.observe(el);
  });

  /* ---------- FAQ accordion ---------- */
  document.querySelectorAll(".faq-q").forEach(btn => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".faq-item");
      const open = item.classList.toggle("open");
      btn.setAttribute("aria-expanded", String(open));
    });
  });

  /* ---------- swipeable story ("le parcours") ---------- */
  document.querySelectorAll(".story").forEach(story => {
    const track = story.querySelector(".story-track");
    if (!track) return;
    const chapters = Array.from(track.children);
    const dotsWrap = story.querySelector(".story-dots");
    const prev = story.querySelector('[data-story="prev"]');
    const next = story.querySelector('[data-story="next"]');
    if (!chapters.length) return;

    const dots = chapters.map((_, i) => {
      const b = document.createElement("button");
      b.className = "story-dot" + (i === 0 ? " active" : "");
      b.setAttribute("aria-label", "Chapitre " + (i + 1));
      b.addEventListener("click", () => scrollToIndex(i));
      if (dotsWrap) dotsWrap.appendChild(b);
      return b;
    });

    const gap = parseFloat(getComputedStyle(track).columnGap) || 18;
    const step = () => chapters[0].getBoundingClientRect().width + gap;
    const currentIndex = () => Math.round(track.scrollLeft / step());
    function scrollToIndex(i) {
      i = Math.max(0, Math.min(chapters.length - 1, i));
      track.scrollTo({ left: i * step(), behavior: reduce ? "auto" : "smooth" });
    }
    function update() {
      const i = currentIndex();
      dots.forEach((d, di) => d.classList.toggle("active", di === i));
      if (prev) prev.disabled = i <= 0;
      if (next) next.disabled = i >= chapters.length - 1;
    }
    if (prev) prev.addEventListener("click", () => scrollToIndex(currentIndex() - 1));
    if (next) next.addEventListener("click", () => scrollToIndex(currentIndex() + 1));
    track.addEventListener("scroll", () => requestAnimationFrame(update), { passive: true });
    window.addEventListener("resize", update, { passive: true });
    update();

    // drag-to-scroll (pointer / mouse); native touch handles itself
    let down = false, startX = 0, startLeft = 0, moved = false;
    track.addEventListener("pointerdown", (e) => {
      if (e.pointerType === "touch") return;
      down = true; moved = false; startX = e.clientX; startLeft = track.scrollLeft;
      track.classList.add("dragging");
      try { track.setPointerCapture(e.pointerId); } catch (_) {}
    });
    track.addEventListener("pointermove", (e) => {
      if (!down) return;
      const dx = e.clientX - startX;
      if (Math.abs(dx) > 4) moved = true;
      track.scrollLeft = startLeft - dx;
    });
    const end = (e) => {
      if (!down) return;
      down = false; track.classList.remove("dragging");
      try { track.releasePointerCapture(e.pointerId); } catch (_) {}
      scrollToIndex(currentIndex());
    };
    track.addEventListener("pointerup", end);
    track.addEventListener("pointercancel", end);
    track.addEventListener("click", (e) => { if (moved) e.preventDefault(); }, true);
  });

  if (!isTouch && !reduce) {
    /* ---------- card spotlight + 3D tilt ---------- */
    document.querySelectorAll(".card, .tilt").forEach(card => {
      card.addEventListener("pointermove", (e) => {
        const r = card.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width;
        const py = (e.clientY - r.top) / r.height;
        card.style.setProperty("--mx", (px * 100) + "%");
        card.style.setProperty("--my", (py * 100) + "%");
        if (card.classList.contains("tilt")) {
          const rx = (py - 0.5) * -7, ry = (px - 0.5) * 7;
          card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
        }
      });
      card.addEventListener("pointerleave", () => {
        if (card.classList.contains("tilt")) card.style.transform = "";
      });
    });

    /* ---------- magnetic buttons ---------- */
    document.querySelectorAll(".btn, .magnetic").forEach(btn => {
      btn.addEventListener("pointermove", (e) => {
        const r = btn.getBoundingClientRect();
        const x = e.clientX - r.left - r.width / 2;
        const y = e.clientY - r.top - r.height / 2;
        btn.style.transform = `translate(${x * 0.18}px, ${y * 0.28}px)`;
      });
      btn.addEventListener("pointerleave", () => { btn.style.transform = ""; });
    });
  }

  /* ---------- 3D bokeh hero (Three.js, with graceful fallback) ---------- */
  const canvas = document.getElementById("bokeh");
  if (canvas && !reduce) {
    const s = document.createElement("script");
    s.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";
    s.onload = () => { try { initBokeh(canvas); } catch (e) { canvas.style.display = "none"; } };
    s.onerror = () => { canvas.style.display = "none"; };
    document.head.appendChild(s);
  } else if (canvas) {
    canvas.style.display = "none";
  }

  function initBokeh(canvas) {
    const THREE = window.THREE;
    if (!THREE) { canvas.style.display = "none"; return; }

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(58, 1, 0.1, 120);
    camera.position.z = 24;

    // soft circular sprite
    const c = document.createElement("canvas"); c.width = c.height = 128;
    const ctx = c.getContext("2d");
    const g = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
    g.addColorStop(0, "rgba(255,255,255,1)");
    g.addColorStop(0.2, "rgba(255,255,255,.85)");
    g.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = g; ctx.beginPath(); ctx.arc(64, 64, 64, 0, Math.PI * 2); ctx.fill();
    const tex = new THREE.CanvasTexture(c);

    const palette = [0xff5d57, 0x7b6cff, 0xff8a85, 0xa99dff].map(h => new THREE.Color(h));

    // depth layers: count, z, point size, drift amplitude, fill factor (how far past frame edges)
    const defs = [
      { count: 70,  z: -12, size: 4.2, drift: 0.9, fill: 1.6 },  // big, soft, far bokeh
      { count: 110, z: -2,  size: 2.0, drift: 1.4, fill: 1.4 },  // mid
      { count: 95,  z: 7,   size: 1.0, drift: 2.1, fill: 1.25 }, // small, sharp, near
    ];

    function frustum(z) {
      const dist = camera.position.z - z;
      const h = 2 * Math.tan((camera.fov / 2) * Math.PI / 180) * dist;
      return { hw: h * camera.aspect / 2, hh: h / 2 };
    }

    const layers = defs.map(d => {
      const geo = new THREE.BufferGeometry();
      const col = new Float32Array(d.count * 3);
      const seed = new Float32Array(d.count);
      for (let i = 0; i < d.count; i++) {
        const cc = palette[(Math.random() * palette.length) | 0];
        col[i * 3] = cc.r; col[i * 3 + 1] = cc.g; col[i * 3 + 2] = cc.b;
        seed[i] = Math.random() * Math.PI * 2;
      }
      geo.setAttribute("position", new THREE.BufferAttribute(new Float32Array(d.count * 3), 3));
      geo.setAttribute("color", new THREE.BufferAttribute(col, 3));
      const mat = new THREE.PointsMaterial({
        size: d.size, map: tex, vertexColors: true, transparent: true,
        blending: THREE.AdditiveBlending, depthWrite: false, opacity: 0.8
      });
      const pts = new THREE.Points(geo, mat);
      pts.userData = { d, seed, base: new Float32Array(d.count * 3) };
      scene.add(pts);
      return pts;
    });

    // spread each layer's particles to cover the full frame (+ margin) at its depth
    function place(pts) {
      const { d, base } = pts.userData;
      const f = frustum(d.z);
      for (let i = 0; i < d.count; i++) {
        base[i * 3]     = (Math.random() * 2 - 1) * f.hw * d.fill;
        base[i * 3 + 1] = (Math.random() * 2 - 1) * f.hh * d.fill;
        base[i * 3 + 2] = d.z + (Math.random() * 2 - 1) * 3;
      }
    }

    let W = 0, H = 0;
    function resize() {
      const host = canvas.parentElement || canvas;
      const r = host.getBoundingClientRect();
      const w = Math.max(Math.round(r.width), 1), h = Math.max(Math.round(r.height), 1);
      if (w === W && h === H) return;
      W = w; H = h;
      canvas.style.width = w + "px";   // force full-bleed regardless of CSS
      canvas.style.height = h + "px";
      renderer.setSize(w, h, false);
      camera.aspect = w / h; camera.updateProjectionMatrix();
      layers.forEach(place);
    }
    window.addEventListener("resize", resize, { passive: true });

    let mx = 0, my = 0, tx = 0, ty = 0;
    window.addEventListener("pointermove", (e) => {
      tx = e.clientX / window.innerWidth - 0.5;
      ty = e.clientY / window.innerHeight - 0.5;
    }, { passive: true });

    let running = true;
    document.addEventListener("visibilitychange", () => { running = !document.hidden; if (running) loop(); });

    function loop() {
      if (!running) return;
      resize();
      mx += (tx - mx) * 0.05; my += (ty - my) * 0.05;
      const t = performance.now() * 0.001;
      layers.forEach((pts, li) => {
        const { d, base, seed } = pts.userData;
        const arr = pts.geometry.attributes.position.array;
        for (let i = 0; i < d.count; i++) {
          const ph = seed[i];
          arr[i * 3]     = base[i * 3]     + Math.sin(t * 0.15 + ph) * d.drift;        // gentle sway
          arr[i * 3 + 1] = base[i * 3 + 1] + Math.cos(t * 0.12 + ph) * d.drift * 0.7;  // gentle bob
          arr[i * 3 + 2] = base[i * 3 + 2];
        }
        pts.geometry.attributes.position.needsUpdate = true;
        // subtle, bounded parallax — nearer layers move a touch more
        pts.position.x = mx * (1.4 + li * 1.1);
        pts.position.y = -my * (1.0 + li * 0.8);
      });
      camera.position.x += (mx * 1.4 - camera.position.x) * 0.04;
      camera.position.y += (-my * 1.0 - camera.position.y) * 0.04;
      camera.lookAt(0, 0, 0);
      renderer.render(scene, camera);
      requestAnimationFrame(loop);
    }
    resize();
    layers.forEach(place);
    loop();
  }
})();


/* ============================================================
   SCROLLYTELLING ENGINE
   ============================================================ */
(function () {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- comparison slider (works regardless of motion prefs: user-driven) ---------- */
  document.querySelectorAll(".cmp").forEach(cmp => {
    const handle = cmp.querySelector(".cmp-handle");
    let cut = 55;
    const set = (v) => {
      cut = Math.max(8, Math.min(92, v));
      cmp.style.setProperty("--cut", cut + "%");
      if (handle) handle.setAttribute("aria-valuenow", Math.round(cut));
    };
    set(cut);
    const fromEvent = (e) => {
      const r = cmp.getBoundingClientRect();
      set(((e.clientX - r.left) / r.width) * 100);
    };
    let down = false;
    cmp.addEventListener("pointerdown", (e) => { down = true; fromEvent(e); try{cmp.setPointerCapture(e.pointerId);}catch(_){}} );
    cmp.addEventListener("pointermove", (e) => { if (down) fromEvent(e); });
    const up = () => { down = false; };
    cmp.addEventListener("pointerup", up); cmp.addEventListener("pointercancel", up);
    if (handle) handle.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") { set(cut - 4); e.preventDefault(); }
      if (e.key === "ArrowRight") { set(cut + 4); e.preventDefault(); }
    });
  });

  /* ---------- manifesto: split into words ---------- */
  function splitWords() {
    document.querySelectorAll('.manifesto [data-i18n="man.body"]').forEach(el => {
      if (el.querySelector(".mword")) return;
      const wrap = (node) => {
        if (node.nodeType === 3) {
          const frag = document.createDocumentFragment();
          node.textContent.split(/(\s+)/).forEach(part => {
            if (!part) return;
            if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(part)); return; }
            const s = document.createElement("span");
            s.className = "mword"; s.textContent = part;
            frag.appendChild(s);
          });
          node.parentNode.replaceChild(frag, node);
        } else if (node.nodeType === 1) {
          Array.from(node.childNodes).forEach(wrap);
        }
      };
      Array.from(el.childNodes).forEach(wrap);
    });
  }
  splitWords();
  document.addEventListener("nocta:lang", splitWords);

  if (reduce) return; // everything below is scroll-driven motion

  /* ---------- rAF scroll loop ---------- */
  const bar = document.querySelector(".scroll-progress span");
  const hero = document.querySelector(".hero");
  const heroWrap = hero ? hero.querySelector(".wrap") : null;
  const heroCanvas = document.getElementById("bokeh");
  const manifesto = document.querySelector(".manifesto");
  const words = () => manifesto ? manifesto.querySelectorAll(".mword") : [];
  const timelines = document.querySelectorAll(".timeline");

  let ticking = false;
  function onScroll() {
    if (!ticking) { ticking = true; requestAnimationFrame(run); }
  }
  function clamp01(v){ return Math.max(0, Math.min(1, v)); }

  function run() {
    ticking = false;
    const vh = window.innerHeight;
    const doc = document.documentElement;

    // progress bar
    if (bar) {
      const p = doc.scrollTop / Math.max(1, doc.scrollHeight - vh);
      bar.style.width = (p * 100).toFixed(2) + "%";
    }

    // hero scroll-out: text drifts up + fades, bokeh dims
    if (hero && heroWrap) {
      const p = clamp01(doc.scrollTop / (vh * 0.9));
      heroWrap.style.transform = "translateY(" + (-p * 60) + "px)";
      heroWrap.style.opacity = String(1 - p * 1.05);
      if (heroCanvas) heroCanvas.style.opacity = String(1 - p * 0.85);
    }

    // manifesto: light words up progressively
    if (manifesto) {
      const r = manifesto.getBoundingClientRect();
      const p = clamp01((vh * 0.8 - r.top) / (r.height + vh * 0.35));
      const ws = words();
      const lit = Math.floor(p * ws.length);
      ws.forEach((w, i) => w.classList.toggle("lit", i < lit));
    }

    // timelines: draw rail + activate steps
    timelines.forEach(tl => {
      const r = tl.getBoundingClientRect();
      const p = clamp01((vh * 0.72 - r.top) / r.height);
      const fill = tl.querySelector(".tl-fill");
      if (fill) fill.style.height = (p * 100).toFixed(2) + "%";
      tl.querySelectorAll(".tl-step").forEach(step => {
        const sr = step.getBoundingClientRect();
        step.classList.toggle("on", sr.top < vh * 0.78);
      });
    });
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });
  run();
})();
