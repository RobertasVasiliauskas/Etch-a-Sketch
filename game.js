
const grid = document.querySelector(".grid");
function generateGrid(number){
    const set = document.querySelectorAll("#tile")

    let width = (680 / number);
    let height = (680 /number);

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

const button = document.querySelector("#newGrid")
{
    button.addEventListener("click", (e) =>{
        generateGrid(parseInt(prompt()));

        const tileToDraw = document.querySelectorAll(".grid > div");
        tileToDraw.forEach((item) => {
            item.addEventListener("mouseenter", (e) => {
                e.target.style.backgroundColor = "black";
            });
        });
        }
    )
}

