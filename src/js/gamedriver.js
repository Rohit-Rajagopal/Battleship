import { HumanPlayer, ComputerPlayer } from "./player";
import { DomManager } from "./dom_manager";

const h_player = new HumanPlayer('xyz');
const c_player = new ComputerPlayer();
let cur_player = (Math.floor(Math.random() * 2) == 0)? h_player: c_player;
let isGameOver = false;
const manager = new DomManager();

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

const board = document.querySelector(".board");
board.addEventListener("click", (e) => {
    if (e.target.nodeName == "BUTTON" && cur_player == h_player && isGameOver == false) {
        cur_player = c_player;
        let x, y;
        [x, y] = e.target.value.split(',');
        c_player.board.recieveAttack(Number(x), Number(y));
        manager.renderBoard(c_player);
        if (c_player.board.isSunkAll()) {
            manager.displayWinner(h_player);
            isGameOver = true;
        }
        setTimeout(playTurn, 500);
    }
});

async function playTurn() {
    manager.renderBoard(h_player);
    await delay(500)
    let x, y;
    [x, y] = c_player.getNext();
    h_player.board.recieveAttack(x, y);
    manager.renderBoard(h_player);
    if (h_player.board.isSunkAll()) {
        manager.displayWinner(c_player);
        isGameOver = true;
    }
    await delay(500)
    cur_player = h_player;
    manager.renderBoard(c_player);
}

function initializeGame() {
    h_player.temp_populate();
    c_player.temp_populate();

    if (cur_player == c_player) {
        playTurn();
    }
    else {
        manager.renderBoard(c_player);
    }
}

export { initializeGame };