import './speaker.css';
import './__button/speaker__button.css';
import './__button-icon/speaker__button-icon.css';
import './__form/speaker__form.css';
import './__message-field/speaker__message-field.css';
import './__name/speaker__name.css';
import './__message/speaker__message.css';
import { useEffect, useState } from 'react';
import talkSVG from '../../images/icons/talk.svg';

function Speaker(props) {

    const [hour, setHour] = useState(String(new Date().getHours()).padStart(2, '0'));
    const [minutes, setMinutes] = useState(String(new Date().getMinutes()).padStart(2, '0'));
    
    useEffect(() => {
        setInterval(() => tick(), 60*1000);
        }, [])
    
    function tick() {
        setHour(String(new Date().getHours()).padStart(2, '0'));
        setMinutes(String(new Date().getMinutes()).padStart(2, '0'));
    }

    const [speakerName, setSpeakerName] = useState('דובר')
    const [messageContent, setMessageContent] = useState('');

    useEffect(() => {
        setSpeakerName(props.currentSpeaker);
    }, [props.currentSpeaker])

    function handleChangeSpeaker(e) {
        e.preventDefault();
        props.handleMessagesList({ 
            speakerName, 
            messageContent, 
            timeStamp: `${hour}:${minutes}`
        });
        setMessageContent('');
    }

    return(
        <section className="speaker" onSubmit={handleChangeSpeaker}>
            <form className='speaker__form'>
                <div className="speaker__message-field">
                    <h2 className="speaker__name">{speakerName}:</h2>
                    <input 
                        className="speaker__message" 
                        type="text" 
                        placeholder="הקלד/י כאן מה שאת/ה רוצה לומר..." 
                        value={messageContent} 
                        onChange={(e) => setMessageContent(e.target.value)}
                        required
                    />
                </div>
                <button 
                    className="speaker__button speaker__send" 
                    type="submit"
                >
                    <img className='speaker__button-icon' src={talkSVG} alt='Send message' />
                </button>
            </form>
            
        </section>
    )
}

export default Speaker;
