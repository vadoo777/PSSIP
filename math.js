function task4() {
    const x = parseFloat(document.getElementById("x").value);
    const a = parseFloat(document.getElementById("a").value);
    let y, formula;
    
    if (isNaN(x) || isNaN(a)) {
        document.getElementById("r4").innerHTML = "<strong>Ошибка: введите x и a</strong>";
        return;
    }
    
    try {
        if (x >= 2) {
            const denominator = x * x - 1.5;
            
            if (denominator === 0) {
                document.getElementById("r4").innerHTML = 
                    "<strong>Ошибка: деление на 0</strong><br>" +
                    "x² - 1.5 = 0 при x = ±√1.5 ≈ ±1.225";
                return;
            }
            
            if (a + x < 0) {
                document.getElementById("r4").innerHTML = 
                    "<strong>Ошибка: корень из отрицательного числа</strong><br>" +
                    "a + x = " + (a + x) + " < 0";
                return;
            }
            
            y = a / denominator + Math.sqrt(a + x);
            formula = "a/(x²-1.5) + √(a+x)";
        }
        else if (x >= 0 && x < 2) {
            if (a < 0) {
                document.getElementById("r4").innerHTML = 
                    "<strong>Ошибка: корень из отрицательного числа</strong><br>" +
                    "a = " + a + " < 0";
                return;
            }
            
            y = 2 * Math.sqrt(a) - x / 4;
            formula = "2√a - x/4";
        }
        else {
            y = 0.3 * x;
            formula = "0.3x";
        }
        
        document.getElementById("r4").innerHTML = 
            "x = " + x + ", a = " + a + "<br>" +
            "Формула: " + formula + "<br>" +
            "<strong>Y = " + y.toFixed(4) + "</strong>";
    }
    catch (e) {
        document.getElementById("r4").innerHTML = "<strong>Ошибка вычисления</strong>";
    }
}