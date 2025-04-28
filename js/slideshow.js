// Slideshow arrays to handle multiple slideshows
let slideIndices = [1];
let slideshowTimers = [];

// Next/previous controls
function plusSlides(n, slideshow) {
    showSlides(slideIndices[slideshow] += n, slideshow);
    resetTimer(slideshow);
}

// Thumbnail image controls
function currentSlide(n, slideshow) {
    showSlides(slideIndices[slideshow] = n, slideshow);
    resetTimer(slideshow);
}

function showSlides(n, slideshow) {
    let i;
    let slides = document.querySelectorAll(`.project-card:nth-child(${slideshow + 1}) .mySlides`);
    let dots = document.querySelectorAll(`.project-card:nth-child(${slideshow + 1}) .dot`);
    
    // Loop back to first slide if beyond array length
    if (n > slides.length) {slideIndices[slideshow] = 1}
    
    // Go to last slide if going back from first slide
    if (n < 1) {slideIndices[slideshow] = slides.length}
    
    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    // Remove active class from all dots
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active-dot", "");
    }
    
    // Show the current slide and activate its dot
    slides[slideIndices[slideshow] - 1].style.display = "block";
    dots[slideIndices[slideshow] - 1].className += " active-dot";
}

function resetTimer(slideshow) {
    // Clear the existing timer
    clearTimeout(slideshowTimers[slideshow]);
    
    // Set a new timer for automatic slideshow
    slideshowTimers[slideshow] = setTimeout(() => {
        plusSlides(1, slideshow);
    }, 3000); // Change image every 5 seconds
}

// Initialize all slideshows when the page loads
document.addEventListener('DOMContentLoaded', function() {
    // Find all slideshow containers
    const slideshows = document.querySelectorAll('.slideshow-container');
    
    // Initialize each slideshow
    slideshows.forEach((_, index) => {
        // Initialize the slide index for this slideshow
        slideIndices[index] = 1;
        
        // Show the initial slide
        showSlides(1, index);
        
        // Start the automatic slideshow timer
        resetTimer(index);
    });
});
