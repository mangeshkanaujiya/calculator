 // Function to append clicked number/operator to the display
 function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

// Function to clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Function to calculate the result
function calculate() {
    const display = document.getElementById('display');
    try {
        // Evaluate the expression entered in the display
        display.value = eval(display.value);
    } catch (e) {
        // If there's an error (like an invalid expression), show "Error"
        display.value = 'Error';
    }
}
