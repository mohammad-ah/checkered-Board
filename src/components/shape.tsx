import React from 'react';

import '../index.css';

export default function Square(props: { shapeStyle: string; }) {

    return (
        <button className={"shape " + props.shapeStyle}>
        </button>
    );

}
