// background.js

chrome.contextMenus.create({
  id: "aiHelpMenuItem",
  title: "Chat with ChatGPT",
  contexts: ["selection"],
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId === "aiHelpMenuItem") {
    var selectedText = info.selectionText.trim();
    if (selectedText) {
      // Open a new tab with the ChatGPT website
      chrome.tabs.create({ url: "https://chat.openai.com" }, function (newTab) {
        chrome.tabs.get(newTab.id, (currenrtTabData) => {
          if (currenrtTabData.pendingUrl === "https://chat.openai.com/") {
            chrome.scripting.executeScript({
              target: { tabId: currenrtTabData.id },
              files: ["content-script.js"],
            });

            setTimeout(() => {
              chrome.tabs.sendMessage(newTab.id, {
                selectedText: selectedText,
              });
            }, 4000);
          }
        });
      });
      // Open a new tab with the ChatGPT website
      chrome.tabs.create(
        { url: "https://bard.google.com/chat" },
        function (newTab) {
          chrome.tabs.get(newTab.id, (currenrtTabData) => {
            if (currenrtTabData.pendingUrl === "https://bard.google.com/chat") {
              chrome.scripting.executeScript({
                target: { tabId: currenrtTabData.id },
                files: ["content-script.js"],
              });

              setTimeout(() => {
                chrome.tabs.sendMessage(newTab.id, {
                  selectedText: selectedText,
                });
              }, 4000);
            }
          });
        }
      );
    }
  }
});
