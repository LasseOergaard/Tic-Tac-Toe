Game = (function () {
  /* Variables */
  let playerX = "x";
  let playerO = "o";
  var currentPlayer = playerX;

  /* Cache DOM */
  let tableSpots = document.querySelectorAll(".table-spot");
  let restartButtons = document.querySelectorAll(".restart-button");
  let playerSelectionX = document.querySelector(".player-selection-x");
  let playerSelectionO = document.querySelector(".player-selection-o");
  let winAlert = document.querySelector(".win-alert");
  let winAlertName = document.querySelector(".winner-name");
  let winnerBlur = document.querySelector(".winner-blur");

  /* Bind Events */
  tableSpots.forEach((tableSpot) => {
    tableSpot.addEventListener("click", addMark);
  });
  restartButtons.forEach((button) => {
    button.addEventListener("click", RestartGame);
  });

  /* Functions */
  function addMark(e) {
    let targetSpot = e.target;
    if (targetSpot.innerText.length > 0) {
      return;
    } else {
      if (currentPlayer === playerX) {
        targetSpot.innerText = "x";
        currentPlayer = playerO;
      } else if (currentPlayer === playerO) {
        targetSpot.innerText = "o";
        currentPlayer = playerX;
      }
    }
    CheckWin();
    UpdatePlayerSelection();
  }

  function CheckWin() {
    /* 1 */
    if (
      tableSpots[0].innerText == "x" &&
      tableSpots[1].innerText == "x" &&
      tableSpots[2].innerText == "x"
    ) {
      AlertWinner("X");
    } else if (
      tableSpots[0].innerText == "o" &&
      tableSpots[1].innerText == "o" &&
      tableSpots[2].innerText == "o"
    ) {
      AlertWinner("O");
    }

    /* 2 */
    if (
      tableSpots[3].innerText == "x" &&
      tableSpots[4].innerText == "x" &&
      tableSpots[5].innerText == "x"
    ) {
      AlertWinner("X");
    } else if (
      tableSpots[3].innerText == "o" &&
      tableSpots[4].innerText == "o" &&
      tableSpots[5].innerText == "o"
    ) {
      AlertWinner("O");
    }

    /* 3 */
    if (
      tableSpots[6].innerText == "x" &&
      tableSpots[7].innerText == "x" &&
      tableSpots[8].innerText == "x"
    ) {
      AlertWinner("X");
    } else if (
      tableSpots[6].innerText == "o" &&
      tableSpots[7].innerText == "o" &&
      tableSpots[8].innerText == "o"
    ) {
      AlertWinner("O");
    }

    /* 4 */
    if (
      tableSpots[0].innerText == "x" &&
      tableSpots[3].innerText == "x" &&
      tableSpots[6].innerText == "x"
    ) {
      AlertWinner("X");
    } else if (
      tableSpots[0].innerText == "o" &&
      tableSpots[3].innerText == "o" &&
      tableSpots[6].innerText == "o"
    ) {
      AlertWinner("O");
    }

    /* 5 */
    if (
      tableSpots[1].innerText == "x" &&
      tableSpots[4].innerText == "x" &&
      tableSpots[7].innerText == "x"
    ) {
      AlertWinner("X");
    } else if (
      tableSpots[1].innerText == "o" &&
      tableSpots[4].innerText == "o" &&
      tableSpots[7].innerText == "o"
    ) {
      AlertWinner("O");
    }

    /* 6 */
    if (
      tableSpots[2].innerText == "x" &&
      tableSpots[5].innerText == "x" &&
      tableSpots[8].innerText == "x"
    ) {
      AlertWinner("X");
    } else if (
      tableSpots[2].innerText == "o" &&
      tableSpots[5].innerText == "o" &&
      tableSpots[8].innerText == "o"
    ) {
      AlertWinner("O");
    }

    /* 7 */
    if (
      tableSpots[0].innerText == "x" &&
      tableSpots[4].innerText == "x" &&
      tableSpots[8].innerText == "x"
    ) {
      AlertWinner("X");
    } else if (
      tableSpots[0].innerText == "o" &&
      tableSpots[4].innerText == "o" &&
      tableSpots[8].innerText == "o"
    ) {
      AlertWinner("O");
    }

    /* 8 */
    if (
      tableSpots[2].innerText == "x" &&
      tableSpots[4].innerText == "x" &&
      tableSpots[6].innerText == "x"
    ) {
      AlertWinner("X");
    } else if (
      tableSpots[2].innerText == "o" &&
      tableSpots[4].innerText == "o" &&
      tableSpots[6].innerText == "o"
    ) {
      AlertWinner("O");
    }
  }

  function UpdatePlayerSelection() {
    if (currentPlayer == "x") {
      playerSelectionX.classList.toggle("player-selection-active");
      playerSelectionO.classList.toggle("player-selection-active");
    } else if (currentPlayer == "o") {
      playerSelectionO.classList.toggle("player-selection-active");
      playerSelectionX.classList.toggle("player-selection-active");
    }
  }

  function RestartGame() {
    tableSpots.forEach((spot) => {
      spot.innerText = "";
    });
    currentPlayer = "x";
    playerSelectionX.classList = "player-selection-x player-selection-active";
    playerSelectionO.classList = "player-selection-o";
    winAlert.classList = "win-alert win-alert-inactive";
    winnerBlur.classList = "winner-blur-inactive winner-blur";
  }

  function AlertWinner(winner) {
    if (winner == "X") {
      winAlert.classList = "win-alert win-alert-active";
      winAlertName.innerText = "X Won!";
      winnerBlur.classList = "winner-blur winner-blur-active";
    } else if (winner == "O") {
      winAlert.classList = "win-alert win-alert-active";
      winAlertName.innerText = "O Won!";
      winnerBlur.classList = "winner-blur winner-blur-active";
    }
  }

  /* Commands for public use. */
})();
