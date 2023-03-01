var color = '#ddd';

// solution: green, black, blue, yellow
var solution = ['rgb(0, 128, 0)', 'rgb(0, 0, 0)', 'rgb(0, 0, 255)', 'rgb(255, 255, 0)'];
var current_column = 1;
var column = '';

col1 = ['c1', 'c2', 'c3', 'c4'];
col2 = ['c5', 'c6', 'c7', 'c8'];
col3 = ['c9', 'c10', 'c11', 'c12'];
col4 = ['c13', 'c14', 'c15', 'c16'];
col5 = ['c17', 'c18', 'c19', 'c20'];
col6 = ['c21', 'c22', 'c23', 'c24'];
col7 = ['c25', 'c26', 'c27', 'c28'];
col8 = ['c29', 'c30', 'c31', 'c32'];
col9 = ['c33', 'c34', 'c35', 'c36'];
col10 = ['c37', 'c38', 'c39', 'c40'];

function find_column(){
    if (current_column == 1){
        return col1;
    }else if (current_column == 2){
        return col2;
    }else if (current_column == 3){
        return col3; 
    }else if (current_column == 4){
        return col4; 
    }else if (current_column == 5){
        return col5; 
    }else if (current_column == 6){
        return col6; 
    }else if (current_column == 7){
        return col7; 
    }else if (current_column == 8){
        return col8; 
    }else if (current_column == 9){
        return col9; 
    }else if (current_column == 10){
        return col10; 
    }
}

function getColour(piece_id){
    const element = document.getElementById(piece_id);
    const style = getComputedStyle(element);
    color = style.backgroundColor;
    // console.log(style.backgroundColor); //get rid of this
}

function changeColor(selection_id){
    correct_column = find_column()
    if (correct_column.includes(selection_id)){
        const element = document.getElementById(selection_id);
        element.style.backgroundColor = color;
        color = '#ddd';
    }
}

function checkAnswer(){
    // check user inputted answer
    correct_column = find_column();
    num = 0;
    red = 0;
    white = 0;
    for (i in correct_column){
        element = document.getElementById(correct_column[i]);
        color = getComputedStyle(element).backgroundColor;
        if (color == solution[num]){
            red += 1;
        }else if (solution.includes(color)){
            white += 1;
        }
        num += 1;
    }

    // change colour of result circles
    // get id of all four circles, then based on number of red and white, change colour of circles
    box1 = 'box'+String(current_column)+'c1';
    box2 = 'box'+String(current_column)+'c2';
    box3 = 'box'+String(current_column)+'c3';
    box4 = 'box'+String(current_column)+'c4';

    console.log(red);
    console.log(white);

    for (let i=1; i <= red; i++){
        boxName = 'box' + current_column + 'c' + i;
        box = document.getElementById(boxName);
        box.style.backgroundColor = 'rgb(255, 0, 0)';
    }

    for (let i=red+1; i <= red+white; i++){
        boxName = 'box' + current_column + 'c' + i;
        box = document.getElementById(boxName);
        box.style.backgroundColor = 'rgb(255, 255, 255)';
    }

    if (red == 4){
        document.getElementById('ansc1').style.backgroundColor = solution[0];
        document.getElementById('ansc2').style.backgroundColor = solution[1];
        document.getElementById('ansc3').style.backgroundColor = solution[2];
        document.getElementById('ansc4').style.backgroundColor = solution[3];
        alert('CONGRATULATIONS YOU HAVE WON THE GAME!');
    }

    // keep track of current column
    current_column += 1;
}