const togglebt = document.getElementsByClassName("toggle")[0];
const navbarlink = document.getElementsByClassName("navlink")[0];

togglebt.addEventListener("click", function () {
  navbarlink.classList.toggle("media");
  document.getElementsByClassName("navbar")[0].style.height = "500px";
});
