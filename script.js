/* ============================================
   ANOJ LAMA -- AI-Era Portfolio Script
   Pure JavaScript -- no frameworks
   ============================================ */

/* ==========================================
   TRANSLATIONS
   ========================================== */
var translations = {
  ja: {
    nav_about: "自己紹介", nav_skills: "スキル", nav_edu: "学歴", nav_contact: "連絡先",
    hero_greeting: "はじめまして", hero_status: "学習中",
    hero_title: "IT エンジニア志望",
    hero_subtitle: "専門学校東京テクニカルカレッジ ・ 情報処理科 1年",
    hero_cta: "詳しく見る", hero_cta2: "連絡する",
    stat_skills: "学習中のスキル", stat_year: "1年生", stat_grad: "卒業予定年",
    about_title: "自己紹介",
    about_text: "はじめまして。東京テクニカルカレッジ情報処理科に在籍しているラマ・アノジです。2027年3月に卒業予定です。",
    about_text_2: "ネパール出身で、多文化の環境の中で育ちました。その経験を活かし、将来は国際的な視野を持って活躍できるエンジニアになりたいと考えています。",
    about_text_3: "現在、学校ではJavaを主な言語として学び、C言語、SQL、Tomcat、UMLなどを通してプログラミングやシステム開発の基礎を身につけています。",
    about_text_4: "また、オンライン講座を利用してHTML、CSS、JavaScriptの基礎も学習しており、Web開発のスキル向上にも取り組んでいます。",
    about_text_5: "人と出会うことが好きで、周囲と良い関係を築くことを大切にしています。落ち着いた性格ですが、チームワークを意識しながら成長していきたいと考えております。",
    about_text_6: "将来はシステムエンジニアとして成長し、実務経験を積みながら技術力を高めていきたいと考えております。",
    about_h1: "Java・オブジェクト指向開発", about_h1_desc: "クラス設計とアプリケーション開発",
    about_h2: "データベース・SQL", about_h2_desc: "テーブル設計とCRUD操作",
    about_h3: "Webアプリケーション開発", about_h3_desc: "Servlet/JSPによるMVCアーキテクチャ",
    about_h4: "システムエンジニア志望", about_h4_desc: "要件定義から開発まで",
    qual_title: "資格",
    skills_title: "スキル", skills_note: "現在1年生 ── 基礎を固めている段階です",
    skill_ai: "AI ツール活用", skill_github: "GitHub",
    level_learning: "学習中", level_basics: "基礎習得", level_beginner: "入門",
    edu_title: "学歴",
    edu_school: "専門学校東京テクニカルカレッジ", edu_dept: "情報処理科",
    edu_type: "専門学校", edu_year: "1年生", edu_grad: "2027年3月 卒業予定",
    contact_title: "連絡先",
    contact_subtitle: "以下のいずれかからお気軽にご連絡ください",
    contact_facebook_label: "Facebook",
    contact_github_label: "GitHub",
    cert_toeic: "TOEIC", cert_toeic_detail: "スコア",
    cert_jlpt: "JLPT N3", cert_jlpt_status: "合格", cert_jlpt_detail: "日本語能力試験",
    footer_text: "IT エンジニアを目指して日々努力しています。"
  },
  en: {
    nav_about: "About", nav_skills: "Skills", nav_edu: "Education", nav_contact: "Contact",
    hero_greeting: "Hello, nice to meet you", hero_status: "Studying",
    hero_title: "Aspiring IT Engineer",
    hero_subtitle: "Tokyo Technical College -- Info Processing Dept., 1st Year",
    hero_cta: "Learn More", hero_cta2: "Contact Me",
    stat_skills: "Skills Learning", stat_year: "1st Year Student", stat_grad: "Grad Year",
    about_title: "About Me",
    about_text: "Nice to meet you. I am Anoj Lama, currently enrolled in the Information Processing Department at Tokyo Technical College. I am expected to graduate in March 2027.",
    about_text_2: "Originally from Nepal, I grew up in a multicultural environment. Leveraging that experience, I aspire to become an engineer who can work with an international perspective.",
    about_text_3: "At school, I am primarily learning Java, and building a foundation in programming and system development through C language, SQL, Tomcat, and UML.",
    about_text_4: "I am also studying the basics of HTML, CSS, and JavaScript through online courses, working to improve my web development skills.",
    about_text_5: "I enjoy meeting new people and value building good relationships with those around me. While I have a calm personality, I aim to grow while being mindful of teamwork.",
    about_text_6: "In the future, I hope to grow as a systems engineer, building my technical skills through hands-on professional experience.",
    about_h1: "Java & OOP Development", about_h1_desc: "Class design & application development",
    about_h2: "Database & SQL", about_h2_desc: "Table design & CRUD operations",
    about_h3: "Web Application Development", about_h3_desc: "Servlet/JSP with MVC architecture",
    about_h4: "Aspiring Systems Engineer", about_h4_desc: "From requirements to deployment",
    qual_title: "Qualifications",
    skills_title: "Skills", skills_note: "Currently a 1st year student -- these reflect my growing foundation",
    skill_ai: "AI Tool Proficiency", skill_github: "GitHub",
    level_learning: "Learning", level_basics: "Basics Acquired", level_beginner: "Beginner",
    edu_title: "Education",
    edu_school: "Tokyo Technical College", edu_dept: "Information Processing Department",
    edu_type: "Vocational School", edu_year: "1st Year", edu_grad: "Expected Graduation: March 2027",
    contact_title: "Contact",
    contact_subtitle: "Feel free to reach out through any of the channels below",
    contact_facebook_label: "Facebook",
    contact_github_label: "GitHub",
    cert_toeic: "TOEIC", cert_toeic_detail: "Score",
    cert_jlpt: "JLPT N3", cert_jlpt_status: "Passed", cert_jlpt_detail: "Japanese Language Proficiency Test",
    footer_text: "Working hard every day to become an IT engineer."
  },
  zh: {
    nav_about: "自我介绍", nav_skills: "技能", nav_edu: "学历", nav_contact: "联系方式",
    hero_greeting: "您好，初次见面", hero_status: "学习中",
    hero_title: "志愿成为IT工程师",
    hero_subtitle: "东京工学情报专门学校 ・ 信息处理科 一年级",
    hero_cta: "了解更多", hero_cta2: "联系我",
    stat_skills: "正在学习的技能", stat_year: "一年级学生", stat_grad: "预计毕业年",
    about_title: "自我介绍",
    about_text: "您好。我是拉马・阿诺吉，目前就读于东京技术学院信息处理科，预计2027年3月毕业。",
    about_text_2: "我来自尼泊尔，在多元文化的环境中成长。我希望利用这些经验，成为一名具有国际视野的工程师。",
    about_text_3: "目前在学校以Java为主要语言进行学习，并通过C语言、SQL、Tomcat、UML等课程打好编程和系统开发的基础。",
    about_text_4: "同时，我也通过在线课程学习HTML、CSS和JavaScript的基础知识，致力于提升Web开发技能。",
    about_text_5: "我喜欢与人交流，注重与周围的人建立良好的关系。虽然性格沉稳，但我希望在注重团队合作的同时不断成长。",
    about_text_6: "未来，我希望作为系统工程师不断成长，通过积累实际工作经验来提升技术能力。",
    about_h1: "Java与面向对象开发", about_h1_desc: "类设计与应用开发",
    about_h2: "数据库与SQL", about_h2_desc: "表设计与CRUD操作",
    about_h3: "Web应用开发", about_h3_desc: "Servlet/JSP与MVC架构",
    about_h4: "志愿成为系统工程师", about_h4_desc: "从需求定义到开发部署",
    qual_title: "资格证书",
    skills_title: "技能", skills_note: "目前一年级 ── 正在打好基础阶段",
    skill_ai: "AI工具运用", skill_github: "GitHub",
    level_learning: "学习中", level_basics: "基础掌握", level_beginner: "入门",
    edu_title: "学历",
    edu_school: "东京工学情报专门学校", edu_dept: "信息处理科",
    edu_type: "专门学校", edu_year: "一年级", edu_grad: "预计2027年3月毕业",
    contact_title: "联系方式",
    contact_subtitle: "请通过以下任何渠道随时联系我",
    contact_facebook_label: "Facebook",
    contact_github_label: "GitHub",
    cert_toeic: "TOEIC", cert_toeic_detail: "分数",
    cert_jlpt: "JLPT N3", cert_jlpt_status: "合格", cert_jlpt_detail: "日本语能力测试",
    footer_text: "每天努力，以成为IT工程师为目标。"
  },
  ko: {
    nav_about: "자기소개", nav_skills: "기술", nav_edu: "학력", nav_contact: "연락처",
    hero_greeting: "안녕하세요, 처음 뵙겠습니다", hero_status: "학습 중",
    hero_title: "IT 엔지니어 지망",
    hero_subtitle: "도쿄공학정보전문학교 ・ 정보처리과 1학년",
    hero_cta: "자세히 보기", hero_cta2: "연락하기",
    stat_skills: "학습 중인 기술", stat_year: "1학년 학생", stat_grad: "졸업 ���정 연도",
    about_title: "자기소개",
    about_text: "안녕하세요. 도쿄 테크니컬 칼리지 정보처리과에 재학 중인 라마 아노지입니다. 2027년 3월 졸업 예정입니다.",
    about_text_2: "네팔 출신으로 다문화 환경에서 자랐습니다. 그 경험을 살려 국제적인 시야를 가지고 활약할 수 있는 엔지니어가 되고 싶습니다.",
    about_text_3: "현재 학교에서는 Java를 주요 언어로 학습하며, C 언어, SQL, Tomcat, UML 등을 통해 프로그래밍과 시스템 개발의 기초를 다지고 있습니다.",
    about_text_4: "또한 온라인 강좌를 통해 HTML, CSS, JavaScript의 기초도 학습하며 웹 개발 스킬 향상에도 노력하고 있습니다.",
    about_text_5: "사람을 만나는 것을 좋아하며, 주위 사람들과 좋은 관계를 쌓는 것을 소중히 여기고 있습니다. 차분한 성격이지만 팀워크를 의식하며 성장해 나가고 싶습니다.",
    about_text_6: "장래에는 시스템 엔지니어로서 성장하며, 실무 경험을 쌓으면서 기술력을 높여 나가고 싶습니다.",
    about_h1: "Java와 객체지향 개발", about_h1_desc: "클래스 설계 및 애플리케이션 개발",
    about_h2: "데이터베이스와 SQL", about_h2_desc: "테이블 설계 및 CRUD 작업",
    about_h3: "웹 애플리케이션 개발", about_h3_desc: "Servlet/JSP와 MVC 아키텍처",
    about_h4: "시스템 엔지니어 지망", about_h4_desc: "요건 정의부터 배포까지",
    qual_title: "자격증",
    skills_title: "기술", skills_note: "현재 1학년 ── 기초를 다지고 있는 단계입니다",
    skill_ai: "AI 도구 활용", skill_github: "GitHub",
    level_learning: "학습 중", level_basics: "기초 습득", level_beginner: "입문",
    edu_title: "학력",
    edu_school: "도쿄공학정보전문학교", edu_dept: "정보처리과",
    edu_type: "전문학교", edu_year: "1학년", edu_grad: "2027년 3월 졸업 예정",
    contact_title: "연락처",
    contact_subtitle: "아래 채널을 통해 편하게 연락해 주세요",
    contact_facebook_label: "Facebook",
    contact_github_label: "GitHub",
    cert_toeic: "TOEIC", cert_toeic_detail: "점수",
    cert_jlpt: "JLPT N3", cert_jlpt_status: "합격", cert_jlpt_detail: "일본어능력시험",
    footer_text: "IT 엔지니어가 되기 위해 매일 노력하고 있습니다."
  }
};

