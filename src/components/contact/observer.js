const view = (entrada, observador) => {
  if (entrada[0].isIntersecting) {
    entrada[0].target.style.transform = `translateX(0)`;
    entrada[0].target.style.opacity = `100%`;
  }
}
const observer = new IntersectionObserver(view, {
  root: null,
  rootMargin: "0px 0px 0px 0px",
  threshold: 0.6,
})

export const newObserver = (ref) => {
  return observer.observe(ref)
}