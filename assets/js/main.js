
// Scroll to Top
const totopbtn = document.getElementById("totop").addEventListener("click", scrollToTop);

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}