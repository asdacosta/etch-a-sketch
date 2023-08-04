const divArray = [];

for (m = 0; m < 256; m++) {
    const div = document.createElement('div');
    const container = document.querySelector('.container');
    container.appendChild(div);
    divArray.push(div);
}

divArray.forEach(div => {
    div.addEventListener('mouseenter', () => {
        div.style.backgroundColor = 'green';
    })
    div.addEventListener('mouseleave', () => {
        div.style.backgroundColor = 'green';
    })
})