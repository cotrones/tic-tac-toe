const gameBoard = (() => {
    const _gameBoard = new Array(9);

    const getBoard = () => {
        return _gameBoard;
    }

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
        getBoard,
        getValue,
        setValue,
        clearBoard
    }
})();

const displayController = (() => {
    const squares = document.querySelectorAll('.square');

    squares.forEach(square => {
        square.addEventListener('click', function(event) {
            console.log(square.dataset.square);
            this.innerText = "X";
        });
    });

    const updateBoard = (() => {
        for (let [index, value] of squares.entries()) {
            if (gameBoard.getValue(index)) {
                value.innerText = gameBoard.getValue(index);
            }
        }
    });

    return {
        updateBoard
    }
})();

const gameController = (() => {

})();

const player = (name) => {
    const getName = () => {
        return name;
    }

    return {
        getName
    }
}