var currentLang = "ja";

function switchLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  var els = document.querySelectorAll("[data-i18n]");
  for (var j = 0; j < els.length; j++) {
    var key = els[j].getAttribute("data-i18n");
    if (translations[lang][key]) {
      els[j].textContent = translations[lang][key];
    }
  }
  document.documentElement.lang = lang;
  var btns = document.querySelectorAll(".lang-btn");
  for (var k = 0; k < btns.length; k++) {
    btns[k].classList.toggle("active", btns[k].getAttribute("data-lang") === lang);
  }
}

/* ==========================================
   THEME
   ========================================== */
function toggleTheme() {
  var current = document.documentElement.getAttribute("data-theme");
  var next = current === "light" ? "dark" : "light";
  
  // Smooth transition class
  document.body.classList.add("theme-transitioning");
  document.documentElement.setAttribute("data-theme", next);
  
  setTimeout(function() {
    document.body.classList.remove("theme-transitioning");
  }, 700);
  
  try { localStorage.setItem("portfolio-theme", next); } catch(e) {}
}

function initTheme() {
  try {
    var saved = localStorage.getItem("portfolio-theme");
    if (saved) {
      document.documentElement.setAttribute("data-theme", saved);
    }
  } catch(e) {}
}

/* ==========================================
   PAGE LOADER
   ========================================== */
