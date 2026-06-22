function calculatePiecewiseFunction(x) {
    let y, formula;
    if (x >= 2) {
        y = 6 / (Math.pow(x, 2) - 1.5) + Math.sqrt(2 + x);
        formula = "6/(x²-1.5) + √(2+x)";
    } else if (x >= 0 && x < 2) {
        y = 2 * Math.sqrt(x) - x / 4;
        formula = "2√x - x/4";
    } else {
        y = 0.3 * x;
        formula = "0.3x";
    }
    return { x: x, y: y.toFixed(4), formula: formula };
}

function calculateFunction() {
    const x = parseFloat(document.getElementById('xValue').value);
    if (isNaN(x)) {
        alert('Введите число');
        return;
    }
    const result = calculatePiecewiseFunction(x);
    const resultDiv = document.getElementById('result4');
    resultDiv.innerHTML = '<p>x = ' + result.x + ', формула: ' + result.formula + '</p><p><strong>Y = ' + result.y + '</strong></p>';
    resultDiv.classList.add('show');
}