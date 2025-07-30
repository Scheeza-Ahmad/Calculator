    let numbers = document.querySelectorAll(".number");
    let result = document.getElementById("result");
    let clearBtn = document.getElementById("clear");
    let toggleBtn = document.getElementById("toggle");

    let isOn = true;
    result.textContent = "";

    numbers.forEach((btn) => {
      btn.addEventListener("click", () => {
        if (!isOn) return;

        let value = btn.textContent;

        if (value === "=") {
          try {
            result.textContent = eval(result.textContent);
          } catch {
            result.textContent = "Error";
          }
        } else {
          result.textContent += value;
        }
      });
    });

    clearBtn.addEventListener("click", () => {
      if (!isOn) return;
      result.textContent = "";
    });

    toggleBtn.addEventListener("click", () => {
      isOn = !isOn;
      result.textContent = isOn ? "" : "OFF";
    });