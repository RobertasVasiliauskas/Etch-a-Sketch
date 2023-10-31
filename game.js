const grid = document.querySelector(".grid");
function addTile() {
    for (let i = 1; i <= (16*16); i++) {

        let tile = document.createElement("div");
        tile.style.height = "32px";
        tile.style.width = "32px";
        tile.style.border = "1px"
        tile.style.borderStyle = "solid";

        grid.appendChild(tile);
    }
}

addTile();



const tileToDraw = document.querySelectorAll(".grid > div");
tileToDraw.forEach((item) => {
    item.addEventListener("mouseenter", (e) => {
        e.target.style.backgroundColor = "black";
    });
});


