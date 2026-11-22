const projects = {
  garden: {
    title: "حديقة الحكايات",
    category: "متجر الورود والنباتات والتحف",
    description: "متجر إلكتروني أنيق وهادئ يجمع بين جمال الورود وتنسيقات الباقات، وروعة النباتات المنزلية، والتحف وقطع الزينة المميزة. يقدم خيارات متنوعة تناسب الأذواق والمناسبات، لتكون تجربة التسوق مليئة بالجمال والأناقة.",
    features: [
      "عرض المنتجات بتصنيفات الورود والنباتات والتحف",
      "سلة تسوق تفاعلية وسهلة الاستخدام",
      "تصميم متجاوب يعمل على جميع الأجهزة",
      "دفق بصري هادئ بألوان مستوحاة من الطبيعة"
    ],
    tags: ["HTML", "CSS", "JavaScript", "الورود", "النباتات"],
    link: "https://myrose-3ie.pages.dev/"
  },
  games: {
    title: "نلعب ونتعلم",
    category: "التعلم باللعب والإبداع",
    description: "موقع تعليمي تفاعلي للأطفال يجمع بين المعرفة والمرح من خلال الألعاب والأنشطة في الرياضيات واللغة الإنجليزية والعلوم. يمنح الأطفال فرصة للتعلم والرسم والإبداع واكتشاف المعلومات بطريقة مبسطة وممتعة.",
    features: [
      "ألعاب تفاعلية في الرياضيات واللغة والعلوم",
      "مساحة للرسم الحر والإبداع الفني",
      "واجهة مصممة خصيصاً للأطفال وسهلة التصفح",
      "تتبع تقدم الطفل ومكافآته المعنوية"
    ],
    tags: ["HTML", "CSS", "JavaScript", "التعليم", "الرسم"],
    link: "https://weplayandlearn.pages.dev/#home"
  },
  stars: {
    title: "نجوم السعادة",
    category: "رسائل الأمل والطمأنينة",
    description: "موقع تفاعلي هادئ يضم نجوماً مضيئة، تحمل كل نجمة رسالة تنشر التفاؤل والأمل وتعزز الثقة بالله. يتيح للزائر كتابة رسالته وإطلاقها إلى النجوم، ويضم أذكار الصباح والمساء والمسبحة الذكية، ليكون مساحة تجمع بين الإلهام والطمأنينة والذكر.",
    features: [
      "كتابة الرسائل الإيجابية وإطلاقها إلى النجوم",
      "أذكار الصباح والمساء في واجهة هادئة",
      "المسبحة الذكية للذكر والتسبيح",
      "تصميم ليلي مريح للعيون ومليء باللمعان"
    ],
    tags: ["HTML", "CSS", "JavaScript", "رسائل إيجابية", "أذكار"],
    link: "https://startofhappiness.pages.dev/"
  },
  sakina: {
    title: "ركن السكينة",
    category: "تصميم موقع لمقهى",
    description: "موقع مقهى يجمع بين الهدوء والقراءة والقهوة، في تجربة تدعو إلى التمهّل.",
    features: [
      "قائمة القهوة والمشروبات والكتب المتاحة",
      "أجواء مقهى هادئ تدعو إلى الاسترخاء",
      "واجهة بسيطة وسهلة التصفح",
      "تجربة مستخدم مريحة ومتوازنة"
    ],
    tags: ["تصميم واجهات", "تجربة مستخدم"],
    link: "https://project7.hndbdalqwyalhashdy.workers.dev"
  },
  horizon: {
    title: "فندق أفق · Horizon Hotel",
    category: "ضيافة · حجز فنادق",
    description: "موقع حجز فندق أنيق يعرض غرف الإقامة ومرافق الضيافة بتجربة تصفح فاخرة وسلسة.",
    features: [
      "حجز الغرف والأجنحة عبر الإنترنت",
      "معرض صور لمرافق الفندق والغرف",
      "تصميم أنيق وفاخر يعكس هوية الضيافة",
      "صفحة تواصل وحجز مباشرة مع الفندق"
    ],
    tags: ["HTML", "CSS", "JavaScript", "الضيافة", "الحجز"],
    link: "https://flat-dawn-0f62.hndbdalqwyalhashdy.workers.dev/"
  },
  cv: {
    title: "سيرتي الذاتية الرقمية",
    category: "رحلتي في عالم التقنية والإبداع",
    description: "صفحة شخصية تعرض نبذة عني ومهاراتي ومشاريعي التعليمية بطريقة منظمة وأنيقة. تمثل هذه الصفحة خطوة في رحلتي لتعلم تصميم وتطوير مواقع الويب، وتوثق ما أكتسبه من مهارات في مجال التقنية والذكاء الاصطناعي.",
    features: [
      "توثيق الرحلة المهنية والمهارات التقنية",
      "عرض المشاريع التعليمية بطريقة منظمة",
      "تصميم شخصي أنيق ومتجاوب",
      "سهولة التواصل ومشاركة المعلومات"
    ],
    tags: ["HTML", "CSS", "JavaScript", "السيرة الذاتية"],
    link: "https://my-seve.hndbdalqwyalhashdy.workers.dev/"
  }
};

