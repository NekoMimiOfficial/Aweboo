window.addEventListener('load', function() {
  if (window.innerWidth >= 1280) { //change back to 600
    loadCSS('/static/css/dex.css');
  }else{
    loadCSS('/static/css/mobile.css');
  }
});

function loadCSS(url) {
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = url;
  document.head.appendChild(link);
}
