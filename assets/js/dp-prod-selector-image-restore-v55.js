(function(){
  function restoreProductSelectorImages(){
    var nodes = document.querySelectorAll('.wrapper-section-prod-selector .prod-selector-bg-image[data-bg]');
    nodes.forEach(function(el){
      var bg = (el.getAttribute('data-bg') || '').trim();
      if(!bg) return;
      el.style.setProperty('background-image', "url('" + bg.replace(/'/g, "%27") + "')", 'important');
      el.style.setProperty('background-size', 'cover', 'important');
      el.style.setProperty('background-position', 'center', 'important');
      el.style.setProperty('background-repeat', 'no-repeat', 'important');
      el.style.setProperty('opacity', '1', 'important');
      el.style.setProperty('visibility', 'visible', 'important');
      el.style.setProperty('display', 'block', 'important');
    });
  }
  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', restoreProductSelectorImages);
  } else {
    restoreProductSelectorImages();
  }
  window.addEventListener('load', restoreProductSelectorImages);
  document.addEventListener('click', function(evt){
    if(evt.target && evt.target.closest && evt.target.closest('.wrapper-section-prod-selector')){
      setTimeout(restoreProductSelectorImages, 0);
      setTimeout(restoreProductSelectorImages, 250);
    }
  });
})();
