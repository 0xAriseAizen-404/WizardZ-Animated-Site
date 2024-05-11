const tl = gsap.timeline();

tl.from(".navbar .logo, .navbar li", {
  y: -30,
  duration: 0.8,
  delay: 1,
  stagger: 0.2,
  opacity: 0,
});
tl.from(
  ".hero-section .left h1",
  {
    x: -200,
    duration: 0.5,
    opacity: 0,
  },
  "-=.5"
);
tl.from(".hero-section .left p", {
  x: -100,
  duration: 0.4,
  opacity: 0,
});
tl.from(".hero-section .left .btn", {
  duration: 0.4,
  opacity: 0,
});
tl.from(
  ".hero-section .right",
  {
    x: 100,
    duration: 0.4,
    opacity: 0,
  },
  "-=0.5"
);
tl.from(".section-1 .brands img", {
  y: 30,
  duration: 0.6,
  stagger: 0.15,
  opacity: 0,
});

const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section-2",
    scroller: "body",
    // markers: true,
    start: "top 50%",
    end: "top 0",
    scrub: 2,
  },
});

tl2.from(".section-2 .heading", {
  y: 30,
  opacity: 0,
  duration: 0.8,
});
tl2.from(
  ".section-2 .service-card:nth-of-type(1)",
  {
    opacity: 0,
    x: -300,
    duration: 0.8,
  },
  "line1"
);
tl2.from(
  ".section-2 .service-card:nth-of-type(2)",
  {
    opacity: 0,
    x: 300,
    duration: 0.8,
  },
  "line1"
);
tl2.from(
  ".section-2 .service-card:nth-of-type(3)",
  {
    opacity: 0,
    x: -300,
    duration: 0.8,
  },
  "line2"
);
tl2.from(
  ".section-2 .service-card:nth-of-type(4)",
  {
    opacity: 0,
    x: 300,
    duration: 0.8,
  },
  "line2"
);

const tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section-3",
    scroller: "body",
    // markers: true,
    start: "top 60%",
    end: "top 0",
    scrub: 2,
  },
});

tl3.from(
  ".section-3 .left h1",
  {
    x: -200,
    duration: 0.8,
    opacity: 0,
  },
  "-=.5"
);
tl3.from(".section-3 .left p", {
  x: -100,
  duration: 0.4,
  opacity: 0,
});
tl3.from(".section-3 .left .btn", {
  duration: 0.4,
  opacity: 0,
});
tl3.from(
  ".section-3 .right",
  {
    x: 100,
    duration: 0.4,
    opacity: 0,
  },
  "-=0.5"
);
const tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".footer",
    scroller: "body",
    // markers: true,
    start: "top 100%",
    end: "top 60%",
    scrub: 2,
  },
});
tl4.from(".footer .case", {
  y: 30,
  opacity: 0,
  duration: 0.8,
  stagger: 0.5,
  delay: 2,
});

function sidebarAnimation() {
  const stl = gsap.timeline({ paused: true }); // Ensure the timeline starts in a paused state
  stl.to(".nav-items", {
    transform: "translateX(-100%)",
    duration: 0.6,
  });
  stl.from(".nav-items .nav-link", {
    x: 50,
    opacity: 0,
    stagger: 0.3,
    duration: 0.5,
  });
  stl.from(".nav-items i", {
    x: 40,
    opacity: 0,
    duration: 0.3,
  });

  const menuOpen = document.querySelector("[menu-open]");
  const menuClose = document.querySelector("[menu-close]");

  menuOpen.addEventListener("click", () => {
    stl.play();
  });

  menuClose.addEventListener("click", () => {
    stl.reverse();
  });
}

if (window.innerWidth <= 620) {
  sidebarAnimation();
}
