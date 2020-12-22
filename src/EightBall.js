// Magic eight ball components
import React, { useState } from 'react';
import setAnswer from './setAnswer';

const EightBall = () => {
    const [msg, setMsg] = useState('Think of a Question')
    const [color, setColor] = useState('black');

    function handleClick() {
        const { msg, color } = setAnswer();
        setColor(color);
        setMsg(msg);
    }
    return (
        <div style={{backgroundColor: color}}>
            <h1>{msg}</h1>
            <button onClick={handleClick}>Shake</button>
        </div>
    )
}

// const EightBall = () => {
//     return <h1>Hello</h1>
// }

export default EightBall;