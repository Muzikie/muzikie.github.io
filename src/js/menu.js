document.addEventListener("DOMContentLoaded", () => {
    var openMenuButton = document.querySelector(".menu__link-mobile");
    var closeButton = document.querySelector(".menu-close-button");
    var expandedBG = document.querySelector(".is--close-trigger");
    var expanded = document.querySelector(".menu__mobile__expanded");

    openMenuButton.addEventListener("click", () => {
        expanded.style.display = "flex";
    });
    
    expandedBG.addEventListener("click", () => {
        expanded.style.display = "none";
    });
    
    closeButton.addEventListener("click", () => {
        expanded.style.display = "none";
    });
 });
