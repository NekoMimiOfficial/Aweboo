window.addEventListener('load', function (){
  main();
});

async function main(){
  const contentArea = document.getElementById('content');
  showUI();
  await sleep(3000);
  loadNav();
  contentArea.appendChild(renderGlance());
  contentArea.appendChild(renderBobber());
  contentArea.appendChild(renderGlancePlug());
  contentArea.appendChild(renderWatchHint());
  contentArea.appendChild(renderNowWatching());
  contentArea.appendChild(renderFooter());
  enableBlur();
  getData('/API/user.pfp')
  .then(data => {
    connectPFP(data['url']);
  });
}
