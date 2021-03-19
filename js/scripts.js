const player = (piece, name = `Player ${piece}`) => {
    let moves = [];

    const getName = () => {
        return name;
    }

    const getMoves = () => {
        return moves;
    }

    const clearMoves = () => {
        moves = [];
    }

    const setMove = move => {
        moves.push(move);
    }

    const getPiece = () => {
        return piece;
    }

    return {
        getName,
        getMoves,
        clearMoves,
        setMove,
        getPiece
    }
}

const gameBoard = (() => {
    const _gameBoard = new Array(9);

    const getValue = index => {
        return _gameBoard[index];
    }

    const setValue = (index, value) => {
        _gameBoard[index] = value;
    }

    const clearBoard = () => {
        for (let i = 0; i < 9; i++) {
            _gameBoard[i] = "";
        }
    }

    return {
        getValue,
        setValue,
        clearBoard
    }
})();

const displayController = (() => {
    const squares = document.querySelectorAll('.square');

    squares.forEach(square => {
        square.addEventListener('click', function(event) {
            if (!square.innerText) {
                gameController.playerMove(square.dataset.square);
            }
        });
    });

    const updateBoard = (() => {
        for (let [index, value] of squares.entries()) {
            if (gameBoard.getValue(index)) {
                value.innerText = gameBoard.getValue(index);
            }
        }
    });

    const resetBoard = () => {
        squares.forEach(square => {
            square.innerText = "";
        })
    }

    return {
        updateBoard,
        resetBoard
    }
})();

const gameController = (() => {
    const _playerX = player('X');
    const _playerO = player('O');
    let _currentPlayer = _playerX;

    const _setCurrentPlayer = () => {
        return _currentPlayer === _playerX ? _playerO : _playerX;
    }

    const playerMove = squareIndex => {
        gameBoard.setValue(squareIndex, _currentPlayer.getPiece());
        _currentPlayer.setMove(squareIndex);
        displayController.updateBoard();
        _currentPlayer = _setCurrentPlayer();
    }

    const newGame = () => {
        gameBoard.clearBoard();
        _playerX.clearMoves();
        _playerO.clearMoves();
        _currentPlayer = _playerX;
        displayController.resetBoard();
    }

    return {
        playerMove,
        newGame
    }

})();
