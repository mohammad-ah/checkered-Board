import React from 'react';

import '../index.css';
import Square from './square';

export default class Board extends React.Component {

    renderSquare(i, squareShade, includeCircle, shapeStyle) {
        return <Square
            shade = {squareShade}
            includeCircle = {includeCircle}
            shapeStyle = {shapeStyle}
            shapesColor = {this.props.shapesColor}
            pieceShape = {this.props.pieceShape}
        />
    }

    render() {
        const board = [];
        let includeCircle = false;
        let shapeStyle = "Top";
        for(let i = 0; i < this.props.squaresNum; i++){
            const squareRows = [];
            for(let j = 0; j < this.props.squaresNum; j++){
                const squareShade = (isEven(i) && isEven(j)) || (!isEven(i) && !isEven(j))? "light-square" : "dark-square";
                if (i === 0 || i === 1) {
                    includeCircle = true;
                    shapeStyle = "Top";
                } else if (i === this.props.squaresNum - 1 || i === this.props.squaresNum - 2) {
                    includeCircle = true;
                    shapeStyle = "Bottom"
                } else {
                    includeCircle = false;
                }
                squareRows.push(this.renderSquare((i*8) + j, squareShade, includeCircle, shapeStyle));
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
