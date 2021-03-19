const gameBoard = (() => {
    const _gameBoard = new Array(9);
    const container = document.querySelector('#gameBoard');

    const renderGameBoard = (() => {
        for (let [key, value] of _gameBoard.entries()) {
            const boardSquare = document.createElement('div');
            boardSquare.dataset.index = key;
            boardSquare.classList.add('gameSquare');
            container.append(boardSquare);
            console.log(key);
        }
    })();

    return {
        renderGameBoard
    }
})();

const displayController = (() => {

    return {
        
    }
})();

const player = () => {

    return {

    }
}