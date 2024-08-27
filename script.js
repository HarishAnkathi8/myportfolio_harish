document.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  alert("Form submitted!");
});
