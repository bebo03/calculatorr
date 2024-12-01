function display(value) {
    const result = document.getElementById('output-screen');
    // result.value += value;
    

    if (value === 'pi') {
        result.value += Math.PI;
    } else if (value === 'e') {
        result.value += Math.E;
    } else if (value === '**') {
        result.value += '**'; 
    } else {
        result.value += value;
    }
}

function clearResult() {
    const result = document.getElementById('output-screen');
    result.value = '';
}

function calculate() {
    const result = document.getElementById('output-screen');
    try {
        result.value = eval(result.value);
    } catch (error) {
        result.value = "Error";
        // alert('Invalid Expression');
        // clearResult();
    }
}

function calculateFunction(func) {
    const result = document.getElementById('output-screen');
    try {
        let value = parseFloat(result.value);
        if (isNaN(value)) {
            alert("Please enter a valid number!");
            return;
        }
        switch (func) {
            case 'sqrt':
                result.value = Math.sqrt(value);
                break;
            case 'cbrt':
                result.value = Math.cbrt(value).toFixed(5);
                break;    
            case 'sin':
                result.value = Math.sin(value * Math.PI / 180).toFixed(5);
                break;
            case 'cos':
                result.value = Math.cos(value * Math.PI / 180).toFixed(5); 
                break;
            case 'tan':
                result.value = Math.tan(value * Math.PI / 180).toFixed(5);
                break;
            case 'log':
                result.value = Math.log10(value).toFixed(5);
                break;
            case 'reciprocal' :
                if (value === 0)
                    {
                        alert("Cannot divide by zero!");
                        return;
                    }   
                    result.value = (1 / value).toFixed(5);
                break;
            case 'factorial':
                     
                if (value < 0 || ! Number.isInteger(value))
                    {
                        alert("Factorial is only defined for positive numbers!");
                        return 1;
                    }    
                    function factorial(n) {
                        return n === 0 ? 1 : n * factorial(n-1);
                    }
                    result.value = factorial(value);
                
                break;
            case 'ln':
                if (value <= 0)
                    {
                        alert("ln is only defined for positive numbers!");
                        return;
                    }    
                    result.value = Math.log(value).toFixed(5);
                break;
            default:
                alert("Unsupported function!");
        }
    } catch (error) {
        alert("Error in calculation!");
    }
}

function backspace() {
    const result = document.getElementById('output-screen');
    result.value = result.value.slice(0, -1);
}
