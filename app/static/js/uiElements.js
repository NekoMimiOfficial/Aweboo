async function connectPFP(userImage){
  document.getElementById('user-pfp').src = userImage;
  document.getElementById('css-pfp').style.animationName = 'show-pfp';
  await new Promise(resolve => setTimeout(resolve, 650));
  document.getElementById('user-pfp').style.display = 'block';
}

function enableBlur(){
  var search = document.getElementById('loader-body');
  var nav = document.getElementById('global-navigation');

  search.className = 'search-body search-body-blur';
  nav.className = 'nav-bar nav-bar-blur';
}

function showUI(){
  document.getElementById('loader-body').style.animationName = 'opening';
}

function sleep(ms){
  return new Promise(resolve => setTimeout(resolve, ms));
}

