import React from 'react';

import '../index.css';
import Shape from './shape';

export default function Square(props: { includeCircle: any; shade: string; shapeStyle: string; shapesColor: string; style: React.CSSProperties | undefined; }) {

    console.log(props.includeCircle);
    if (props.includeCircle) {
        return (
            <div className={"square " + props.shade}
                 style={props.style}>
                <Shape
                    shapeStyle = {props.shapeStyle}
                    shapesColor = {props.shapesColor}
                />
            </div>
        );
    }
    return (
        <div className={"square " + props.shade}
                style={props.style}>
        </div>
    );

}
