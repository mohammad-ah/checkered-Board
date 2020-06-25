import React, { useReducer } from 'react';

import './index.css';
import Board from './components/Board';
import shape from "./components/shape";

let squaresNum = 8;
let shapesColor = "red-blue";

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
        console.log("clicked")
        shapesColor = value;
        this.setState({
            shapesColor: value
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
                        />
                    </div>
                </div>

                <div className="icons-attribution">
                    <div>Please enter Square number you feel like you want to have!</div>
                    <div><input type="number" onChange={e => this.setSquaresNum(e.target.value)} /></div>
                </div>
                <div data-role="cahnge-color">
                    <fieldset data-role="controlgroup">
                        <legend>Choose a color:</legend>
                        <input type="radio" name="radio-choice-1" id="radio-choice-1" value="red-blue"
                               checked={shapesColor === "red-blue"} onChange={e => this.changeShapeColor(e.target.value)}/>
                        <label htmlFor="radio-choice-1">Red & Blue</label>

                        <input type="radio" name="radio-choice-1" id="radio-choice-2" value="orange-green"
                               checked={shapesColor === "orange-green"}
                               onChange={e => this.changeShapeColor(e.target.value)}/>
                        <label htmlFor="radio-choice-2">Blue & Green</label>
                    </fieldset>
                </div>
            </div>
        );
    }
}
