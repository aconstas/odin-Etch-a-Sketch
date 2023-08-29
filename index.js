const gridSpace = document.querySelector('#container');

for (i = 1; i <= 16; i++) {
    const box = document.createElement('div');
    box.setAttribute('id', i);
    box.setAttribute('class', 'topBox');
    gridSpace.appendChild(box);
}

for (i = 1; i <= 16; i++) {
    const topBox = document.querySelectorAll('.topBox');
    const columnBoxes = document.createElement('div')
    columnBoxes.setAttribute('class', 'column-boxes')
    topBox.forEach((firstBox) => firstBox.appendChild(columnBoxes));
}

//create gridSpace width and height according to user input