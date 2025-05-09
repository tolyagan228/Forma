const loginInput = document.querySelector("[login]");
const passwordInput = document.querySelector("[password]");
const saveButton = document.querySelector("[saveBtn]");

const restoreInputs = () => {
  loginInput.value = localStorage.getItem("login") || "";
  passwordInput.value = localStorage.getItem("password") || "";
};

const handleSave = () => {
  const loginVal = loginInput.value.trim();
  const passwordVal = passwordInput.value.trim();

  if (!loginVal || !passwordVal) {
    alert("Будь ласка, заповніть обидва поля.");
    return;
  }

  localStorage.setItem("login", loginVal);
  localStorage.setItem("password", passwordVal);
  alert("Дані збережено успішно!");
};

saveButton.addEventListener("click", handleSave);
window.addEventListener("DOMContentLoaded", restoreInputs);
