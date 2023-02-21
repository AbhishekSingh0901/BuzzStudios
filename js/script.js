const header = document.querySelector(".header");
const btn = document.getElementById("menu-btn");
const mobMenu = document.getElementById("menu");
const nav = document.querySelector(".nav");
const allSections = document.querySelectorAll(".section");

//Creating mobile nav function
const navtoggle = function () {
  btn.classList.toggle("open");
  // if (btn.classList.contains("open")) {
  //   mobMenu.classList.remove("hidden");
  //   mobMenu.classList.add("");
  // }
  mobMenu.classList.toggle("hidden");
  mobMenu.classList.toggle("flex");
};
btn.addEventListener("click", navtoggle);

//
const revealSection = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);
  // console.log(entry);
  if (entry.isIntersecting) {
    entry.target.classList.remove("opacity-0");
    entry.target.classList.remove("translate-y-20");
    console.log("section intersecting");
    observer.unobserve(entry.target);
  }
};

const sectionOberver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.2,
});

allSections.forEach(function (section) {
  sectionOberver.observe(section);
  section.classList.add("opacity-0");
  section.classList.add("translate-y-20");
});
