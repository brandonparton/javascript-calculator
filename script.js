function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function toggleNegative() {
    let currentValue = document.getElementById('display').value;
    if (currentValue.startsWith('-')) {
        document.getElementById('display').value = currentValue.slice(1);
    } else {
        document.getElementById('display').value = '-' + currentValue;
    }
}

function calculatePercent() {
    let currentValue = document.getElementById('display').value;
    if (!currentValue.includes('%')) {
        document.getElementById('display').value = eval(currentValue) / 100;
    }
}
