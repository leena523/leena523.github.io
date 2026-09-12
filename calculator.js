document.write("<h2>Calculator Results</h2>");
document.write("<table>");
document.write("<tr><th>Number 1</th><th>Operator</th><th>Number 2</th><th>Result</th></tr>");

let results = []; // store valid results only

while (true) {
    let x = prompt("Enter the first number (x):");
    if (x === null) break;

    let y = prompt("Enter the second number (y):");
    if (y === null) break;

    let operator = prompt("Enter operator (+, -, *, /, %):");
    if (operator === null) break;

    let num1 = parseFloat(x);
    let num2 = parseFloat(y);
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        result = "Error: Non-numeric input";
    } else {
        switch (operator) {
            case "+":
                result = num1 + num2;
                break;
            case "-":
                result = num1 - num2;
                break;
            case "*":
                result = num1 * num2;
                break;
            case "/":
                result = num1 / num2;
                break;
            case "%":
                result = num1 % num2;
                break;
            default:
                result = "Error: Invalid operator";
        }
    }

    document.write("<tr><td>" + x + "</td><td>" + operator + "</td><td>" + y + "</td><td>" + result + "</td></tr>");

    if (!isNaN(result)) {
        results.push(result);
    }
}

document.write("</table>");

if (results.length > 0) {
    let min = Math.min(...results);
    let max = Math.max(...results);
    let total = results.reduce((a, b) => a + b, 0);
    let avg = total / results.length;

    document.write("<h2>Summary</h2>");
    document.write("<table>");
    document.write("<tr><th>Minimum</th><th>Maximum</th><th>Average</th><th>Total</th></tr>");
    document.write("<tr><td>" + min + "</td><td>" + max + "</td><td>" + avg + "</td><td>" + total + "</td></tr>");
    document.write("</table>");
}
