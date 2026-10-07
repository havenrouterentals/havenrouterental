const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", function () {

        navLinks.classList.toggle("show");

        if (navLinks.classList.contains("show")) {
            menuBtn.textContent = "✕";
        } else {
            menuBtn.textContent = "☰";
        }

    });

    navLinks.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("show");
            menuBtn.textContent = "☰";

        });

    });
}


/* =========================
   SEARCH
========================= */

const searchBtn = document.getElementById("searchBtn");

if (searchBtn) {

    searchBtn.addEventListener("click", function () {

        const locationInput = document.getElementById("location");
        const propertyType = document.getElementById("propertyType");

        const location = locationInput
            ? locationInput.value.trim()
            : "";

        const type = propertyType
            ? propertyType.value
            : "rent";

        if (!location) {
            alert("Please enter a location.");
            return;
        }

        if (type === "rent") {
            window.location.href = "rent.html";
        }

        if (type === "buy") {
            window.location.href = "buy.html";
        }

        if (type === "vacation") {
            window.location.href = "vacation.html";
        }

    });

}


/* =========================
   PROPERTY PHOTO LIGHTBOX
========================= */

const galleryImages = document.querySelectorAll(
    ".photos-grid img, .gallery-main img, .gallery-side img"
);

if (galleryImages.length > 0) {

    let currentImage = 0;

    const lightbox = document.createElement("div");

    lightbox.className = "lightbox";

    lightbox.innerHTML = `
        <button class="lightbox-close" type="button">✕</button>
        <button class="lightbox-prev" type="button">‹</button>
        <img class="lightbox-image" src="" alt="Property photo">
        <button class="lightbox-next" type="button">›</button>
    `;

    document.body.appendChild(lightbox);

    const lightboxImage =
        lightbox.querySelector(".lightbox-image");

    const closeButton =
        lightbox.querySelector(".lightbox-close");

    const previousButton =
        lightbox.querySelector(".lightbox-prev");

    const nextButton =
        lightbox.querySelector(".lightbox-next");


    function showImage(index) {

        currentImage =
            (index + galleryImages.length) %
            galleryImages.length;

        lightboxImage.src =
            galleryImages[currentImage].src;

        lightboxImage.alt =
            galleryImages[currentImage].alt ||
            "Property photo";
    }


    galleryImages.forEach(function (image, index) {

        image.addEventListener("click", function () {

            showImage(index);

            lightbox.classList.add("active");

            document.body.style.overflow = "hidden";

        });

    });


    closeButton.addEventListener("click", function () {

        lightbox.classList.remove("active");

        document.body.style.overflow = "";

    });


    previousButton.addEventListener("click", function () {

        showImage(currentImage - 1);

    });


    nextButton.addEventListener("click", function () {

        showImage(currentImage + 1);

    });


    lightbox.addEventListener("click", function (event) {

        if (event.target === lightbox) {

            lightbox.classList.remove("active");

            document.body.style.overflow = "";

        }

    });


    document.addEventListener("keydown", function (event) {

        if (!lightbox.classList.contains("active")) {
            return;
        }

        if (event.key === "Escape") {

            lightbox.classList.remove("active");

            document.body.style.overflow = "";

        }

        if (event.key === "ArrowLeft") {

            showImage(currentImage - 1);

        }

        if (event.key === "ArrowRight") {

            showImage(currentImage + 1);

        }

    });

}


/* =========================
   NAVBAR SCROLL
========================= */

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (!navbar) {
        return;
    }

    if (window.scrollY > 40) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});