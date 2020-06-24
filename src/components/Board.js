import React from 'react';

import '../index.css';
import Square from './square';

export default class Board extends React.Component {

    renderSquare(i, squareShade) {
        console.log(this.props.squaresNum);
        return <Square
            shade = {squareShade}
        />
    }

    render() {
        const board = [];
        for(let i = 0; i < this.props.squaresNum; i++){
            const squareRows = [];
            for(let j = 0; j < this.props.squaresNum; j++){
                const squareShade = (isEven(i) && isEven(j)) || (!isEven(i) && !isEven(j))? "light-square" : "dark-square";
                squareRows.push(this.renderSquare((i*8) + j, squareShade));
            }
            board.push(<div className="board-row">{squareRows}</div>)
        }

        return (
            <div>
                {board}
            </div>
        );
    }
}


function isEven(num){
    return num % 2 === 0
}
