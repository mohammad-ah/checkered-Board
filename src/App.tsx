import React, { useReducer } from 'react';

import './index.css';
import Board from './components/Board';
import shape from "./components/shape";

let squaresNum = 8;
let shapesColor = "red-blue";
let pieceShape = "circle";

export default class App extends React.Component {
    constructor(props: Readonly<{}>) {
        super(props);
        this.state = {
            squaresNum: 8
        }
    }

    setSquaresNum(value: string) {
        squaresNum = +value;
        this.setState({
            squaresNum: +value
        });
    }

    changeShapeColor(value: string) {
        shapesColor = value;
        this.setState({
            shapesColor: value
        });
    }

    changePieceShape(value: string) {
        pieceShape = value;
        this.setState({
            pieceShape: value
        });
    }

    render() {
        return (
            <div>
                <div className="game">
                    <div className="game-board">
                        <Board
                            squaresNum = {squaresNum}
                            shapesColor = {shapesColor}
                            pieceShape = {pieceShape}
                        />
                    </div>
                </div>

                <div className="icons-attribution">
                    <div>Please enter Square number you feel like you want to have!</div>
                    <div><input type="number" onChange={e => this.setSquaresNum(e.target.value)} /></div>
                </div>
                <div data-role="change-color">
                    <fieldset data-role="controlgroup">
                        <legend>Choose a color:</legend>
                        <input type="radio" name="red-blue-choice" id="radio-choice-1" value="red-blue"
                               checked={shapesColor === "red-blue"} onChange={e => this.changeShapeColor(e.target.value)}/>
                        <label htmlFor="radio-choice-1">Red & Blue</label>

                        <input type="radio" name="orange-green-choice" id="radio-choice-2" value="orange-green"
                               checked={shapesColor === "orange-green"}
                               onChange={e => this.changeShapeColor(e.target.value)}/>
                        <label htmlFor="radio-choice-2">Blue & Green</label>
                    </fieldset>
                </div>

                <div data-role="change-shape">
                    <fieldset data-role="controlgroup2">
                        <legend>Choose a shape:</legend>
                        <input type="radio" name="circle-choice" id="circle-choice" value="circle"
                               checked={pieceShape === "circle"} onChange={e => this.changePieceShape(e.target.value)}/>
                        <label htmlFor="circle-choice">Circle</label>

                        <input type="radio" name="trapezoid-choice" id="trapezoid-choice" value="trapezoid"
                               checked={pieceShape === "trapezoid"}
                               onChange={e => this.changePieceShape(e.target.value)}/>
                        <label htmlFor="trapezoid-choice">Trapezoid</label>
                    </fieldset>
                </div>
            </div>
        );
    }
}
