if (document.getElementsByClassName("dtCYCd VDgVie")) {
  var pluginHolder = document.getElementById("snakePluginHolder");

  if (pluginHolder) {
    pluginHolder.remove();
    document.getElementsByClassName("FL0z2d Uxkl7b")[0].style.visibility = null;
    console.log("Content removed");
  } else {
    let attempts = 0; // Attempts var

    pluginHolder = document.createElement("div"); // Create the container div
    pluginHolder.id = "snakePluginHolder";

    var attemptsCounter = document.createElement("p"); // Attempts counter paragraph
    attemptsCounter.id = "attemptsCounter";
    attemptsCounter.innerText = `Attempts : ${attempts}`;

    pluginHolder.appendChild(attemptsCounter); // Mix everything
    document
      .getElementsByClassName("ynlwjd VDgVie qzMpzb u98ib")[0]
      .appendChild(pluginHolder);
    console.log("Content created");

    const appleTarget = document.getElementsByClassName("HIonyd")[0]; // Div that contains the amount of apples currently eaten

    const appleObserver = new MutationObserver(function (mutations, observer) {
      for (let { type, target } of mutations) {
        console.log("Speedrun splits will be added thanks to this");
      }
    });

    appleObserver.observe(appleTarget, { attributes: true, childList: true });

    const restartButton = document.getElementsByClassName("FL0z2d Uxkl7b")[0]; // Variable that tells us when a new game starts
    restartButton.style.visibility = "visible";
    restartButton.focus();

    const handleStartingGame = function (event) {
      if (
        event.type === "click" ||
        (event.type === "keydown" && event.key === "Enter")
      ) {
        attempts++;
        attemptsCounter = document.getElementById("attemptsCounter");
        attemptsCounter.innerText = `Attempts : ${attempts}`;
      }
    };

    restartButton.addEventListener("click", handleStartingGame);
    restartButton.addEventListener("keydown", handleStartingGame);
  }
}
