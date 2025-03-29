gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(".RetroFoci", 
    { x: -250, y: 0, color: "teal" }, 
    { x: 0, y: 0, duration: 1, color: "white" }
);

gsap.fromTo(".football", 
    { y: "5vh", rotation: 0 },
    {
        scrollTrigger: {
            trigger: "body",
            start: "top top",
            end: "bottom bottom",
            scrub: 2,
        },
        y: "92vh",
        rotation: 720,
        ease: "power1.out"
    }
);

// Replace the legend sections animation
gsap.utils.toArray('.legend-section').forEach((section) => {
    gsap.from(section, {
        scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "top 20%",
            scrub: 1,
            // removed markers
        },
        y: 100,
        opacity: 0,
        duration: 1
    });
});