const form = document.querySelector("form");
const newTabCheckbox = document.querySelector("#new-tab");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const isAutoSubmit = autoSubmitCheckbox.checked;
  const isNewTab = newTabCheckbox.checked;

  // Sending a message to the background script
  chrome.runtime.sendMessage({
    isNewTab: isNewTab,
  });
});