function initLoader() {
  var loader = document.getElementById("pageLoader");
  if (!loader) return;
  
  // Scramble the loader text
  var loaderText = loader.querySelector(".loader-text");
  if (loaderText) {
    scrambleText(loaderText, "INITIALIZING", 1200);
  }
  
  window.addEventListener("load", function() {
    setTimeout(function() {
      loader.classList.add("loaded");
    }, 1400);
  });
  
  // Safety fallback
  setTimeout(function() {
    loader.classList.add("loaded");
  }, 3000);
}

/* ==========================================
   TEXT SCRAMBLE EFFECT
   ========================================== */
var scrambleChars = "!<>-_\\/[]{}=+*^?#_ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function scrambleText(el, finalText, duration) {
  duration = duration || 800;
  var startTime = Date.now();
  
  function update() {
    var elapsed = Date.now() - startTime;
    var progress = Math.min(elapsed / duration, 1);
    var result = "";
    
    for (var i = 0; i < finalText.length; i++) {
      if (finalText[i] === " ") {
        result += " ";
      } else if (progress > (i / finalText.length)) {
        result += finalText[i];
      } else {
        result += scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
      }
    }
    
    el.textContent = result;
    
    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }
  
  requestAnimationFrame(update);
}

/* ==========================================
   MOBILE NAV
   ========================================== */
