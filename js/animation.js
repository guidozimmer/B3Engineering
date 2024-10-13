window.onload = function () {
    // Initialize Locomotive Scroll after all content has loaded
    const scrollContainer = document.querySelector('[data-scroll-container]');

    if (scrollContainer) {
        const scroll = new LocomotiveScroll({
            el: scrollContainer,
            smooth: true
        });

        const heading = document.getElementById('heading');

        // Listen to Locomotive Scroll events
        scroll.on('scroll', (args) => {
            // Check if we are in the section that contains #introSection
            console.log(args);

            
            if (args.currentElements['introSection']) {
                const progress = args.currentElements['introSection'].progress; // Get progress (0 to 1)

                // Adjust the left position of the image based on scroll progress
                const leftValue = (1 - progress) * 100; // From 100vw to 0vw
                heading.style.left = `${leftValue}vw`;

                // Make sure the image fades in as it moves in
                heading.style.opacity = progress;
                console.log("scrolling");

            }
        });
    } else {
        console.error('Scroll container not found. Make sure [data-scroll-container] is present in the HTML.');
    }
};
