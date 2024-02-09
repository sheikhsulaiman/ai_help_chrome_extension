const form = document.querySelector("form");
const autoSubmitCheckbox = document.querySelector("#auto-submit");
const newTabCheckbox = document.querySelector("#new-tab");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const isAutoSubmit = autoSubmitCheckbox.checked;
  const isNewTab = newTabCheckbox.checked;
  console.log(isNewTab);
  console.log(isAutoSubmit);
});