function toggleMobileNav() {
  document.getElementById("hamburger").classList.toggle("active");
  document.getElementById("navLinks").classList.toggle("open");
}
function closeMobileNav() {
  document.getElementById("hamburger").classList.remove("active");
  document.getElementById("navLinks").classList.remove("open");
}

/* ==========================================
   PARTICLES -- Interactive Canvas
   ========================================== */
function initParticles() {
  var canvas = document.getElementById("particleCanvas");
  if (!canvas) return;
  var ctx = canvas.getContext("2d");
  var particles = [];
  var mouse = { x: -9999, y: -9999 };

  function resize() {
    canvas.width = canvas.parentElement.offsetWidth;
    canvas.height = canvas.parentElement.offsetHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  canvas.parentElement.addEventListener("mousemove", function(e) {
    var rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });
  canvas.parentElement.addEventListener("mouseleave", function() {
    mouse.x = -9999;
    mouse.y = -9999;
  });

  var count = Math.min(120, Math.floor(canvas.width * canvas.height / 9000));

  for (var l = 0; l < count; l++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.4 + 0.15,
      pulse: Math.random() * Math.PI * 2,
      hue: Math.random()
    });
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var isLight = document.documentElement.getAttribute("data-theme") === "light";
    var col = isLight ? "0, 102, 255" : "0, 212, 255";
    var col2 = isLight ? "124, 58, 237" : "123, 97, 255";
    var col3 = isLight ? "16, 185, 129" : "0, 255, 170";

    for (var m = 0; m < particles.length; m++) {
      var p = particles[m];
      p.pulse += 0.012;
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

      var dx = p.x - mouse.x;
      var dy = p.y - mouse.y;
      var dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 180) {
        var force = (180 - dist) / 180 * 0.04;
        p.vx += dx * force;
        p.vy += dy * force;
      }

      p.vx *= 0.99;
      p.vy *= 0.99;

      var pulseR = p.r + Math.sin(p.pulse) * 0.5;
      var useCol = p.hue < 0.33 ? col : (p.hue < 0.66 ? col2 : col3);

      // Glow
      ctx.beginPath();
      ctx.arc(p.x, p.y, pulseR * 3.5, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(" + useCol + "," + (p.opacity * 0.08) + ")";
      ctx.fill();

      // Core
      ctx.beginPath();
      ctx.arc(p.x, p.y, pulseR, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(" + useCol + "," + p.opacity + ")";
      ctx.fill();

      // Connections
      for (var n = m + 1; n < particles.length; n++) {
        var p2 = particles[n];
        var ddx = p.x - p2.x;
        var ddy = p.y - p2.y;
        var d = Math.sqrt(ddx * ddx + ddy * ddy);
        if (d < 140) {
          var alpha = (1 - d / 140) * 0.1;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = "rgba(" + col2 + "," + alpha + ")";
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }

      // Mouse connection
      if (dist < 220) {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(mouse.x, mouse.y);
        ctx.strokeStyle = "rgba(" + col + "," + ((1 - dist / 220) * 0.1) + ")";
        ctx.lineWidth = 0.4;
        ctx.stroke();
      }
    }

    requestAnimationFrame(animate);
  }
  animate();
}

/* ==========================================
   TYPING EFFECT with cursor
   ========================================== */
function initTyping() {
  var el = document.getElementById("typedName");
  if (!el) return;
  var text = "Anoj Lama";
  var idx = 0;
  var deleting = false;
  var pauseEnd = 0;

  function step() {
    var now = Date.now();
    if (now < pauseEnd) {
      requestAnimationFrame(step);
      return;
    }

    if (!deleting) {
      if (idx <= text.length) {
        el.textContent = text.substring(0, idx);
        idx++;
        if (idx > text.length) {
          pauseEnd = now + 3000;
          deleting = true;
        }
        setTimeout(step, 100 + Math.random() * 60);
      }
    } else {
      if (idx >= 0) {
        el.textContent = text.substring(0, idx);
        idx--;
        if (idx < 0) {
          deleting = false;
          idx = 0;
          pauseEnd = now + 500;
        }
        setTimeout(step, 50 + Math.random() * 30);
      }
    }
  }

  setTimeout(step, 1600);
}

/* ==========================================
   STAT COUNTER ANIMATION
   ========================================== */
function initCounters() {
  var counters = document.querySelectorAll("[data-count]");
  var triggered = false;

  var observer = new IntersectionObserver(function(entries) {
    for (var o = 0; o < entries.length; o++) {
      if (entries[o].isIntersecting && !triggered) {
        triggered = true;
        for (var p = 0; p < counters.length; p++) {
          animateCounter(counters[p]);
        }
        observer.disconnect();
      }
    }
  }, { threshold: 0.5 });

  var statsEl = document.querySelector(".hero-stats");
  if (statsEl) observer.observe(statsEl);

  function animateCounter(el) {
    var target = parseInt(el.getAttribute("data-count"), 10);
    var duration = target > 100 ? 2200 : 1000;
    var startTime = null;

    function tick(ts) {
      if (!startTime) startTime = ts;
      var progress = Math.min((ts - startTime) / duration, 1);
      var ease = 1 - Math.pow(1 - progress, 4);
      el.textContent = Math.floor(ease * target);
      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        el.textContent = target;
      }
    }
    requestAnimationFrame(tick);
  }
}

