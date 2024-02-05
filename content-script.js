// Listen for messages from the background script

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  // Check if the message contains selected text
  if (message && message.selectedText) {
    // console.log("Page fully loaded");
    // Perform any actions you want after the page is fully loaded
    // Find the chat input field and fill it with the selected text
    var chatInput = document.querySelector("textarea");

    const qlEditorDiv = document.querySelector(".ql-editor");

    if (qlEditorDiv) {
      // Get the first `p` tag inside the `ql-editor` div
      const pTag = qlEditorDiv.querySelector("p");

      // Check if the `p` tag exists
      if (pTag) {
        // Set the text inside the `p` tag
        pTag.textContent = message.selectedText; // Replace with your desired text
      }
    }

    if (chatInput) {
      chatInput.value = message.selectedText;
    }
    const btn = document.querySelector("button");
    chatInput.onchange(() => {
      btn.disabled = false;
      btn.click();
    });
  }
});
