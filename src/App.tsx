import React, { useReducer } from 'react';

import './index.css';
import Board from './components/Board';

let squaresNum = 8;

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

    render() {
        return (
            <div>
                <div className="game">
                    <div className="game-board">
                        <Board
                            squaresNum = {squaresNum}
                        />
                    </div>
                </div>

                <div className="icons-attribution">
                    <div>Please enter Square number you feel like you want to have!</div>
                    <div><input type="number" onChange={e => this.setSquaresNum(e.target.value)} /></div>
                </div>
            </div>


        );
    }
}
