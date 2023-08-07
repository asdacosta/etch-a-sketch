let gridSize = 16;
const divArray = [];

function createGrid() {
    const container = document.querySelector('.container');
    container.innerHTML = '';

    for (m = 0; m < gridSize * gridSize; m++) {
        const div = document.createElement('div');
        
        container.appendChild(div);
        divArray.push(div);
    }
}
createGrid();

const button = document.createElement('button');
button.textContent = 'Set new Grid';
button.style.border = '2px solid teal';
button.addEventListener('click', () => {
    newGridSize = parseInt(prompt('Enter the number of squares per side for a new grid: '));
    if (newGridSize > 100 || isNaN(newGridSize)) {
        alert('Please enter a value not more than 100');
    } else {
        gridSize = newGridSize;
        createGrid();
    }
})
document.body.prepend(button);

divArray.forEach(div => {
    div.addEventListener('mouseenter', () => {
        div.style.backgroundColor = 'green';
    })
    div.addEventListener('mouseleave', () => {
        div.style.backgroundColor = 'green';
    })
})