/* ==========================================
   SCROLL REVEAL with stagger
   ========================================== */
function initReveal() {
  var items = document.querySelectorAll("[data-reveal]");

  var observer = new IntersectionObserver(function(entries) {
    for (var q = 0; q < entries.length; q++) {
      if (entries[q].isIntersecting) {
        var el = entries[q].target;
        var parent = el.parentElement;
        var siblings = parent.querySelectorAll("[data-reveal]");
        var idx = 0;
        for (var r = 0; r < siblings.length; r++) {
          if (siblings[r] === el) { idx = r; break; }
        }
        (function(element, delay) {
          setTimeout(function() {
            element.classList.add("revealed");
            // Scramble section titles
            if (element.classList.contains("section-header")) {
              var title = element.querySelector(".section-title");
              if (title) {
                scrambleText(title, title.textContent, 600);
              }
            }
          }, delay);
        })(el, idx * 150);
        observer.unobserve(el);
      }
    }
  }, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });

  for (var s = 0; s < items.length; s++) {
    observer.observe(items[s]);
  }
}

/* ==========================================
   SKILL BAR ANIMATION
   ========================================== */
function initSkillBars() {
  var bars = document.querySelectorAll(".skill-bar");

  var observer = new IntersectionObserver(function(entries) {
    for (var t = 0; t < entries.length; t++) {
      if (entries[t].isIntersecting) {
        var bar = entries[t].target;
        var width = bar.getAttribute("data-width");
        setTimeout(function(b, w) {
          return function() {
            b.style.width = w + "%";
            b.parentElement.classList.add("animated");
          };
        }(bar, width), 400);
        observer.unobserve(bar);
      }
    }
  }, { threshold: 0.3 });

  for (var u = 0; u < bars.length; u++) {
    observer.observe(bars[u]);
  }
}

