const nav = document.querySelector("nav"); /*The class that we want to add class list*/

const sectionOne =
  document.querySelector(".hero-image"); /*The page view that it is gonna appear on that*/
const sectionOneOptions = {
  rootMargin:
    "-540px 0px 0px 0px" /*margin for when we want that our class display in a specific area*/,
};
const sectionOneObserver = new IntersectionObserver(function (entries, sectionOneObserver) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      nav.classList.add("nav-scrolled");
    } else {
      nav.classList.remove("nav-scrolled");
    }
  });
}, sectionOneOptions);
sectionOneObserver.observe(sectionOne);
