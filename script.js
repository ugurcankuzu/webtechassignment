let isVisible = false;

//Popup fields
const mail = document.getElementById("mail");
const message = document.getElementById("message");
const popupButton = document.getElementById("popupButton");
const popupContent = document.getElementById("popupContent");
const popupWrapper = document.getElementById("popupWrapper");

//ctaButton
const ctaButton = document.getElementById("ctaButton");
function updatePopUpVisibility() {
  popupWrapper.style.visibility = `${isVisible ? "visible" : "hidden"}`;
}
function saveToLocalStorage(mail, message) {
  localStorage.setItem(mail, message);
  clearInputs()
}
function clearInputs() {
  mail.value = "";
  message.value = "";
}
updatePopUpVisibility();
ctaButton.addEventListener("click", () => {
  isVisible = true;
  updatePopUpVisibility();
  popupContent.focus();
});

popupWrapper.addEventListener("click", (event) => {
  if (!popupContent.contains(event.target)) {
    isVisible = false;
    clearInputs();
    updatePopUpVisibility();
  }
});
popupButton.addEventListener("click", () => {
  if (message.value && mail.value) {
    saveToLocalStorage(mail.value, message.value);
    alert("Message saved successfully");
    isVisible = false;
    updatePopUpVisibility();
  } else {
    alert("please fill all the inputs correctly");
  }
});
