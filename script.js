const hambarg = document.getElementById("hambarg");
const sidebar = document.getElementById("sidebar");
const cancel = document.getElementById("cancel");
hambarg.addEventListener("click", () => {
  sidebar.style.transform = "translateX(0)";
});
cancel.addEventListener("click", () => {
  sidebar.style.transform = "translateX(-100%)";
});
