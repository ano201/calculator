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
function mode() {
  if (dotBtn.style.left == 0) {
    dotBtn.style.backgroundColor = "red";
    dotBtn.style.left = "65px";
    main.style.backgroundColor = "white";
  } else {
    location.reload(true);
  }
}


//-----time

const display = document.getElementById("time");
const time = new Date();
const hours = time.getHours();
const minutes = time.getMinutes();

display.value = hours + " : " + minutes;