import './speaker.css';
import './__button/speaker__button.css';
import './__message-field/speaker__message-field.css';
import './__name/speaker__name.css';
import './__message/speaker__message.css';
import { useState } from 'react';

function Speaker(props) {

    const [speakerName, setSpeakerName] = useState('דובר')
    const [messageContent, setMessageContent] = useState('');

    function handleChangeSpeaker() {
        setSpeakerName('דובר');
    }

    return(
        <section className="speaker">
            <div className="speaker__message-field">
                <h2 className="speaker__name">{speakerName}:</h2>
                <input 
                    className="speaker__message" 
                    type="text" 
                    placeholder="הקלד/י כאן מה שאת/ה רוצה לומר..." 
                    value={messageContent} 
                    onChange={(e) => setMessageContent(e.target.value)}
                />
            </div>
            <button 
                className="speaker__button speaker__send" 
                type="button"
                onClick={handleChangeSpeaker}
            >Send</button>
        </section>
    )
}

export default Speaker;
