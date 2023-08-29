const gridSpace = document.querySelector('#container');

function createGrid(num) {
    gridSpace.innerHTML = '';
    for (i = 1; i <= num ** 2; i++) {
        const box = document.createElement('div');
        box.setAttribute('id', i);
        box.setAttribute('class', 'box');
        box.style.width = `calc(1/(${num}) * 100%)`;
        box.style.height = `calc(1/${num} * 100%)`;
        gridSpace.appendChild(box);
    }
    
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => box.addEventListener('mouseover', () => {
        box.classList.add('hovered');
    }))
}

createGrid(16);

const button = document.querySelector('button');
button.addEventListener('click', () => {
    let blockInput = window.prompt('Enter desired number of blocks per side.');
    console.log(typeof (blockInput));
    if (blockInput > 100) {
        alert('Please enter a numerical value under 100.')
    } else {
        createGrid(blockInput);
    }
});
//  there might be something wrong with the calc() sometimes the widths and heights
//  do not match up.. there tends to be one extra box that is left in its own row at
//  the bottom

//  the issue was with the border! I removed the border