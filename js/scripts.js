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

    const renderGameBoard = (() => {
        const board = gameBoard.getBoard();
        for (let [key, value] of board.entries()) {
            const container = document.querySelector('#gameBoard');
            const boardSquare = document.createElement('div');

            boardSquare.dataset.index = key;
            boardSquare.classList.add('square');
            container.append(boardSquare);
        }
    })();

    squares.forEach(square => {
        square.addEventListener('click', event => {
            console.log(square.dataset.index);
        });
    });

    return {
        
    }
})();

const player = () => {

    return {

    }
}