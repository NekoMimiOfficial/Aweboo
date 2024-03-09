window.addEventListener('load', function() {
  if (window.innerWidth >= 1280) { //change back to 600
    loadCSS('/static/css/dex.css');
  }else{
    loadCSS('/static/css/mobile.css');
  }

  loadCSS('/static/themes/'+FLASK_theme+'.css');
});

function loadCSS(url) {
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = url;
  document.head.appendChild(link);
}

async function notify(msg, timeout){
  const contentArea = document.getElementById('content');
  const notifier = document.createElement('div');
  notifier.className = 'notification';
  notifier.textContent = msg;

  contentArea.appendChild(notifier);

  await new Promise(resolve => setTimeout(resolve, timeout*1000));

  contentArea.removeChild(notifier);
}

function loadNav() {
  var nav = document.createElement('div');
  nav.id = 'global-navigation';
  nav.className = 'nav-bar';

  var homeLink = document.createElement('a');
  var libraryLink = document.createElement('a');
  var animeLink = document.createElement('a');

  document.body.appendChild(nav);
  nav.appendChild(homeLink);
  nav.appendChild(libraryLink);
  nav.appendChild(animeLink);

  var homeIcon = document.createElement('div');
  homeIcon.className = 'nav-element';
  homeIcon.textContent = '';

  var libraryIcon = document.createElement('div');
  libraryIcon.className = 'nav-element';
  libraryIcon.textContent = '󰉋';

  var animeIcon = document.createElement('div');
  animeIcon.className = 'nav-element';
  animeIcon.textContent = '';

  homeLink.appendChild(homeIcon);
  libraryLink.appendChild(libraryIcon);
  animeLink.appendChild(animeIcon);
}
