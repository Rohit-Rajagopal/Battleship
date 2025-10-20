class DomManager {

    constructor() {
        this.turnDisplay = document.querySelector(".turn-indicator");
        this.boardDisplay = document.querySelector(".board");
        this.winDisplay = document.querySelector(".win-indicator");
    }

    renderBoard(player) {
        this.boardDisplay.innerHTML = '';
        const board = player.board.board;
        for (let i = 0; i < board.length; i ++) {
            for (let j = 0; j < board[0].length; j ++) {
                const newButton = document.createElement("button");

                newButton.classList.add('board-tile');
                newButton.value = `${i},${j}`;
                if (board[i][j] === -2) {
                    newButton.classList.add('hit');
                    newButton.disabled = true;
                } 
                else if (board[i][j] === -3) {
                    newButton.classList.add('miss')
                    newButton.disabled = true;
                }

                this.boardDisplay.appendChild(newButton);
            }
        }
    }

    displayWinner(player) {
        this.winDisplay.textContent = `${player.name} wins!`;
    }
}

export { DomManager };