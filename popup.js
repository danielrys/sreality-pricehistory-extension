function clearData() {
  chrome.tabs.query({ active: true }, (tabs) => {
    const currentTab = tabs[0];
    const tabUrl = new URL(currentTab.url);
    console.log("clearing data", tabUrl.pathname);
    chrome.storage.local.remove([tabUrl.pathname]);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const clearButton = document.querySelector(".clearButton");
  clearButton.addEventListener("click", () => {
    clearData();
  });
});
