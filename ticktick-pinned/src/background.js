let currentTabId;
let telegramTabId;
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
    url: "https://ticktick.com/webapp/",
    pinned: true,
    active: true,
  });
}

function handleSearch(telegramTabs) {
  //console.log("currentTabId: " + currentTabId);
  if (telegramTabs.length > 0) {
    //console.log("there is a calendar tab");
    telegramTabId = telegramTabs[0].id;
    if (telegramTabId === currentTabId) {
      //console.log("I'm in the drive tab");
      browser.tabs.update(previousTab, { active: true });
    } else {
      //console.log("I'm NOT in the drive tab");
      previousTab = currentTabId;
      browser.tabs.update(telegramTabId, { active: true });
    }
    setButtonIcon(telegramTabs[0].favIconUrl);
  } else {
    //console.log("there is NO drive tab");
    previousTab = currentTabId;
    createPinnedTab();
  }
}

function handleClick(tab) {
  //console.log("*********Button clicked*********");
  currentTabId = tab.id;
  var querying = browser.tabs.query({ url: "*://ticktick.com/*" });
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
