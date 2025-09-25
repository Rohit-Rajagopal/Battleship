import { HumanPlayer } from "./js/player";
import { DomManager } from "./js/dom_manager";
import './css/styles.css';

const player = new HumanPlayer('xyz');
player.board.placeShip([0, 0], 5, 1)
player.board.recieveAttack(0, 0)
player.board.recieveAttack(0, 1)
player.board.recieveAttack(1, 0)

const manager = new DomManager();

manager.renderBoard(player.board.board);