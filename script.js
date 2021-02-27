// Select container div of html
const container = document.querySelector('.container');
const grid = document.querySelector('#grid-container');
let resetBtn = document.createElement("input");
resetBtn.type = "button"; resetBtn.value = "Reset"; resetBtn.classList = "reset-btn"
container.insertBefore(resetBtn, container.childNodes[0]);

// Create a 16X16 grid of div elements
function createGrid(x) {
    grid.setAttribute('style', `grid-template-columns: repeat(${x}, 1fr);`)
    for (var i = 0; i < (x ** 2); i++){
        let cell = document.createElement('div');
        cell.addEventListener('mouseover', function(e){
            e.target.style.background = 'black';
        });
        grid.appendChild(cell).setAttribute('class', 'cell')
    }
}

// Reset the grid function
function resetGrid() {
    let grid = document.querySelectorAll('.cell');
    grid.forEach(cell => cell.remove());
    let newGrid = prompt("How many Squares?");
    if (newGrid <= 100) {
        createGrid(newGrid);
    } else {
        newGrid = prompt("Grid cannot be larger than 100");
        createGrid(newGrid);
    }
}

// Event listeners
document.querySelector(".reset-btn").addEventListener('click', resetGrid);

createGrid(16);