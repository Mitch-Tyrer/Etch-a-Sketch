// Select container div of html
const container = document.querySelector('#grid-container');
// Create a 16X16 grid of div elements
function createGrid(x) {
    for (var i = 0; i < (x ** 2); i++){
        let cell = document.createElement('div');
        cell.addEventListener('mouseover', function(e){
            e.target.style.background = 'black';
        });
        container.appendChild(cell).setAttribute('class', 'cell')
    }
}

createGrid(16);