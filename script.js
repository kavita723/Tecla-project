 window.addEventListener('DOMContentLoaded', () => {
      setTimeout(() => document.getElementById("box1").classList.add("show"), 300);
      setTimeout(() => document.getElementById("box2").classList.add("show"), 600);
      setTimeout(() => document.getElementById("box3").classList.add("show"), 900);
      setTimeout(() => document.getElementById("box4").classList.add("show"), 1200);
    });
     function buyNow(productName) {
    alert("Thank you for your interest in " + productName + "!\nWe’ll contact you soon.");
  }
  // before just footer
  const container = document.getElementById('testimonialSlider');

  function autoSlide() {
    if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
      container.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: 320, behavior: 'smooth' });
    }
  }

  setInterval(autoSlide, 3000); // change every 3 seconds
  // faq page ke liye
  window.addEventListener("load", function () {
    const loader = document.getElementById("loader");
    const content = document.getElementById("mainContent");

    setTimeout(() => {
      loader.style.display = "none";
      content.style.display = "block";
    }, 2000); // 2 seconds loader
  });
  // buy page
   function toggleFilter() {
      const filter = document.getElementById("filterBox");
      filter.style.display = (filter.style.display === "none" || filter.style.display === "") ? "block" : "none";
    }