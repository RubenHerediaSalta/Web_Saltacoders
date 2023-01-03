const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
      navbar.classList.remove("bg-light");
      navbar.classList.add("bg-scroll");
  } else {
    navbar.classList.remove("bg-scroll");
  }
});

window.onscroll = function() {
  var image = document.getElementById("logo");
  if (window.scrollY === 0) {
    image.src = "img/logo1.png";
  } else {
    image.src = "img/logo2.png";
  }
}
