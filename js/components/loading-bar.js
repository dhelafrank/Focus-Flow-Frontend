let progressElements = document.querySelectorAll(".progress-value");

function createCounterPercentageElement(percentageValue) {
    let counterPercentageElement = `
    <p>${percentageValue}</p>
    `
    return counterPercentageElement
}


export function loadProgressBars() {
    progressElements.forEach(bars => {
        setTimeout(() => {
            bars.style = `width:${bars.getAttribute("progress-percentage")}%`
        }, 2)
    })
}

// Loop through each element and animate the counter
progressElements.forEach(function (element) {
    let counterPercentageElement = `<p>0%</p>`;
    element.parentElement.parentElement.insertAdjacentHTML("beforeend", counterPercentageElement);
  
    var percentage = parseInt(element.getAttribute("progress-percentage")); // Get the target percentage
    var duration = 3000;
    var step = 20;
    var increment = (percentage * step) / duration;
  
    var currentPercentage = 0;
  
    var interval = setInterval(function () {
      if (currentPercentage < percentage) {
        currentPercentage += increment;
        if (currentPercentage > percentage) {
          currentPercentage = percentage; // Ensure it doesn't go beyond the target
        }
        let counterResults = Math.round(currentPercentage) + "%";
        element.parentElement.parentElement.querySelector('p').innerHTML = counterResults;
      } else {
        clearInterval(interval);
      }
    }, step);
  });
  