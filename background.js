// background.js

chrome.contextMenus.create({
  id: "aiHelpMenuItem",
  title: "Get AI Help",
  contexts: ["selection"],
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId === "aiHelpMenuItem") {
    var selectedText = info.selectionText.trim();
    if (selectedText) {
      chrome.tabs.query(
        { url: "https://chat.openai.com/*/*" || "https://chat.openai.com" },
        function (tabs) {
          if (tabs.length > 0) {
            var tabId = tabs[0].id; // Get the ID of the first tab where the website is open
            // You can perform further actions here if the website is open.
            chrome.tabs.get(tabId, (currenrtTabData) => {
              chrome.scripting.executeScript({
                target: { tabId: currenrtTabData.id },
                files: ["content-script.js"],
              });
              setTimeout(() => {
                chrome.tabs.sendMessage(tabId, {
                  selectedText: selectedText,
                });
              }, 3000);
            });
          } else {
            // Open a new tab with the ChatGPT website
            chrome.tabs.create(
              { url: "https://chat.openai.com" },
              function (newTab) {
                chrome.tabs.get(newTab.id, (currenrtTabData) => {
                  if (
                    currenrtTabData.pendingUrl === "https://chat.openai.com/"
                  ) {
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
      );

      chrome.tabs.query(
        { url: "https://bard.google.com/chat/*" },
        function (tabs) {
          if (tabs.length > 0) {
            var tabId = tabs[0].id; // Get the ID of the first tab where the website is open
            // You can perform further actions here if the website is open.
            chrome.tabs.get(tabId, (currenrtTabData) => {
              chrome.scripting.executeScript({
                target: { tabId: currenrtTabData.id },
                files: ["content-script.js"],
              });

              setTimeout(() => {
                chrome.tabs.sendMessage(tabId, {
                  selectedText: selectedText,
                });
              }, 3000);
            });
          } else {
            // Open a new tab with the Bard website
            chrome.tabs.create(
              { url: "https://bard.google.com/chat" },
              function (newTab) {
                chrome.tabs.get(newTab.id, (currenrtTabData) => {
                  if (
                    currenrtTabData.pendingUrl ===
                    "https://bard.google.com/chat"
                  ) {
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
      );
    }
  }
});
