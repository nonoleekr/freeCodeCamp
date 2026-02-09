const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector("#lightbox-image");
const closeBtn = document.querySelector("#close-btn");

// Open lightbox
galleryItems.forEach(item => {
  item.addEventListener("click", () => {
    lightbox.style.display = "flex";

    // Remove -thumbnail from src
    lightboxImage.src = item.src.replace("-thumbnail", "");
  });
});

// Close with button
closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

// Close when clicking background
lightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
});
