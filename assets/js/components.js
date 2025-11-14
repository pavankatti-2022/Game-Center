// Include Navbar in Index.html
  fetch("./assets/components/navbar.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("navbar").innerHTML = data;
  })
  .catch(error => console.error("Error Handling Navbar : ", error))


// Include Banner in Index
  fetch("/assets/components/banner.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("banner").innerHTML = data;
  })

// Include Controllers to Index.html
  fetch("/assets/components/controllers.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("controllers").innerHTML = data;
  })

// Include Footer to Index.html
  fetch("/assets/components/footer.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("footer").innerHTML = data;
  })