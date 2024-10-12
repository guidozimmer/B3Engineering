document.addEventListener("DOMContentLoaded", function() {
    const heading = document.getElementById('heading');
    const backgroundImg = document.getElementById('backgroundImg');

    // Initialize ScrollMagic Controller
    var controller = new ScrollMagic.Controller();

    // Create ScrollMagic Scene to Pin #heading
    var headingScene = new ScrollMagic.Scene({
        triggerElement: "body",
        triggerHook: 0,
        duration: "100%", // Set duration to cover both animations (fly-in and zoom with fade-out)
    })
    .setPin("#heading")
    .addTo(controller);

    // Create ScrollMagic Scene to Pin #backgroundImg
    var backgroundScene = new ScrollMagic.Scene({
        triggerElement: "body",
        triggerHook: 0,
        duration: "100%",
    })
    .setPin("#backgroundImg")
    .addTo(controller);

    // Use ScrollMagic progress to animate the heading and background image
    headingScene.on("progress", function(event) {
        const scrollPercentage = event.progress;

        // Phase 1: Fly-in effect (first 50% of progress)
        if (scrollPercentage < 0.5) {
            const translateXValue = 100 * (1 - (scrollPercentage * 2)); // From 100vw to 0
            heading.style.transform = `translateX(${translateXValue}vw)`;
            backgroundImg.style.transform = `translateX(${translateXValue}vw)`;
        }

        // Phase 2: Zoom effect with fade-out (after 50% of progress)
        else {
            const scaleProgress = (scrollPercentage - 0.5) * 2; // Normalize to range from 0 to 1
            const scaleValue = 1 + (150 * scaleProgress); // Scale from 1 to 5
            const translateYValue = 130 * scaleProgress; // Translate Y from 0 to 130px

            // Apply scale and translate transformations
            heading.style.transform = `scale(${scaleValue}) translateY(${translateYValue}px)`;

            const fadeOutOpacity = 1 - Math.pow(scaleProgress, 2); // Ease-out effect
            //heading.style.opacity = fadeOutOpacity;

            console.log("Scale: " + scaleValue + ", Opacity: " + fadeOutOpacity);
        }
    });
});
