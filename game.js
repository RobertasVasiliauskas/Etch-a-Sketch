const grid = document.querySelector(".grid");
function addTile() {
    for (let i = 1; i <= (16*16); i++) {

        let tile = document.createElement("div");
        tile.className = "tile";
        tile.style.height = "32px";
        tile.style.width = "32px";
        tile.style.border = "1px"
        tile.style.borderStyle = "solid";

        grid.appendChild(tile);
    }
}

addTile();
