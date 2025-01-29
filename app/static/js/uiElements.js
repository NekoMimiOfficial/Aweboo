//CONSTANTS:
//~~~~~~~~~~
const BLUR_AMMOUNT = '8';

//FLAGS:
//~~~~~~
var FLAG_mobile = false;

async function connectPFP(userImage){
  document.getElementById('user-pfp').src = userImage;
  document.getElementById('css-pfp').style.animationName = 'show-pfp';
  await new Promise(resolve => setTimeout(resolve, 650));
  document.getElementById('user-pfp').style.display = 'block';
}

function enableBlur(){
  var searchBar = document.getElementById('loader-body');
  var nav = document.getElementById('global-navigation');

  const rootStyles = getComputedStyle(document.documentElement);
  const navBlur = rootStyles.getPropertyValue('--navbar-blur');
  const srchBlur = rootStyles.getPropertyValue('--search-bar-blur');
  
  searchBar.style.backgroundColor = srchBlur;
  searchBar.style.backdropFilter = 'blur('+BLUR_AMMOUNT+'px)';

  nav.style.backgroundColor = navBlur;
  nav.style.backdropFilter = 'blur('+BLUR_AMMOUNT+'px)';
}

function showUI(){
  const opener = document.getElementById('loader-body');

  if (FLAG_mobile){
    opener.style.animationName = 'opening';
    opener.style.top = '10px';
    opener.style.left = '50%';
    opener.style.transform = 'translate(-50%, 0)';
    opener.style.height = '54px';
    opener.style.width = 'calc(100% - 140px)';
    opener.style.borderRadius = '25px';
    opener.style.fontSize = '20px';
  }
}

function sleep(ms){
  return new Promise(resolve => setTimeout(resolve, ms));
}

