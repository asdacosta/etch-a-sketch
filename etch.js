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

function everGreen() {
    divArray.forEach(div => {
        div.addEventListener('mouseenter', () => {
            const randomRed = Math.floor(Math.random() * 256);
            const randomGreen = Math.floor(Math.random() * 256);
            const randomBlue = Math.floor(Math.random() * 256);
            div.style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
        })
        div.addEventListener('mouseleave', () => {
            div.style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
        })
    })
}
everGreen();

const button = document.createElement('button');
button.textContent = 'Set new Grid';
button.style.border = '2px solid teal';
button.addEventListener('click', () => {
    newGridSize = parseInt(prompt('Enter the number of squares per side for a new grid: '));
    if (newGridSize > 100 ) {
        alert('Please enter a value not more than 100');
    } else if (isNaN(newGridSize)) {
        alert('Please enter a numeric');
    } else {
        gridSize = newGridSize;
        createGrid();
        everGreen();
    }
})
document.body.prepend(button);
