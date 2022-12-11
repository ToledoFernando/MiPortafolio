const view = (entrada, observador) => {
  if (entrada[0].isIntersecting) {
    entrada[0].target.childNodes[0].className = 'leftM'
    entrada[0].target.childNodes[1].className = 'rightM'
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