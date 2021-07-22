//---display number and operator
function calculator(numOrOperator) {
  display = document.getElementById("display");
  if (display.value == 0) {
    display.value = "";
  }
  display.value += numOrOperator;
}

//---evaluation 
function evaluation(){
  const total = eval(display.value);
  display.value = total;
}
//---clear
function clearAll(newNumber) {
  display.value = newNumber;
}