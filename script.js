const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let currentValue = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "C") {
      currentValue = "";
      display.value = "";
    }
    else if (value === "=") {
      try {
        currentValue = eval(currentValue);
        display.value = currentValue;
      } catch {
        display.value = "Error";
      }
    }
    else {
      currentValue += value;
      display.value = currentValue;
    }
  });
});
