let currentPlayer = "Player 1";
let board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

const cells = document.querySelectorAll("td");
const winnerDisplay = document.getElementById("winner");

function cellClicked(row, col) {
  if (board[row][col] === "" && !winnerDisplay.textContent) {
    cells[row * 3 + col].textContent = currentPlayer === "Player 1" ? "X" : "O";
    board[row][col] = currentPlayer;
    if (checkWinner()) {
      winnerDisplay.textContent = `Winner: ${currentPlayer}`;
    } else {
      currentPlayer = currentPlayer === "Player 1" ? "Player 2" : "Player 1";
    }
  }
}

function checkWinner() {
  for (let i = 0; i < 3; i++) {
    if (
      board[i][0] !== "" &&
      board[i][0] === board[i][1] &&
      board[i][1] === board[i][2]
    ) {
      return true;
    }
    if (
      board[0][i] !== "" &&
      board[0][i] === board[1][i] &&
      board[1][i] === board[2][i]
    ) {
      return true;
    }
  }
  if (
    board[0][0] !== "" &&
    board[0][0] === board[1][1] &&
    board[1][1] === board[2][2]
  ) {
    return true;
  }
  if (
    board[0][2] !== "" &&
    board[0][2] === board[1][1] &&
    board[1][1] === board[2][0]
  ) {
    return true;
  }
  return false;
}

function resetGame() {
  currentPlayer = "Player 1";
  board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  cells.forEach((cell) => {
    cell.textContent = "";
  });
  winnerDisplay.textContent = "";
}