/* ==========================================
   3D TILT EFFECT (enhanced)
   ========================================== */
function initTilt() {
  var els = document.querySelectorAll("[data-tilt]");

  for (var v = 0; v < els.length; v++) {
    (function(el) {
      el.addEventListener("mousemove", function(e) {
        var rect = el.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;
        var cx = rect.width / 2;
        var cy = rect.height / 2;
        var rx = ((y - cy) / cy) * -5;
        var ry = ((x - cx) / cx) * 5;
        el.style.transform = "perspective(800px) rotateX(" + rx + "deg) rotateY(" + ry + "deg) scale3d(1.02,1.02,1.02)";
        el.style.transition = "transform 0.1s ease-out";
      });
      el.addEventListener("mouseleave", function() {
        el.style.transform = "perspective(800px) rotateX(0) rotateY(0) scale3d(1,1,1)";
        el.style.transition = "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)";
      });
    })(els[v]);
  }
}

/* ==========================================
   CUSTOM CURSOR (enhanced with glow)
   ========================================== */
function initCursor() {
  var cursor = document.getElementById("cursor");
  var trail = document.getElementById("cursorTrail");
  var glow = document.getElementById("cursorGlow");
  if (!cursor || !trail) return;

  var cx = 0, cy = 0;
  var tx = 0, ty = 0;
  var gx = 0, gy = 0;

  document.addEventListener("mousemove", function(e) {
    cx = e.clientX;
    cy = e.clientY;
    cursor.style.left = cx + "px";
    cursor.style.top = cy + "px";
  });

  function moveTrail() {
    tx += (cx - tx) * 0.15;
    ty += (cy - ty) * 0.15;
    trail.style.left = tx + "px";
    trail.style.top = ty + "px";
    
    if (glow) {
      gx += (cx - gx) * 0.06;
      gy += (cy - gy) * 0.06;
      glow.style.left = gx + "px";
      glow.style.top = gy + "px";
    }
    
    requestAnimationFrame(moveTrail);
  }
  moveTrail();

  var hoverEls = document.querySelectorAll("a, button, .skill-card, .contact-card, .edu-card, .stat-card, .qual-badge");
  for (var w = 0; w < hoverEls.length; w++) {
    hoverEls[w].addEventListener("mouseenter", function() { cursor.classList.add("hovering"); });
    hoverEls[w].addEventListener("mouseleave", function() { cursor.classList.remove("hovering"); });
  }
}

