import React from 'react';

import '../index.css';

export default function Square(props: { shapeStyle: string; shapesColor: string; }) {

    return (
        <button className={"shape " + props.shapesColor + " " + props.shapeStyle}>
        </button>
    );

}
