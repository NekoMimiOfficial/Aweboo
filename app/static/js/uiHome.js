function renderGlance(){
  const glance = document.createElement('div');
  glance.className = 'glance';
  glance.textContent = 'Welcome back, Neko!';

  return glance;
}

function renderNowWatching(){
  const nowWatch = document.createElement('div');
  nowWatch.className = 'list-watching';

  return nowWatch;
}

function renderWatchHint(){
  const watchHint = document.createElement('div');
  watchHint.className = 'watch-hint';
  watchHint.textContent = 'Anime status';

  return watchHint;
}

function renderGlancePlug(){
  const glancePlug = document.createElement('div');
  glancePlug.className = 'glance-plug';

  return glancePlug;
}

function renderFooter(){
  const footer = document.createElement('div');
  footer.className = 'ui-footer';

  return footer;
}

function renderBobber(){
  const bobber = document.createElement('div');
  bobber.className = 'home-bobber';
  bobber.textContent = '>';

  return bobber;
}
