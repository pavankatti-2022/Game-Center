// Include Navbar in Index.html
  fetch("navbar.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("navbar").innerHTML = data;
  })
  .catch(error => console.error("Error Handling Navbar : ", error))


// Include Banner in Index
  fetch("banner.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("banner").innerHTML = data;
  })

// Include Footer to Index.html
  fetch("footer.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("footer").innerHTML = data;
  })

// Include Controllers to Index.html
  fetch("controllers.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("controllers").innerHTML = data;
  })


  // Scroll to Top
  const totopbtn = document.getElementById("totop").addEventListener("click", scrollToTop);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }