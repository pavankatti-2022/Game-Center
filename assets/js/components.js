// Include Navbar in Index.html
  fetch("./assets/components/navbar.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("navbar").innerHTML = data;
  })
  .catch(error => console.error("Error Handling : ", error))


// Include Banner in Index
  fetch("/assets/components/banner.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("banner").innerHTML = data;
  })
  .catch(error => console.error("Error Handling : ", error))

// Include Controllers to Index.html
  fetch("/assets/components/controllers.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("controllers").innerHTML = data;
  })
  .catch(error => console.error("Error Handling : ", error))

// Include Footer to Index.html
  fetch("/assets/components/footer.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("footer").innerHTML = data;
  })
  .catch(error => console.error("Error Handling : ", error))

// Include Reviews
  fetch("/assets/components/reviews.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("reviews").innerHTML = data;

      const swiper = new Swiper(".reviews-swiper", {
      loop: true,
      slidesPerView: 2,
      spaceBetween: 20,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      }
    })
  })
  .catch(error => console.error("Error : ", error))