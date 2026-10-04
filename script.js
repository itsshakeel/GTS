/* GTS Transport — interactions */
(function(){
  "use strict";

  /* ---------- Mobile menu ---------- */
  var hamburger = document.getElementById('hamburger');
  var navLinks = document.getElementById('navLinks');
  hamburger.addEventListener('click', function(){
    var open = navLinks.classList.toggle('open');
    hamburger.classList.toggle('active', open);
    hamburger.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  navLinks.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click', function(){
      navLinks.classList.remove('open');
      hamburger.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  /* ---------- Reveal on scroll ---------- */
  var revealEls = document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if(e.isIntersecting){ e.target.classList.add('visible'); io.unobserve(e.target); }
      });
    }, {threshold: .12});
    revealEls.forEach(function(el){ io.observe(el); });
  } else {
    revealEls.forEach(function(el){ el.classList.add('visible'); });
  }

  /* ---------- Animated counters ---------- */
  var counters = document.querySelectorAll('.stat-num[data-count]');
  var counted = false;
  function animateCounters(){
    if(counted) return; counted = true;
    counters.forEach(function(el){
      var target = parseInt(el.getAttribute('data-count'), 10);
      var dur = 1600, start = null;
      function tick(now){
        if(!start) start = now;
        var p = Math.min((now - start) / dur, 1);
        el.textContent = Math.floor(target * (1 - Math.pow(1 - p, 3)));
        if(p < 1) requestAnimationFrame(tick); else el.textContent = target;
      }
      requestAnimationFrame(tick);
    });
  }
  var statsSec = document.getElementById('stats');
  if('IntersectionObserver' in window){
    var sio = new IntersectionObserver(function(entries){
      entries.forEach(function(e){ if(e.isIntersecting){ animateCounters(); sio.disconnect(); } });
    }, {threshold: .3});
    sio.observe(statsSec);
  } else { animateCounters(); }

  /* ---------- Testimonial slider ---------- */
  var slides = document.querySelectorAll('#tSlides .t-slide');
  var dotsWrap = document.getElementById('tDots');
  var idx = 0, timer;
  slides.forEach(function(_, i){
    var d = document.createElement('button');
    d.setAttribute('aria-label', 'Show testimonial ' + (i + 1));
    if(i === 0) d.classList.add('active');
    d.addEventListener('click', function(){ show(i); restart(); });
    dotsWrap.appendChild(d);
  });
  var dots = dotsWrap.querySelectorAll('button');
  function show(i){
    idx = i;
    slides.forEach(function(s, j){ s.classList.toggle('active', j === i); });
    dots.forEach(function(d, j){ d.classList.toggle('active', j === i); });
  }
  function restart(){ clearInterval(timer); timer = setInterval(function(){ show((idx + 1) % slides.length); }, 5000); }
  restart();

  /* ---------- FAQ accordion ---------- */
  document.querySelectorAll('.faq-item').forEach(function(item){
    var q = item.querySelector('.faq-q');
    var a = item.querySelector('.faq-a');
    q.addEventListener('click', function(){
      var isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(function(o){
        o.classList.remove('open');
        o.querySelector('.faq-a').style.maxHeight = null;
      });
      if(!isOpen){
        item.classList.add('open');
        a.style.maxHeight = a.scrollHeight + 'px';
      }
    });
  });

  /* ---------- Booking form → WhatsApp ---------- */
  var form = document.getElementById('bookingForm');
  form.addEventListener('submit', function(e){
    e.preventDefault();
    var v = function(id){ return document.getElementById(id).value.trim(); };
    var msg =
      'Assalam-o-Alaikum GTS Transport!\n' +
      'Mujhe vehicle book karni hai:\n\n' +
      'Name: ' + v('bf-name') + '\n' +
      'Phone: ' + v('bf-phone') + '\n' +
      'Pickup: ' + v('bf-pickup') + '\n' +
      'Drop-off: ' + v('bf-drop') + '\n' +
      'Vehicle: ' + v('bf-vehicle') + '\n' +
      'Date: ' + v('bf-date') + '\n\n' +
      'Please confirm availability & rate. Shukriya!';
    window.open('https://wa.me/923001234567?text=' + encodeURIComponent(msg), '_blank');
  });

  /* ---------- Navbar shadow on scroll ---------- */
  var navbar = document.getElementById('navbar');
  window.addEventListener('scroll', function(){
    navbar.style.boxShadow = window.scrollY > 20 ? '0 6px 24px rgba(0,0,0,.5)' : 'none';
  }, {passive:true});
})();
