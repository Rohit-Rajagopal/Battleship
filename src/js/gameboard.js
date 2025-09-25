import { Ship } from "./ship.js"

class Gameboard {
    constructor(length, breadth) {

        this.board = []
        for (let i = 0; i < length; i++) {
            this.board[i] = [];
            for (let j = 0; j < breadth; j ++) {
                this.board[i][j] = -1;
            }
        }

        this.ships_id = new Map();
        this.id_ships = new Map();
        this.num_ships = 0;
        this.sunk_ships = 0;
    }

    createShip(length) {
        const newShip = new Ship(length);
        this.ships_id.set(newShip, this.num_ships);
        this.id_ships.set(this.num_ships, newShip);
        this.num_ships += 1;
        return newShip;
    }

    canPlace(coords, length, alignment) {
        let x, y;
        [x, y] = coords;
        if (x < 0 || y < 0 || x >= this.board.length || y >= this.board[0].length) {
            return false;
        }
        if (alignment === 0) {
            for (let i = 0; i < length; i ++) {
                if (this.board[x][y + i] !== -1) {
                    return false;
                }
            }
        }
        else {
            for (let i = 0; i < length; i ++) {
                if (this.board[x + i][y] !== -1) {
                    return false;
                }
            }
        }
        return true;
    }

    placeShip(coords, length, alignment) {
        if (!this.canPlace(coords, length, alignment)) {
            return false;
        }
        const newShip = this.createShip(length);
        let x, y;
        [x, y] = coords;
        if (alignment === 0) {
            for (let i = 0; i < length; i ++) {
                this.board[x][y + i] = this.ships_id.get(newShip);
            }
        }
        else {
            for (let i = 0; i < length; i ++) {
                this.board[x + i][y] = this.ships_id.get(newShip);
            }
        }
        return true;
    }

    recieveAttack(x, y) {
        if (this.board[x][y] === -1) {
            this.board[x][y] = -3;
            return false;
        }
        const ship = this.id_ships.get(this.board[x][y]);
        ship.hit();
        if (ship.isSunk()) {
            this.sunk_ships += 1
        }
        this.board[x][y] = -2;
        return true;
    }

    isSunkAll() {
        if (this.sunk_ships === this.num_ships) {
            return true;
        }
        return false;
    }
}

export { Gameboard };