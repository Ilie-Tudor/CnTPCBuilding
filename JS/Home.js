let aboutButton = document.getElementsByClassName("about-activator")[0];
let aboutSection = document.getElementById("Section4");
let stop = false;
aboutButton.addEventListener("click", () => {
    stop = false;
    let rect = aboutSection.getBoundingClientRect();
    let goSmoothly =
        setInterval(function () {
            if (window.scrollY < rect.y - 100) {
                window.scrollBy(0, 10);
                console.log("1");
            } else {
                stop = true;
                console.log(stop);
            }
            if (stop) {
                clearInterval(goSmoothly);
                aboutButton.blur();
            }
        }, 1);
});