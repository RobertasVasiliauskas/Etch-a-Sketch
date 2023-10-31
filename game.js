const grid = document.querySelector(".grid")

for (let i = 1; i <= 16; i++) {
    for (let j = 1; j <= 16; j++) {
        const tile = document.createElement("div")
        grid.appendChild(tile)
    }
}