import './messages';
import messages from './messages';

/* Randomly selects answer object from within 
    messages array and returns it to EightBall function*/
const setAnswer = () => {
    const randIdx = Math.floor(Math.random() * messages.length);
    return messages[randIdx];
}

export default setAnswer;