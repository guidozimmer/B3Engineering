gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, MotionPathPlugin, GSDevTools);

gsap.defaults({ ease: "none" });

// Main Timeline with Corrected Syntax
const main = gsap.timeline({
  scrollTrigger: {
    trigger: "#headingWrap",
    pin:true,
    start: "top center",
    end: "+=1000",
    scrub:true,
  }
})
.to("#heading", {autoAlpha:1, duration:1, stagger:1})

// Create GSDevTools for Debugging
GSDevTools.create({ animation: main });
