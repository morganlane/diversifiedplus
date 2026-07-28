/* Diversified Plus v54 — product selector image restoration. */
(function(){
  function restoreProductSelectorImages(){
    var nodes = document.querySelectorAll('.wrapper-section-prod-selector .prod-selector-bg-image');
    nodes.forEach(function(el){
      var bg = el.getAttribute('data-bg') || '';
      if(!bg){
        var inlineBg = el.style && el.style.backgroundImage ? el.style.backgroundImage : '';
        var match = inlineBg.match(/url\(["']?([^"')]+)["']?\)/i);
        bg = match ? match[1] : '';
      }
      if(bg){
        el.style.setProperty('background-image', 'url("' + bg + '")', 'important');
        el.style.setProperty('background-size', 'cover', 'important');
        el.style.setProperty('background-position', 'center center', 'important');
        el.style.setProperty('background-repeat', 'no-repeat', 'important');
        el.style.setProperty('display', 'block', 'important');
        el.style.setProperty('visibility', 'visible', 'important');
        el.style.setProperty('opacity', '1', 'important');
        el.setAttribute('data-dp-image-filled', 'true');
      }
    });
  }
  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', restoreProductSelectorImages);
  }else{
    restoreProductSelectorImages();
  }
  window.addEventListener('load', restoreProductSelectorImages);
})();
