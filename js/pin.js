

function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    } else {
        return getPin();
    }
}

function generatePin() {
    const pin = getPin()
    document.getElementById('generate-input').value = pin;

}

const numbers = document.getElementsByClassName('button');
for (const number of numbers) {
    number.addEventListener('click', function (e) {
        const numberInput = document.getElementById('number-input');
        if (isNaN(number.innerText)) {
            if (number.innerText == 'C') {
                numberInput.value = '';
            }
        } else {

            const previousNumber = numberInput.value;
            const newNumber = previousNumber + number.innerText;
            numberInput.value = newNumber;
        }

    })
};
function submitPin(){
    const generateInput = document.getElementById('generate-input');
    const generateInputValue = generateInput.value;
    const numberInput = document.getElementById('number-input');
    const numberInputValue = numberInput.value;
    if(generateInputValue == numberInputValue){
        // alert('pin matched')
        document.getElementById('match').style.display = 'block'
        document.getElementById('not-match').style.display = 'none'
    }
    else{
        document.getElementById('not-match').style.display = 'block'
        document.getElementById('match').style.display = 'none'
    }

}
