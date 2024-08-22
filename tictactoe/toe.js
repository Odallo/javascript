// We store our game status element here to allow us to more easily use it later on
const statusDisplay = document.querySelector('.game--status');

// Initial game variables
let gameActive = true;
let currentPlayer = "X";
let gameState = ["", "", "", "", "", "", "", "", ""];

// Messages to display game status
const winningMessage = () => `Player ${currentPlayer} has won!`;
const drawMessage = () => `Game ended in a draw!`;
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;

// Set the initial message to let the players know whose turn it is
statusDisplay.innerHTML = currentPlayerTurn();

// Handle the cell click event
function handleCellClick(clickedCellEvent) {
    // Save the clicked HTML element in a variable for easier further use
    const clickedCell = clickedCellEvent.target;

    // Grab the 'data-cell-index' attribute from the clicked cell
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));

    // Check if the cell has already been played or if the game is paused
    if (gameState[clickedCellIndex] !== "" || !gameActive) {
        return;
    }

    // Proceed with the game flow
    handleCellPlayed(clickedCell, clickedCellIndex);
    handleResultValidation();
}

// Handle the played move
function handleCellPlayed(clickedCell, clickedCellIndex) {
    // Update internal game state and user interface
    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;
}

// Winning conditions
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Validate the game result
function handleResultValidation() {
    let roundWon = false;
    for (let i = 0; i <= 7; i++) {
        const winCondition = winningConditions[i];
        let a = gameState[winCondition[0]];
        let b = gameState[winCondition[1]];
        let c = gameState[winCondition[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        statusDisplay.innerHTML = winningMessage();
        gameActive = false;
        return;
    }

    // Check if there are any moves left
    let roundDraw = !gameState.includes("");
    if (roundDraw) {
        statusDisplay.innerHTML = drawMessage();
        gameActive = false;
        return;
    }

    // Continue the game by changing the current player
    handlePlayerChange();
}

// Handle player change
function handlePlayerChange() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusDisplay.innerHTML = currentPlayerTurn();
}

// Handle game restart
function handleRestartGame() {
    gameActive = true;
    currentPlayer = "X";
    gameState = ["", "", "", "", "", "", "", "", ""];
    statusDisplay.innerHTML = currentPlayerTurn();
    document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "");
}

// Add event listeners for each cell and the restart button
document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));
document.querySelector('.game--restart').addEventListener('click', handleRestartGame);
