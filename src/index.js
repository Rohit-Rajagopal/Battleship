// import { HumanPlayer } from "./js/player";
// import { DomManager } from "./js/dom_manager";
// import './css/styles.css';

// const player = new HumanPlayer('xyz');
// player.temp_populate();
// const manager = new DomManager();

// const board = document.querySelector(".board");
// board.addEventListener("click", (e) => {
//     if (e.target.nodeName == "BUTTON") {
//         let x, y;
//         [x, y] = e.target.value.split(',');
//         player.board.recieveAttack(Number(x), Number(y));
//         manager.renderBoard(player);
//     }
// });

// manager.renderBoard(player);

import { initializeGame } from './js/gamedriver';
import './css/styles.css';

initializeGame();