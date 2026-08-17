/* =========================================================
   DP DIVERSIFIED PLUS SHARED MAIN JS
   Generated from existing embedded <script> blocks in dp-final.zip.
   ========================================================= */



/* ---------- JS BLOCK 001 | extracted first from: DPRB-blogpage.html ---------- */
try {
/* =======================================================================
   ADHD-PROOF FUNCTIONAL JAVASCRIPT — SAFE EDIT ZONE
   =======================================================================
   JS 01 — Helpers
   JS 02 — Transparent header until hero ends, solid header after scroll
   JS 03 — Smooth anchors + mobile menu
   JS 04 — Lazy backgrounds
   JS 05 — Forms
   JS 06 — Product/service selector tabs
   JS 07 — What Sets Us Apart detail slider arrows/dots
   JS 08 — Diversified Plus Inspiration category filters
   JS 09 — Lightbox
   ======================================================================= */
(function(){
  'use strict';
  var $=function(s,r){return(r||document).querySelector(s)};
  var $$=function(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))};
  function txt(el){return(el?el.textContent:'').replace(/\s+/g,' ').trim()}
  function scrollToId(hash){var el=$(hash);if(!el)return false;el.scrollIntoView({behavior:'smooth',block:'start'});return true}

  /* JS 02 — Transparent header until hero ends */
  var header=$('.section-nav'), hero=$('.section-hero');
  function updateHeaderState(){
    if(!header||!hero){return}
    var headerH=header.offsetHeight||110;
    var heroBottom=hero.getBoundingClientRect().bottom;
    document.body.classList.toggle('dp-nav-scrolled', heroBottom <= headerH + 8 || window.scrollY > (hero.offsetHeight - headerH));
  }
  updateHeaderState();
  window.addEventListener('scroll', updateHeaderState, {passive:true});
  window.addEventListener('resize', updateHeaderState);

  /* JS 03 — Smooth anchors + mobile menu */
  document.addEventListener('click',function(e){
    var a=e.target.closest('a[href]');if(!a)return;var href=a.getAttribute('href')||'';
    if(href==='#mmenu'||href==='#mobile-menu'){e.preventDefault();document.body.classList.add('dp-menu-open');return}
    if(href==='#close'){e.preventDefault();document.body.classList.remove('dp-menu-open');return}
    if(href.charAt(0)==='#'&&href.indexOf('#thumbnails-')!==0){if(scrollToId(href)){e.preventDefault();document.body.classList.remove('dp-menu-open')}}
  });
  document.addEventListener('keydown',function(e){if(e.key==='Escape'){document.body.classList.remove('dp-menu-open');closeLightbox()}});

  /* JS 04 — Lazy backgrounds */
  $$('[data-bg]').forEach(function(el){var bg=el.getAttribute('data-bg');if(bg&&!el.style.backgroundImage){el.style.backgroundImage='url("'+bg+'")'}});

  /* JS 05 — Form fallback */
  $$('form').forEach(function(form){form.addEventListener('submit',function(e){e.preventDefault();var fields=$$('input,select,textarea',form).filter(function(f){var t=(f.type||'').toLowerCase();return!f.disabled&&t!=='hidden'&&t!=='submit'&&t!=='button'});var has=fields.some(function(f){return String(f.value||'').trim().length>0});var msg=$('.dp-form-message',form);if(!msg){msg=document.createElement('div');msg.className='dp-form-message';form.appendChild(msg)}if(!has){msg.classList.add('dp-error');msg.textContent='Please add at least one contact detail before submitting.';if(fields[0]){fields[0].focus()}return}msg.classList.remove('dp-error');msg.textContent='Preparing your email request…';var body=['New website consultation request',''];fields.forEach(function(f){var v=String(f.value||'').trim();if(v){body.push((f.placeholder||f.name||'Field')+': '+v)}});window.location.href='mailto:jack@diversifiedplus.com?subject='+encodeURIComponent('New project request')+'&body='+encodeURIComponent(body.join('\n'))})});

  /* JS 06 — Product/service selector tabs */
  $$('.nav-main-item[data-prodtabmain]').forEach(function(tab){tab.setAttribute('role','button');tab.setAttribute('tabindex','0');function go(){var key=tab.getAttribute('data-prodtabmain');$$('.nav-main-item[data-prodtabmain]').forEach(function(t){t.classList.remove('nav-active')});tab.classList.add('nav-active');$$('.prod-selector-tab-main').forEach(function(panel){panel.classList.toggle('tab-active',panel.classList.contains('prod-selector-tab-main-'+key))})}tab.addEventListener('click',go);tab.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();go()}})});
  $$('.nav-sub-item[data-prodtabsub]').forEach(function(tab){tab.setAttribute('role','button');tab.setAttribute('tabindex','0');function go(){var key=tab.getAttribute('data-prodtabsub');var parent=tab.closest('.prod-selector-tab-main');if(!parent)return;$$('.nav-sub-item[data-prodtabsub]',parent).forEach(function(t){t.classList.remove('nav-active')});tab.classList.add('nav-active');$$('.prod-selector-tab-sub',parent).forEach(function(panel){panel.classList.toggle('tab-active',panel.classList.contains('prod-selector-tab-sub-'+key))})}tab.addEventListener('click',go);tab.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();go()}})});

  /* JS 07 — What Sets Us Apart detail slider arrows/dots */
  var numberSlider=$('.layout-number-slider');
  if(numberSlider){
    var slides=$$('.slide,.item,.slider-item,.number-slide',numberSlider).filter(function(el){return !el.closest('.nav-wrapper')});
    if(!slides.length){slides=$$('.col,.content-wrapper,.text-wrapper',numberSlider).filter(function(el){return txt(el).length>60})}
    var navs=$$('a,button,.number,.dot,.slick-dot li',numberSlider).filter(function(el){return /(^|\s)(1|2|3|4|5)(\s|$)/.test(txt(el))||el.hasAttribute('data-slide')});
    var arrows=$$('.fa-long-arrow-left,.fa-long-arrow-right,.arrow-left,.arrow-right,.slick-prev,.slick-next',numberSlider).map(function(el){return el.closest('a,button')||el});
    var index=0;
    function render(i){if(!slides.length)return;index=(i+slides.length)%slides.length;slides.forEach(function(s,n){s.classList.toggle('dp-active',n===index);s.style.display=n===index?'':'none'});navs.forEach(function(n,k){n.classList.toggle('active',k===index);n.classList.toggle('dp-active',k===index)})}
    navs.forEach(function(n,k){n.addEventListener('click',function(e){e.preventDefault();render(k)})});
    arrows.forEach(function(a){a.addEventListener('click',function(e){e.preventDefault();var isPrev=(a.className||'').toString().indexOf('left')>-1||txt(a).indexOf('←')>-1;render(index+(isPrev?-1:1))})});
    render(0);
  }

  /* JS 08 — Diversified Plus Inspiration category filters */
  var gallery=$('.section-gallery');
  function normalizeCategory(raw){raw=(raw||'').toLowerCase();if(raw.indexOf('cabinet')>-1)return'cabinetry';if(raw.indexOf('bath')>-1)return'bathroom';if(raw.indexOf('window')>-1)return'windows';if(raw.indexOf('door')>-1)return'doors';if(raw.indexOf('remodel')>-1)return'remodeling';if(raw.indexOf('search')>-1||raw.indexOf('all')>-1)return'all';return raw.replace(/[^a-z]/g,'')||'all'}
  if(gallery){
    var items=$$('.custom-lightbox,.grid-item,.gallery-item',gallery);
    var empty=$('.dp-gallery-empty',gallery);
    $$('a[href^="#thumbnails-"], .gallery-nav a, #dropdown-gallery-menu a',gallery).forEach(function(tab){
      tab.addEventListener('click',function(e){
        e.preventDefault();
        var category=normalizeCategory(tab.getAttribute('href')||txt(tab));
        if(category.indexOf('thumbnails')>-1)category=normalizeCategory(category.replace('thumbnails-',''));
        if(category==='')category='all';
        $$('a[href^="#thumbnails-"], .gallery-nav a, #dropdown-gallery-menu a',gallery).forEach(function(a){a.classList.remove('active','show')});
        tab.classList.add('active','show');
        var shown=0;
        items.forEach(function(item){
          var hay=(item.getAttribute('data-product')+' '+item.getAttribute('data-caption')+' '+item.getAttribute('href')+' '+txt(item)).toLowerCase();
          var match=category==='all'||hay.indexOf(category)>-1||(category==='bathroom'&&hay.indexOf('bath')>-1)||(category==='cabinetry'&&hay.indexOf('cabinet')>-1)||(category==='remodeling'&&hay.indexOf('remodel')>-1);
          item.classList.toggle('dp-gallery-hidden',!match);
          if(match)shown++;
        });
        if(empty)empty.classList.toggle('is-visible',shown===0);
        var label=$('#dropdown-gallery-toggle span',gallery);if(label)label.textContent=txt(tab);
      });
    });
  }

  /* JS 09 — Lightbox */
  var lightbox=$('#dp-lightbox'),img=lightbox?$('.dp-lightbox__image',lightbox):null,cap=lightbox?$('.dp-lightbox__caption',lightbox):null;
  function openLightbox(src,caption){if(!lightbox||!src)return;img.src=src;cap.textContent=caption||'';lightbox.classList.add('is-open');lightbox.setAttribute('aria-hidden','false')}
  function closeLightbox(){if(!lightbox)return;lightbox.classList.remove('is-open');lightbox.setAttribute('aria-hidden','true')}
  window.closeLightbox=closeLightbox;
  $$('.custom-lightbox, a[href$=".jpg"], a[href$=".png"], a[href$=".jpeg"], a[href$=".webp"]').forEach(function(a){a.addEventListener('click',function(e){var href=a.getAttribute('href');if(!href||href.charAt(0)==='#')return;e.preventDefault();openLightbox(href,a.getAttribute('data-caption')||txt(a))})});
  if(lightbox){lightbox.addEventListener('click',function(e){if(e.target===lightbox)closeLightbox()});$('.dp-lightbox__close',lightbox).addEventListener('click',closeLightbox)}
})();
}
catch (error) {
  console.warn('DP Diversified Plus shared JS block 001 skipped:', error);
}


/* ---------- JS BLOCK 002 | extracted first from: DPRB-blogpage.html ---------- */
try {
/* =======================================================================
   FINAL USER PATCH JS — WORKING DETAIL SLIDER + LOCAL GALLERY FILTERS
   =======================================================================
   Search label: FINAL USER PATCH JS

   JS A — What Sets Us Apart detail slider
   JS B — Diversified Plus Inspiration local category filters
   ======================================================================= */
(function(){
  'use strict';
  var $ = function(sel, root){ return (root || document).querySelector(sel); };
  var $$ = function(sel, root){ return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };
  function cleanText(el){ return (el ? el.textContent : '').replace(/\s+/g,' ').trim(); }

  /* JS A — What Sets Us Apart detail slider */
  function initWhySlider(){
    var slider = $('.layout-number-slider');
    if(!slider) return;

    var track = $('.number-slider .slick-track', slider);
    var list = $('.number-slider .slick-list', slider);
    var slides = $$('.number-slider .slick-track > .slide', slider);
    if(!slides.length) slides = $$('.number-slider .slide', slider);
    if(!slides.length) return;

    if(track){
      track.style.width = '100%';
      track.style.transform = 'none';
      track.style.opacity = '1';
      track.style.display = 'block';
    }
    if(list){
      list.style.height = 'auto';
      list.style.overflow = 'visible';
    }

    var dots = $$('.slider-combo-nav .slick-dots li button', slider);
    var dotLis = $$('.slider-combo-nav .slick-dots li', slider);
    var prevs = $$('.slider-combo-nav .arrow-left, .slide-image .arrow-left', slider);
    var nexts = $$('.slider-combo-nav .arrow-right, .slide-image .arrow-right', slider);
    var index = 0;

    function showSlide(nextIndex){
      index = (nextIndex + slides.length) % slides.length;
      slides.forEach(function(slide, i){
        var active = i === index;
        slide.classList.toggle('dp-active', active);
        slide.classList.toggle('slick-current', active);
        slide.classList.toggle('slick-active', active);
        slide.setAttribute('aria-hidden', active ? 'false' : 'true');
        slide.style.display = active ? 'block' : 'none';
        slide.style.width = '100%';
        slide.style.left = 'auto';
        slide.style.top = 'auto';
        slide.style.position = 'relative';
        slide.style.opacity = '1';
        slide.style.zIndex = active ? '999' : '1';
        $$('a,button,input,select,textarea', slide).forEach(function(focusable){
          focusable.tabIndex = active ? 0 : -1;
        });
      });
      dots.forEach(function(dot, i){
        var active = i === index;
        dot.classList.toggle('dp-active', active);
        dot.setAttribute('aria-selected', active ? 'true' : 'false');
        dot.tabIndex = active ? 0 : -1;
      });
      dotLis.forEach(function(li, i){ li.classList.toggle('slick-active', i === index); });
    }

    dots.forEach(function(dot, i){
      dot.addEventListener('click', function(e){
        e.preventDefault();
        e.stopImmediatePropagation();
        showSlide(i);
      }, true);
    });
    prevs.forEach(function(arrow){
      arrow.addEventListener('click', function(e){
        e.preventDefault();
        e.stopImmediatePropagation();
        showSlide(index - 1);
      }, true);
    });
    nexts.forEach(function(arrow){
      arrow.addEventListener('click', function(e){
        e.preventDefault();
        e.stopImmediatePropagation();
        showSlide(index + 1);
      }, true);
    });
    showSlide(0);
  }

  /* JS B — Diversified Plus Inspiration local category filters */
  function initGalleryFilters(){
    var gallery = $('.section-gallery');
    if(!gallery) return;

    var filterLinks = $$('.gallery-nav a, #dropdown-gallery-menu a', gallery);
    var items = $$('.custom-lightbox', gallery);
    var empty = $('.dp-gallery-empty', gallery);
    if(!empty){
      empty = document.createElement('div');
      empty.className = 'dp-gallery-empty';
      empty.textContent = 'No saved images are available in this category.';
      var content = $('.gallery-content', gallery) || gallery;
      content.appendChild(empty);
    }

    function normalize(raw){
      raw = String(raw || '').toLowerCase();
      if(raw.indexOf('thumbnails-') > -1) raw = raw.split('thumbnails-').pop();
      if(raw.indexOf('cabinet') > -1) return 'cabinetry';
      if(raw.indexOf('bath') > -1) return 'bathroom';
      if(raw.indexOf('window') > -1) return 'windows';
      if(raw.indexOf('door') > -1) return 'doors';
      if(raw.indexOf('remodel') > -1) return 'remodeling';
      if(raw.indexOf('search') > -1 || raw.indexOf('all') > -1) return 'all';
      return raw.replace(/[^a-z]/g,'') || 'all';
    }
    function itemCategories(item){
      var hay = [
        item.getAttribute('data-product') || '',
        item.getAttribute('data-caption') || '',
        item.getAttribute('href') || '',
        cleanText(item)
      ].join(' ').toLowerCase();
      var cats = [];
      if(hay.indexOf('cabinet') > -1 || hay.indexOf('kitchen') > -1 || hay.indexOf('reface') > -1) cats.push('cabinetry');
      if(hay.indexOf('bath') > -1 || hay.indexOf('vanity') > -1 || hay.indexOf('shower') > -1 || hay.indexOf('tub') > -1) cats.push('bathroom');
      if(hay.indexOf('window') > -1) cats.push('windows');
      if(hay.indexOf('door') > -1) cats.push('doors');
      if(hay.indexOf('remodel') > -1 || hay.indexOf('general') > -1) cats.push('remodeling');
      return cats.length ? cats : ['all'];
    }
    function getItemShell(item){
      var parent = item.parentElement;
      if(parent && /(^|\s)col-/.test(parent.className || '')) return parent;
      return item;
    }
    function applyFilter(category, activeLink){
      category = normalize(category);
      var shown = 0;
      filterLinks.forEach(function(link){
        var linkCat = normalize(link.getAttribute('data-gallery-filter') || link.getAttribute('href') || cleanText(link));
        var isActive = link === activeLink || linkCat === category;
        link.classList.toggle('active', isActive);
        link.classList.toggle('show', isActive);
        link.classList.toggle('dp-filter-active', isActive);
        if(link.getAttribute('href') && link.getAttribute('href').indexOf('http') === 0){
          link.setAttribute('href', '#thumbnails-' + (category === 'all' ? 'all' : linkCat));
        }
      });
      items.forEach(function(item){
        var cats = itemCategories(item);
        var match = category === 'all' || cats.indexOf(category) > -1;
        var shell = getItemShell(item);
        item.classList.toggle('dp-gallery-hidden', !match);
        if(shell !== item) shell.classList.toggle('dp-gallery-parent-hidden', !match);
        item.style.display = match ? '' : 'none';
        if(shell !== item) shell.style.display = match ? '' : 'none';
        if(match) shown++;
      });
      empty.classList.toggle('is-visible', shown === 0);
      var label = $('#dropdown-gallery-toggle span', gallery);
      if(label && activeLink) label.textContent = cleanText(activeLink);
    }

    filterLinks.forEach(function(link){
      var cat = normalize(link.getAttribute('data-gallery-filter') || link.getAttribute('href') || cleanText(link));
      link.setAttribute('href', '#thumbnails-' + (cat === 'windows' ? 'window' : cat === 'doors' ? 'door' : cat));
      link.setAttribute('data-gallery-filter', cat);
      link.addEventListener('click', function(e){
        e.preventDefault();
        e.stopImmediatePropagation();
        applyFilter(cat, link);
      }, true);
    });
    applyFilter('all', filterLinks.find(function(link){ return normalize(cleanText(link)) === 'all' || normalize(cleanText(link)) === 'search'; }) || filterLinks[0]);
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', function(){ initWhySlider(); initGalleryFilters(); });
  }else{
    initWhySlider();
    initGalleryFilters();
  }
})();
}
catch (error) {
  console.warn('DP Diversified Plus shared JS block 002 skipped:', error);
}


