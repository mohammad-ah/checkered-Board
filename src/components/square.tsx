import React from 'react';

import '../index.css';

export default function Square(props: { shade: string; onClick: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined; style: React.CSSProperties | undefined; }) {

    return (
        <button className={"square " + props.shade}
                style={props.style}>
        </button>
    );

}
