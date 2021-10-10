let headerNav = document.getElementById("Header");
let button = document.getElementById("Nav-Button");



button.addEventListener("click", () => {
    console.log(headerNav.style.display);

    if (headerNav.classList.contains("hidden")) {
        headerNav.classList.replace("hidden", "visible");
    } else if (headerNav.classList.contains("visible")) {
        headerNav.classList.replace("visible", "hidden");
    } else if (headerNav.classList.contains("initial")) {
        headerNav.classList.replace("initial", "visible");
    }
});