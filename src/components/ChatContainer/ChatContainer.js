import './chat-container.css';
import './__box/chat-container__box.css';
import './__button/chat-container__button.css';
import './__conversation-field/chat-container__conversation-field.css';
import './__message/chat-container__message.css';
import './__nav/chat-container__nav.css';
import './__button-icon/chat-container__button-icon.css';
import './__title/chat-container__title.css';
import emailIcon from '../../images/icons/email-icon.svg';
import guideIcon from '../../images/icons/guide-icon.svg';
import infoIcon from '../../images/icons/info-icon.svg';
import { useEffect, useState } from 'react';
import ChatOneMessage from '../ChatOneMessage/ChatOneMessage';

function ChatContainer(props) {

    const [messagesList, setMessagesList] = useState([]);

    useEffect(() => {
        setMessagesList(props.messagesContentList)
    }, [props.messagesContentList]);

    function openPopupInformation() {
        props.handlePopupContentOpen();
    }

    function openPopupSendEmail() {
        props.handlePopupSendEmailOpen();
    }

    function openPopupGuide() {
        props.handlePopupGuideOpen();
    }

    return (
        <section className="chat-container">
            <div className='chat-container__box'>
                <h2 className="chat-container__title">חלון שיחה:</h2>
                <ul className="chat-container__conversation-field">
                    {
                        messagesList.map((messageData, i) => (
                            <ChatOneMessage 
                                key={i}
                                message={messageData.messageContent}
                                speaker={messageData.speakerName}
                            />
                        ))
                    }
                </ul>
            </div>
            
            <div className="chat-container__nav">
                <button 
                    className="chat-container__button chat-container__button__send-email"
                    onClick={openPopupSendEmail}
                >
                    <img className='chat-container__button-icon' src={emailIcon} alt='Send email' />
                </button>
                <button 
                    className="chat-container__button chat-container__button__guide"
                    onClick={openPopupGuide}
                >
                    <img className='chat-container__button-icon' src={guideIcon} alt='Guide for the application' />
                </button>
                <button 
                    className="chat-container__button chat-container__button__information"
                    onClick={openPopupInformation}
                >
                    <img className='chat-container__button-icon' src={infoIcon} alt='Information about the application' />
                </button>
            </div>
        </section>      
    )
}

export default ChatContainer;
