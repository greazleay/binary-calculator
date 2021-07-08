const body = document.querySelector('body');

const container = document.createElement('div');
container.id = 'container';
body.appendChild(container);

const res = document.createElement('div');
res.id = 'res';
container.appendChild(res);

const btns = document.createElement('div');
btns.id = 'btns';
container.appendChild(btns);

function createBut(id, text, click) {
    let button = document.createElement('button');
    button.id = id;
    button.textContent = text;
    button.onclick = click;
    btns.appendChild(button);
}

createBut('btn0', '0', fillInput);
createBut('btn1', '1', fillInput);
createBut('btnClr', 'C', clearInput);
createBut('btnEql', '=', operate);
createBut('btnSum', '+', fillInput);
createBut('btnSub', '-', fillInput);
createBut('btnMul', '*', fillInput);
createBut('btnDiv', '/', fillInput);

let cleared = true;

function toClear() {
    const input = document.querySelector('#res');
    input.textContent = "";
    cleared = true;
}

const add = function(a, b) {
    return (parseInt(a, 2) + parseInt(b, 2));
};

const subtract = function(a, b) {
    return (parseInt(a, 2) - parseInt(b, 2))
};

const multiply = function(a, b) {
    return (parseInt(a, 2) * parseInt(b, 2))
};

const divide = function(a, b) {
    return (parseInt(a, 2) / parseInt(b, 2));
};


function fillInput(e) {
    if (!cleared) toClear();
    
    const input = document.querySelector('#res');
    input.textContent = input.textContent.concat('', e.target.textContent);
}

function clearInput(e) {
    const input = document.querySelector('#res');
    input.textContent = ""
}

function operate() {
    const input = document.querySelector('#res');
    const arr = input.textContent.split(/(\d+)/).filter(e => e != '');
    let result;

    switch (true) {
        case input.textContent.includes('+'):
            result = add(arr[arr.indexOf('+') - 1], arr[arr.indexOf('+') + 1])
            input.textContent = result.toString(2)
            break;
        case input.textContent.includes('-'):
            result = subtract(arr[arr.indexOf('-') - 1], arr[arr.indexOf('-') + 1])
            input.textContent = result.toString(2)
            break;
        case input.textContent.includes('*'):
            result = multiply(arr[arr.indexOf('*') - 1], arr[arr.indexOf('*') + 1])
            input.textContent = result.toString(2)
            break;
        case input.textContent.includes('/'):
            result = divide(arr[arr.indexOf('/') - 1], arr[arr.indexOf('/') + 1])
            input.textContent = result.toString(2)
            break;     
        default:
            break;
    };

    cleared = false;
}

