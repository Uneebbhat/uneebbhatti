function toggleHide() {
  const mobNav = document.querySelector(".mob-nav");
  mobNav.classList.toggle("nav-active");
}

window.onload = function () {
  setTimeout(function () {
    var underDevMessage = document.getElementById("underDevMessage");
    if (underDevMessage) {
      underDevMessage.style.display = "none";
    }
  }, 3000);
};