/* ---------- JS BLOCK 003 | extracted first from: DPRB-blogpage.html ---------- */
try {
/* ============================================================================
   FINAL USER PATCH 6 JS — HERO QUOTE FORM MAILTO SUPPORT
   ============================================================================ */
(function(){
  var form = document.querySelector('[data-hero-quote-form]');
  if(!form){return;}
  form.addEventListener('submit', function(event){
    event.preventDefault();
    if(!form.checkValidity()){
      form.reportValidity();
      return;
    }
    var data = new FormData(form);
    var message = document.querySelector('[data-hero-form-message]');
    if(message){message.textContent = 'Preparing your request email...';}
    var lines = [
      'New quote request from hero form',
      '',
      'Home or Business: ' + (data.get('home_business') || ''),
      'Project Type: ' + (data.get('project_type') || ''),
      'Project Size: ' + (data.get('project_size') || ''),
      'Own/Rent: ' + (data.get('own_rent') || ''),
      'Email: ' + (data.get('email') || ''),
      'Phone: ' + (data.get('phone') || ''),
      'System of Interest: ' + (data.get('interest') || ''),
      '',
      'Project Details:',
      data.get('message') || ''
    ];
    window.location.href = 'mailto:jack@diversifiedplus.com?subject=' + encodeURIComponent('New Quote Request') + '&body=' + encodeURIComponent(lines.join('\n'));
  });
})();
}
catch (error) {
  console.warn('DP Diversified Plus shared JS block 003 skipped:', error);
}


/* ---------- JS BLOCK 004 | extracted first from: DPRB-blogpage.html ---------- */
try {
/* ============================================================================
   FINAL USER PATCH 7 JS — HERO QUOTE FORM FIELD-ONLY MAILTO
   ============================================================================ */
(function(){
  var form = document.querySelector('[data-hero-quote-form]');
  if(!form || form.dataset.positionFixedSubmit === 'true'){return;}
  form.dataset.positionFixedSubmit = 'true';
  form.addEventListener('submit', function(event){
    event.preventDefault();
    event.stopImmediatePropagation();
    if(!form.checkValidity()){
      form.reportValidity();
      return;
    }
    var data = new FormData(form);
    var message = document.querySelector('[data-hero-form-message]');
    if(message){message.textContent = 'Preparing your request email...';}
    var lines = [
      'New quote request from hero form',
      '',
      'Home or Business: ' + (data.get('home_business') || ''),
      'Industry: ' + (data.get('industry') || ''),
      'System Size: ' + (data.get('system_size') || ''),
      'Own/Rent: ' + (data.get('own_rent') || ''),
      'Email: ' + (data.get('email') || ''),
      'Phone: ' + (data.get('phone') || ''),
      'System of Interest: ' + (data.get('interest') || '')
    ];
    window.location.href = 'mailto:jack@diversifiedplus.com?subject=' + encodeURIComponent('New Quote Request') + '&body=' + encodeURIComponent(lines.join('\n'));
  }, true);
})();
}
catch (error) {
  console.warn('DP Diversified Plus shared JS block 004 skipped:', error);
}


/* ---------- JS BLOCK 005 | extracted first from: DPRB-blogpage.html ---------- */
try {
/* ================================================================================
   FINAL USER PATCH 8 JS — SERVICES MEGA MENU ACCESSIBILITY
   Search label: FINAL USER PATCH 8 JS

   Purpose:
   - Keeps Services mega menu hover behavior CSS-driven.
   - Adds keyboard accessibility and aria-expanded toggling.
   - Clicking Services still scrolls to the services/product area.
================================================================================ */
(function(){
  var parent = document.querySelector('#menu-main-nav .dp-services-mega-parent');
  if(!parent) return;
  var trigger = parent.querySelector('.dp-services-mega-trigger');
  function setOpen(open){ if(trigger) trigger.setAttribute('aria-expanded', open ? 'true' : 'false'); }
  parent.addEventListener('mouseenter', function(){ setOpen(true); });
  parent.addEventListener('mouseleave', function(){ setOpen(false); });
  parent.addEventListener('focusin', function(){ setOpen(true); });
  parent.addEventListener('focusout', function(e){ if(!parent.contains(e.relatedTarget)) setOpen(false); });
})();
}
catch (error) {
  console.warn('DP Diversified Plus shared JS block 005 skipped:', error);
}


/* ---------- JS BLOCK 006 | extracted first from: DPRB-blogpage.html ---------- */
try {
/* ================================================================================
   FINAL USER PATCH 9 JS — STABLE SERVICES MEGA MENU HOVER
   Keeps the smaller Diversified Plus-themed mega menu open while moving from the Services
   trigger into the mega menu panel.
================================================================================ */
(function(){
  var parent=document.querySelector('#menu-main-nav > li.dp-services-mega-parent');
  if(!parent) return;
  var trigger=parent.querySelector('.dp-services-mega-trigger');
  var menu=parent.querySelector('.dp-services-mega-menu');
  var closeTimer=null;
  function open(){
    window.clearTimeout(closeTimer);
    parent.classList.add('dp-mega-open');
    if(trigger) trigger.setAttribute('aria-expanded','true');
  }
  function closeSoon(){
    window.clearTimeout(closeTimer);
    closeTimer=window.setTimeout(function(){
      parent.classList.remove('dp-mega-open');
      if(trigger) trigger.setAttribute('aria-expanded','false');
    },180);
  }
  parent.addEventListener('mouseenter',open);
  parent.addEventListener('mouseleave',closeSoon);
  if(menu){
    menu.addEventListener('mouseenter',open);
    menu.addEventListener('mouseleave',closeSoon);
  }
  if(trigger){
    trigger.addEventListener('focus',open);
    trigger.addEventListener('click',function(e){
      if(window.innerWidth>=1200){
        e.preventDefault();
        parent.classList.toggle('dp-mega-open');
        trigger.setAttribute('aria-expanded', parent.classList.contains('dp-mega-open') ? 'true' : 'false');
      }
    });
  }
  document.addEventListener('keydown',function(e){
    if(e.key==='Escape'){
      parent.classList.remove('dp-mega-open');
      if(trigger) trigger.setAttribute('aria-expanded','false');
    }
  });
})();
}
catch (error) {
  console.warn('DP Diversified Plus shared JS block 006 skipped:', error);
}


/* ---------- JS BLOCK 007 | extracted first from: DPRB-blogpage.html ---------- */
try {
/* ================================================================================
   FINAL USER PATCH 11 JS — STABLE NEWS MEGA MENU HOVER
   Search label: FINAL USER PATCH 11 JS
   Purpose: prevents the News mega menu from collapsing while moving from the nav
   item into the mega-menu panel. This mirrors the stable hover behavior used on
   the Services mega menu.
   ================================================================================ */
(function(){
  var parent=document.querySelector('#menu-main-nav > li.dp-news-mega-parent');
  if(!parent) return;
  var trigger=parent.querySelector('.dp-news-mega-trigger');
  var menu=parent.querySelector('.dp-news-mega-menu');
  var closeTimer=null;

  function openMenu(){
    clearTimeout(closeTimer);
    parent.classList.add('dp-news-open');
    if(trigger) trigger.setAttribute('aria-expanded','true');
  }

  function closeMenu(){
    closeTimer=setTimeout(function(){
      parent.classList.remove('dp-news-open');
      if(trigger) trigger.setAttribute('aria-expanded','false');
    }, 180);
  }

  parent.addEventListener('mouseenter', openMenu);
  parent.addEventListener('mouseleave', closeMenu);
  if(menu){
    menu.addEventListener('mouseenter', openMenu);
    menu.addEventListener('mouseleave', closeMenu);
  }
  if(trigger){
    trigger.addEventListener('focus', openMenu);
    trigger.addEventListener('click', function(e){
      e.preventDefault();
      if(parent.classList.contains('dp-news-open')){
        parent.classList.remove('dp-news-open');
        trigger.setAttribute('aria-expanded','false');
      }else{
        openMenu();
      }
    });
  }
  document.addEventListener('keydown', function(e){
    if(e.key==='Escape'){
      parent.classList.remove('dp-news-open');
      if(trigger) trigger.setAttribute('aria-expanded','false');
    }
  });
})();
}
catch (error) {
  console.warn('DP Diversified Plus shared JS block 007 skipped:', error);
}


/* ---------- JS BLOCK 008 | extracted first from: DPRB-blogpage.html ---------- */
try {
/* ============================================================================
   FINAL USER PATCH 12 JS — STABLE CENTERED MEGA MENU HOVER
   Keeps Services/News mega menus open while moving from nav item into menu.
============================================================================ */
(function(){
  function setupMega(parentSelector, menuSelector){
    var parent=document.querySelector(parentSelector);
    if(!parent) return;
    var menu=parent.querySelector(menuSelector);
    if(!menu) return;
    var timer=null;
    function open(){ clearTimeout(timer); parent.classList.add('dp-mega-open'); }
    function close(){ clearTimeout(timer); timer=setTimeout(function(){ parent.classList.remove('dp-mega-open'); }, 220); }
    parent.addEventListener('mouseenter', open);
    parent.addEventListener('mouseleave', close);
    menu.addEventListener('mouseenter', open);
    menu.addEventListener('mouseleave', close);
    parent.addEventListener('focusin', open);
    parent.addEventListener('focusout', close);
  }
  setupMega('#menu-main-nav > li.dp-services-mega-parent', '.dp-services-mega-menu');
  setupMega('#menu-main-nav > li.dp-news-mega-parent', '.dp-news-mega-menu');
})();
}
catch (error) {
  console.warn('DP Diversified Plus shared JS block 008 skipped:', error);
}


/* ---------- JS BLOCK 009 | extracted first from: DPRB-blogpage.html ---------- */
try {
/* ======================================================================
   FINAL USER PATCH 16 JS — BEFORE/AFTER + WHAT SETS US APART SLIDER FIX
   ======================================================================
   - Enables the draggable before/after controls.
   - Rebuilds the What Sets Us Apart detail slider without Slick dependency.
   - Fixes arrow and dot navigation after removing plugin JS.
====================================================================== */
(function(){
  'use strict';
  var $ = function(s,r){ return (r||document).querySelector(s); };
  var $$ = function(s,r){ return Array.prototype.slice.call((r||document).querySelectorAll(s)); };

  function initBeforeAfter(){
    $$('[data-before-after]').forEach(function(slider){
      var input = $('.dp-ba-range', slider);
      if(!input || slider.dataset.dpReady === 'true') return;
      slider.dataset.dpReady = 'true';
      function update(){ slider.style.setProperty('--dp-ba-pos', input.value + '%'); }
      input.addEventListener('input', update);
      input.addEventListener('change', update);
      update();
    });
  }

  function initWhatSetsUsApart(){
    var root = $('.layout-number-slider');
    if(!root || root.dataset.dpSliderReady === 'true') return;
    root.dataset.dpSliderReady = 'true';

    var track = $('.number-slider .slick-track', root) || $('.number-slider', root);
    var slides = $$('.number-slider .slick-track > .slide', root);
    if(!slides.length) slides = $$('.number-slider .slide', root);
    if(!slides.length) return;

    var dots = $$('.slick-dots li', root);
    var buttons = $$('.slick-dots button', root);
    var index = Math.max(0, slides.findIndex(function(slide){ return slide.classList.contains('slick-current') || slide.classList.contains('dp-active'); }));

    if(track){
      track.style.width = '100%';
      track.style.transform = 'none';
      track.style.opacity = '1';
    }

    function render(next){
      index = (next + slides.length) % slides.length;
      slides.forEach(function(slide, i){
        var active = i === index;
        slide.classList.toggle('dp-active', active);
        slide.classList.toggle('slick-current', active);
        slide.classList.toggle('slick-active', active);
        slide.setAttribute('aria-hidden', active ? 'false' : 'true');
        slide.style.display = active ? 'block' : 'none';
        slide.style.opacity = active ? '1' : '0';
        slide.style.left = '0px';
        slide.style.top = '0px';
        slide.style.position = 'relative';
        slide.style.zIndex = active ? '999' : '1';
        slide.style.width = '100%';
      });
      dots.forEach(function(dot, i){ dot.classList.toggle('slick-active', i === index); });
      buttons.forEach(function(btn, i){
        btn.classList.toggle('dp-active', i === index);
        btn.setAttribute('aria-selected', i === index ? 'true' : 'false');
        btn.setAttribute('tabindex', i === index ? '0' : '-1');
      });
      initBeforeAfter();
    }

    $$('.arrow-left', root).forEach(function(btn){
      btn.setAttribute('role','button');
      btn.setAttribute('tabindex','0');
      btn.addEventListener('click', function(e){ e.preventDefault(); render(index - 1); });
      btn.addEventListener('keydown', function(e){ if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); render(index - 1); } });
    });
    $$('.arrow-right', root).forEach(function(btn){
      btn.setAttribute('role','button');
      btn.setAttribute('tabindex','0');
      btn.addEventListener('click', function(e){ e.preventDefault(); render(index + 1); });
      btn.addEventListener('keydown', function(e){ if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); render(index + 1); } });
    });
    buttons.forEach(function(btn, i){
      btn.addEventListener('click', function(e){ e.preventDefault(); render(i); });
    });

    render(index);
  }

  document.addEventListener('DOMContentLoaded', function(){
    initBeforeAfter();
    initWhatSetsUsApart();
  });
  initBeforeAfter();
  initWhatSetsUsApart();
})();
}
catch (error) {
  console.warn('DP Diversified Plus shared JS block 009 skipped:', error);
}


/* ---------- JS BLOCK 010 | extracted first from: DPRB-blogpage.html ---------- */
try {
/* ======================================================================
   FINAL USER PATCH 17 JS — SCHEDULE CTA + BEFORE/AFTER + GALLERY FILTERS
   ======================================================================
   01. Keeps Schedule an Appointment text visible.
   02. Makes before/after sliders draggable and visible.
   03. Fixes What Sets Us Apart arrows/dots.
   04. Makes Diversified Plus Inspiration filters categorize images locally.
====================================================================== */
(function(){
  'use strict';
  var $ = function(s,r){return (r||document).querySelector(s);};
  var $$ = function(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s));};

  function restoreScheduleCTA(){
    var ctas = $$('.section-nav .cta-wrapper a, .section-nav .appointment a, .section-nav .appointment, .dp-restored-schedule-wrapper a');
    ctas.forEach(function(cta){
      if(!/schedule an appointment/i.test(cta.textContent || '')) cta.textContent = '914.879.0442';
      cta.setAttribute('href', 'tel:9148790442');
      cta.style.color = '#FFFFFF';
      cta.style.visibility = 'visible';
      cta.style.opacity = '1';
    });
  }

  function initBeforeAfter(){
    $$('[data-before-after], .dp-before-after-slider').forEach(function(slider){
      if(!slider.hasAttribute('data-before-after')) slider.setAttribute('data-before-after','true');
      var input = $('.dp-ba-range', slider);
      if(!input){
        input = document.createElement('input');
        input.className = 'dp-ba-range';
        input.type = 'range';
        input.min = '0';
        input.max = '100';
        input.value = '50';
        input.setAttribute('aria-label','Drag to compare before and after image');
        slider.appendChild(input);
      }
      if(!$('.dp-ba-before', slider)){
        var before = document.createElement('div'); before.className = 'dp-ba-image dp-ba-before'; slider.insertBefore(before, slider.firstChild);
      }
      if(!$('.dp-ba-after', slider)){
        var after = document.createElement('div'); after.className = 'dp-ba-image dp-ba-after'; slider.insertBefore(after, slider.children[1] || null);
      }
      if(!$('.dp-ba-divider', slider)){
        var divider = document.createElement('div'); divider.className = 'dp-ba-divider'; divider.innerHTML = '<span>↔</span>'; slider.appendChild(divider);
      }
      function update(){ slider.style.setProperty('--dp-ba-pos', input.value + '%'); }
      input.removeEventListener('input', update);
      input.addEventListener('input', update);
      input.addEventListener('change', update);
      update();
    });
  }

  function initWhatSetsSlider(){
    var root = $('.layout-number-slider');
    if(!root) return;
    var track = $('.slick-track', root) || $('.number-slider', root);
    var slides = $$('.slick-track > .slide', root);
    if(!slides.length) slides = $$('.number-slider .slide', root);
    if(!slides.length) return;
    var dots = $$('.slick-dots li, .slick-dots button', root);
    var index = slides.findIndex(function(slide){return slide.classList.contains('slick-current') || slide.classList.contains('slick-active') || slide.classList.contains('dp-active');});
    if(index < 0) index = 0;
    if(track){track.style.width='100%';track.style.transform='none';track.style.opacity='1';}

    slides.forEach(function(slide){
      var image = $('.slide-image', slide);
      if(image && !$('.dp-before-after-slider', image)){
        var slider = document.createElement('div');
        slider.className = 'dp-before-after-slider';
        slider.setAttribute('data-before-after','true');
        slider.style.setProperty('--dp-ba-pos','50%');
        slider.innerHTML = '<div class="dp-ba-image dp-ba-before"></div><div class="dp-ba-image dp-ba-after"></div><span class="dp-ba-label dp-ba-label-before">Before</span><span class="dp-ba-label dp-ba-label-after">After</span><div class="dp-ba-divider"><span>↔</span></div><input class="dp-ba-range" aria-label="Drag to compare before and after image" type="range" min="0" max="100" value="50">';
        image.insertBefore(slider, image.firstChild);
      }
    });

    function render(next){
      index = (next + slides.length) % slides.length;
      slides.forEach(function(slide,i){
        var on = i === index;
        slide.classList.toggle('dp-active', on);
        slide.classList.toggle('slick-current', on);
        slide.classList.toggle('slick-active', on);
        slide.setAttribute('aria-hidden', on ? 'false' : 'true');
        slide.style.display = on ? 'block' : 'none';
        slide.style.opacity = on ? '1' : '0';
        slide.style.position = 'relative';
        slide.style.left = '0px';
        slide.style.top = '0px';
        slide.style.width = '100%';
        slide.style.zIndex = on ? '999' : '1';
      });
      dots.forEach(function(dot,i){
        var dotIndex = i % slides.length;
        dot.classList.toggle('slick-active', dotIndex === index);
        dot.classList.toggle('dp-active', dotIndex === index);
      });
      initBeforeAfter();
    }

    $$('.arrow-left, .slick-prev, [data-slider-prev]', root).forEach(function(btn){btn.onclick = function(e){e.preventDefault();render(index-1);};});
    $$('.arrow-right, .slick-next, [data-slider-next]', root).forEach(function(btn){btn.onclick = function(e){e.preventDefault();render(index+1);};});
    $$('.slick-dots li, .slick-dots button', root).forEach(function(dot,i){dot.onclick = function(e){e.preventDefault();render(i % slides.length);};});
    render(index);
  }

  function initGalleryFilters(){
    var gallery = $('.section-gallery');
    if(!gallery) return;
    var items = $$('[data-gallery-category]', gallery);
    if(!items.length){
      items = $$('.custom-lightbox, a[href*="wp-content/uploads"]', gallery);
      items.forEach(function(item,i){item.setAttribute('data-gallery-category', i % 2 ? 'all bathroom remodeling' : 'all cabinetry remodeling');});
    }
    var empty = $('.dp-gallery-empty', gallery);
    if(!empty){
      empty = document.createElement('div');
      empty.className = 'dp-gallery-empty';
      empty.textContent = 'No saved images are available for this category yet. Choose another category.';
      var container = $('.gallery-content, .tab-content, .row', gallery) || gallery;
      container.appendChild(empty);
    }
    function filterGallery(filter){
      var shown = 0;
      items.forEach(function(item){
        var cats = (item.getAttribute('data-gallery-category') || 'all').toLowerCase();
        var show = filter === 'all' || cats.indexOf(filter) !== -1;
        item.classList.toggle('dp-gallery-hidden', !show);
        if(show) shown++;
      });
      $$('[data-gallery-filter]', gallery).forEach(function(link){
        link.classList.toggle('dp-gallery-active', (link.getAttribute('data-gallery-filter') || 'all') === filter);
      });
      empty.classList.toggle('is-visible', shown === 0);
    }
    $$('[data-gallery-filter]', gallery).forEach(function(link){
      link.onclick = function(e){e.preventDefault();filterGallery((link.getAttribute('data-gallery-filter') || 'all').toLowerCase());};
    });
    filterGallery('all');
  }

  function boot(){
    restoreScheduleCTA();
    initWhatSetsSlider();
    initBeforeAfter();
    initGalleryFilters();
  }
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
  window.addEventListener('load', boot);
})();
}
catch (error) {
  console.warn('DP Diversified Plus shared JS block 010 skipped:', error);
}


