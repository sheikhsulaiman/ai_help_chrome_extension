// Listen for messages from the background script

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  // Check if the message contains selected text
  if (message && message.selectedText) {
    var chatInput = document.querySelector("textarea");

    const qlEditorDiv = document.querySelector(".ql-editor");

    if (qlEditorDiv) {
      // Get the first `p` tag inside the `ql-editor` div
      const pTag = qlEditorDiv.querySelector("p");

      // Check if the `p` tag exists
      if (pTag) {
        // Set the text inside the `p` tag
        pTag.textContent = "";
        pTag.textContent = message.selectedText;
      }
    }

    if (chatInput) {
      chatInput.value = "";
      chatInput.value = message.selectedText;
    }
  }
});
