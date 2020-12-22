// Magic eight ball components
import React, { useState } from 'react';
import setAnswer from './setAnswer';
import './EightBall.css';

const EightBall = () => {
    /* Handles setting of color and msg state */
    const [msg, setMsg] = useState('Think of a Question')
    const [color, setColor] = useState('black');

    /* Calls setAnswer() to retrieve random msg and color combination
            then calls state functions to set color and msg*/
    function handleClick() {
        const { msg, color } = setAnswer();
        setColor(color);
        setMsg(msg);
    }
    // Returns div containing EightBall components
    return (
        <div id='EightBall' style={{backgroundColor: color}}>
            <div id='EightBall-text'>
                <h1>{msg}</h1>
                <button onClick={handleClick}>Shake</button>
            </div>
        </div>
    )
}

export default EightBall;