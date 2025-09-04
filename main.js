const display = document.getElementById("input");
// const bg = (document.querySelector(".div").classList.add = "show");

function append(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Erro";
  }
}
