const grid = document.querySelector(".grid");
let size;

function generateGrid(number) {
    const set = document.querySelectorAll("#tile")

    let width = (680 / number);
    let height = (680 / number);

    for (let i = 0; i < set.length; i++) {
        document.getElementById("tile").remove();
    }

    for (let i = 0; i < number * number; i++) {

        let createGrid = document.createElement("div")

        createGrid.setAttribute("id", "tile");
        createGrid.style.height = `${height}px`;
        createGrid.style.width = `${width}px`;


        grid.appendChild(createGrid);
    }

}

const buttonErase = document.querySelector("#newGrid")
{
    buttonErase.addEventListener("click", () => {
            size = parseInt(prompt())
            generateGrid(size);

            const tileToDraw = document.querySelectorAll(".grid > div");
            tileToDraw.forEach((item) => {
                item.addEventListener("mouseenter", (e) => {
                    e.target.style.backgroundColor = "black";
                });
            });
        }
    )
}

const buttonNewGrid = document.querySelector("#eraseGrid")
{
    buttonNewGrid.addEventListener("click", () => {
            generateGrid(size);

            const tileToDraw = document.querySelectorAll(".grid > div");
            tileToDraw.forEach((item) => {
                item.addEventListener("mouseenter", (e) => {
                    e.target.style.backgroundColor = "black";
                });
            });
        }
    )
}

function defaultGrid() {
    generateGrid(16)

    const tileToDraw = document.querySelectorAll(".grid > div");
    tileToDraw.forEach((item) => {
        item.addEventListener("mouseenter", (e) => {
            e.target.style.backgroundColor = "black";
        });
    });
}

defaultGrid();

