const html = document.getElementsByTagName("html")[0];
const themeSwitch = document.getElementById("switch");

themeSwitch.addEventListener("click", () => {
  html.classList.toggle("dark");
});
