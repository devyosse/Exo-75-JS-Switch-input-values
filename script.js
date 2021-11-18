let input = document.getElementById('input1');
let input2 = document.getElementById('input2');
let button = document.getElementById('switch');

function input3() {
    let a = input.value;
    input.value = input2.value;
    input2.value = a;
}

button.addEventListener('click', input3)