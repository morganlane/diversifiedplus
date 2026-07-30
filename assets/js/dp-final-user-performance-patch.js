
/* FINAL USER PATCH — one-open-mega + smoother hover close */
(function(){
  if ('requestIdleCallback' in window) {
    requestIdleCallback(function(){
      document.documentElement.classList.add('dp-perf-idle');
    }, { timeout: 1200 });
  } else {
    window.setTimeout(function(){
      document.documentElement.classList.add('dp-perf-idle');
    }, 700);
  }

  if ('IntersectionObserver' in window) {
    var bgNodes = document.querySelectorAll('[data-bg]');
    var bgObserver = new IntersectionObserver(function(entries, observer){
      entries.forEach(function(entry){
        if (!entry.isIntersecting) return;
        var el = entry.target;
        var bg = el.getAttribute('data-bg');
        if (bg && !el.style.backgroundImage) {
          el.style.backgroundImage = 'url(\"' + bg + '\")';
        }
        observer.unobserve(el);
      });
    }, { rootMargin: '300px 0px' });
    bgNodes.forEach(function(node){ bgObserver.observe(node); });
  }

  document.addEventListener('DOMContentLoaded', function(){
    var imgs = document.querySelectorAll('img:not([loading])');
    imgs.forEach(function(img, index){
      if (index > 2) img.setAttribute('loading', 'lazy');
      img.setAttribute('decoding', 'async');
    });
  });

  const nav=document.querySelector('#menu-main-nav');
  if(!nav) return;
  const parents=[...nav.querySelectorAll('.megaparent')];
  let timer=null;
  function closeAll(except){parents.forEach(p=>{if(p!==except){p.classList.remove('dp-mega-active'); const a=p.querySelector('a[aria-expanded]'); if(a)a.setAttribute('aria-expanded','false');}})}
  parents.forEach(parent=>{
    const trigger=parent.querySelector(':scope > a');
    const menu=parent.querySelector('.dp-services-mega-menu, .sub-menu');
    if(!menu) return;
    function open(){clearTimeout(timer); closeAll(parent); parent.classList.add('dp-mega-active'); if(trigger) trigger.setAttribute('aria-expanded','true');}
    function delayedClose(){clearTimeout(timer); timer=setTimeout(()=>{parent.classList.remove('dp-mega-active'); if(trigger) trigger.setAttribute('aria-expanded','false');},160);}
    parent.addEventListener('mouseenter',open);
    parent.addEventListener('focusin',open);
    parent.addEventListener('mouseleave',delayedClose);
    menu.addEventListener('mouseenter',open);
    menu.addEventListener('mouseleave',delayedClose);
  });
  document.addEventListener('mouseover', e=>{ if(!nav.contains(e.target)) closeAll(null); });
})();

/* FINAL 2026-07-01 — one-open stable desktop mega hover for Services/Projects/News */
(function(){
  'use strict';
  const nav = document.querySelector('#site-header #menu-main-nav');
  if(!nav) return;
  const parents = Array.from(nav.querySelectorAll(':scope > li.megaparent, :scope > li.dp-services-mega-parent, :scope > li.dp-news-mega-parent'));
  let timer = null;
  function triggerOf(parent){ return parent.querySelector(':scope > a[aria-haspopup], :scope > a'); }
  function menuOf(parent){ return parent.querySelector(':scope > .dp-services-mega-menu, :scope > .dp-news-mega-menu, :scope > .mega-container, :scope > .sub-menu'); }
  function close(parent){
    if(!parent) return;
    parent.classList.remove('dp-mega-active','dp-mega-open','dp-news-open');
    const trigger = triggerOf(parent);
    if(trigger && trigger.hasAttribute('aria-expanded')) trigger.setAttribute('aria-expanded','false');
  }
  function closeAll(except){ parents.forEach(parent => { if(parent !== except) close(parent); }); }
  function open(parent){
    window.clearTimeout(timer);
    closeAll(parent);
    parent.classList.add('dp-mega-active','dp-mega-open');
    if(parent.classList.contains('dp-news-mega-parent')) parent.classList.add('dp-news-open');
    const trigger = triggerOf(parent);
    if(trigger && trigger.hasAttribute('aria-expanded')) trigger.setAttribute('aria-expanded','true');
  }
  function closeSoon(parent){
    window.clearTimeout(timer);
    timer = window.setTimeout(function(){ close(parent); }, 240);
  }
  parents.forEach(function(parent){
    const menu = menuOf(parent);
    const trigger = triggerOf(parent);
    parent.addEventListener('pointerenter', function(){ open(parent); });
    parent.addEventListener('pointerleave', function(){ closeSoon(parent); });
    parent.addEventListener('focusin', function(){ open(parent); });
    parent.addEventListener('focusout', function(event){ if(!parent.contains(event.relatedTarget)) closeSoon(parent); });
    if(menu){
      menu.addEventListener('pointerenter', function(){ open(parent); });
      menu.addEventListener('pointerleave', function(){ closeSoon(parent); });
    }
    if(trigger){
      trigger.addEventListener('keydown', function(event){
        if(event.key === 'Escape') close(parent);
      });
    }
  });
  document.addEventListener('pointerover', function(event){ if(!nav.contains(event.target)) closeAll(null); });
  document.addEventListener('keydown', function(event){ if(event.key === 'Escape') closeAll(null); });
})();