/* ==========================================
   MAGNETIC BUTTONS (enhanced)
   ========================================== */
function initMagnetic() {
  var btns = document.querySelectorAll(".magnetic");
  for (var x = 0; x < btns.length; x++) {
    (function(btn) {
      btn.addEventListener("mousemove", function(e) {
        var rect = btn.getBoundingClientRect();
        var bx = e.clientX - rect.left - rect.width / 2;
        var by = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = "translate(" + (bx * 0.25) + "px, " + (by * 0.25) + "px)";
      });
      btn.addEventListener("mouseleave", function() {
        btn.style.transform = "translate(0, 0)";
        btn.style.transition = "transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)";
      });
    })(btns[x]);
  }
}

/* ==========================================
   HEADER SCROLL + PROGRESS BAR
   ========================================== */
function initHeader() {
  var header = document.getElementById("header");
  var progress = document.getElementById("headerProgress");

  window.addEventListener("scroll", function() {
    if (window.pageYOffset > 30) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

    var winH = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var pct = winH > 0 ? (window.pageYOffset / winH) * 100 : 0;
    progress.style.width = pct + "%";
  });
}

/* ==========================================
   SMOOTH SCROLL
   ========================================== */
function initSmoothScroll() {
  var links = document.querySelectorAll('a[href^="#"]');
  for (var y = 0; y < links.length; y++) {
    links[y].addEventListener("click", function(e) {
      var id = this.getAttribute("href");
      if (id === "#") return;
      var target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  }
}

/* ==========================================
   ACTIVE NAV HIGHLIGHT
   ========================================== */
function initActiveNav() {
  var sections = document.querySelectorAll("section[id]");
  var navLinks = document.querySelectorAll(".nav-links a");

  window.addEventListener("scroll", function() {
    var scrollY = window.pageYOffset + 200;
    for (var z = 0; z < sections.length; z++) {
      var sec = sections[z];
      var top = sec.offsetTop;
      var h = sec.offsetHeight;
      var id = sec.getAttribute("id");
      if (scrollY >= top && scrollY < top + h) {
        for (var a = 0; a < navLinks.length; a++) {
          navLinks[a].classList.remove("active");
          if (navLinks[a].getAttribute("href") === "#" + id) {
            navLinks[a].classList.add("active");
          }
        }
      }
    }
  });
}

/* ==========================================
   PARALLAX ELEMENTS (enhanced)
   ========================================== */
function initParallax() {
  var heroLeft = document.querySelector(".hero-left");
  var heroRight = document.querySelector(".hero-right");
  var orbs = document.querySelectorAll(".orb");
  if (!heroLeft || !heroRight) return;

  window.addEventListener("scroll", function() {
    var y = window.pageYOffset;
    if (y < window.innerHeight) {
      heroLeft.style.transform = "translateY(" + (y * 0.1) + "px)";
      heroRight.style.transform = "translateY(" + (y * 0.05) + "px)";
      
      // Move orbs slightly on scroll for depth
      for (var i = 0; i < orbs.length; i++) {
        orbs[i].style.transform = "translateY(" + (y * (0.02 + i * 0.01)) + "px)";
      }
    }
  });
}

/* ==========================================
   BACK TO TOP BUTTON
   ========================================== */
function initBackToTop() {
  var btn = document.getElementById("backToTop");
  if (!btn) return;
  
  window.addEventListener("scroll", function() {
    if (window.pageYOffset > 400) {
      btn.classList.add("visible");
    } else {
      btn.classList.remove("visible");
    }
  });
  
  btn.addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* ==========================================
   SCRAMBLE ON HOVER for nav logo
   ========================================== */
function initScrambleHover() {
  var scrambleEls = document.querySelectorAll("[data-scramble]");
  scrambleEls.forEach(function(el) {
    var originalText = el.textContent;
    el.addEventListener("mouseenter", function() {
      scrambleText(el, originalText, 400);
    });
  });
}

/* ==========================================
   SECTION ENTRANCE ANIMATIONS
   ========================================== */
function initSectionAnimations() {
  var sections = document.querySelectorAll(".section");
  
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("section-visible");
      }
    });
  }, { threshold: 0.05 });
  
  sections.forEach(function(sec) {
    observer.observe(sec);
  });
}