const ideaStorageKey = "creative-galaxy-idea-lab";
const allowedIdeaCategories = [
  "التعليم",
  "الذكاء الاصطناعي",
  "التصميم",
  "المشاريع المجتمعية",
  "فكرة أخرى"
];


function damp(current, target, lambda, delta) {
  return current + (target - current) * (1 - Math.exp(-lambda * Math.max(0, delta)));
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

var effectsLastTime = 0;
function getEffectsDelta() {
  var now = performance.now();
  var delta = (now - effectsLastTime) / 1000;
  effectsLastTime = now;
  return delta > 0.05 ? 0.05 : Math.max(0, delta);
}
/* ===== فيديو وردة.mp4: خلفية رئيسية تلقائية ===== */
function initSiteVideo() {
  var video = document.querySelector(".site-video");
  if (!video) return;
  var markReady = function () { video.classList.add("is-ready"); };
  var play = function () {
    if (!video.paused) return;
    video.play().catch(function () {});
  };
  if (video.readyState >= 1) markReady();
  else video.addEventListener("canplay", markReady, { once: true });
  video.addEventListener("error", markReady);
  video.addEventListener("ended", function () { play(); });
  play();
}

/* ===== مؤثرات الماوس: جزيئات ضوئية تتبع المؤشر + هالة مؤشر متلألئة ===== */
var mouseFxCanvas = null, mouseFxCtx = null;
var mouseFxParticles = [];
var mouseFxHalo = { x: 0, y: 0 };
var mouseFxPointer = { x: 0, y: 0, dirX: 0, dirY: 0 };
var mouseFxLastSpawn = 0;
var mouseFxRAF = 0;
var reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
var finePointerQuery = window.matchMedia("(pointer: fine)");
var mouseFxColors = [
  "rgba(172, 139, 214, 1)",
  "rgba(238, 171, 190, 1)",
  "rgba(244, 223, 166, 1)"
];

function mouseFxDrawGlow(x, y, radius, baseColor, alpha) {
  var gradient = mouseFxCtx.createRadialGradient(x, y, 0, x, y, radius);
  gradient.addColorStop(0, baseColor);
  gradient.addColorStop(0.35, baseColor);
  gradient.addColorStop(0.7, "rgba(245, 226, 190, 0.15)");
  gradient.addColorStop(1, "rgba(245, 226, 190, 0)");
  mouseFxCtx.globalAlpha = alpha;
  mouseFxCtx.beginPath();
  mouseFxCtx.arc(x, y, radius, 0, Math.PI * 2);
  mouseFxCtx.fillStyle = gradient;
  mouseFxCtx.fill();
  mouseFxCtx.globalAlpha = 1;
}

function mouseFxSpawn(count, x, y) {
  if (!mouseFxCanvas || !finePointerQuery.matches || reducedMotionQuery.matches) return;
  count = count || 1;
  for (var i = 0; i < count && mouseFxParticles.length < 60; i++) {
    mouseFxParticles.push({
      x: x !== undefined ? x : mouseFxPointer.x,
      y: y !== undefined ? y : mouseFxPointer.y,
      size: 6 + Math.random() * 3,
      color: mouseFxColors[Math.floor(Math.random() * mouseFxColors.length)],
      vx: (Math.random() - 0.5) * 0.014,
      vy: -0.017 - Math.random() * 0.011,
      alpha: 0.8
    });
  }
}

function drawMouseFx() {
  var w = mouseFxCanvas.width, h = mouseFxCanvas.height;
  var cx = mouseFxHalo.x, cy = mouseFxHalo.y;
  var dirX = mouseFxPointer.dirX * 1.4, dirY = mouseFxPointer.dirY * 1.4;
  mouseFxCtx.clearRect(0, 0, w, h);
  // هالة مؤشر متلألئة + إضاءة تتبع اتجاه حركة المؤشر
  mouseFxDrawGlow(cx, cy, 96, "rgba(244, 223, 166, 1)", 0.16);
  mouseFxDrawGlow(cx, cy, 78, "rgba(238, 171, 190, 1)", 0.24);
  mouseFxDrawGlow(cx + dirX * 14, cy + dirY * 14, 32, "rgba(244, 223, 166, 1)", 0.16);
  mouseFxParticles = mouseFxParticles.filter(function (particle) {
    particle.x += particle.vx * 1.2;
    particle.y += particle.vy * 1.2;
    particle.alpha -= 0.012 + Math.random() * 0.012;
    particle.size += 0.05;
    if (particle.alpha <= 0.03 || particle.x < -60 || particle.x > w + 60 || particle.y < -60 || particle.y > h + 60) return false;
    mouseFxDrawGlow(particle.x, particle.y, particle.size * 1.2, particle.color, particle.alpha);
    return true;
  });
}

function animateMouseFx() {
  mouseFxRAF = requestAnimationFrame(animateMouseFx);
  if (!mouseFxCanvas || document.hidden || reducedMotionQuery.matches) return;
  var delta = getEffectsDelta();
  mouseFxHalo.x = damp(mouseFxHalo.x, mouseFxPointer.x, 4.5, delta);
  mouseFxHalo.y = damp(mouseFxHalo.y, mouseFxPointer.y, 4.5, delta);
  var distance = Math.hypot(mouseFxPointer.x - mouseFxHalo.x, mouseFxPointer.y - mouseFxHalo.y);
  if (distance > 0.0005) {
    mouseFxPointer.dirX = clamp((mouseFxPointer.x - mouseFxHalo.x) / Math.max(distance, 0.0005), -1, 1);
    mouseFxPointer.dirY = clamp((mouseFxPointer.y - mouseFxHalo.y) / Math.max(distance, 0.0005), -1, 1);
  } else {
    mouseFxPointer.dirX = clamp(mouseFxPointer.dirX * 0.9, -1, 1);
    mouseFxPointer.dirY = clamp(mouseFxPointer.dirY * 0.9, -1, 1);
  }
  drawMouseFx();
}

function resizeMouseFx() {
  if (!mouseFxCanvas) return;
  mouseFxCanvas.width = window.innerWidth;
  mouseFxCanvas.height = window.innerHeight;
}

function initMouseFx() {
  var container = document.querySelector(".ambient-background");
  if (!container || !finePointerQuery.matches || reducedMotionQuery.matches) return;
  mouseFxCanvas = document.createElement("canvas");
  mouseFxCanvas.className = "mouse-fx";
  mouseFxCanvas.setAttribute("aria-hidden", "true");
  container.appendChild(mouseFxCanvas);
  mouseFxCtx = mouseFxCanvas.getContext("2d");
  mouseFxCtx.globalCompositeOperation = "lighter";
  resizeMouseFx();
  animateMouseFx();
  window.addEventListener("resize", resizeMouseFx, { passive: true });
  // جزء ضوئي أبطأ لخلفية ناعمة
  setInterval(function () {
    if (reducedMotionQuery.matches || document.hidden) return;
    mouseFxSpawn(2, (Math.random() * 2 - 1) * (window.innerWidth - 120) + 60, (Math.random() * 2 - 1) * (window.innerHeight - 120) + 60);
  }, 2200);
  window.addEventListener("mousemove", function (event) {
    mouseFxPointer.x = event.clientX;
    mouseFxPointer.y = event.clientY;
    if (Date.now() - mouseFxLastSpawn > 45) {
      mouseFxLastSpawn = Date.now();
      mouseFxSpawn(1 + Math.floor(Math.random() * 2));
    }
  }, { passive: true });
  window.addEventListener("mouseout", function () {
    mouseFxPointer.x = -window.innerWidth * 0.35;
    mouseFxPointer.y = -window.innerHeight * 0.35;
    mouseFxLastSpawn = 0;
  });
}

/* ===== تأثيرات بطاقات المشاريع: 3D Tilt + ترتفع + ضوء حواف ===== */
var projectCards = new Map();
var projectEffectsRAF = 0;

function projectCardHover(card) {
  var state = {
    active: false,
    tiltX: 0,
    tiltY: 0,
    tiltTargetX: 0,
    tiltTargetY: 0,
    imgX: 0,
    imgY: 0,
    imgTargetX: 0,
    imgTargetY: 0
  };
  projectCards.set(card, state);
  card.addEventListener("mousemove", function (event) {
    if (!finePointerQuery.matches) return;
    state.active = true;
    projectEffectsLoop();
    var rect = card.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    var centerX = rect.left + rect.width / 2;
    var centerY = rect.top + rect.height / 2;
    state.tiltTargetX = clamp((event.clientX - centerX) / (rect.width / 2) * 1.05, -0.78, 0.78) * 10;
    state.tiltTargetY = clamp((event.clientY - centerY) / (rect.height / 2) * 1.05, -0.78, 0.78) * 9;
    state.imgTargetX = (event.clientX - rect.left) / rect.width * 100 - 50;
    state.imgTargetY = (event.clientY - rect.top) / rect.height * 100 - 50;
  }, { passive: true });
  card.addEventListener("mouseleave", function () { state.active = false; });
  card.addEventListener("focusin", function () { if (finePointerQuery.matches) { state.active = true; projectEffectsLoop(); } });
  card.addEventListener("focusout", function () { state.active = false; });
}

function projectEffectsLoop() {
  if (projectEffectsRAF) return;
  projectEffectsRAF = requestAnimationFrame(runProjectEffects);
}

function runProjectEffects() {
  projectEffectsRAF = requestAnimationFrame(runProjectEffects);
  if (!finePointerQuery.matches) {
    projectCards.forEach(function (state, card) { card.style.transform = ""; });
    projectEffectsRAF = 0;
    return;
  }
  var delta = getEffectsDelta();
  var anyActive = false;
  projectCards.forEach(function (state, card) {
    if (!state.active) return;
    anyActive = true;
    state.tiltX = damp(state.tiltX, state.tiltTargetX, 6, delta);
    state.tiltY = damp(state.tiltY, state.tiltTargetY, 6, delta);
    state.imgX = damp(state.imgX, state.imgTargetX, 5, delta);
    state.imgY = damp(state.imgY, state.imgTargetY, 5, delta);
    var hovering = card.matches(".project-card:hover");
    var transform = "rotateX(" + (-state.tiltY).toFixed(2) + "deg) rotateY(" + state.tiltX.toFixed(2) + "deg)";
    if (hovering) transform += " translateY(-5px)";
    card.style.transform = transform;
    var img = card.querySelector(".project-art > img");
    if (img) {
      img.style.transform = "scale(1.03) translateX(" + state.imgX.toFixed(2) + "px) translateY(" + state.imgY.toFixed(2) + "px)";
    }
  });
  if (!anyActive) {
    cancelAnimationFrame(projectEffectsRAF);
    projectEffectsRAF = 0;
    projectCards.forEach(function (state, card) {
      card.style.transform = "";
      var img = card.querySelector(".project-art > img");
      if (img) img.style.transform = "";
    });
  }
}

function initProjectCards() {
  if (!finePointerQuery.matches) return;
  document.querySelectorAll(".project-card[data-project]").forEach(projectCardHover);
}

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menuToggle");
  const mainMenu = document.getElementById("mainMenu");
  const backToTop = document.getElementById("backToTop");
  const ideaForm = document.getElementById("ideaForm");
  const ideaText = document.getElementById("ideaText");
  const ideaCategory = document.getElementById("ideaCategory");
  const ideaList = document.getElementById("ideaList");
  const ideaFeedback = document.getElementById("ideaFeedback");

  document.getElementById("currentYear").textContent = String(new Date().getFullYear());

  // فيديو وردة.mp4: خلفية رئيسية تلقائية
  initSiteVideo();

  // مؤثرات الماوس: جزيئات ضوئية تتبع المؤشر + هالة مؤشر متلألئة
  initMouseFx();

  // بدء تأثيرات بطاقات المشاريع (3D Tilt + Parallax صور)
  initProjectCards();

  function closeMenu() {
    if (!menuToggle || !mainMenu) return;
    mainMenu.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "فتح القائمة");
  }

  if (menuToggle && mainMenu) {
    menuToggle.addEventListener("click", function () {
      const isOpening = menuToggle.getAttribute("aria-expanded") !== "true";
      menuToggle.setAttribute("aria-expanded", String(isOpening));
      menuToggle.setAttribute("aria-label", isOpening ? "إغلاق القائمة" : "فتح القائمة");
      mainMenu.classList.toggle("is-open", isOpening);
    });

    mainMenu.addEventListener("click", function (event) {
      if (event.target.closest("a")) closeMenu();
    });

    document.addEventListener("click", function (event) {
      if (!event.target.closest(".header-inner")) closeMenu();
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 680) closeMenu();
    });
  }

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") closeMenu();
  });



  function updateBackToTop() {
    backToTop.classList.toggle("is-visible", window.scrollY > 420);
  }

  window.addEventListener("scroll", updateBackToTop, { passive: true });
  updateBackToTop();
  backToTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const revealItems = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach(function (item) { revealObserver.observe(item); });
  } else {
    revealItems.forEach(function (item) { item.classList.add("is-visible"); });
  }

  const sectionLinks = Array.from(document.querySelectorAll(".main-nav a[href^='#']"));
  const navigableSections = sectionLinks
    .map(function (link) {
      return document.querySelector(link.getAttribute("href"));
    })
    .filter(Boolean);

  if ("IntersectionObserver" in window && navigableSections.length) {
    const navigationObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        sectionLinks.forEach(function (link) {
          const isCurrent = link.hash === "#" + entry.target.id;
          if (isCurrent) {
            link.setAttribute("aria-current", "location");
          } else {
            link.removeAttribute("aria-current");
          }
        });
      });
    }, { rootMargin: "-25% 0px -65% 0px" });
    navigableSections.forEach(function (section) { navigationObserver.observe(section); });
  }

  if (ideaForm && ideaText && ideaCategory && ideaList && ideaFeedback) {
    let ideaEntries = [];

    function saveIdeas() {
      try {
        window.sessionStorage.setItem(ideaStorageKey, JSON.stringify(ideaEntries));
        return true;
      } catch (error) {
        console.error("تعذر حفظ الأفكار في جلسة التصفح.", error);
        return false;
      }
    }

    function renderIdeas() {
      ideaList.replaceChildren();
      ideaEntries.forEach(function (entry) {
        const card = document.createElement("article");
        card.className = "idea-card";

        const category = document.createElement("p");
        category.className = "idea-category";
        category.textContent = entry.category;

        const text = document.createElement("p");
        text.className = "idea-text";
        text.textContent = entry.text;

        const removeButton = document.createElement("button");
        removeButton.className = "idea-remove";
        removeButton.type = "button";
        removeButton.textContent = "حذف";
        removeButton.setAttribute("aria-label", "حذف الفكرة: " + entry.text);
        removeButton.addEventListener("click", function () {
          ideaEntries = ideaEntries.filter(function (item) { return item.id !== entry.id; });
          const saved = saveIdeas();
          renderIdeas();
          ideaFeedback.textContent = saved
            ? "تم حذف الفكرة من العرض المحلي."
            : "حُذفت الفكرة من العرض الحالي، لكن تعذر تحديث تخزين جلسة التصفح.";
        });

        card.append(category, text, removeButton);
        ideaList.appendChild(card);
      });
    }

    try {
      const savedIdeas = window.sessionStorage.getItem(ideaStorageKey);
      if (savedIdeas) {
        const parsedIdeas = JSON.parse(savedIdeas);
        if (!Array.isArray(parsedIdeas)) throw new TypeError("بيانات الأفكار المحفوظة ليست قائمة صالحة.");
        ideaEntries = parsedIdeas.filter(function (entry) {
          return entry && typeof entry.id === "string" &&
            typeof entry.text === "string" && entry.text.trim() &&
            allowedIdeaCategories.includes(entry.category);
        });
      }
    } catch (error) {
      console.error("تعذر استعادة الأفكار من جلسة التصفح.", error);
      ideaFeedback.textContent = "تعذر استعادة الأفكار السابقة؛ يمكنك إضافة أفكار جديدة.";
    }

    renderIdeas();

    ideaForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const text = ideaText.value.trim();
      if (!text || !allowedIdeaCategories.includes(ideaCategory.value)) {
        ideaFeedback.textContent = "أكمل الفكرة واختر تصنيفاً صالحاً قبل الإضافة.";
        return;
      }

      ideaEntries.unshift({
        id: Date.now().toString(36) + "-" + Math.random().toString(36).slice(2, 8),
        text: text,
        category: ideaCategory.value
      });
      const saved = saveIdeas();
      renderIdeas();
      ideaForm.reset();
      ideaFeedback.textContent = saved
        ? "أُضيفت الفكرة إلى العرض المحلي."
        : "أُضيفت الفكرة للعرض الحالي، لكن تعذر حفظها في جلسة التصفح.";
      ideaText.focus();
    });
  }
});
