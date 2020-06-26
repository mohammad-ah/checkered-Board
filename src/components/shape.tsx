import React from 'react';

import '../index.css';

export default function Square(props: { shapeStyle: string; shapesColor: string; pieceShape: string; }) {

    if (props.pieceShape === 'trapezoid') {
        return (
            <button className={props.shapesColor + " " + props.shapeStyle + " " + props.pieceShape}>
            </button>
        );
    }
    return (
        <button className={"shape " + props.shapesColor + " " + props.shapeStyle + " " + props.pieceShape}>
        </button>
    );

}