/* ---------- JS BLOCK 011 | extracted first from: DPRB-blogpage.html ---------- */
try {
(function(){
  function fixArrows(root){
    (root||document).querySelectorAll('.fa-long-arrow-left,.arrow-left,.slick-prev').forEach(function(el){
      el.setAttribute('aria-label','Previous');
      el.textContent='';
      el.insertAdjacentHTML('beforeend','<span class="dp-arrow-fallback" aria-hidden="true">←</span>');
    });
    (root||document).querySelectorAll('.fa-long-arrow-right,.arrow-right,.slick-next').forEach(function(el){
      el.setAttribute('aria-label','Next');
      el.textContent='';
      el.insertAdjacentHTML('beforeend','<span class="dp-arrow-fallback" aria-hidden="true">→</span>');
    });
  }
  if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',function(){fixArrows(document);});}
  else{fixArrows(document);}
})();
}
catch (error) {
  console.warn('DP Diversified Plus shared JS block 011 skipped:', error);
}


/* ---------- JS BLOCK 012 | extracted first from: DPRB-blogpage.html ---------- */
try {
(function(){
  'use strict';
  function $(s,r){return (r||document).querySelector(s)}
  function $$(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))}

  function setPhoneCTA(){
    $$('.section-nav .cta-wrapper a, .section-nav .appointment a, .section-nav .appointment, .dp-restored-schedule-wrapper a').forEach(function(cta){
      if(!cta) return;
      cta.textContent = '914.879.0442';
      cta.setAttribute('href','tel:9148790442');
      cta.setAttribute('aria-label','Call 914.879.0442');
      cta.style.borderRadius = '0';
      cta.style.visibility = 'visible';
      cta.style.opacity = '1';
    });
  }

  function restoreKnownButtonText(){
    var fixes = [
      ['.dp-hero-secondary-btn-light','View Services'],
      ['.dp-hero-secondary-btn-dark','View Gallery →'],
      ['.dp-hero-submit','Submit Request ›'],
      ['.dp-services-mega-cta','View All Services →'],
      ['.dp-news-mega-cta','Read More →']
    ];
    fixes.forEach(function(pair){
      var el = $(pair[0]);
      if(el && !el.textContent.trim()) el.textContent = pair[1];
    });
    $$('.btn, .btn-primary, .btn-secondary, .btn-text, .dp-hero-secondary-btn').forEach(function(btn){
      btn.style.textIndent='0';
      btn.style.opacity='1';
      btn.style.visibility='visible';
      btn.style.borderRadius='0';
    });
  }

  function mobileHeroSafety(){
    var form = $('.section-hero .form-box');
    if(form && window.matchMedia('(max-width:991px)').matches){
      form.classList.remove('d-none');
      form.classList.remove('d-lg-block');
    }
  }

  function run(){setPhoneCTA();restoreKnownButtonText();mobileHeroSafety();}
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run);
  else run();
  window.addEventListener('resize', mobileHeroSafety);
  setTimeout(run,100);
  setTimeout(run,600);
})();
}
catch (error) {
  console.warn('DP Diversified Plus shared JS block 012 skipped:', error);
}


/* ---------- JS BLOCK 013 | extracted first from: DPRB-blogpage.html ---------- */
try {
(function(){
  'use strict';
  function $$(selector,root){return Array.prototype.slice.call((root||document).querySelectorAll(selector));}

  function normalizePhoneCTA(){
    $$('.section-nav .cta-wrapper').forEach(function(wrapper){
      var anchor = wrapper.querySelector('a');
      if(!anchor){
        anchor = document.createElement('a');
        wrapper.innerHTML='';
        wrapper.appendChild(anchor);
      }
      anchor.href='tel:9148790442';
      anchor.setAttribute('aria-label','Call 914.879.0442');
      anchor.classList.add('btn','btn-primary','dp-phone-cta-final');
      anchor.textContent='914.879.0442';
      wrapper.style.marginLeft='25px';
      wrapper.style.marginRight='25px';
      wrapper.style.borderRadius='0';
    });
  }

  function cleanArrow(el, symbol){
    if(!el) return;
    if(el.dataset.dpCleanArrow === 'true') return;
    el.dataset.dpCleanArrow = 'true';
    el.innerHTML = '<span class="dp-clean-arrow" aria-hidden="true">' + symbol + '</span>';
    el.setAttribute('aria-label', symbol === '←' ? 'Previous' : 'Next');
    el.style.textIndent='0';
    el.style.borderRadius='0';
  }

  function dedupeSliderArrows(){
    $$('.fa-long-arrow-left,.arrow-left,.slick-prev').forEach(function(el){ cleanArrow(el,'←'); });
    $$('.fa-long-arrow-right,.arrow-right,.slick-next').forEach(function(el){ cleanArrow(el,'→'); });
  }

  function restoreButtonText(){
    var map = [
      ['.dp-hero-secondary-btn-light','View Services'],
      ['.dp-hero-secondary-btn-dark','View Gallery →'],
      ['.dp-hero-submit','Submit Request'],
      ['.dp-services-mega-cta','View All Services →'],
      ['.dp-news-mega-cta','Read More →']
    ];
    map.forEach(function(pair){
      $$(pair[0]).forEach(function(el){ if(!el.textContent.trim()) el.textContent = pair[1]; });
    });
  }

  function runFinalPatch(){
    normalizePhoneCTA();
    dedupeSliderArrows();
    restoreButtonText();
  }

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', runFinalPatch);
  else runFinalPatch();
  window.addEventListener('load', runFinalPatch);
  setTimeout(runFinalPatch, 250);
  setTimeout(runFinalPatch, 900);
})();
}
catch (error) {
  console.warn('DP Diversified Plus shared JS block 013 skipped:', error);
}


/* ---------- JS BLOCK 014 | extracted first from: DPRB-blogpage.html ---------- */
try {
(function(){
  'use strict';
  function qs(sel,root){return (root||document).querySelector(sel);}
  function qsa(sel,root){return Array.prototype.slice.call((root||document).querySelectorAll(sel));}
  var header = qs('.section-nav');
  var hero = qs('.section-hero');
  var menu = qs('#mmenu');

  function updateHeaderState(){
    var y = window.pageYOffset || document.documentElement.scrollTop || 0;
    document.body.classList.toggle('dp-nav-scrolled', y > 6);
    if(header){ header.classList.toggle('dp-nav-scrolled', y > 6); }
  }

  function openMenu(){
    document.body.classList.add('dp-menu-open','dp-mobile-menu-open');
    if(menu){ menu.setAttribute('aria-hidden','false'); }
  }
  function closeMenu(){
    document.body.classList.remove('dp-menu-open','dp-mobile-menu-open');
    if(menu){ menu.setAttribute('aria-hidden','true'); }
  }
  function toggleMenu(){
    if(document.body.classList.contains('dp-menu-open') || document.body.classList.contains('dp-mobile-menu-open')) closeMenu();
    else openMenu();
  }

  function bindMobileMenu(){
    qsa('.menu-toggle,.nav-takeover-viewport-open,[href="#mmenu"],[href$="#mmenu"]').forEach(function(btn){
      if(btn.dataset.dpMobileBound === 'true') return;
      btn.dataset.dpMobileBound = 'true';
      btn.setAttribute('aria-controls','mmenu');
      btn.setAttribute('aria-label','Open mobile menu');
      btn.addEventListener('click',function(e){e.preventDefault(); toggleMenu();});
    });

    qsa('#mmenu a').forEach(function(a){
      if(a.dataset.dpCloseBound === 'true') return;
      a.dataset.dpCloseBound = 'true';
      a.addEventListener('click',function(){ closeMenu(); });
    });

    document.addEventListener('click',function(e){
      if(!(document.body.classList.contains('dp-menu-open') || document.body.classList.contains('dp-mobile-menu-open'))) return;
      if(e.target.closest('#mmenu') || e.target.closest('.menu-toggle') || e.target.closest('.nav-takeover-viewport-open')) return;
      closeMenu();
    });

    document.addEventListener('keydown',function(e){
      if(e.key === 'Escape') closeMenu();
    });
  }

  function init(){
    updateHeaderState();
    bindMobileMenu();
  }

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded',init);
  else init();
  window.addEventListener('scroll',updateHeaderState,{passive:true});
  window.addEventListener('resize',updateHeaderState);
})();
}
catch (error) {
  console.warn('DP Diversified Plus shared JS block 014 skipped:', error);
}


/* ---------- JS BLOCK 015 | extracted first from: DPRB-blogpage.html ---------- */
try {
(function(){
  'use strict';
  var doc=document;
  function qs(sel,root){return (root||doc).querySelector(sel);}
  function qsa(sel,root){return Array.prototype.slice.call((root||doc).querySelectorAll(sel));}
  var header=qs('.section-nav');
  var menu=qs('#mmenu');

  function setScrolledState(){
    var y=window.pageYOffset||doc.documentElement.scrollTop||0;
    var on=y>8;
    doc.documentElement.classList.toggle('dp-force-scrolled',on);
    doc.body.classList.toggle('dp-nav-scrolled',on);
    if(header){header.classList.toggle('dp-nav-scrolled',on);}
  }

  function openMenu(){
    doc.body.classList.add('dp-mobile-menu-open','dp-menu-open');
    if(menu){menu.setAttribute('aria-hidden','false');}
    var btn=qs('.section-nav .hamburger-wrapper .menu-toggle, .section-nav .hamburger-wrapper .dp-mobile-menu-button');
    if(btn){btn.setAttribute('aria-expanded','true');}
  }
  function closeMenu(){
    doc.body.classList.remove('dp-mobile-menu-open','dp-menu-open');
    if(menu){menu.setAttribute('aria-hidden','true');}
    var btn=qs('.section-nav .hamburger-wrapper .menu-toggle, .section-nav .hamburger-wrapper .dp-mobile-menu-button');
    if(btn){btn.setAttribute('aria-expanded','false');}
  }
  function toggleMenu(e){
    if(e){e.preventDefault();e.stopPropagation();}
    if(doc.body.classList.contains('dp-mobile-menu-open')||doc.body.classList.contains('dp-menu-open')) closeMenu();
    else openMenu();
  }

  function normalizeHamburger(){
    var wrap=qs('.section-nav .hamburger-wrapper');
    if(!wrap) return;

    /* Remove visual/functional duplicate triggers and keep one primary menu button. */
    qsa('.nav-takeover-viewport-open',wrap).forEach(function(el){el.remove();});
    var primary=qs('.menu-toggle',wrap);
    if(!primary){
      primary=doc.createElement('button');
      primary.type='button';
      primary.className='menu-toggle dp-mobile-menu-button';
      primary.innerHTML='<b></b><b></b><b></b>';
      wrap.appendChild(primary);
    }
    /* Replace with a clone to remove older duplicate click handlers. */
    var clean=primary.cloneNode(true);
    clean.classList.add('menu-toggle');
    clean.classList.add('dp-mobile-menu-button');
    clean.setAttribute('href','#mmenu');
    clean.setAttribute('role','button');
    clean.setAttribute('aria-controls','mmenu');
    clean.setAttribute('aria-label','Open mobile menu');
    clean.setAttribute('aria-expanded','false');
    primary.parentNode.replaceChild(clean,primary);
    clean.addEventListener('click',toggleMenu);
  }

  function bindDrawer(){
    if(menu){menu.setAttribute('aria-hidden','true');}
    qsa('#mmenu a').forEach(function(a){
      if(a.dataset.dpFinalClose==='true') return;
      a.dataset.dpFinalClose='true';
      a.addEventListener('click',function(){closeMenu();});
    });
    doc.addEventListener('click',function(e){
      if(!(doc.body.classList.contains('dp-mobile-menu-open')||doc.body.classList.contains('dp-menu-open'))) return;
      if(e.target.closest('#mmenu')||e.target.closest('.section-nav .hamburger-wrapper')) return;
      closeMenu();
    });
    doc.addEventListener('keydown',function(e){if(e.key==='Escape') closeMenu();});
  }

  function init(){
    setScrolledState();
    normalizeHamburger();
    bindDrawer();
  }
  if(doc.readyState==='loading') doc.addEventListener('DOMContentLoaded',init);
  else init();
  window.addEventListener('scroll',setScrolledState,{passive:true});
  window.addEventListener('resize',setScrolledState);
  setTimeout(init,300);
})();
}
catch (error) {
  console.warn('DP Diversified Plus shared JS block 015 skipped:', error);
}


/* ---------- JS BLOCK 016 | extracted first from: DPRB-blogpage.html ---------- */
try {
(function(){
  'use strict';
  var doc=document;
  function $$(sel,root){return Array.prototype.slice.call((root||doc).querySelectorAll(sel));}
  function setScrolledState(){
    if(window.scrollY>10){doc.body.classList.add('dp-nav-scrolled');}
    else{doc.body.classList.remove('dp-nav-scrolled');}
  }
  function cleanHeaderNotes(){
    $$('.section-nav .dp-visible-note,.section-nav [data-patch-note],#wm-ipp-print,.wm-ipp-print').forEach(function(el){el.remove();});
    $$('.nav-takeover-viewport-open').forEach(function(el){el.remove();});
  }
  function normalizePhoneCTA(){
    $$('.section-nav .cta-wrapper a,.section-nav .appointment a,.dp-restored-schedule-wrapper a').forEach(function(a){
      a.href='tel:9148790442';
      a.setAttribute('aria-label','Call 914.879.0442');
      a.textContent='914.879.0442';
      a.classList.add('dp-phone-cta-final');
    });
  }
  function normalizeArrows(){
    $$('.slick-arrow,.arrow-left,.arrow-right,.slick-prev,.slick-next,i.fa-long-arrow-left,i.fa-long-arrow-right,i.fa-arrow-left,i.fa-arrow-right,i.fa-angle-left,i.fa-angle-right').forEach(function(el){
      var isLeft=el.className && /left|prev/i.test(String(el.className));
      var symbol=isLeft?'←':'→';
      el.innerHTML='';
      el.textContent=symbol;
      el.setAttribute('aria-label',isLeft?'Previous':'Next');
      el.style.fontFamily='Arial, Helvetica, sans-serif';
      el.style.textIndent='0';
    });
  }
  function setupMobileMenu(){
    var toggle=doc.querySelector('.section-nav .hamburger-wrapper .menu-toggle');
    var menu=doc.getElementById('mmenu');
    if(!toggle || !menu) return;
    toggle.setAttribute('href','#mmenu');
    toggle.setAttribute('role','button');
    toggle.setAttribute('aria-controls','mmenu');
    toggle.setAttribute('aria-expanded',doc.body.classList.contains('dp-mobile-menu-open')?'true':'false');
    if(toggle.dataset.dpMenuReady==='true') return;
    toggle.dataset.dpMenuReady='true';
    toggle.addEventListener('click',function(e){
      e.preventDefault();
      var open=!doc.body.classList.contains('dp-mobile-menu-open');
      doc.body.classList.toggle('dp-mobile-menu-open',open);
      toggle.setAttribute('aria-expanded',open?'true':'false');
    });
    doc.addEventListener('click',function(e){
      if(!doc.body.classList.contains('dp-mobile-menu-open')) return;
      if(menu.contains(e.target) || toggle.contains(e.target)) return;
      doc.body.classList.remove('dp-mobile-menu-open');
      toggle.setAttribute('aria-expanded','false');
    });
    doc.addEventListener('keydown',function(e){
      if(e.key==='Escape'){
        doc.body.classList.remove('dp-mobile-menu-open');
        toggle.setAttribute('aria-expanded','false');
      }
    });
    $$('#mmenu a').forEach(function(a){
      a.addEventListener('click',function(){
        doc.body.classList.remove('dp-mobile-menu-open');
        toggle.setAttribute('aria-expanded','false');
      });
    });
  }
  function init(){
    cleanHeaderNotes();
    normalizePhoneCTA();
    normalizeArrows();
    setupMobileMenu();
    setScrolledState();
  }
  if(doc.readyState==='loading') doc.addEventListener('DOMContentLoaded',init); else init();
  window.addEventListener('scroll',setScrolledState,{passive:true});
  window.addEventListener('resize',setScrolledState);
})();
}
catch (error) {
  console.warn('DP Diversified Plus shared JS block 016 skipped:', error);
}


