var color = '#ddd';

var solution = ['GREEN', 'RED', 'BLUE', 'YELLOW'];

function getColour(piece_id){
    const element = document.getElementById(piece_id);
    const style = getComputedStyle(element);
    color = style.backgroundColor;
    console.log(style.backgroundColor);
}

function changeColor(selection_id){
    console.log(selection_id)
    console.log(color)
    const element = document.getElementById(selection_id);
    element.style.backgroundColor = color;
    color = '#ddd';
}