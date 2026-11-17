const dots = document.querySelectorAll(".dot");
const slides = document.querySelectorAll(".slide");
const previousButton = document.querySelector(".slide-arrow.previous");
const nextButton = document.querySelector(".slide-arrow.next");
let activeIndex = 0;

function showSlide(index) {
  activeIndex = (index + slides.length) % slides.length;

  dots.forEach((dot, dotIndex) => {
    const isActive = dotIndex === activeIndex;
    dot.classList.toggle("active", isActive);
    dot.setAttribute("aria-current", isActive ? "true" : "false");
  });
  slides.forEach((slide, slideIndex) => {
    slide.classList.toggle("active", slideIndex === activeIndex);
  });
}

dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    showSlide(Number(dot.dataset.index));
  });
});

previousButton.addEventListener("click", () => showSlide(activeIndex - 1));
nextButton.addEventListener("click", () => showSlide(activeIndex + 1));

document.addEventListener("keydown", (event) => {
  if (event.altKey || event.ctrlKey || event.metaKey) {
    return;
  }

  if (event.key === "ArrowLeft") {
    event.preventDefault();
    showSlide(activeIndex - 1);
  } else if (event.key === "ArrowRight") {
    event.preventDefault();
    showSlide(activeIndex + 1);
  }
});

showSlide(activeIndex);
