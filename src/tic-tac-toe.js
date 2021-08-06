class TicTacToe {
    constructor() {
        this.matrix = [[null, null, null,], [null, null, null,], [null, null, null,],];
        this.step = 0;
        this.winner = null;
    }

    getCurrentPlayerSymbol() { return (this.step % 2) ? 'o' : 'x';  }

    nextTurn(rowIndex, columnIndex) {
        if (!this.noMoreTurns()
            && rowIndex < 3
            && columnIndex < 3
            && this.getFieldValue(rowIndex, columnIndex) == null
        ) {
            this.matrix[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
            this.step++;
            this.getWinner();            
        }
    }

    isFinished() {
        return (this.winner !== null || this.isDraw());
    }

    getWinner() {
        const fn = (p) => {
            if (this.matrix[0][0] !== null)
                if (this.matrix[0][0] == this.matrix[0][1]
                    && this.matrix[0][0] == this.matrix[0][2]
                ) return this.matrix[0][0];
                else if (this.matrix[0][0] == this.matrix[1][0]
                    && this.matrix[0][0] == this.matrix[2][0]
                ) return this.matrix[0][0];
                else if (this.matrix[0][0] == this.matrix[1][1]
                    && this.matrix[0][0] == this.matrix[2][2]
                ) return this.matrix[0][0];
            if (this.matrix[0][1] !== null)
                if (this.matrix[0][1] == this.matrix[1][1]
                    && this.matrix[0][1] == this.matrix[2][1]
                ) return this.matrix[0][1];
            if (this.matrix[1][0] !== null)
                if (this.matrix[1][0] == this.matrix[1][1]
                    && this.matrix[1][0] == this.matrix[1][2]
                ) return this.matrix[1][0];
            if (this.matrix[2][0] !== null)
                if (this.matrix[2][0] == this.matrix[2][1]
                    && this.matrix[2][0] == this.matrix[2][2]
                ) return this.matrix[2][0];
                else if (this.matrix[2][0] == this.matrix[1][1]
                    && this.matrix[2][0] == this.matrix[0][2]
                ) return this.matrix[2][0];
            if (this.matrix[0][2] !== null)
                if (this.matrix[0][2] == this.matrix[1][2]
                    && this.matrix[0][2] == this.matrix[2][2]
                ) return this.matrix[0][2];
            return null;
        };
        if (!this.winner) this.winner = fn();
        return this.winner;
    }

    noMoreTurns() { return this.step > 8 ; }

    isDraw() {  return (this.noMoreTurns() && this.winner == null)  }

    getFieldValue(rowIndex, colIndex) {
        return this.matrix[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;

