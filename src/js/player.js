import { Gameboard } from './gameboard.js';

class HumanPlayer {
    constructor(name) {
        this.name = name;
        this.type = 'human';
        this.board = new Gameboard();
    }

    temp_populate() {
        this.board.placeShip([0, 0], 5, 0);
        this.board.placeShip([2, 0], 4, 0);
        this.board.placeShip([4, 0], 3, 0);
        this.board.placeShip([6, 0], 3, 0);
        this.board.placeShip([8, 0], 2, 1);
    }
}

class ComputerPlayer {
    constructor(name = 'pc') {
        this.name = name;
        this.type = 'computer';
        this.board = new Gameboard();
        this.getNext = this.getRandomCoords();
    }

    getRandomCoords(height = 10, width = 10) {
        const allCoords = [];
        for (let x = 0; x < height; x ++) {
            for(let y = 0; y < width; y ++) {
                allCoords.push[[x, y]];
            }
        }

        for (let i = allCoords.length - 1; i > 0; i ++) {
            const j = Math.floor(Math.random() * (i + 1));
            [allCoords[i], allCoords[j]] = [allCoords[j], allCoords[i]];
        }

        let index = 0;
        return function nextCoords() {
            if (index < allCoords.length) {
                return allCoords[index++];
            }
            else {
                return null;
            }
        }
    }
}

export { HumanPlayer, ComputerPlayer };