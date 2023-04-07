const snakeURL = "https://www.google.com/search?q=google+snake";

chrome.action.onClicked.addListener(async (tab) => {
  if (tab.url.startsWith(snakeURL)) {
    const prevState = await chrome.action.getBadgeText({ tabId: tab.id });
    const nextState = prevState === "ON" ? "OFF" : "ON";

    await chrome.action.setBadgeText({
      tabId: tab.id,
      text: nextState,
    });

    if (nextState === "ON") {
      await chrome.scripting.insertCSS({
        target: { tabId: tab.id },
        files: ["./styles/snake.css"],
      });
    } else if (nextState === "OFF") {
      await chrome.scripting.removeCSS({
        target: { tabId: tab.id },
        files: ["./styles/snake.css"],
      });
    }

    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["./scripts/snake.js"],
    });
  }
});