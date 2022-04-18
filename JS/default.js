let containerGame = document.getElementById("container_game");
let lot = document.createElement("div");
lot.classList.add("lot")
lot.style.width = "100vw";
lot.style.height = "100vh";
lot.style.position = "relative";
lot.style.margin = "0 auto";
lot.style.backgroundRepeat = "repeat";
console.log(window.resizeBy);
if (window.innerWidth <= 1240) {
    lot.style.backgroundSize = "10% 10%";
}
if (window.innerWidth >= 1240) {
    lot.style.backgroundSize = "5% 10%";
}

window.addEventListener('resize', () => {
    console.log(window.innerWidth);
    if (window.innerWidth <= 1240) {
        lot.style.backgroundSize = "10% 10%";
    }
    if (window.innerWidth >= 1240) {
        lot.style.backgroundSize = "5% 10%";
    }
});

lot.style.backgroundImage = "url('img/ground.svg')";
containerGame.appendChild(lot);