import './messages';
import messages from './messages';

const setAnswer = () => {
    const randIdx = Math.floor(Math.random() * messages.length);
    return messages[randIdx];
}

export default setAnswer;