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

//----time and mode button

//---mode button
const dotBtn = document.getElementById("dot");
const main = document.getElementById("main");
dotBtn.addEventListener("click", function() {
  if (dotBtn.style.left != 0) {
    dotBtn.style.backgroundColor = "white";
    dotBtn.style.left = 0;
    main.style.backgroundColor = "#1A1A21";
  } else {
    dotBtn.style.backgroundColor = "red";
    dotBtn.style.left = "65px";
    main.style.backgroundColor = "white";
  }
})