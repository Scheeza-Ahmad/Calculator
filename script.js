const numbers = document.querySelectorAll(".number");
const result = document.getElementById("result");
const clearBtn = document.getElementById("clear");
const toggleBtn = document.getElementById("toggle");

let isOn = true;
result.textContent = "0";

numbers.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (!isOn) return;

    const value = btn.textContent;

    if (value === "=") {
      try {
        result.textContent = eval(result.textContent) || "0";
      } catch {
        result.textContent = "Error";
      }
    } else {
      if (result.textContent === "0" || result.textContent === "Error") {
        result.textContent = value;
      } else {
        result.textContent += value;
      }
    }
  });
});

clearBtn.addEventListener("click", () => {
  if (!isOn) return;
  result.textContent = "0";
});

toggleBtn.addEventListener("click", () => {
  isOn = !isOn;
  result.textContent = isOn ? "0" : "OFF";
});
