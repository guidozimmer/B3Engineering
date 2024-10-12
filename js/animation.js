document.addEventListener("DOMContentLoaded", function() {

    const heading = document.getElementById('heading');

    // Set the initial position of the heading off-screen (100vw to the right)
    heading.style.transform = `translateX(100vw)`;

    // Initialize ScrollMagic Controller
    var controller = new ScrollMagic.Controller();

    // Create ScrollMagic Scene to Pin #headingWrap
    var scene = new ScrollMagic.Scene({
        triggerElement: "#introSection",  // Element that triggers the pinning
        triggerHook: 0.5,                 // Start pinning when #introSection reaches 50% of the viewport
        duration: "200%"                  // How long the pinning lasts
    })
    .setPin("#headingWrap")              // Pin the #headingWrap element
    .addTo(controller);                  // Add scene to the ScrollMagic controller

    // Use ScrollMagic progress to animate the heading
    scene.on("progress", function(event) {
        // Get the progress of the scene (between 0 and 1)
        const scrollPercentage = event.progress;

        // Set the horizontal translation based on scroll progress
        // Starts from 100vw and moves to 0 (into view)
        const maxHorizontalDistance = -100 * window.innerWidth / 100; // -100vw in pixels
        heading.style.transform = `translateX(${100 * (1 - scrollPercentage)}vw)`;
    });
});
