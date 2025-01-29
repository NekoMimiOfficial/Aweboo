window.addEventListener('load', function (){
  main();
});

async function main(){
  const contentArea = document.getElementById('content');
  await sleep(500);
  showUI();
  loadNav();
  enableBlur();
  await sleep(3000);
  contentArea.appendChild(renderGlance());
  contentArea.appendChild(renderBobber());
  contentArea.appendChild(renderGlancePlug());
  contentArea.appendChild(renderWatchHint());
  contentArea.appendChild(renderNowWatching());
  contentArea.appendChild(renderFooter());
  getData('/API/user.pfp')
  .then(data => {
    connectPFP(data['url']);
  });
  notify('[i]UI ready', 3);
}
