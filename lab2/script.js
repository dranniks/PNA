window.onload = function() { 
    let a = ''
    let b = ''
    let expressionResult = ''
    let selectedOperation = null
    let outputElement = document.getElementById("result")
    let digitButtons = document.querySelectorAll('[id ^= "btn_digit_"]')
    let maxDigits = 10;
    let lastB = null;
    let newInputExpected = false;
  

    function onDigitButtonClicked(digit) {
        if (newInputExpected && selectedOperation) {
            b = '';
            newInputExpected = false;
        }
    
        const current = selectedOperation ? b : a;
        
        if (current.length >= maxDigits) return;
        
        if (digit === '000') {
            if (current.indexOf('.') !== -1) return;
            if (current === '') digit = '0';
        }
    
        if (digit === '.' && current.includes('.')) return;
    
        if (selectedOperation) {
            b += digit;
            outputElement.innerHTML = b;
        } else {
            a += digit;
            outputElement.innerHTML = a;
        }
    }

    digitButtons.forEach(button => {
        button.onclick = function() {
            const digitValue = button.innerHTML
            onDigitButtonClicked(digitValue)
        }
    })

    // Операции
    document.getElementById("btn_op_mult").onclick = function() { 
        if (a === '') return
        selectedOperation = 'x'
    }
    document.getElementById("btn_op_plus").onclick = function() { 
        if (a === '') return;
        selectedOperation = '+';
        newInputExpected = false;
        lastB = null;
    }
    document.getElementById("btn_op_minus").onclick = function() { 
        if (a === '') return
        selectedOperation = '-'
    }
    document.getElementById("btn_op_div").onclick = function() { 
        if (a === '') return
        selectedOperation = '/'
    }

    // Очистка
    document.getElementById("btn_op_clear").onclick = function() { 
        a = ''
        b = ''
        selectedOperation = null
        outputElement.innerHTML = 0
    }

    // Равно
    document.getElementById("btn_op_equal").onclick = function() { 
        if (a === '' || !selectedOperation) return;
        
        // Используем сохраненное значение если новое не введено
        if (b === '' && lastB !== null) {
            b = lastB;
        } else if (b === '') {
            return;
        }
        
        switch(selectedOperation) { 
            case 'x': expressionResult = (+a) * (+b); break;
            case '+': expressionResult = (+a) + (+b); break;
            case '-': expressionResult = (+a) - (+b); break;
            case '/': expressionResult = (+a) / (+b); break;
        }
        
        a = expressionResult.toString();
        lastB = b; // Сохраняем последний операнд
        b = '';
        newInputExpected = true;
        
        outputElement.innerHTML = a;
    }

    // Смена знака
    document.getElementById("btn_op_sign").onclick = function() {
        if (selectedOperation && b !== '') {
            b = (-parseFloat(b)).toString()
            outputElement.innerHTML = b
        } else if (a !== '') {
            a = (-parseFloat(a)).toString()
            outputElement.innerHTML = a
        }
    }

    // Процент
    document.getElementById("btn_op_percent").onclick = function() {
        if (selectedOperation && b !== '') {
            b = (parseFloat(b) / 100).toString()
            outputElement.innerHTML = b
        } else if (a !== '') {
            a = (parseFloat(a) / 100).toString()
            outputElement.innerHTML = a
        }
    }

    // Backspace
    document.getElementById("btn_op_backspace").onclick = function() {
        if (selectedOperation) {
            b = b.slice(0, -1)
            outputElement.innerHTML = b || '0'
        } else {
            a = a.slice(0, -1)
            outputElement.innerHTML = a || '0'
        }
    }

    // Смена цвета фона
    document.getElementById('theme').addEventListener('click', function() {
        const body = document.body;
        body.classList.toggle('dark-theme');
    });

    // Квадратный корень
    document.getElementById("btn_op_sqrt").onclick = function() {
        const num = selectedOperation ? parseFloat(b) : parseFloat(a)
        if (num < 0) {
            outputElement.innerHTML = 'Error'
            a = b = ''
            selectedOperation = null
            return
        }
        const result = Math.sqrt(num).toString()
        if (selectedOperation) b = result
        else a = result
        outputElement.innerHTML = result
    }

    // Квадрат
    document.getElementById("btn_op_square").onclick = function() {
        const num = selectedOperation ? parseFloat(b) : parseFloat(a)
        const result = (num ** 2).toString()
        if (selectedOperation) b = result
        else a = result
        outputElement.innerHTML = result
    }

    // Факториал
    function factorial(n) {
        if (n === 0 || n === 1) return 1
        return n * factorial(n - 1)
    }
    document.getElementById("btn_op_factorial").onclick = function() {
        const num = selectedOperation ? parseFloat(b) : parseFloat(a)
        if (!Number.isInteger(num) || num < 0) {
            outputElement.innerHTML = 'Error'
            a = b = ''
            selectedOperation = null
            return
        }
        const result = factorial(num).toString()
        if (selectedOperation) b = result
        else a = result
        outputElement.innerHTML = result
    }

    // Смена цвета окна результата
    document.getElementById('btn_change_output').addEventListener('click', function() {
        const body = document.body;
        body.classList.toggle('change-color');
    });

    document.querySelector('.dropdown-menu').onchange = function() {
        const isEngineeringMode = this.value === "Инженерный";

        maxDigits = isEngineeringMode ? 15 : 10;
        
        document.querySelectorAll('.engineering-hidden').forEach(btn => {
            btn.style.display = isEngineeringMode ? 'inline-block' : 'none';
        });
    
        const calculator = document.querySelector(".calculator-container");
        const resultDisplay = document.querySelector(".result");
        calculator.style.width = isEngineeringMode ? "452px" : "252px";
        resultDisplay.style.width = isEngineeringMode ? "412px" : "242px";
    
        a = b = '';
        selectedOperation = null;
        outputElement.innerHTML = '0';
    };

    document.getElementById("btn_op_I").onclick = function() {
        if (a === 0) {
            outputElement.innerHTML = "Ошибка: Деление на ноль";
            return;
        }
        let result = (220 / a).toString();
        a = result;
        outputElement.innerHTML = result;
    }


    document.querySelector('.github').onclick = function() {
        window.open('https://github.com/dranniks/Programming-Network-Applications', '_blank'); 
    }
}