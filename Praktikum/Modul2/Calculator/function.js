var prevNumber;
var currentNumber;
var currentOp;
var prevOp;

function appendNumber(operasi = null) {
  prevOp = currentOp;
  currentOp = operasi;

  var upValue = document.getElementById("append").value;
  if (upValue == "") {
    prevNumber = document.getElementById("mainDisplay").value;
    document.getElementById("append").value = prevNumber + " " + operasi;
  } else {
    var theNum = compute(prevOp);
    document.getElementById("append").value = theNum + " " + operasi;
    prevNumber = theNum;
  }

  document.getElementById("mainDisplay").value = "";
}

function compute(operasi = null) {
  currentNumber = document.getElementById("mainDisplay").value;
  var operand;
  switch (operasi) {
    case "+":
      operand = parseFloat(prevNumber) + parseFloat(currentNumber);
      break;
    case "-":
      operand = parseFloat(prevNumber) - parseFloat(currentNumber);
      break;
    case "*":
      operand = parseFloat(prevNumber) * parseFloat(currentNumber);
      break;
    case "/":
      operand = parseFloat(prevNumber) / parseFloat(currentNumber);
      break;
    case "%":
      operand = parseFloat(prevNumber) % parseFloat(currentNumber);
      break;
  }

  document.getElementById("append").value = "";
  return operand;
}
function disp() {
  document.getElementById("mainDisplay").value = compute(currentOp);
}

function clearDisplay() {
  document.getElementById("mainDisplay").value = "";
  document.getElementById("append").value = "";
  prevNumber = "";
  prevOp = "";
}
