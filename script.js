document.addEventListener("DOMContentLoaded", function () {
  const sampleForm = document.getElementById("sampleForm");
  if (sampleForm) {
    sampleForm.addEventListener("submit", function (event) {
      event.preventDefault();
      alert("This is only a demo form. No action was taken.");
    });
  }
  if (document.querySelector(".about-us")) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const elements = document.querySelectorAll(".about-us p, .about-us img");
    elements.forEach((el) => {
      el.classList.add("fade-in");
      observer.observe(el);
    });
  }
});
