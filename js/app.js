function toggleHide() {
  const mobNav = document.querySelector(".mob-nav");
  const computedStyle = window.getComputedStyle(mobNav);

  if (computedStyle.display === "none") {
    mobNav.style.display = "block";
  } else {
    mobNav.style.display = "none";
  }
}
