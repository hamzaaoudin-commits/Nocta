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

  /* ---------- count-up stats ---------- */
  document.querySelectorAll("[data-count]").forEach(el => {
    const target = el.textContent.trim();
    const num = parseInt(target.replace(/\D/g, ""), 10);
    const suffix = target.replace(/[0-9]/g, "");
    if (!num || reduce) return;
    let started = false;
    const cio = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting && !started) {
          started = true;
          const dur = 1100, t0 = performance.now();
          const tick = (t) => {
            const p = Math.min((t - t0) / dur, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            el.textContent = Math.round(num * eased) + suffix;
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.6 });
    cio.observe(el);
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
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 100);
    camera.position.z = 22;

    // circular soft sprite texture
    const c = document.createElement("canvas"); c.width = c.height = 128;
    const ctx = c.getContext("2d");
    const g = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
    g.addColorStop(0, "rgba(255,255,255,1)");
    g.addColorStop(0.25, "rgba(255,255,255,.7)");
    g.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = g; ctx.fillRect(0, 0, 128, 128);
    const tex = new THREE.CanvasTexture(c);

    const layers = [];
    const palette = [new THREE.Color(0xff5d57), new THREE.Color(0x7b6cff), new THREE.Color(0xff8a85), new THREE.Color(0xa99dff)];

    function makeLayer(count, spread, size, depth) {
      const geo = new THREE.BufferGeometry();
      const pos = new Float32Array(count * 3);
      const col = new Float32Array(count * 3);
      for (let i = 0; i < count; i++) {
        pos[i * 3] = (Math.random() - 0.5) * spread;
        pos[i * 3 + 1] = (Math.random() - 0.5) * spread * 0.6;
        pos[i * 3 + 2] = depth + (Math.random() - 0.5) * 6;
        const cc = palette[(Math.random() * palette.length) | 0];
        col[i * 3] = cc.r; col[i * 3 + 1] = cc.g; col[i * 3 + 2] = cc.b;
      }
      geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
      geo.setAttribute("color", new THREE.BufferAttribute(col, 3));
      const mat = new THREE.PointsMaterial({
        size, map: tex, vertexColors: true, transparent: true,
        blending: THREE.AdditiveBlending, depthWrite: false, opacity: 0.9
      });
      const pts = new THREE.Points(geo, mat);
      scene.add(pts);
      return { pts, speed: 0.02 + Math.random() * 0.03 };
    }

    layers.push(makeLayer(60, 46, 3.4, -6));   // big soft background bokeh
    layers.push(makeLayer(90, 40, 1.8, 2));    // mid
    layers.push(makeLayer(120, 38, 0.9, 8));   // sharp foreground

    let mx = 0, my = 0, tx = 0, ty = 0;
    window.addEventListener("pointermove", (e) => {
      tx = (e.clientX / window.innerWidth - 0.5);
      ty = (e.clientY / window.innerHeight - 0.5);
    }, { passive: true });

    function resize() {
      const w = canvas.clientWidth, h = canvas.clientHeight;
      if (canvas.width !== w || canvas.height !== h) {
        renderer.setSize(w, h, false);
        camera.aspect = w / h; camera.updateProjectionMatrix();
      }
    }

    let running = true;
    document.addEventListener("visibilitychange", () => { running = !document.hidden; if (running) loop(); });

    function loop() {
      if (!running) return;
      resize();
      mx += (tx - mx) * 0.04; my += (ty - my) * 0.04;
      const t = performance.now() * 0.0001;
      layers.forEach((L, i) => {
        L.pts.rotation.z = t * L.speed * (i % 2 ? 1 : -1);
        L.pts.position.x = mx * (4 + i * 3);
        L.pts.position.y = -my * (3 + i * 2);
      });
      camera.position.x += (mx * 3 - camera.position.x) * 0.05;
      camera.position.y += (-my * 2 - camera.position.y) * 0.05;
      camera.lookAt(0, 0, 0);
      renderer.render(scene, camera);
      requestAnimationFrame(loop);
    }
    resize(); loop();
  }
})();
