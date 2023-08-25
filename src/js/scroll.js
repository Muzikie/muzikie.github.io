var backDrop = document.getElementById("nav-back");
var desktopNavigation = document.getElementById("desktop-navigation");

const sectionThemes = {
   light: {
      add: "light-backdrop",
      remove: "dark-backdrop",
   },
   dark: {
      add: "dark-backdrop",
      remove: "light-backdrop",
   },
};

// define observers
const slideInObserver = new IntersectionObserver((entries) => {
   entries.forEach((entry) => {
      if (entry.isIntersecting) {
         entry.target.classList.add("show");
      } else {
         entry.target.classList.remove("show");
      }
   });
});

const backdropObserver = new IntersectionObserver((entries) => {
   entries.forEach((entry) => {
      const theme = entry.target.className.match(/dark-mode/g) ? 'dark' : 'light';
      if (entry.isIntersecting) {
         backDrop.classList.add(sectionThemes[theme].add);
         desktopNavigation.classList.add(sectionThemes[theme].add);
         backDrop.classList.remove(sectionThemes[theme].remove);
         desktopNavigation.classList.remove(sectionThemes[theme].remove);
      }
   });
});

// Register observers
const hiddenElements = document.querySelectorAll(".slide-in-section");
hiddenElements.forEach((el) => slideInObserver.observe(el));

const sectionElements = document.querySelectorAll(".intersection-observed");
sectionElements.forEach((el) => backdropObserver.observe(el));
