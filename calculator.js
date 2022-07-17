document.addEventListener('DOMContentLoaded', () => {
    let screen = document.getElementById('screen');
    let result = '';
    buttons = document.querySelectorAll('button');
    for (button of buttons) {
    button.addEventListener('click', (event) => {
        buttonText = event.target.innerText;
        if (buttonText == '='){
            result = eval(screen.value)
            screen.value = result;
        }
        else if (buttonText == 'AC'){screen.value = '';}
        else if (buttonText == 'C'){screen.value = screen.value.slice(0,-1);}
        else {screen.value += buttonText;}
    })
}
})