const header = document.querySelector(".header");
const openNav = document.querySelector(".icon-mobile-nav[name='menu-outline']");
const closeNav = document.querySelector(".icon-mobile-nav[name='close-outline']");

openNav.addEventListener("click", () => {
  header.classList.add("nav-open");
})
closeNav.addEventListener("click", () => {
  header.classList.remove("nav-open");
})

// animate on scroll
const links = document.querySelectorAll(".main-nav-list li a");

links.forEach(link => {
  link.addEventListener("click", e => {
    if(header.classList.contains("nav-open")){
      header.classList.remove("nav-open");
    }
    e.preventDefault();
    const id = e.target.getAttribute("href").substring(1);
    const section = document.getElementById(id);
    scrollTo({top: section.offsetTop - 80, behavior: "smooth"});
    // section.scrollIntoView({ behavior: "smooth" });
  });
});

const footerLogo = document.querySelector(".footer-logo");
footerLogo.addEventListener("click", () => scrollTo({top: 0, behavior: "smooth"}))

// addEventListener("scroll", () => {
//   if(scrollY >= 200){
//     // document.getElementById("section-how").offsetTop
//     header.classList.add("sticky");
//   }
//   else{
//     header.classList.remove("sticky");
//   }
// })

const sectionHero = document.getElementById("section-hero");
const observer = new IntersectionObserver(entries => {
  const ent = entries[0];
  if(!ent.isIntersecting){
    header.classList.add("sticky");
    sectionHero.classList.add("header-is-sticky")
  }
  else{
    header.classList.remove("sticky");
    sectionHero.classList.remove("header-is-sticky")
  }
}, { root: null, threshold: 0, rootMargin: "-80px" }
);
observer.observe(sectionHero);