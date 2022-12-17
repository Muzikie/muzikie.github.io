var backDrop = document.getElementById("nav-back");
backDrop.style.color = "#feeae3";

// trigger this function every time the user scrolls
window.onscroll = function (event) {
   var scroll = window.pageYOffset;
   var elem = document.getElementById("el");
   var glem = document.querySelectorAll(".transition");
   var aTags = document.getElementsByTagName("a");
   console.log(glem[1]);
   if (scroll < 300) {
      for (aTag of aTags) {
         aTag.style.color = "#453248";
      }
      elem.style.transition = "opacity 0.1s linear 0s";
      elem.style.opacity = 0.0;

      backDrop.style.color = "#feeae3";
   } else if (scroll >= 300 && scroll < 600) {
      elem.style.transition = "opacity 0.5s linear 0s";
      elem.style.opacity = 0.0;
      aTag.style.color = "#453248";

      backDrop.style.color = "#feeae3";
   } else if (scroll >= 700 && scroll < 2880) {
      for (aTag of aTags) {
         aTag.style.color = "rgb(249, 248, 244)";
      }

      backDrop.style.transition = "color 0.2s linear 0.2s";
      backDrop.style.color = "#453248";
   } else if (scroll > 3200) {
      for (aTag of aTags) {
         aTag.style.color = "#453248";
      }
      glem[1].style.transition = "opacity 0.4s linear 0.1s";
      glem[1].style.opacity = 0.0;
      // glem[1].style.backgroundColor = "#feeae3";

      backDrop.style.color = "#feeae3";
   }
};

/// open/close contact menu

function openChat() {
   var contactFrom = document.getElementById("showcontact");

   contactFrom.classList.add("chat");
   document.getElementById("wf-form-Project-inquiry").classList.add("chat");

   // contactFrom.className = contactFrom.className === "chat" ? "" : "chat";
}

function closeFunction() {
   var contactFrom = document.getElementById("showcontact");
   contactFrom.classList.remove("chat");
   document.getElementById("wf-form-Project-inquiry").classList.remove("chat");
}

function reveal() {
   var reveals = document.querySelectorAll(".reveal");

   for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
         reveals[i].classList.add("active");
      } else {
         reveals[i].classList.remove("active");
      }
   }
}

window.addEventListener("scroll", reveal);

const observer = new IntersectionObserver((entries) => {
   entries.forEach((entery) => {
      if (entery.isIntersecting) {
         entery.target.classList.add("show");
      } else {
         entery.target.classList.remove("show");
      }
   });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

//mobile nav
const nav = document.querySelector(".menu__link-mobile");
const expanded = document.querySelector(".menu__mobile__expanded");
const expandedBG = document.querySelector(".is--close-trigger");
console.log(expandedBG);

nav.addEventListener("click", () => {
   expanded.style.display = "flex";
});

expandedBG.addEventListener("click", () => {
   expanded.style.display = "none";
});

// mobile-expanded__background is--close-trigger
