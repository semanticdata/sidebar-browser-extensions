let currentTabId;
let whatsappTabId;
let previousTab;

function onError(e) {
  console.log("***Error: " + e);
}

function setButtonIcon(imageURL) {
  try {
    browser.browserAction.setIcon({ path: imageURL });
  } catch (e) {
    onError(e);
  }
}

function createPinnedTab() {
  browser.tabs.create({
    url: "https://web.whatsapp.com",
    pinned: true,
    active: true,
  });
}

function handleSearch(whatsappTabs) {
  //console.log("currentTabId: " + currentTabId);
  if (whatsappTabs.length > 0) {
    //console.log("there is a calendar tab");
    whatsappTabId = whatsappTabs[0].id;
    if (whatsappTabId === currentTabId) {
      //console.log("I'm in the drive tab");
      browser.tabs.update(previousTab, { active: true });
    } else {
      //console.log("I'm NOT in the drive tab");
      previousTab = currentTabId;
      browser.tabs.update(whatsappTabId, { active: true });
    }
    setButtonIcon(whatsappTabs[0].favIconUrl);
  } else {
    //console.log("there is NO drive tab");
    previousTab = currentTabId;
    createPinnedTab();
  }
}

function handleClick(tab) {
  //console.log("*********Button clicked*********");
  currentTabId = tab.id;
  var querying = browser.tabs.query({ url: "*://web.whatsapp.com/*" });
  querying.then(handleSearch, onError);
}

function update(details) {
  if (details.reason === "install" || details.reason === "update") {
    var opening = browser.runtime.openOptionsPage();
    opening.then(onOpened, onError);
  }
}

browser.browserAction.onClicked.addListener(handleClick);
browser.runtime.onInstalled.addListener(update);