/* ==========================================
   SMART KEYBOARD NAVIGATION
   ========================================== */
function initKeyboardNav() {
  document.addEventListener("keydown", function(e) {
    if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
    
    switch(e.key.toLowerCase()) {
      case "h":
        document.getElementById("hero").scrollIntoView({ behavior: "smooth" });
        break;
      case "a":
        document.getElementById("about").scrollIntoView({ behavior: "smooth" });
        break;
      case "s":
        document.getElementById("skills").scrollIntoView({ behavior: "smooth" });
        break;
      case "e":
        document.getElementById("education").scrollIntoView({ behavior: "smooth" });
        break;
      case "c":
        document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
        break;
      case "t":
        toggleTheme();
        break;
    }
  });
}

/* ==========================================
   MOUSE RIPPLE ON CLICK
   ========================================== */
function initClickRipple() {
  document.addEventListener("click", function(e) {
    var ripple = document.createElement("div");
    ripple.style.cssText = "position:fixed;left:" + e.clientX + "px;top:" + e.clientY + "px;width:0;height:0;border-radius:50%;background:rgba(0,212,255,0.15);transform:translate(-50%,-50%);pointer-events:none;z-index:9998;transition:all 0.6s cubic-bezier(0.4,0,0.2,1);";
    document.body.appendChild(ripple);
    
    requestAnimationFrame(function() {
      ripple.style.width = "100px";
      ripple.style.height = "100px";
      ripple.style.opacity = "0";
    });
    
    setTimeout(function() {
      ripple.remove();
    }, 700);
  });
}

/* ==========================================
   INIT
   ========================================== */
document.addEventListener("DOMContentLoaded", function() {
  initTheme();
  initLoader();
  initParticles();
  initTyping();
  initCounters();
  initReveal();
  initSkillBars();
  initTilt();
  initCursor();
  initMagnetic();
  initHeader();
  initSmoothScroll();
  initActiveNav();
  initParallax();
  initBackToTop();
  initScrambleHover();
  initSectionAnimations();
  initKeyboardNav();
  initClickRipple();

  document.getElementById("themeToggle").addEventListener("click", toggleTheme);

  var langBtns = document.querySelectorAll(".lang-btn");
  for (var b = 0; b < langBtns.length; b++) {
    (function(btn) {
      btn.addEventListener("click", function() {
        switchLanguage(btn.getAttribute("data-lang"));
      });
    })(langBtns[b]);
  }

  document.getElementById("hamburger").addEventListener("click", toggleMobileNav);
  var navAnchors = document.querySelectorAll(".nav-links a");
  for (var c = 0; c < navAnchors.length; c++) {
    navAnchors[c].addEventListener("click", closeMobileNav);
  }

  switchLanguage("ja");
});