/* ---------- JS BLOCK 017 | extracted first from: DPRB-blogpage.html ---------- */
try {
(function(){
  'use strict';

  var MOBILE_MAX = 1199;
  var body = document.body;

  function qs(sel, root){ return (root || document).querySelector(sel); }
  function qsa(sel, root){ return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function isMobile(){ return window.matchMedia('(max-width:' + MOBILE_MAX + 'px)').matches; }

  function cleanText(text){ return (text || '').replace(/\s+/g, ' ').trim(); }

  function collectLinks(){
    var seen = {};
    var links = [];
    var selectors = [
      '#menu-main-nav > li > a',
      '#menu-top-nav > li > a',
      '#mmenu .mm-listview > li > a.mm-listitem__text'
    ];

    selectors.forEach(function(selector){
      qsa(selector).forEach(function(a){
        var label = cleanText(a.textContent);
        var href = a.getAttribute('href') || '#';
        if(!label || label.toLowerCase() === 'close menu' || label.toLowerCase() === 'menu') return;
        var key = label.toLowerCase();
        if(seen[key]) return;
        seen[key] = true;
        links.push({ label: label, href: href });
      });
    });

    if(!links.length){
      links = [
        {label:'Carpentry / Custom Millwork', href:'#'},
        {label:'Bathroom', href:'#'},
        {label:'Windows', href:'#'},
        {label:'Doors', href:'#'},
        {label:'Inspiration Gallery', href:'#thumbnails-all'},
        {label:'Customer Support', href:'#'}
      ];
    }
    return links;
  }

  function buildDrawer(){
    qsa('.rb-mobile-overlay,.rb-mobile-drawer').forEach(function(el){ el.remove(); });

    var overlay = document.createElement('div');
    overlay.className = 'rb-mobile-overlay';
    overlay.setAttribute('aria-hidden', 'true');

    var drawer = document.createElement('aside');
    drawer.className = 'rb-mobile-drawer';
    drawer.setAttribute('aria-hidden', 'true');
    drawer.setAttribute('aria-label', 'Mobile menu');

    var linksHtml = collectLinks().map(function(item){
      return '<a href="' + item.href.replace(/"/g, '&quot;') + '">' + item.label + '</a>';
    }).join('');

    drawer.innerHTML = '' +
      '<div class="rb-mobile-drawer__head">' +
        '<span class="rb-mobile-drawer__brand">Diversified Plus</span>' +
        '<button class="rb-mobile-drawer__close" type="button" aria-label="Close mobile menu">×</button>' +
      '</div>' +
      '<nav class="rb-mobile-drawer__nav" aria-label="Mobile navigation">' + linksHtml + '</nav>' +
      '<div class="rb-mobile-drawer__cta"><a href="tel:9148790442">Call 914.879.0442</a></div>';

    document.body.appendChild(overlay);
    document.body.appendChild(drawer);

    overlay.addEventListener('click', closeMenu);
    qs('.rb-mobile-drawer__close', drawer).addEventListener('click', closeMenu);
    qsa('a', drawer).forEach(function(a){ a.addEventListener('click', closeMenu); });
  }

  function ensureButton(){
    qsa('.rb-mobile-hamburger').forEach(function(el, index){ if(index > 0) el.remove(); });

    var header = qs('.section-nav .header-wrapper') || qs('.section-nav') || qs('header');
    if(!header) return;

    var button = qs('.rb-mobile-hamburger');
    if(!button){
      button = document.createElement('button');
      button.className = 'rb-mobile-hamburger';
      button.type = 'button';
      button.setAttribute('aria-label', 'Open mobile menu');
      button.setAttribute('aria-expanded', 'false');
      button.innerHTML = '<span></span><span></span><span></span>';
      header.appendChild(button);
    }

    button.onclick = function(event){
      event.preventDefault();
      if(body.classList.contains('rb-mobile-menu-open')) closeMenu();
      else openMenu();
    };
  }

  function openMenu(){
    if(!isMobile()) return;
    var drawer = qs('.rb-mobile-drawer');
    var button = qs('.rb-mobile-hamburger');
    if(!drawer) buildDrawer();
    body.classList.add('rb-mobile-menu-open');
    if(button){
      button.setAttribute('aria-expanded', 'true');
      button.setAttribute('aria-label', 'Close mobile menu');
    }
    drawer = qs('.rb-mobile-drawer');
    if(drawer){
      drawer.setAttribute('aria-hidden', 'false');
      var first = qs('a,button', drawer);
      if(first) setTimeout(function(){ first.focus({preventScroll:true}); }, 80);
    }
  }

  function closeMenu(){
    var drawer = qs('.rb-mobile-drawer');
    var button = qs('.rb-mobile-hamburger');
    body.classList.remove('rb-mobile-menu-open');
    if(button){
      button.setAttribute('aria-expanded', 'false');
      button.setAttribute('aria-label', 'Open mobile menu');
    }
    if(drawer) drawer.setAttribute('aria-hidden', 'true');
  }

  function init(){
    ensureButton();
    buildDrawer();
    closeMenu();
  }

  document.addEventListener('keydown', function(event){
    if(event.key === 'Escape') closeMenu();
  });

  window.addEventListener('resize', function(){
    if(!isMobile()) closeMenu();
  });

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
}
catch (error) {
  console.warn('DP Diversified Plus shared JS block 017 skipped:', error);
}


/* ---------- JS BLOCK 018 | extracted first from: DPRB-blogpage.html ---------- */
try {
(function(){
  'use strict';

  var MOBILE_MAX = 1199;
  var body = document.body;

  function qs(sel, root){ return (root || document).querySelector(sel); }
  function qsa(sel, root){ return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function isMobile(){ return window.matchMedia('(max-width:' + MOBILE_MAX + 'px)').matches; }

  function setScrolledState(){
    if(window.scrollY > 8) body.classList.add('dp-nav-scrolled');
    else body.classList.remove('dp-nav-scrolled');
  }

  function removeOldMobileArtifacts(){
    qsa('.rb-mobile-overlay,.rb-mobile-drawer').forEach(function(el){ el.remove(); });
    qsa('.rb-mobile-hamburger').forEach(function(el, index){ if(index > 0) el.remove(); });
    qsa('.section-nav .hamburger-wrapper,.section-nav .menu-toggle,.section-nav .nav-takeover-viewport-open').forEach(function(el){
      el.setAttribute('aria-hidden','true');
      el.style.display = 'none';
    });
  }

  function getHrefByText(text, fallback){
    var target = String(text || '').toLowerCase();
    var match = qsa('#menu-main-nav a,#menu-top-nav a').find(function(a){
      return (a.textContent || '').replace(/\s+/g,' ').trim().toLowerCase() === target;
    });
    return match ? (match.getAttribute('href') || fallback || '#') : (fallback || '#');
  }

  function drawerMarkup(){
    var menu = [
      {
        label:'Services',
        href:getHrefByText('Services','#services'),
        children:[
          ['Carpentry / Custom Millwork','#services'],
          ['Bathroom Remodeling','#services'],
          ['Windows','#services'],
          ['Doors','#services'],
          ['Full Home Remodeling','#services'],
          ['View All Services','#services']
        ]
      },
      {
        label:'Inspiration Gallery',
        href:'#thumbnails-all',
        children:[
          ['All Projects','#thumbnails-all'],
          ['Kitchen Inspiration','#thumbnails-kitchens'],
          ['Bathroom Inspiration','#thumbnails-bathrooms'],
          ['Cabinet Inspiration','#thumbnails-cabinets'],
          ['Window & Door Inspiration','#thumbnails-windows']
        ]
      },
      {
        label:'Company',
        href:getHrefByText('Company','#'),
        children:[
          ['About Diversified Plus','#'],
          ['Reviews','#'],
          ['Service Areas','#'],
          ['Financing','#']
        ]
      },
      {
        label:'News',
        href:getHrefByText('News','#news'),
        children:[
          ['Remodeling Ideas','#news'],
          ['Kitchen Tips','#news'],
          ['Bathroom Tips','#news'],
          ['Home Improvement Guides','#news']
        ]
      },
      { label:'Contact', href:getHrefByText('Contact','#contact') }
    ];

    function esc(v){ return String(v == null ? '' : v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }

    var nav = menu.map(function(item, index){
      if(item.children && item.children.length){
        var id = 'rb-mobile-submenu-' + index;
        return ''+
          '<div class="rb-mobile-item rb-has-submenu">'+
            '<button class="rb-mobile-submenu-toggle" type="button" aria-expanded="false" aria-controls="'+id+'">'+esc(item.label)+'</button>'+
            '<div class="rb-mobile-submenu" id="'+id+'" hidden>'+ 
              item.children.map(function(child){ return '<a href="'+esc(child[1])+'">'+esc(child[0])+'</a>'; }).join('')+
            '</div>'+
          '</div>';
      }
      return '<a class="rb-mobile-link" href="'+esc(item.href)+'">'+esc(item.label)+'</a>';
    }).join('');

    return ''+
      '<div class="rb-mobile-drawer__head">'+
        '<span class="rb-mobile-drawer__brand">Diversified Plus</span>'+
        '<button class="rb-mobile-drawer__close" type="button" aria-label="Close mobile menu">×</button>'+
      '</div>'+
      '<nav class="rb-mobile-drawer__nav" aria-label="Mobile navigation">'+nav+'</nav>'+
      '<div class="rb-mobile-drawer__cta"><a href="tel:9148790442">Call 914.879.0442</a></div>';
  }

  function buildDrawer(){
    removeOldMobileArtifacts();

    var overlay = document.createElement('div');
    overlay.className = 'rb-mobile-overlay';
    overlay.setAttribute('aria-hidden','true');

    var drawer = document.createElement('aside');
    drawer.className = 'rb-mobile-drawer';
    drawer.setAttribute('aria-hidden','true');
    drawer.setAttribute('aria-label','Mobile menu');
    drawer.innerHTML = drawerMarkup();

    document.body.appendChild(overlay);
    document.body.appendChild(drawer);

    overlay.addEventListener('click', closeMenu);
    qs('.rb-mobile-drawer__close', drawer).addEventListener('click', closeMenu);

    qsa('.rb-mobile-submenu-toggle', drawer).forEach(function(btn){
      btn.addEventListener('click', function(){
        var panel = document.getElementById(btn.getAttribute('aria-controls'));
        var willOpen = btn.getAttribute('aria-expanded') !== 'true';
        btn.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
        if(panel){
          panel.hidden = !willOpen;
          panel.classList.toggle('is-open', willOpen);
        }
      });
    });

    qsa('a', drawer).forEach(function(a){ a.addEventListener('click', closeMenu); });
  }

  function ensureButton(){
    var header = qs('.section-nav .header-wrapper') || qs('.section-nav');
    if(!header) return;

    qsa('.rb-mobile-hamburger').forEach(function(el){ el.remove(); });

    var button = document.createElement('button');
    button.className = 'rb-mobile-hamburger';
    button.type = 'button';
    button.setAttribute('aria-label','Open mobile menu');
    button.setAttribute('aria-expanded','false');
    button.innerHTML = '<span></span><span></span><span></span>';
    header.appendChild(button);

    button.addEventListener('click', function(event){
      event.preventDefault();
      if(body.classList.contains('rb-mobile-menu-open')) closeMenu();
      else openMenu();
    });
  }

  function openMenu(){
    if(!isMobile()) return;
    body.classList.add('rb-mobile-menu-open');
    var button = qs('.rb-mobile-hamburger');
    var drawer = qs('.rb-mobile-drawer');
    if(button){
      button.setAttribute('aria-expanded','true');
      button.setAttribute('aria-label','Close mobile menu');
    }
    if(drawer){
      drawer.setAttribute('aria-hidden','false');
      var first = qs('.rb-mobile-submenu-toggle,.rb-mobile-link,a,button', drawer);
      if(first) setTimeout(function(){ try{ first.focus({preventScroll:true}); } catch(e){ first.focus(); } }, 70);
    }
  }

  function closeMenu(){
    body.classList.remove('rb-mobile-menu-open');
    var button = qs('.rb-mobile-hamburger');
    var drawer = qs('.rb-mobile-drawer');
    if(button){
      button.setAttribute('aria-expanded','false');
      button.setAttribute('aria-label','Open mobile menu');
    }
    if(drawer) drawer.setAttribute('aria-hidden','true');
  }

  function init(){
    buildDrawer();
    ensureButton();
    closeMenu();
    setScrolledState();
  }

  document.addEventListener('keydown', function(event){ if(event.key === 'Escape') closeMenu(); });
  window.addEventListener('scroll', setScrolledState, {passive:true});
  window.addEventListener('resize', function(){ setScrolledState(); if(!isMobile()) closeMenu(); });

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
}
catch (error) {
  console.warn('DP Diversified Plus shared JS block 018 skipped:', error);
}


/* ---------- JS BLOCK 019 | extracted first from: DPRB-blogpage.html ---------- */
try {
(function(){
  'use strict';
  function ready(fn){ if(document.readyState === 'loading'){ document.addEventListener('DOMContentLoaded', fn); } else { fn(); } }
  ready(function(){
    var lightbox = document.getElementById('dp-lightbox');
    if(lightbox && !lightbox.classList.contains('is-open')){
      lightbox.setAttribute('aria-hidden','true');
      lightbox.style.display = 'none';
    }
    document.querySelectorAll('.section-gallery .d-none .custom-lightbox, .section-gallery .d-none a').forEach(function(item){
      item.setAttribute('aria-hidden','true');
      item.tabIndex = -1;
      item.style.display = 'none';
    });
    document.querySelectorAll('.section-nav .mobile-phone-wrapper, .section-hero .mobile-phone-wrapper').forEach(function(node){
      node.remove();
    });
    document.addEventListener('click', function(e){
      var close = e.target.closest('.dp-lightbox__close');
      var lb = document.getElementById('dp-lightbox');
      if(!lb) return;
      if(close || e.target === lb){
        setTimeout(function(){
          if(!lb.classList.contains('is-open')){
            lb.setAttribute('aria-hidden','true');
            lb.style.display = 'none';
          }
        }, 0);
      }
    });
    document.querySelectorAll('.section-gallery .custom-lightbox').forEach(function(anchor){
      anchor.addEventListener('click', function(){
        var lb = document.getElementById('dp-lightbox');
        if(lb){ lb.style.display = 'flex'; }
      });
    });
  });
})();
}
catch (error) {
  console.warn('DP Diversified Plus shared JS block 019 skipped:', error);
}


/* ---------- JS BLOCK 020 | extracted first from: DPRB-blogpage.html ---------- */
try {
(function(){
  'use strict';
  function ready(fn){ if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn); else fn(); }
  ready(function(){
    document.querySelectorAll('.section-gallery .custom-lightbox').forEach(function(item){
      var bg = item.getAttribute('data-bg') || item.getAttribute('data-src') || item.getAttribute('href');
      if(bg && bg.charAt(0) !== '#'){
        item.style.backgroundImage = 'url("' + bg.replace(/"/g, '%22') + '")';
      }
      var overlay = item.querySelector('.overlay');
      if(overlay){
        overlay.setAttribute('aria-hidden','true');
      }
    });
  });
})();
}
catch (error) {
  console.warn('DP Diversified Plus shared JS block 020 skipped:', error);
}


/* ---------- JS BLOCK 021 | extracted first from: DPRB-blogpage.html ---------- */
try {
(function(){
  'use strict';
  var PLACEHOLDER = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1400' height='900' viewBox='0 0 1400 900'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop stop-color='%23dfe4e7'/%3E%3Cstop offset='1' stop-color='%23b9c3ca'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1400' height='900' fill='url(%23g)'/%3E%3Cpath d='M95 735 430 390l215 210 150-145 510 280H95Z' fill='%23ffffff' fill-opacity='.34'/%3E%3Ccircle cx='1040' cy='245' r='78' fill='%23ffffff' fill-opacity='.35'/%3E%3Crect x='55' y='55' width='1290' height='790' fill='none' stroke='%230e3042' stroke-opacity='.18' stroke-width='12'/%3E%3Ctext x='700' y='790' text-anchor='middle' font-family='Arial,Helvetica,sans-serif' font-size='44' font-weight='700' letter-spacing='4' fill='%230e3042' fill-opacity='.55'%3EDIVERSIFIED PLUS PROJECT IMAGE%3C/text%3E%3C/svg%3E";
  function ready(fn){ if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn); else fn(); }
  function archiveUrl(url){
    if(!url || url.indexOf('data:') === 0 || url.indexOf('blob:') === 0 || url.indexOf('web.archive.org') > -1) return url;
    if(url.indexOf('https://diversifiedplus.com') === 0) return 'https://web.archive.org/web/20200920000245/' + url;
    return url;
  }
  function hasBg(el){
    var inline = (el.getAttribute('style') || '').toLowerCase();
    var computed = window.getComputedStyle ? window.getComputedStyle(el).backgroundImage : '';
    return (inline.indexOf('background-image') > -1 && inline.indexOf('none') === -1 && inline.indexOf('url()') === -1) || (computed && computed !== 'none');
  }
  function setBg(el, url){
    el.style.backgroundImage = 'url("' + String(url).replace(/"/g, '%22') + '")';
    el.style.backgroundSize = 'cover';
    el.style.backgroundPosition = 'center center';
    el.style.backgroundRepeat = 'no-repeat';
  }
  function applyPlaceholders(){
    var bgSelectors = [
      '.bg-image','.prod-selector-bg-image','.mega-offer','.beautiful-projects-slide',
      '.nav-slide','.slide[data-bg]','.slide-image','.photo','.thumb','.custom-lightbox',
      '.dp-services-mega-card-image','.dp-news-mega-image','.dp-before-after-slider .dp-ba-image',
      '[data-bg]','[data-background]','[data-src]'
    ].join(',');
    document.querySelectorAll(bgSelectors).forEach(function(el){
      var raw = el.getAttribute('data-bg') || el.getAttribute('data-background') || el.getAttribute('data-src') || el.getAttribute('href') || '';
      if(raw && raw.charAt(0) !== '#'){
        setBg(el, archiveUrl(raw));
      } else if(!hasBg(el)){
        el.setAttribute('data-rb-placeholder','true');
        setBg(el, PLACEHOLDER);
      }
    });
    document.querySelectorAll('img').forEach(function(img){
      var src = img.getAttribute('src') || img.getAttribute('data-src') || img.getAttribute('data-lazy-src') || '';
      if(!src || src === '#' || src.toLowerCase() === 'undefined'){
        img.setAttribute('src', PLACEHOLDER);
        img.setAttribute('data-rb-placeholder','true');
        if(!img.getAttribute('alt')) img.setAttribute('alt','Diversified Plus project image fallback');
      }
      img.addEventListener('error', function(){
        if(img.getAttribute('src') !== PLACEHOLDER){
          img.setAttribute('src', PLACEHOLDER);
          img.setAttribute('data-rb-placeholder','true');
        }
      }, {once:true});
    });
  }
  function repairMenuContrast(){
    document.querySelectorAll('.rb-mobile-drawer a,.rb-mobile-drawer button,.rb-mobile-submenu-toggle,.rb-mobile-submenu a,#mmenu a,#mmenu button').forEach(function(el){
      el.style.color = '#FFFFFF';
      el.style.opacity = '1';
      el.style.visibility = 'visible';
    });
    document.querySelectorAll('.dp-services-mega-card,.dp-news-mega-card,.dp-services-mega-item,.dp-news-mega-item').forEach(function(card){
      card.style.backgroundColor = '#FFFFFF';
      card.style.color = '#002949';
    });
  }
  ready(function(){
    applyPlaceholders();
    repairMenuContrast();
    setTimeout(applyPlaceholders, 400);
    setTimeout(repairMenuContrast, 600);
  });
})();
}
catch (error) {
  console.warn('DP Diversified Plus shared JS block 021 skipped:', error);
}


/* ---------- JS BLOCK 022 | extracted first from: DPRB-blogpage.html ---------- */
try {
/* ======================================================================
   FINAL USER PATCH 21 JS — WHY-CHOOSE CLEANUP / NO BEFORE-AFTER
   ======================================================================
   Purpose:
   1) Hard-removes the obsolete What Sets Us Apart section from the DOM.
   2) Removes any before/after slider UI that older patches may try to re-add.
   3) Forces the Why Choose image area to render as a normal static image.
   4) Preserves the slide/dot/arrow navigation for the Why Choose slider.
====================================================================== */
(function(){
  'use strict';

  function cleanWhyChoose(){
    var oldSection = document.getElementById('what-sets-us-apart');
    if(oldSection) oldSection.remove();

    document.querySelectorAll('#why-choose .slide-image').forEach(function(imageWrap){
      imageWrap.querySelectorAll('.dp-before-after-slider, .color-reveal').forEach(function(el){ el.remove(); });
      imageWrap.querySelectorAll('[data-before-after]').forEach(function(el){ el.removeAttribute('data-before-after'); });

      var bg = imageWrap.querySelector('.bg-image');
      if(bg){
        var src = bg.getAttribute('data-bg') || bg.getAttribute('data-src') || bg.getAttribute('data-lazy-src') || '';
        if(src){
          bg.style.backgroundImage = 'url("' + src.replace(/"/g,'\"') + '")';
          bg.style.backgroundSize = 'cover';
          bg.style.backgroundPosition = 'center center';
          bg.style.backgroundRepeat = 'no-repeat';
          bg.style.display = 'block';
          bg.style.opacity = '1';
          bg.style.visibility = 'visible';
        }
      }
    });
  }

  document.addEventListener('DOMContentLoaded', function(){
    cleanWhyChoose();
    setTimeout(cleanWhyChoose, 50);
    setTimeout(cleanWhyChoose, 400);
    setTimeout(cleanWhyChoose, 1000);
  });

  window.addEventListener('load', function(){
    cleanWhyChoose();
    setTimeout(cleanWhyChoose, 300);
  });

  cleanWhyChoose();
})();
}
catch (error) {
  console.warn('DP Diversified Plus shared JS block 022 skipped:', error);
}


/* ---------- JS BLOCK 023 | extracted first from: DPRB-blogpage.html ---------- */
try {
/* ======================================================================
   FINAL USER PATCH 22 JS — WHY-CHOOSE CUSTOM SLIDER
   ======================================================================
   Purpose:
   Replaces the old Slick-dependent Why Choose behavior with a clean,
   deterministic slider tailored to the rebuilt screenshot-matched layout.
====================================================================== */
(function(){
  'use strict';
  function initWhyChooseRebuilt(){
    var root = document.querySelector('#why-choose.rbwc-rebuilt');
    if(!root || root.dataset.rbwcReady === 'true') return;
    root.dataset.rbwcReady = 'true';

    var slides = Array.prototype.slice.call(root.querySelectorAll('.rbwc-slide'));
    var dots = Array.prototype.slice.call(root.querySelectorAll('.rbwc-dot'));
    var prev = root.querySelector('.rbwc-prev');
    var next = root.querySelector('.rbwc-next');
    if(!slides.length) return;

    var index = Math.max(0, slides.findIndex(function(slide){ return slide.classList.contains('is-active'); }));

    function render(i){
      index = (i + slides.length) % slides.length;
      slides.forEach(function(slide, sIndex){
        var active = sIndex === index;
        slide.classList.toggle('is-active', active);
        slide.setAttribute('aria-hidden', active ? 'false' : 'true');
      });
      dots.forEach(function(dot, dIndex){
        var active = dIndex === index;
        dot.classList.toggle('is-active', active);
        dot.setAttribute('aria-current', active ? 'true' : 'false');
      });
    }

    if(prev){
      prev.addEventListener('click', function(){ render(index - 1); });
    }
    if(next){
      next.addEventListener('click', function(){ render(index + 1); });
    }
    dots.forEach(function(dot){
      dot.addEventListener('click', function(){
        render(parseInt(dot.getAttribute('data-index') || '0', 10));
      });
    });

    render(index);
  }

  document.addEventListener('DOMContentLoaded', initWhyChooseRebuilt);
  window.addEventListener('load', initWhyChooseRebuilt);
  initWhyChooseRebuilt();
})();
}
catch (error) {
  console.warn('DP Diversified Plus shared JS block 023 skipped:', error);
}


/* ---------- JS BLOCK 024 | extracted first from: DPRB-blogpage.html ---------- */
try {
/* ======================================================================
   FINAL USER PATCH 23 JS — V3 WHY-CHOOSE SLIDER + PLACEHOLDER IMAGES
   ======================================================================
   - Loads each real image after the placeholder is already visible.
   - Keeps placeholder if real image fails.
   - Provides simple arrows and numbered navigation.
   - Removes older before/after UI if any previous patch attempts to add it.
====================================================================== */
(function(){
  'use strict';

  function removeOldPieces(root){
    var oldStats = document.getElementById('what-sets-us-apart');
    if(oldStats) oldStats.remove();
    if(root){
      root.querySelectorAll('.dp-before-after-slider,[data-before-after],.color-reveal,.reveal-left,.slide-image,.slick-list,.slick-track,.slick-dots,.slider-combo-nav').forEach(function(el){
        if(!el.classList.contains('rbwc3-slides')) el.remove();
      });
    }
  }

  function loadImages(root){
    root.querySelectorAll('.rbwc3-image').forEach(function(el){
      if(el.dataset.rbwc3ImageReady === 'true') return;
      el.dataset.rbwc3ImageReady = 'true';
      var real = el.getAttribute('data-image');
      var placeholder = el.getAttribute('data-placeholder');
      if(placeholder) el.style.backgroundImage = 'url("' + placeholder.replace(/"/g, '\\"') + '")';
      if(!real) return;
      var img = new Image();
      img.onload = function(){ el.style.backgroundImage = 'url("' + real.replace(/"/g, '\\"') + '")'; };
      img.onerror = function(){ if(placeholder) el.style.backgroundImage = 'url("' + placeholder.replace(/"/g, '\\"') + '")'; };
      img.src = real;
    });
  }

  function initRbwc3(){
    var root = document.querySelector('#why-choose.rbwc3');
    if(!root) return;
    removeOldPieces(root);
    loadImages(root);
    if(root.dataset.rbwc3Ready === 'true') return;
    root.dataset.rbwc3Ready = 'true';

    var slides = Array.prototype.slice.call(root.querySelectorAll('.rbwc3-slide'));
    var dots = Array.prototype.slice.call(root.querySelectorAll('.rbwc3-dot'));
    var prev = root.querySelector('.rbwc3-prev');
    var next = root.querySelector('.rbwc3-next');
    var index = 0;

    function render(nextIndex){
      index = (nextIndex + slides.length) % slides.length;
      slides.forEach(function(slide, i){
        var active = i === index;
        slide.classList.toggle('is-active', active);
        slide.setAttribute('aria-hidden', active ? 'false' : 'true');
      });
      dots.forEach(function(dot, i){
        var active = i === index;
        dot.classList.toggle('is-active', active);
        dot.setAttribute('aria-current', active ? 'true' : 'false');
      });
    }

    if(prev) prev.addEventListener('click', function(){ render(index - 1); });
    if(next) next.addEventListener('click', function(){ render(index + 1); });
    dots.forEach(function(dot){
      dot.addEventListener('click', function(){ render(parseInt(dot.getAttribute('data-index') || '0', 10)); });
    });

    render(0);
  }

  document.addEventListener('DOMContentLoaded', function(){ initRbwc3(); setTimeout(initRbwc3, 100); setTimeout(initRbwc3, 700); });
  window.addEventListener('load', function(){ initRbwc3(); setTimeout(initRbwc3, 500); });
  initRbwc3();
})();
}
catch (error) {
  console.warn('DP Diversified Plus shared JS block 024 skipped:', error);
}


/* ---------- JS BLOCK 025 | extracted first from: DPRB-blogpage.html ---------- */
try {
/* ======================================================================
   FINAL USER PATCH 24 JS — DIVERSIFIED PLUS & RENEWED BEFORE/AFTER BANNER
   ======================================================================
   Purpose:
   Powers the wide before/after comparison slider inserted into the
   Diversified Plus & Renewed / num-casestudies-1 section.
====================================================================== */
(function(){
  'use strict';
  function initProjectsBeforeAfter(){
    document.querySelectorAll('[data-rb-projects-before-after]').forEach(function(slider){
      if(slider.dataset.rbProjectsReady === 'true') return;
      slider.dataset.rbProjectsReady = 'true';
      var input = slider.querySelector('.rb-projects-ba-range');
      if(!input) return;
      var update = function(){
        slider.style.setProperty('--rb-projects-pos', input.value + '%');
      };
      input.addEventListener('input', update);
      input.addEventListener('change', update);
      update();
    });
  }
  document.addEventListener('DOMContentLoaded', initProjectsBeforeAfter);
  window.addEventListener('load', initProjectsBeforeAfter);
  initProjectsBeforeAfter();
})();
}
catch (error) {
  console.warn('DP Diversified Plus shared JS block 025 skipped:', error);
}


/* ---------- JS BLOCK 026 | extracted first from: DPRB-blogpage.html ---------- */
try {
/* ======================================================================
   FINAL USER PATCH 25 JS — MAKE INSPIRATION TABS VISIBLE/CLICKABLE
   ====================================================================== */
(function(){
  'use strict';
  function fixGalleryTabs(){
    var gallery = document.querySelector('.section-gallery.gallery-tabs');
    if(!gallery) return;
    var nav = gallery.querySelector('.gallery-nav');
    if(nav){
      nav.classList.remove('d-none');
      nav.classList.add('d-flex');
      nav.style.display = 'flex';
      nav.style.visibility = 'visible';
      nav.style.opacity = '1';
    }
    gallery.querySelectorAll('.gallery-nav a[data-gallery-filter]').forEach(function(link){
      if(link.dataset.rbTabReady === 'true') return;
      link.dataset.rbTabReady = 'true';
      link.addEventListener('click', function(){
        gallery.querySelectorAll('.gallery-nav a[data-gallery-filter], #dropdown-gallery-menu a[data-gallery-filter]').forEach(function(a){
          a.classList.remove('active','show','dp-filter-active');
        });
        link.classList.add('active','show','dp-filter-active');
      });
    });
  }
  document.addEventListener('DOMContentLoaded', fixGalleryTabs);
  window.addEventListener('load', fixGalleryTabs);
  fixGalleryTabs();
})();
}
catch (error) {
  console.warn('DP Diversified Plus shared JS block 026 skipped:', error);
}


/* ---------- JS BLOCK 027 | extracted first from: DPRB-blogpage.html ---------- */
try {
/* FINAL USER PATCH 25 JS — diversify remaining visible text */
(function(){
  'use strict';
  var map = {
    'Diversified Plus':'Diversified Plus',
    'Diversified Plus':'Diversified Plus',
    'Diversified Plus Services':'Diversified Plus Services',
    'Diversified Plus Inspiration':'Diversified Plus Projects',
    'Diversified Plus & Renewed':'Built by Diversified Plus',
    '914.879.0442':'914.879.0442',
    '9148790442':'9148790442'
  };
  function walk(node){
    if(!node || node.nodeType !== 1 || /^(SCRIPT|STYLE)$/i.test(node.tagName)) return;
    Array.prototype.slice.call(node.childNodes).forEach(function(child){
      if(child.nodeType === 3){
        var value = child.nodeValue;
        Object.keys(map).forEach(function(key){ value = value.split(key).join(map[key]); });
        child.nodeValue = value;
      } else if(child.nodeType === 1){ walk(child); }
    });
  }
  function run(){
    walk(document.body);
    document.querySelectorAll('a[href^="tel:"]').forEach(function(a){ a.setAttribute('href','tel:9148790442'); });
  }
  document.addEventListener('DOMContentLoaded', run);
  window.addEventListener('load', run);
  run();
})();
}
catch (error) {
  console.warn('DP Diversified Plus shared JS block 027 skipped:', error);
}


/* ---------- JS BLOCK 028 | extracted first from: DPRB-blogpage.html ---------- */
try {
/* ======================================================================
   FINAL USER PATCH 25 JS — CONSISTENT SCROLL CLASS FOR SECONDARY NAV
   ======================================================================
   Purpose:
   Ensures .dp-top-nav-secondary-bar stays hidden at the top of the page and
   becomes visible as soon as the page is scrolled, even if older scripts do
   not set the dp-nav-scrolled class consistently.
====================================================================== */
(function(){
  'use strict';
  function setNavScrolled(){
    var scrolled = window.pageYOffset > 8 || document.documentElement.scrollTop > 8;
    document.body.classList.toggle('dp-nav-scrolled', scrolled);
    document.documentElement.classList.toggle('dp-force-scroll-nav', scrolled);
  }
  document.addEventListener('DOMContentLoaded', setNavScrolled);
  window.addEventListener('load', setNavScrolled);
  window.addEventListener('scroll', setNavScrolled, {passive:true});
  setNavScrolled();
})();
}
catch (error) {
  console.warn('DP Diversified Plus shared JS block 028 skipped:', error);
}


/* ---------- JS BLOCK 029 | extracted first from: DPRB-blogpage.html ---------- */
try {
(function(){
  'use strict';
  function initNewsFilters(){
    var root = document.getElementById('diversified-plus-blog-centre');
    if(!root || root.dataset.newsReady === 'true') return;
    root.dataset.newsReady = 'true';
    var tabs = Array.prototype.slice.call(root.querySelectorAll('.rb-news-tab'));
    var cards = Array.prototype.slice.call(root.querySelectorAll('.rb-news-card'));
    tabs.forEach(function(tab){
      tab.addEventListener('click', function(){
        var filter = tab.getAttribute('data-filter') || 'all';
        tabs.forEach(function(t){t.classList.toggle('is-active', t === tab);});
        cards.forEach(function(card){
          var category = card.getAttribute('data-category') || '';
          card.classList.toggle('is-hidden', filter !== 'all' && category !== filter);
        });
      });
    });
  }
  document.addEventListener('DOMContentLoaded', initNewsFilters);
  window.addEventListener('load', initNewsFilters);
  initNewsFilters();
})();
}
catch (error) {
  console.warn('DP Diversified Plus shared JS block 029 skipped:', error);
}


/* ---------- JS BLOCK 030 | extracted first from: about.html ---------- */
try {
/* DIVERSIFIED PLUS ADDITIONS BEFORE/AFTER SLIDER */
(function(){
  function init(){
    document.querySelectorAll('[data-rb-add-ba]').forEach(function(slider){
      if(slider.dataset.rbAddReady === 'true') return;
      slider.dataset.rbAddReady = 'true';
      var input = slider.querySelector('.rb-add-ba-range');
      if(!input) return;
      function update(){slider.style.setProperty('--rb-ba-pos', input.value + '%');}
      input.addEventListener('input', update);
      input.addEventListener('change', update);
      update();
    });
  }
  document.addEventListener('DOMContentLoaded', init);
  window.addEventListener('load', init);
  init();
})();
}
catch (error) {
  console.warn('DP Diversified Plus shared JS block 030 skipped:', error);
}


/* ---------- JS BLOCK 031 | extracted first from: about.html ---------- */
try {
/* ======================================================================
   FINAL USER PATCH JS — ADD THIN SHARP ICONS
   ======================================================================
   Purpose:
   Inserts lightweight inline SVG icons into the Diversified Plus additions/remodeling
   page where they naturally support the content. It is duplicate-safe.
====================================================================== */
(function(){
  'use strict';
  function svgIcon(type){
    var paths = {
      addition:'<path d="M4 18h16V9L12 3 4 9v9Z"/><path d="M9 18v-6h6v6"/><path d="M12 6v6M9 9h6"/>',
      interior:'<path d="M4 19h16V5H4v14Z"/><path d="M8 5v14M16 5v14"/><path d="M4 12h16"/>',
      exterior:'<path d="M3 18h18"/><path d="M5 18V9l7-5 7 5v9"/><path d="M8 18v-6h8v6"/><path d="M12 4v14"/>',
      planning:'<path d="M6 3h10l2 2v16H6V3Z"/><path d="M16 3v4h4"/><path d="M9 10h6M9 14h7M9 18h4"/>',
      permit:'<path d="M5 4h14v16H5V4Z"/><path d="M8 8h8M8 12h8M8 16h5"/><path d="m14 17 2 2 4-5"/>',
      build:'<path d="M4 20 14.5 9.5"/><path d="M12 7l5-5 5 5-5 5-5-5Z"/><path d="M3 21l4-1-3-3-1 4Z"/>',
      review:'<path d="M4 12.5 9 17 20 6"/><path d="M20 12v7H4V5h10"/>',
      location:'<path d="M12 21s7-6.1 7-12a7 7 0 0 0-14 0c0 5.9 7 12 7 12Z"/><path d="M12 11.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>',
      check:'<path d="m4 12 5 5L20 6"/>',
      blog:'<path d="M5 4h14v16H5V4Z"/><path d="M8 8h8M8 12h8M8 16h5"/>',
      arrow:'<path d="M5 12h14"/><path d="m14 6 6 6-6 6"/>',
      phone:'<path d="M8 4 5 7c0 7 5 12 12 12l3-3-4-4-2 2c-2.5-1-4-2.5-5-5l2-2-3-3Z"/>'
    };
    var span = document.createElement('span');
    span.className = 'rb-add-icon rb-add-icon-' + type;
    span.setAttribute('aria-hidden','true');
    span.innerHTML = '<svg viewBox="0 0 24 24" focusable="false">' + (paths[type] || paths.check) + '</svg>';
    return span;
  }
  function pickCardIcon(text){
    text = (text || '').toLowerCase();
    if(text.indexOf('addition') > -1 || text.indexOf('home') > -1) return 'addition';
    if(text.indexOf('interior') > -1 || text.indexOf('kitchen') > -1 || text.indexOf('bath') > -1) return 'interior';
    if(text.indexOf('exterior') > -1 || text.indexOf('siding') > -1 || text.indexOf('windows') > -1 || text.indexOf('doors') > -1) return 'exterior';
    if(text.indexOf('consult') > -1) return 'planning';
    if(text.indexOf('scope') > -1) return 'permit';
    if(text.indexOf('build') > -1) return 'build';
    if(text.indexOf('review') > -1) return 'review';
    return 'planning';
  }
  function addBefore(target, type){
    if(!target || target.querySelector(':scope > .rb-add-icon')) return;
    target.insertBefore(svgIcon(type), target.firstChild);
  }
  function initThinSharpIcons(){
    var page = document.querySelector('#diversified-plus-additions-remodeling-page.rb-add-page');
    if(!page) return;

    page.querySelectorAll('.rb-add-btn').forEach(function(btn){
      if(btn.querySelector('.rb-add-icon')) return;
      btn.insertBefore(svgIcon(/call|914|tel:/i.test(btn.textContent + ' ' + btn.getAttribute('href')) ? 'phone' : 'arrow'), btn.firstChild);
    });

    page.querySelectorAll('.rb-add-trust-item').forEach(function(item){
      addBefore(item, pickCardIcon(item.textContent));
    });

    page.querySelectorAll('.rb-add-card').forEach(function(card){
      addBefore(card, pickCardIcon(card.textContent));
    });

    page.querySelectorAll('.rb-add-side-card').forEach(function(card){
      addBefore(card, 'location');
    });

    page.querySelectorAll('.rb-add-list span').forEach(function(row){
      if(row.querySelector('.rb-add-icon')) return;
      row.insertBefore(svgIcon('check'), row.firstChild);
    });

    page.querySelectorAll('.rb-add-check').forEach(function(check){
      if(check.querySelector('.rb-add-icon')) return;
      check.insertBefore(svgIcon('check'), check.firstChild);
    });

    page.querySelectorAll('.rb-add-step').forEach(function(step){
      addBefore(step, pickCardIcon(step.textContent));
    });

    page.querySelectorAll('.rb-add-post-body .cat').forEach(function(cat){
      if(cat.querySelector('.rb-add-icon')) return;
      cat.insertBefore(svgIcon('blog'), cat.firstChild);
    });
  }
  document.addEventListener('DOMContentLoaded', initThinSharpIcons);
  window.addEventListener('load', initThinSharpIcons);
  initThinSharpIcons();
})();
}
catch (error) {
  console.warn('DP Diversified Plus shared JS block 031 skipped:', error);
}


/* ---------- JS BLOCK 032 | extracted first from: index.html ---------- */
try {
(function(){
  'use strict';

  var MOBILE_MAX = 1199;
  var body = document.body;

  function qs(sel, root){ return (root || document).querySelector(sel); }
  function qsa(sel, root){ return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function isMobile(){ return window.matchMedia('(max-width:' + MOBILE_MAX + 'px)').matches; }

  function cleanText(text){ return (text || '').replace(/\s+/g, ' ').trim(); }

  function collectLinks(){
    var seen = {};
    var links = [];
    var selectors = [
      '#menu-main-nav > li > a',
      '#menu-top-nav > li > a',
      '#mmenu .mm-listview > li > a.mm-listitem__text'
    ];

    selectors.forEach(function(selector){
      qsa(selector).forEach(function(a){
        var label = cleanText(a.textContent);
        var href = a.getAttribute('href') || '#';
        if(!label || label.toLowerCase() === 'close menu' || label.toLowerCase() === 'menu') return;
        var key = label.toLowerCase();
        if(seen[key]) return;
        seen[key] = true;
        links.push({ label: label, href: href });
      });
    });

    if(!links.length){
      links = [
        {label:'Carpentry / Custom Millwork', href:'#'},
        {label:'Bathroom', href:'#'},
        {label:'Windows', href:'#'},
        {label:'Doors', href:'#'},
        {label:'Inspiration Gallery', href:'#thumbnails-all'},
        {label:'Customer Support', href:'#'}
      ];
    }
    return links;
  }

  function buildDrawer(){
    qsa('.rb-mobile-overlay,.rb-mobile-drawer').forEach(function(el){ el.remove(); });

    var overlay = document.createElement('div');
    overlay.className = 'rb-mobile-overlay';
    overlay.setAttribute('aria-hidden', 'true');

    var drawer = document.createElement('aside');
    drawer.className = 'rb-mobile-drawer';
    drawer.setAttribute('aria-hidden', 'true');
    drawer.setAttribute('aria-label', 'Mobile menu');

    var linksHtml = collectLinks().map(function(item){
      return '<a href="' + item.href.replace(/"/g, '&quot;') + '">' + item.label + '</a>';
    }).join('');

    drawer.innerHTML = '' +
      '<div class="rb-mobile-drawer__head">' +
        '<span class="rb-mobile-drawer__brand">Diversified Plus Construction</span>' +
        '<button class="rb-mobile-drawer__close" type="button" aria-label="Close mobile menu">×</button>' +
      '</div>' +
      '<nav class="rb-mobile-drawer__nav" aria-label="Mobile navigation">' + linksHtml + '</nav>' +
      '<div class="rb-mobile-drawer__cta"><a href="tel:9148790442">Call 914.879.0442</a></div>';

    document.body.appendChild(overlay);
    document.body.appendChild(drawer);

    overlay.addEventListener('click', closeMenu);
    qs('.rb-mobile-drawer__close', drawer).addEventListener('click', closeMenu);
    qsa('a', drawer).forEach(function(a){ a.addEventListener('click', closeMenu); });
  }

  function ensureButton(){
    qsa('.rb-mobile-hamburger').forEach(function(el, index){ if(index > 0) el.remove(); });

    var header = qs('.section-nav .header-wrapper') || qs('.section-nav') || qs('header');
    if(!header) return;

    var button = qs('.rb-mobile-hamburger');
    if(!button){
      button = document.createElement('button');
      button.className = 'rb-mobile-hamburger';
      button.type = 'button';
      button.setAttribute('aria-label', 'Open mobile menu');
      button.setAttribute('aria-expanded', 'false');
      button.innerHTML = '<span></span><span></span><span></span>';
      header.appendChild(button);
    }

    button.onclick = function(event){
      event.preventDefault();
      if(body.classList.contains('rb-mobile-menu-open')) closeMenu();
      else openMenu();
    };
  }

  function openMenu(){
    if(!isMobile()) return;
    var drawer = qs('.rb-mobile-drawer');
    var button = qs('.rb-mobile-hamburger');
    if(!drawer) buildDrawer();
    body.classList.add('rb-mobile-menu-open');
    if(button){
      button.setAttribute('aria-expanded', 'true');
      button.setAttribute('aria-label', 'Close mobile menu');
    }
    drawer = qs('.rb-mobile-drawer');
    if(drawer){
      drawer.setAttribute('aria-hidden', 'false');
      var first = qs('a,button', drawer);
      if(first) setTimeout(function(){ first.focus({preventScroll:true}); }, 80);
    }
  }

  function closeMenu(){
    var drawer = qs('.rb-mobile-drawer');
    var button = qs('.rb-mobile-hamburger');
    body.classList.remove('rb-mobile-menu-open');
    if(button){
      button.setAttribute('aria-expanded', 'false');
      button.setAttribute('aria-label', 'Open mobile menu');
    }
    if(drawer) drawer.setAttribute('aria-hidden', 'true');
  }

  function init(){
    ensureButton();
    buildDrawer();
    closeMenu();
  }

  document.addEventListener('keydown', function(event){
    if(event.key === 'Escape') closeMenu();
  });

  window.addEventListener('resize', function(){
    if(!isMobile()) closeMenu();
  });

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
}
catch (error) {
  console.warn('DP Diversified Plus shared JS block 032 skipped:', error);
}


/* ---------- JS BLOCK 033 | extracted first from: index.html ---------- */
try {
(function(){
  'use strict';

  var MOBILE_MAX = 1199;
  var body = document.body;

  function qs(sel, root){ return (root || document).querySelector(sel); }
  function qsa(sel, root){ return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function isMobile(){ return window.matchMedia('(max-width:' + MOBILE_MAX + 'px)').matches; }

  function setScrolledState(){
    if(window.scrollY > 8) body.classList.add('dp-nav-scrolled');
    else body.classList.remove('dp-nav-scrolled');
  }

  function removeOldMobileArtifacts(){
    qsa('.rb-mobile-overlay,.rb-mobile-drawer').forEach(function(el){ el.remove(); });
    qsa('.rb-mobile-hamburger').forEach(function(el, index){ if(index > 0) el.remove(); });
    qsa('.section-nav .hamburger-wrapper,.section-nav .menu-toggle,.section-nav .nav-takeover-viewport-open').forEach(function(el){
      el.setAttribute('aria-hidden','true');
      el.style.display = 'none';
    });
  }

  function getHrefByText(text, fallback){
    var target = String(text || '').toLowerCase();
    var match = qsa('#menu-main-nav a,#menu-top-nav a').find(function(a){
      return (a.textContent || '').replace(/\s+/g,' ').trim().toLowerCase() === target;
    });
    return match ? (match.getAttribute('href') || fallback || '#') : (fallback || '#');
  }

  function drawerMarkup(){
    var menu = [
      {
        label:'Services',
        href:getHrefByText('Services','#services'),
        children:[
          ['Carpentry / Custom Millwork','#services'],
          ['Bathroom Remodeling','#services'],
          ['Windows','#services'],
          ['Doors','#services'],
          ['Full Home Remodeling','#services'],
          ['View All Services','#services']
        ]
      },
      {
        label:'Inspiration Gallery',
        href:'#thumbnails-all',
        children:[
          ['All Projects','#thumbnails-all'],
          ['Kitchen Inspiration','#thumbnails-kitchens'],
          ['Bathroom Inspiration','#thumbnails-bathrooms'],
          ['Cabinet Inspiration','#thumbnails-cabinets'],
          ['Window & Door Inspiration','#thumbnails-windows']
        ]
      },
      {
        label:'Company',
        href:getHrefByText('Company','#'),
        children:[
          ['About Diversified Plus','#'],
          ['Reviews','#'],
          ['Service Areas','#'],
          ['Financing','#']
        ]
      },
      {
        label:'News',
        href:getHrefByText('News','#news'),
        children:[
          ['Remodeling Ideas','#news'],
          ['Kitchen Tips','#news'],
          ['Bathroom Tips','#news'],
          ['Home Improvement Guides','#news']
        ]
      },
      { label:'Contact', href:getHrefByText('Contact','#contact') }
    ];

    function esc(v){ return String(v == null ? '' : v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }

    var nav = menu.map(function(item, index){
      if(item.children && item.children.length){
        var id = 'rb-mobile-submenu-' + index;
        return ''+
          '<div class="rb-mobile-item rb-has-submenu">'+
            '<button class="rb-mobile-submenu-toggle" type="button" aria-expanded="false" aria-controls="'+id+'">'+esc(item.label)+'</button>'+
            '<div class="rb-mobile-submenu" id="'+id+'" hidden>'+ 
              item.children.map(function(child){ return '<a href="'+esc(child[1])+'">'+esc(child[0])+'</a>'; }).join('')+
            '</div>'+
          '</div>';
      }
      return '<a class="rb-mobile-link" href="'+esc(item.href)+'">'+esc(item.label)+'</a>';
    }).join('');

    return ''+
      '<div class="rb-mobile-drawer__head">'+
        '<span class="rb-mobile-drawer__brand">Diversified Plus Construction</span>'+
        '<button class="rb-mobile-drawer__close" type="button" aria-label="Close mobile menu">×</button>'+
      '</div>'+
      '<nav class="rb-mobile-drawer__nav" aria-label="Mobile navigation">'+nav+'</nav>'+
      '<div class="rb-mobile-drawer__cta"><a href="tel:9148790442">Call 914.879.0442</a></div>';
  }

  function buildDrawer(){
    removeOldMobileArtifacts();

    var overlay = document.createElement('div');
    overlay.className = 'rb-mobile-overlay';
    overlay.setAttribute('aria-hidden','true');

    var drawer = document.createElement('aside');
    drawer.className = 'rb-mobile-drawer';
    drawer.setAttribute('aria-hidden','true');
    drawer.setAttribute('aria-label','Mobile menu');
    drawer.innerHTML = drawerMarkup();

    document.body.appendChild(overlay);
    document.body.appendChild(drawer);

    overlay.addEventListener('click', closeMenu);
    qs('.rb-mobile-drawer__close', drawer).addEventListener('click', closeMenu);

    qsa('.rb-mobile-submenu-toggle', drawer).forEach(function(btn){
      btn.addEventListener('click', function(){
        var panel = document.getElementById(btn.getAttribute('aria-controls'));
        var willOpen = btn.getAttribute('aria-expanded') !== 'true';
        btn.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
        if(panel){
          panel.hidden = !willOpen;
          panel.classList.toggle('is-open', willOpen);
        }
      });
    });

    qsa('a', drawer).forEach(function(a){ a.addEventListener('click', closeMenu); });
  }

  function ensureButton(){
    var header = qs('.section-nav .header-wrapper') || qs('.section-nav');
    if(!header) return;

    qsa('.rb-mobile-hamburger').forEach(function(el){ el.remove(); });

    var button = document.createElement('button');
    button.className = 'rb-mobile-hamburger';
    button.type = 'button';
    button.setAttribute('aria-label','Open mobile menu');
    button.setAttribute('aria-expanded','false');
    button.innerHTML = '<span></span><span></span><span></span>';
    header.appendChild(button);

    button.addEventListener('click', function(event){
      event.preventDefault();
      if(body.classList.contains('rb-mobile-menu-open')) closeMenu();
      else openMenu();
    });
  }

  function openMenu(){
    if(!isMobile()) return;
    body.classList.add('rb-mobile-menu-open');
    var button = qs('.rb-mobile-hamburger');
    var drawer = qs('.rb-mobile-drawer');
    if(button){
      button.setAttribute('aria-expanded','true');
      button.setAttribute('aria-label','Close mobile menu');
    }
    if(drawer){
      drawer.setAttribute('aria-hidden','false');
      var first = qs('.rb-mobile-submenu-toggle,.rb-mobile-link,a,button', drawer);
      if(first) setTimeout(function(){ try{ first.focus({preventScroll:true}); } catch(e){ first.focus(); } }, 70);
    }
  }

  function closeMenu(){
    body.classList.remove('rb-mobile-menu-open');
    var button = qs('.rb-mobile-hamburger');
    var drawer = qs('.rb-mobile-drawer');
    if(button){
      button.setAttribute('aria-expanded','false');
      button.setAttribute('aria-label','Open mobile menu');
    }
    if(drawer) drawer.setAttribute('aria-hidden','true');
  }

  function init(){
    buildDrawer();
    ensureButton();
    closeMenu();
    setScrolledState();
  }

  document.addEventListener('keydown', function(event){ if(event.key === 'Escape') closeMenu(); });
  window.addEventListener('scroll', setScrolledState, {passive:true});
  window.addEventListener('resize', function(){ setScrolledState(); if(!isMobile()) closeMenu(); });

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
}
catch (error) {
  console.warn('DP Diversified Plus shared JS block 033 skipped:', error);
}


/* ---------- JS BLOCK 034 | extracted first from: index.html ---------- */
try {
/* FINAL USER PATCH 25 JS — diversify remaining visible text */
(function(){
  'use strict';
  var map = {
    'Diversified Plus Construction':'Diversified Plus Construction',
    'Diversified Plus Services':'Diversified Plus Services',
    'Diversified Plus Inspiration':'Diversified Plus Projects',
    'Diversified Plus & Renewed':'Built by Diversified Plus',
    '914.879.0442':'914.879.0442',
    '9148790442':'9148790442'
  };
  function walk(node){
    if(!node || node.nodeType !== 1 || /^(SCRIPT|STYLE)$/i.test(node.tagName)) return;
    Array.prototype.slice.call(node.childNodes).forEach(function(child){
      if(child.nodeType === 3){
        var value = child.nodeValue;
        Object.keys(map).forEach(function(key){ value = value.split(key).join(map[key]); });
        child.nodeValue = value;
      } else if(child.nodeType === 1){ walk(child); }
    });
  }
  function run(){
    walk(document.body);
    document.querySelectorAll('a[href^="tel:"]').forEach(function(a){ a.setAttribute('href','tel:9148790442'); });
  }
  document.addEventListener('DOMContentLoaded', run);
  window.addEventListener('load', run);
  run();
})();
}
catch (error) {
  console.warn('DP Diversified Plus shared JS block 034 skipped:', error);
}


/* ---------- JS BLOCK 035 | extracted first from: projects.html ---------- */
try {
/* DIVERSIFIED PLUS PROJECTS PAGE — SERVICE TAB FILTERS */
(function(){
  'use strict';
  function initProjectTabs(){
    var root=document.getElementById('diversified-plus-projects-page');
    if(!root || root.dataset.projectTabsReady==='true') return;
    root.dataset.projectTabsReady='true';
    var tabs=Array.prototype.slice.call(root.querySelectorAll('.rb-project-tab'));
    var cards=Array.prototype.slice.call(root.querySelectorAll('.rb-project-card'));
    tabs.forEach(function(tab){
      tab.addEventListener('click',function(){
        var filter=tab.getAttribute('data-filter') || 'all';
        tabs.forEach(function(t){t.classList.toggle('is-active', t===tab);});
        cards.forEach(function(card){
          var cat=card.getAttribute('data-category') || '';
          card.classList.toggle('is-hidden', filter !== 'all' && cat !== filter);
        });
      });
    });
  }
  document.addEventListener('DOMContentLoaded', initProjectTabs);
  window.addEventListener('load', initProjectTabs);
  initProjectTabs();
})();
}
catch (error) {
  console.warn('DP Diversified Plus shared JS block 035 skipped:', error);
}


/* ---------- JS BLOCK 036 | extracted first from: specific-project.html ---------- */
try {
/* Diversified Plus Project Detail Before/After Slider */
(function(){
  'use strict';
  function initRBPD(){
    document.querySelectorAll('[data-rbpd-ba]').forEach(function(slider){
      if(slider.dataset.rbpdReady === 'true') return;
      slider.dataset.rbpdReady = 'true';
      var input = slider.querySelector('.rbpd-ba-range');
      if(!input) return;
      function update(){ slider.style.setProperty('--rbpd-pos', input.value + '%'); }
      input.addEventListener('input', update);
      input.addEventListener('change', update);
      update();
    });
  }
  document.addEventListener('DOMContentLoaded', initRBPD);
  window.addEventListener('load', initRBPD);
  initRBPD();
})();
}
catch (error) {
  console.warn('DP Diversified Plus shared JS block 036 skipped:', error);
}


/* ---------- JS BLOCK 037 | extracted first from: specific-project.html ---------- */
try {
/* ======================================================================
   FINAL USER PATCH JS — THIN SHARP ICONS FOR SPECIFIC PROJECT PAGE
   ======================================================================
   Duplicate-safe icon injection for the simplified Diversified Plus specific project
   detail page.
====================================================================== */
(function(){
  'use strict';
  function icon(type){
    var paths = {
      arrow:'<path d="M5 12h14"/><path d="m14 6 6 6-6 6"/>',
      calendar:'<path d="M7 3v4M17 3v4"/><path d="M4 8h16"/><path d="M5 5h14v16H5z"/>',
      compare:'<path d="M4 7h12"/><path d="m12 3 4 4-4 4"/><path d="M20 17H8"/><path d="m12 13-4 4 4 4"/>',
      location:'<path d="M12 21s7-6.1 7-12a7 7 0 0 0-14 0c0 5.9 7 12 7 12Z"/><path d="M12 11.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>',
      cabinet:'<path d="M4 4h16v16H4z"/><path d="M12 4v16"/><path d="M8 12h.01M16 12h.01"/>',
      finish:'<path d="M4 20h16"/><path d="M7 16 17 6l3 3-10 10H7z"/><path d="m14 9 3 3"/>',
      light:'<path d="M9 18h6"/><path d="M10 22h4"/><path d="M8 14a6 6 0 1 1 8 0c-.9.8-1.2 1.6-1.2 2H9.2c0-.4-.3-1.2-1.2-2Z"/>',
      image:'<path d="M4 5h16v14H4z"/><path d="m4 15 4-4 4 4 3-3 5 5"/><path d="M15 9h.01"/>',
      blog:'<path d="M5 4h14v16H5z"/><path d="M8 8h8M8 12h8M8 16h5"/>',
      check:'<path d="m4 12 5 5L20 6"/>',
      pin:'<path d="M12 3v18"/><path d="M7 8h10"/><path d="M9 3h6l2 5H7z"/>'
    };
    var span=document.createElement('span');
    span.className='rbpd-thin-icon rbpd-icon-' + type;
    span.setAttribute('aria-hidden','true');
    span.innerHTML='<svg viewBox="0 0 24 24" focusable="false">'+(paths[type]||paths.check)+'</svg>';
    return span;
  }
  function addFirst(el,type){
    if(!el || el.querySelector(':scope > .rbpd-thin-icon')) return;
    el.insertBefore(icon(type), el.firstChild);
  }
  function chooseSummary(text){
    text=(text||'').toLowerCase();
    if(text.indexOf('location')>-1 || text.indexOf('anaheim')>-1) return 'location';
    if(text.indexOf('cabinet')>-1) return 'cabinet';
    if(text.indexOf('design')>-1 || text.indexOf('brighter')>-1) return 'light';
    return 'finish';
  }
  function init(){
    var page=document.querySelector('#diversified-plus-project-detail-page.rbpd-simple-project');
    if(!page) return;

    page.querySelectorAll('.rbpd-btn-primary').forEach(function(btn){ addFirst(btn,'calendar'); });
    page.querySelectorAll('.rbpd-btn-secondary').forEach(function(btn){ addFirst(btn,'compare'); });

    page.querySelectorAll('.rbpd-kicker').forEach(function(kicker){
      var t=(kicker.textContent||'').toLowerCase();
      var type=t.indexOf('before')>-1 ? 'compare' : t.indexOf('image')>-1 ? 'image' : t.indexOf('blog')>-1 ? 'blog' : t.indexOf('local')>-1 ? 'location' : 'pin';
      addFirst(kicker,type);
    });

    page.querySelectorAll('.rbpd-summary-card').forEach(function(card){ addFirst(card, chooseSummary(card.textContent)); });

    page.querySelectorAll('.rbpd-ba-label-before').forEach(function(label){ addFirst(label,'compare'); });
    page.querySelectorAll('.rbpd-ba-label-after').forEach(function(label){ addFirst(label,'check'); });

    page.querySelectorAll('.rbpd-gallery-caption span').forEach(function(label){
      var t=(label.textContent||'').toLowerCase();
      addFirst(label, t.indexOf('finish')>-1 ? 'finish' : t.indexOf('cabinet')>-1 ? 'cabinet' : 'image');
    });

    page.querySelectorAll('.rbpd-post-body span').forEach(function(label){ addFirst(label,'blog'); });
  }
  document.addEventListener('DOMContentLoaded', init);
  window.addEventListener('load', init);
  init();
})();
}
catch (error) {
  console.warn('DP Diversified Plus shared JS block 037 skipped:', error);
}


/* FINAL PATCH — stable desktop mega-menu hover with a short close delay. */
(function(){
  var parents=document.querySelectorAll('#menu-main-nav > li.dp-services-mega-parent');
  parents.forEach(function(parent){
    var menu=parent.querySelector('.dp-services-mega-menu');
    var timer=null;
    function open(){ if(timer){clearTimeout(timer); timer=null;} parent.classList.add('dp-mega-open'); }
    function close(){ if(timer){clearTimeout(timer);} timer=setTimeout(function(){ parent.classList.remove('dp-mega-open'); }, 260); }
    parent.addEventListener('mouseenter', open);
    parent.addEventListener('mouseleave', close);
    parent.addEventListener('focusin', open);
    parent.addEventListener('focusout', close);
    if(menu){ menu.addEventListener('mouseenter', open); menu.addEventListener('mouseleave', close); }
  });
})();


/* USER PATCH: mega menu close delay so panels remain reachable */
(function(){
  var parents = document.querySelectorAll('.dp-services-mega-parent');
  parents.forEach(function(parent){
    var timer;
    parent.addEventListener('mouseenter', function(){ clearTimeout(timer); parent.classList.add('dp-mega-open'); });
    parent.addEventListener('mouseleave', function(){ timer = setTimeout(function(){ parent.classList.remove('dp-mega-open'); }, 220); });
    parent.addEventListener('focusin', function(){ clearTimeout(timer); parent.classList.add('dp-mega-open'); });
    parent.addEventListener('focusout', function(){ timer = setTimeout(function(){ parent.classList.remove('dp-mega-open'); }, 220); });
  });
})();


/* USER PATCH — smoother mega-menu hover delay so panels do not disappear while moving the cursor. */
(function(){
  var timers=new WeakMap();
  document.querySelectorAll('#menu-main-nav > li.dp-services-mega-parent').forEach(function(item){
    function open(){
      var t=timers.get(item); if(t) clearTimeout(t);
      item.classList.add('dp-mega-open');
      var a=item.querySelector('.dp-services-mega-trigger'); if(a) a.setAttribute('aria-expanded','true');
    }
    function close(){
      var t=setTimeout(function(){
        item.classList.remove('dp-mega-open');
        var a=item.querySelector('.dp-services-mega-trigger'); if(a) a.setAttribute('aria-expanded','false');
      }, 240);
      timers.set(item,t);
    }
    item.addEventListener('mouseenter',open);
    item.addEventListener('focusin',open);
    item.addEventListener('mouseleave',close);
    item.addEventListener('focusout',function(e){ if(!item.contains(e.relatedTarget)) close(); });
    var mega=item.querySelector('.dp-services-mega-menu');
    if(mega){ mega.addEventListener('mouseenter',open); mega.addEventListener('mouseleave',close); }
  });
})();


/* FINAL USER PATCH — one active mega menu at a time; prevents Services menu from sticking behind another mega menu. */
(function(){
  var parents=[].slice.call(document.querySelectorAll('#menu-main-nav > li.dp-services-mega-parent'));
  if(!parents.length) return;
  var timers=new WeakMap();
  function closeParent(parent){
    parent.classList.remove('dp-mega-open');
    parent.classList.remove('dp-mega-suppressed');
    var a=parent.querySelector('.dp-services-mega-trigger');
    if(a) a.setAttribute('aria-expanded','false');
  }
  function closeOthers(active){
    parents.forEach(function(p){
      if(p!==active){
        p.classList.remove('dp-mega-open');
        p.classList.add('dp-mega-suppressed');
        var a=p.querySelector('.dp-services-mega-trigger');
        if(a) a.setAttribute('aria-expanded','false');
      }
    });
  }
  function openParent(parent){
    var t=timers.get(parent); if(t) clearTimeout(t);
    closeOthers(parent);
    parent.classList.remove('dp-mega-suppressed');
    parent.classList.add('dp-mega-open');
    var a=parent.querySelector('.dp-services-mega-trigger');
    if(a) a.setAttribute('aria-expanded','true');
  }
  function delayedClose(parent){
    var t=timers.get(parent); if(t) clearTimeout(t);
    timers.set(parent, setTimeout(function(){ closeParent(parent); }, 180));
  }
  parents.forEach(function(parent){
    var menu=parent.querySelector('.dp-services-mega-menu');
    var trigger=parent.querySelector('.dp-services-mega-trigger');
    parent.addEventListener('mouseenter', function(){ openParent(parent); });
    parent.addEventListener('mouseleave', function(){ delayedClose(parent); });
    parent.addEventListener('focusin', function(){ openParent(parent); });
    parent.addEventListener('focusout', function(){ delayedClose(parent); });
    if(menu){
      menu.addEventListener('mouseenter', function(){ openParent(parent); });
      menu.addEventListener('mouseleave', function(){ delayedClose(parent); });
    }
    if(trigger){
      trigger.addEventListener('mouseenter', function(){ openParent(parent); });
      trigger.addEventListener('click', function(){ closeOthers(parent); });
    }
  });
  document.addEventListener('mousemove', function(e){
    var inside=e.target.closest && e.target.closest('#menu-main-nav > li.dp-services-mega-parent, .dp-services-mega-menu');
    if(!inside){ parents.forEach(function(p){ p.classList.remove('dp-mega-suppressed'); }); }
  });
})();


/* USER PATCH — smooth exclusive mega-menu behavior for Services/Company/Projects/News */
(function(){
  var parents = Array.prototype.slice.call(document.querySelectorAll('#menu-main-nav > li.dp-services-mega-parent, #menu-main-nav > li.dp-news-mega-parent'));
  if(!parents.length) return;
  var closeTimer;
  function closeAll(except){
    parents.forEach(function(parent){
      if(parent !== except){
        parent.classList.remove('dp-services-open','dp-news-open','dp-mega-open');
        var trigger = parent.querySelector('a[aria-expanded]');
        if(trigger) trigger.setAttribute('aria-expanded','false');
      }
    });
  }
  function openParent(parent){
    clearTimeout(closeTimer);
    closeAll(parent);
    parent.classList.add('dp-mega-open');
    if(parent.classList.contains('dp-news-mega-parent')) parent.classList.add('dp-news-open');
    else parent.classList.add('dp-services-open');
    var trigger = parent.querySelector('a[aria-expanded]');
    if(trigger) trigger.setAttribute('aria-expanded','true');
  }
  function scheduleClose(parent){
    clearTimeout(closeTimer);
    closeTimer = setTimeout(function(){
      parent.classList.remove('dp-services-open','dp-news-open','dp-mega-open');
      var trigger = parent.querySelector('a[aria-expanded]');
      if(trigger) trigger.setAttribute('aria-expanded','false');
    }, 220);
  }
  parents.forEach(function(parent){
    parent.addEventListener('mouseenter', function(){ openParent(parent); });
    parent.addEventListener('focusin', function(){ openParent(parent); });
    parent.addEventListener('mouseleave', function(){ scheduleClose(parent); });
  });
  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape') closeAll(null);
  });
})();


/* FINAL PATCH — close inactive mega menus when moving between top-level nav items */
(function(){
  var nav = document.getElementById('menu-main-nav');
  if(!nav) return;
  var items = nav.querySelectorAll('li.megaparent, li.menu-item-has-children');
  items.forEach(function(item){
    item.addEventListener('mouseenter', function(){
      items.forEach(function(other){ if(other !== item){ other.classList.remove('dp-mega-active'); }});
      item.classList.add('dp-mega-active');
      document.body.classList.add('dp-force-close-megas');
      window.setTimeout(function(){ document.body.classList.remove('dp-force-close-megas'); }, 16);
    });
    item.addEventListener('mouseleave', function(){
      window.setTimeout(function(){ item.classList.remove('dp-mega-active'); }, 120);
    });
  });
})();


/* =======================================================================
   FINAL PATCH — SERVICES PAGE JS FROM USER TXT, GUARDED + ISOLATED
   ======================================================================= */
(function(){
  const root = document;
  const $ = (s, r = root) => r.querySelector(s);
  const $$ = (s, r = root) => Array.from(r.querySelectorAll(s));
  const menu = $('[data-menu]');
  const backdrop = $('.dp-menu-backdrop');
  function closeMenu(){ if(menu) menu.classList.remove('is-open'); if(backdrop) backdrop.classList.remove('is-open'); }
  function openMenu(){ if(menu) menu.classList.add('is-open'); if(backdrop) backdrop.classList.add('is-open'); }
  $$('[data-menu-open]').forEach(el => el.addEventListener('click', openMenu));
  $$('[data-menu-close], [data-menu-link]').forEach(el => el.addEventListener('click', closeMenu));
  const form = $('[data-service-form]');
  if(form){
    form.addEventListener('submit', function(event){
      event.preventDefault();
      if(!this.checkValidity()){ this.reportValidity(); return; }
      const data = new FormData(this);
      const body = ['Service consultation request','Name: ' + data.get('name'),'Email: ' + data.get('email'),'Phone: ' + data.get('phone'),'ZIP: ' + data.get('zip'),'Project Type: ' + data.get('service'),'Area: ' + data.get('area'),'Details: ' + data.get('message')].join('\n');
      const msg = $('[data-form-message]');
      if(msg) msg.textContent = 'Opening a prepared email request...';
      window.location.href = 'mailto:jack@diversifiedplus.com?subject=' + encodeURIComponent('Diversified Plus service consultation') + '&body=' + encodeURIComponent(body);
    });
  }
  const locationCopy = {
    westchester: { title: 'Westchester County Construction Services', copy: 'Diversified Plus supports Westchester County homeowners looking for kitchen renovation contractors, bath remodelers, home addition builders, basement finishing contractors, deck builders, siding installers, roofing coordination and full-service residential construction management.' },
    putnam: { title: 'Putnam County Renovation & Addition Contractor', copy: 'For Putnam County projects, the page targets local searches around home additions, garage additions, in-law suites, finished basements, outdoor living, composite decking, exterior siding, roofing and owner-led general contracting.' },
    connecticut: { title: 'Southern Connecticut Remodeling & Exterior Services', copy: 'Southern Connecticut service keywords include kitchen remodeling near me, bathroom renovation contractor, deck builder, siding installer, green building contractor, composite decking installer, commercial carpentry and full-service construction management.' },
    local: { title: 'Town-Level SEO Keywords', copy: 'Town-level content can support searches in New Rochelle, Mamaroneck, Bedford, North Salem, Lake Waccabuc, lower Westchester, upper Westchester, Putnam communities and nearby southern Connecticut towns.' }
  };
  $$('[data-location]').forEach(button => button.addEventListener('click', () => {
    const item = locationCopy[button.dataset.location];
    if(!item) return;
    $$('[data-location]').forEach(btn => btn.classList.toggle('is-active', btn === button));
    const t = $('[data-location-title]');
    const c = $('[data-location-copy]');
    if(t) t.textContent = item.title;
    if(c) c.textContent = item.copy;
  }));
  document.addEventListener('keydown', event => { if(event.key === 'Escape') closeMenu(); });
})();


/* FINAL USER PATCH — header consistency + one mega menu open at a time */
(function(){
  try{
    var path=(window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
    if(path === 'index.html' || path === '') document.body.classList.add('dp-home-page');
    var parents=document.querySelectorAll('#menu-main-nav > li.megaparent, #menu-main-nav > li.dp-services-mega-parent, #menu-main-nav > li.dp-news-mega-parent');
    parents.forEach(function(parent){
      parent.addEventListener('mouseenter', function(){ parents.forEach(function(other){ if(other!==parent){ other.classList.remove('dp-mega-open','dp-news-open'); other.classList.add('dp-mega-suppressed'); } }); parent.classList.remove('dp-mega-suppressed'); });
      parent.addEventListener('mouseleave', function(){ setTimeout(function(){ parent.classList.remove('dp-mega-open','dp-news-open','dp-mega-suppressed'); }, 120); });
    });
    var nav=document.querySelector('.section-nav');
    function syncScroll(){ document.body.classList.toggle('dp-nav-scrolled', window.scrollY > 8); }
    syncScroll(); window.addEventListener('scroll', syncScroll, {passive:true});
  }catch(e){ console.warn('Final header patch skipped', e); }
})();


/* FINAL USER PATCH — synced mega menu behavior on homepage and all pages */
(function(){
  var nav=document.getElementById('menu-main-nav');
  if(!nav) return;
  var items=Array.prototype.slice.call(nav.querySelectorAll(':scope > li'));
  var closeTimer=null;
  function closeAll(except){
    items.forEach(function(li){ if(li!==except) li.classList.remove('dp-mega-active'); });
  }
  items.forEach(function(li){
    var mega=li.querySelector(':scope > .dp-services-mega-menu');
    li.addEventListener('mouseenter', function(){ clearTimeout(closeTimer); closeAll(li); if(mega) li.classList.add('dp-mega-active'); });
    li.addEventListener('focusin', function(){ clearTimeout(closeTimer); closeAll(li); if(mega) li.classList.add('dp-mega-active'); });
    li.addEventListener('mouseleave', function(){ closeTimer=setTimeout(function(){ li.classList.remove('dp-mega-active'); }, 140); });
  });
  document.addEventListener('mousemove', function(e){ if(!nav.contains(e.target)){ closeTimer=setTimeout(function(){ closeAll(null); }, 180); } });
})();


/* =====================================================================
   CRITICAL FINAL NAV JS FAILSAFE — keeps attention/secondary bars stable.
   ===================================================================== */
try {
(function(){
  function stabilizeNavBars(){
    document.querySelectorAll('.section-nav .sm-bugme, .section-nav .sm-bugme .container-fluid').forEach(function(el){
      el.style.backgroundColor = '#002949';
      el.style.color = '#FFFFFF';
      el.style.opacity = '1';
      el.style.visibility = 'visible';
      el.style.filter = 'none';
    });
    document.querySelectorAll('.section-nav .sm-bugme a, .section-nav .sm-bugme *').forEach(function(el){
      el.style.color = '#FFFFFF';
    });
    document.querySelectorAll('.section-nav .dp-top-nav-secondary-bar').forEach(function(el){
      el.style.display = 'block';
      el.style.visibility = 'visible';
      el.style.opacity = '1';
      el.style.height = 'auto';
      el.style.minHeight = '34px';
      el.style.backgroundColor = '#FFFFFF';
      el.style.color = '#002949';
    });
    if(document.body.classList.contains('dp-nav-scrolled')){
      document.querySelectorAll('#menu-main-nav > li > a, #menu-main-nav > li > button, #menu-main-nav > li > .dp-services-mega-trigger, #menu-main-nav > li > .dp-news-mega-trigger').forEach(function(el){
        el.style.color = '#002949';
      });
    }
  }
  document.addEventListener('DOMContentLoaded', stabilizeNavBars);
  window.addEventListener('load', stabilizeNavBars);
  window.addEventListener('scroll', stabilizeNavBars, {passive:true});
  document.addEventListener('mouseover', function(e){ if(e.target.closest && e.target.closest('.section-nav')) stabilizeNavBars(); }, true);
  stabilizeNavBars();
})();
} catch(error) { console.warn('Critical nav failsafe skipped:', error); }


/* FINAL USER PATCH — keep desktop Services menu item linked to services.html */
(function(){
  function fixServicesLinks(){
    var services = document.querySelector('#menu-main-nav > li.dp-services-mega-parent:first-child > a.dp-services-mega-trigger');
    var projects = document.querySelector('#menu-main-nav > li.dp-services-mega-parent:nth-of-type(3) > a.dp-services-mega-trigger');
    if(services){
      services.setAttribute('href','services.html');
      services.dataset.serviceLink='services.html';
    }
    if(projects){
      projects.setAttribute('href','projects.html');
      projects.dataset.serviceLink='projects.html';
    }
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', fixServicesLinks);
  else fixServicesLinks();
  window.addEventListener('load', fixServicesLinks);
})();

/* FINAL USER PATCH — force desktop Services and News top-level clicks to navigate */
(function(){
  function wireTopLevelNav(){
    var services = document.querySelector('#menu-main-nav > li.dp-services-mega-parent > a.dp-services-mega-trigger');
    var projects = document.querySelectorAll('#menu-main-nav > li.dp-services-mega-parent > a.dp-services-mega-trigger')[1];
    var news = document.querySelector('#menu-main-nav > li.dp-news-mega-parent > a.dp-news-mega-trigger');

    [
      [services, 'services.html'],
      [projects, 'projects.html'],
      [news, 'news.html']
    ].forEach(function(pair){
      var link = pair[0];
      var href = pair[1];
      if(!link) return;

      link.setAttribute('href', href);
      if(link.classList.contains('dp-services-mega-trigger')){
        link.dataset.serviceLink = href;
      }

      if(link.dataset.dpDirectNavBound === 'true') return;
      link.dataset.dpDirectNavBound = 'true';

      link.addEventListener('click', function(event){
        if(event.button !== 0) return;
        if(event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        event.preventDefault();
        event.stopPropagation();
        window.location.assign(href);
      });
    });
  }

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', wireTopLevelNav);
  else wireTopLevelNav();
  window.addEventListener('load', wireTopLevelNav);
})();


// === DP KITCHEN MODERN PAGE JS ===
(function(){
  document.querySelectorAll('[data-dp-kitchen-accordion]').forEach(function(group){
    group.querySelectorAll('.dp-kitchen-acc-item').forEach(function(item){
      item.classList.remove('is-active');
      var b = item.querySelector('b'); if(b) b.textContent = '+';
      var trigger = item.querySelector('button'); if(trigger) trigger.setAttribute('aria-expanded','false');
    });
    group.querySelectorAll('.dp-kitchen-acc-item button').forEach(function(btn){
      btn.addEventListener('click', function(){
        var item = btn.closest('.dp-kitchen-acc-item');
        var shouldOpen = !item.classList.contains('is-active');
        group.querySelectorAll('.dp-kitchen-acc-item').forEach(function(other){
          var open = shouldOpen && other === item;
          other.classList.toggle('is-active', open);
          var b = other.querySelector('b'); if(b) b.textContent = open ? '−' : '+';
          var trigger = other.querySelector('button'); if(trigger) trigger.setAttribute('aria-expanded', open ? 'true' : 'false');
        });
      });
    });
  });
  document.querySelectorAll('[data-dp-kitchen-slider]').forEach(function(slider){
    var input = slider.querySelector('.dp-kitchen-slider-input');
    var after = slider.querySelector('[data-dp-kitchen-after]');
    var line = slider.querySelector('[data-dp-kitchen-line]');
    function update(){
      var v = input ? input.value : 50;
      if(after) after.style.clipPath = 'inset(0 0 0 '+v+'%)';
      if(line) line.style.left = v + '%';
    }
    if(input){ input.addEventListener('input', update); update(); }
  });
})();


/* Kitchen Services before/after comparison slider */
(function(){
  function initKitchenBeforeAfter(){
    document.querySelectorAll('[data-dpkf-ba]').forEach(function(slider){
      var input = slider.querySelector('.dpkf-ba-range');
      if(!input || input.dataset.dpkfBound === 'true') return;
      input.dataset.dpkfBound = 'true';
      function update(){
        var value = Math.max(0, Math.min(100, Number(input.value) || 52));
        slider.style.setProperty('--dpkf-ba-pos', value + '%');
      }
      input.addEventListener('input', update, {passive:true});
      input.addEventListener('change', update, {passive:true});
      update();
    });
  }
  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', initKitchenBeforeAfter);
  }else{
    initKitchenBeforeAfter();
  }
})();

/* FINAL USER PATCH — rebuild active mobile drawer from real nav and keep labels/links in sync */
(function(){
  var MOBILE_MAX = 1199;

  function isMobile(){
    return window.matchMedia('(max-width:' + MOBILE_MAX + 'px)').matches;
  }

  function qs(sel, root){ return (root || document).querySelector(sel); }
  function qsa(sel, root){ return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function esc(value){
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function getMenuSource(){
    return qs('#mmenu .dp-mobile-main-list') || qs('#mmenu .mm-listview') || qs('#menu-main-nav');
  }

  function parseList(list){
    return qsa(':scope > li', list).map(function(item){
      var link = qs(':scope > a', item);
      if(!link) return null;
      var childList = qs(':scope > ul', item);
      return {
        label: (link.textContent || '').replace(/\s+/g, ' ').trim(),
        href: link.getAttribute('href') || '#',
        children: childList ? parseList(childList) : []
      };
    }).filter(Boolean);
  }

  function buildItems(items, level){
    return items.map(function(item, index){
      if(item.children && item.children.length){
        var id = 'rb-mobile-final-submenu-' + level + '-' + index + '-' + item.label.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        return '' +
          '<div class="rb-mobile-item rb-has-submenu dp-mobile-final-item dp-mobile-final-item--has-submenu">' +
            '<button class="rb-mobile-submenu-toggle dp-mobile-final-toggle" type="button" aria-expanded="false" aria-controls="' + esc(id) + '">' + esc(item.label) + '</button>' +
            '<div class="rb-mobile-submenu dp-mobile-final-submenu" id="' + esc(id) + '" hidden>' + buildItems(item.children, level + 1) + '</div>' +
          '</div>';
      }
      return '<a class="rb-mobile-link dp-mobile-final-link" href="' + esc(item.href) + '">' + esc(item.label) + '</a>';
    }).join('');
  }

  function buildDrawerMarkup(){
    var items = parseList(getMenuSource());
    if(!items.length){
      items = [
        { label: 'Services', href: 'services.html', children: [] },
        { label: 'Company', href: 'about.html', children: [] },
        { label: 'Projects', href: 'projects.html', children: [] },
        { label: 'News', href: 'news.html', children: [] },
        { label: 'Contact', href: 'contact.html', children: [] }
      ];
    }

    return '' +
      '<div class="rb-mobile-drawer__head dp-mobile-final-head">' +
        '<span class="rb-mobile-drawer__brand dp-mobile-final-brand">Diversified Plus Construction</span>' +
        '<button class="rb-mobile-drawer__close dp-mobile-final-close" type="button" aria-label="Close mobile menu">×</button>' +
      '</div>' +
      '<nav class="rb-mobile-drawer__nav dp-mobile-final-nav" aria-label="Mobile navigation">' + buildItems(items, 0) + '</nav>' +
      '<div class="rb-mobile-drawer__cta dp-mobile-final-cta"><a class="dp-mobile-final-cta-link" href="tel:9148790442">Call 914.879.0442</a></div>';
  }

  function wireDrawer(drawer){
    var close = function(){
      document.body.classList.remove('rb-mobile-menu-open');
      drawer.setAttribute('aria-hidden', 'true');
      var button = qs('.rb-mobile-hamburger');
      if(button){
        button.setAttribute('aria-expanded', 'false');
        button.setAttribute('aria-label', 'Open mobile menu');
      }
    };

    var closeBtn = qs('.rb-mobile-drawer__close', drawer);
    if(closeBtn) closeBtn.onclick = close;

    qsa('.rb-mobile-submenu-toggle', drawer).forEach(function(btn){
      btn.onclick = function(){
        var panel = document.getElementById(btn.getAttribute('aria-controls'));
        var willOpen = btn.getAttribute('aria-expanded') !== 'true';
        btn.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
        if(panel){
          panel.hidden = !willOpen;
          panel.classList.toggle('is-open', willOpen);
        }
      };
    });

    qsa('a', drawer).forEach(function(link){
      link.onclick = function(){
        close();
      };
    });
  }

  function applyFinalDrawerTheme(drawer){
    if(!drawer) return;
    drawer.style.background = '#002949';
    drawer.style.color = '#FFFFFF';
    drawer.style.borderLeft = '1px solid rgba(255,255,255,.1)';
    drawer.style.boxShadow = '-24px 0 60px rgba(0,0,0,.34)';

    var head = qs('.dp-mobile-final-head', drawer);
    if(head){
      head.style.background = '#002949';
      head.style.borderBottom = '1px solid rgba(255,255,255,.12)';
    }

    qsa('.dp-mobile-final-brand', drawer).forEach(function(el){
      el.style.color = '#FFFFFF';
    });

    qsa('.dp-mobile-final-close', drawer).forEach(function(el){
      el.style.background = 'transparent';
      el.style.color = '#FFFFFF';
      el.style.border = '1px solid rgba(255,255,255,.24)';
    });

    qsa('.dp-mobile-final-nav', drawer).forEach(function(el){
      el.style.padding = '10px 24px 4px';
      el.style.background = 'transparent';
    });

    qsa('.dp-mobile-final-link, .dp-mobile-final-toggle', drawer).forEach(function(el){
      el.style.display = 'flex';
      el.style.alignItems = 'center';
      el.style.justifyContent = 'space-between';
      el.style.width = '100%';
      el.style.minHeight = '56px';
      el.style.margin = '0';
      el.style.padding = '0';
      el.style.background = 'transparent';
      el.style.color = '#FFFFFF';
      el.style.border = '0';
      el.style.borderBottom = '1px solid rgba(255,255,255,.10)';
      el.style.borderRadius = '0';
      el.style.boxShadow = 'none';
      el.style.fontSize = '1rem';
      el.style.lineHeight = '1.35';
      el.style.fontWeight = '800';
      el.style.letterSpacing = '.04em';
      el.style.textTransform = 'uppercase';
      el.style.textAlign = 'left';
      el.style.textDecoration = 'none';
      el.style.opacity = '1';
    });

    qsa('.dp-mobile-final-submenu', drawer).forEach(function(el){
      el.style.margin = '0 0 10px';
      el.style.padding = '8px 0 4px 16px';
      el.style.background = 'rgba(255,255,255,.05)';
      el.style.border = '0';
      el.style.borderLeft = '1px solid rgba(255,255,255,.12)';
    });

    qsa('.dp-mobile-final-submenu .dp-mobile-final-link, .dp-mobile-final-submenu a', drawer).forEach(function(el){
      el.style.display = 'block';
      el.style.minHeight = '0';
      el.style.margin = '0';
      el.style.padding = '11px 0';
      el.style.background = 'transparent';
      el.style.color = 'rgba(255,255,255,.84)';
      el.style.border = '0';
      el.style.boxShadow = 'none';
      el.style.fontSize = '.95rem';
      el.style.lineHeight = '1.45';
      el.style.fontWeight = '650';
      el.style.letterSpacing = '.02em';
      el.style.textTransform = 'none';
      el.style.textDecoration = 'none';
    });

    qsa('.dp-mobile-final-cta', drawer).forEach(function(el){
      el.style.padding = '20px 24px 28px';
    });

    qsa('.dp-mobile-final-cta-link', drawer).forEach(function(el){
      el.style.display = 'flex';
      el.style.alignItems = 'center';
      el.style.justifyContent = 'center';
      el.style.minHeight = '48px';
      el.style.width = '100%';
      el.style.margin = '0';
      el.style.padding = '0 18px';
      el.style.background = '#FFFFFF';
      el.style.color = '#002949';
      el.style.border = '1px solid #FFFFFF';
      el.style.borderRadius = '0';
      el.style.boxShadow = 'none';
      el.style.fontSize = '.82rem';
      el.style.lineHeight = '1';
      el.style.fontWeight = '900';
      el.style.letterSpacing = '.08em';
      el.style.textTransform = 'uppercase';
      el.style.textDecoration = 'none';
    });
  }

  function rebuildActiveDrawer(){
    if(!isMobile()) return;
    var drawer = qs('.rb-mobile-drawer');
    if(!drawer) return;
    drawer.classList.add('dp-mobile-final-drawer');
    drawer.innerHTML = buildDrawerMarkup();
    drawer.setAttribute('aria-hidden', document.body.classList.contains('rb-mobile-menu-open') ? 'false' : 'true');
    wireDrawer(drawer);
    applyFinalDrawerTheme(drawer);
  }

  function init(){
    rebuildActiveDrawer();
  }

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
  window.addEventListener('load', init);
  window.addEventListener('resize', function(){
    if(isMobile()) rebuildActiveDrawer();
  });
})();

/* FINAL USER PATCH 27 JS — ENSURE 5-TILE PROJECT MOSAIC */
(function(){
  'use strict';
  function buildProjectMosaicTiles(){
    document.querySelectorAll('.dp-case-tab-panel .dp-case-slider-track').forEach(function(track){
      if(track.dataset.dpMosaicReady === 'true') return;
      track.dataset.dpMosaicReady = 'true';
      var cards = Array.prototype.slice.call(track.querySelectorAll('.dp-case-slide-card'));
      if(cards.length !== 4) return;
      var clone = cards[3].cloneNode(true);
      clone.classList.add('dp-case-slide-card-clone');
      var img = clone.querySelector('img');
      if(img){
        img.alt = (img.alt || 'Project image') + ' duplicate mosaic view';
      }
      track.appendChild(clone);
    });
  }

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', buildProjectMosaicTiles);
  else buildProjectMosaicTiles();
  window.addEventListener('load', buildProjectMosaicTiles);
})();


/* FINAL USER PATCH 28 JS — CASE GALLERY LIGHTBOX WITH ARROWS */
(function(){
  'use strict';

  function initCaseGalleryLightbox(){
    var lightbox = document.getElementById('dp-lightbox');
    if(!lightbox || lightbox.dataset.dpCaseGalleryReady === 'true') return;
    lightbox.dataset.dpCaseGalleryReady = 'true';

    var image = lightbox.querySelector('.dp-lightbox__image');
    var caption = lightbox.querySelector('.dp-lightbox__caption');
    var inner = lightbox.querySelector('.dp-lightbox__inner');
    var close = lightbox.querySelector('.dp-lightbox__close');
    if(!image || !caption || !inner || !close) return;

    var prev = document.createElement('button');
    prev.type = 'button';
    prev.className = 'dp-lightbox__nav dp-lightbox__nav--prev';
    prev.setAttribute('aria-label', 'Previous image');
    prev.innerHTML = '<span aria-hidden="true">←</span>';

    var next = document.createElement('button');
    next.type = 'button';
    next.className = 'dp-lightbox__nav dp-lightbox__nav--next';
    next.setAttribute('aria-label', 'Next image');
    next.innerHTML = '<span aria-hidden="true">→</span>';

    inner.appendChild(prev);
    inner.appendChild(next);

    var items = [];
    var index = 0;

    function collectItems(activeItem){
      var scope = activeItem.closest('.dp-case-project-gallery-tabs, .dp-case-visual-grid, .dp-case-inline-carousel, .dp-case-inline-gallery, .dp-case-visual-section') || document;
      return Array.prototype.slice.call(scope.querySelectorAll('.dp-case-image-card, .dp-case-slide-card, .dp-case-inline-carousel-item')).map(function(node){
        var img = node.querySelector('img');
        var capNode = node.querySelector('figcaption');
        var labelNode = capNode ? capNode.querySelector('span') : node.querySelector('span');
        var copy = capNode ? capNode.cloneNode(true) : null;
        if(copy){
          var span = copy.querySelector('span');
          if(span) span.remove();
        }
        return {
          node: node,
          src: img ? img.getAttribute('src') : '',
          caption: copy ? copy.textContent.replace(/\s+/g, ' ').trim() : '',
          label: labelNode ? labelNode.textContent.replace(/\s+/g, ' ').trim() : ''
        };
      }).filter(function(entry){ return entry.src; });
    }

    function render(){
      if(!items.length) return;
      var item = items[index];
      image.src = item.src;
      image.alt = item.caption || item.label || 'Project preview';
      caption.textContent = item.label ? item.label + ' — ' + item.caption : item.caption;
      prev.style.display = items.length > 1 ? 'flex' : 'none';
      next.style.display = items.length > 1 ? 'flex' : 'none';
    }

    function openFrom(target){
      items = collectItems(target);
      index = Math.max(0, items.findIndex(function(entry){ return entry.node === target; }));
      render();
      lightbox.classList.add('is-open');
      lightbox.setAttribute('aria-hidden', 'false');
      lightbox.style.display = 'flex';
    }

    function closeBox(){
      lightbox.classList.remove('is-open');
      lightbox.setAttribute('aria-hidden', 'true');
      lightbox.style.display = '';
    }

    function move(step){
      if(items.length < 2) return;
      index = (index + step + items.length) % items.length;
      render();
    }

    document.querySelectorAll('.dp-case-image-card, .dp-case-slide-card, .dp-case-inline-carousel-item').forEach(function(card){
      if(card.dataset.dpLightboxBound === 'true') return;
      card.dataset.dpLightboxBound = 'true';
      card.style.cursor = 'pointer';
      card.addEventListener('click', function(event){
        if(event.target.closest('a[href], button')) return;
        event.preventDefault();
        openFrom(card);
      });
    });

    prev.addEventListener('click', function(event){
      event.stopPropagation();
      move(-1);
    });

    next.addEventListener('click', function(event){
      event.stopPropagation();
      move(1);
    });

    close.addEventListener('click', closeBox);
    lightbox.addEventListener('click', function(event){
      if(event.target === lightbox) closeBox();
    });

    document.addEventListener('keydown', function(event){
      if(!lightbox.classList.contains('is-open')) return;
      if(event.key === 'ArrowLeft') move(-1);
      if(event.key === 'ArrowRight') move(1);
      if(event.key === 'Escape') closeBox();
    });
  }

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initCaseGalleryLightbox);
  else initCaseGalleryLightbox();
  window.addEventListener('load', initCaseGalleryLightbox);
})();
