const tl = gsap.timeline();

tl.to(".loader-container", {
  gap: 30,
  delay: 0.4
});

tl.to(".loader-container span", {
  width: "auto",
  delay: 0.5
});

tl.to(".loader-container span", {
  opacity: 0,
  delay: 0.7
});

tl.to(".loader", {
  height: 0,
  duration: 0.8,
  delay: 0.5,
  ease: "power4.out"
});
