(function () {
  let button = document.querySelector("button");
  let target = document.querySelector("span");

  let timer;
  let timeLeft = 5 * 60; // 5 minutes in seconds

  button.addEventListener("click", () => {
    if (timer) return; // Prevent multiple intervals

    timer = setInterval(() => {
      let minutes = Math.floor(timeLeft / 60);
      let seconds = timeLeft % 60;

      target.innerText = `${minutes} min : ${
        seconds < 10 ? "0" : ""
      }${seconds} sec`;

      if (timeLeft === 0) {
        clearInterval(timer);
        timer = null; // Reset timer reference
        target.innerText = "Time's up!";
      } else {
        timeLeft--;
      }
    }, 1000);
  });
})();
