const imagesContainer = document.querySelector('.images');
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;

// Function to update the slide position
function updateSlidePosition() {
    const slideWidth = slides[0].clientWidth; // Get the width of one slide
    const newTransformValue = -slideWidth * currentIndex; // Calculate new position
    imagesContainer.style.transform = `translateX(${newTransformValue}px)`;
    updateDots(); // Update dot indicators
}

// Function to go to the next slide
function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length; // Increment index
    updateSlidePosition(); // Update position
}

// Function to go to the previous slide
function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Decrement index
    updateSlidePosition(); // Update position
}

// Function to update the dots based on current slide
function updateDots() {
    dots.forEach(dot => dot.classList.remove('active')); // Remove active class from all dots
    dots[currentIndex].classList.add('active'); // Add active class to current dot
}

// Event listeners for dots
dots.forEach(dot => {
    dot.addEventListener('click', () => {
        currentIndex = parseInt(dot.getAttribute('data-index')); // Get index from data attribute
        updateSlidePosition(); // Update position
    });
});

// Initial setup
updateSlidePosition(); // Set initial position
setInterval(nextSlide, 4000);