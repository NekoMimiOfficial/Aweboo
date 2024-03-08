window.addEventListener('load', function () {
  main();
});

async function connectPFP(userImage) {
  document.getElementById('user-pfp').src = userImage;
  document.getElementById('css-pfp').style.animationName = 'show-pfp';
  await new Promise(resolve => setTimeout(resolve, 650));
  document.getElementById('user-pfp').style.display = 'block';
}

function showUI(){
  document.getElementById('loader-body').style.animationName = 'opening';
}

function sleep(ms){
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main(){
  await sleep(3000);
  connectPFP('/static/neko.png');
  loadNav();
  showUI();
}
