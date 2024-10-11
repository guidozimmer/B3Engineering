//learn how this was made at https://www.youtube.com/watch?v=ersN5fk8py0 
gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, MotionPathPlugin, GSDevTools);

gsap.defaults({ease: "none"});


const main = gsap.timeline({
  scrollTrigger: {
    trigger: "#introSection",
    scrub: true,
    start: "top center",
    end: "bottom center"
  }
})



GSDevTools.create({animation:main})