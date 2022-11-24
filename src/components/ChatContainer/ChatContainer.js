import './chat-container.css';
import './__button/chat-container__button.css';
import './__conversation-field/chat-container__conversation-field.css';
import './__message/chat-container__message.css';
import './__nav/chat-container__nav.css';
import './__title/chat-container__title.css';
import emailIcon from '../../images/icons/email-icon.svg';
import guideIcon from '../../images/icons/guide-icon.svg';
import infoIcon from '../../images/icons/info-icon.svg';

function ChatContainer(props) {

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
            <h2 className="chat-container__title">חלון שיחה:</h2>
            <ul className="chat-container__conversation-field">
                
            </ul>
            <div className="chat-container__nav">
                <button 
                    className="chat-container__button chat-container__button__send-email"
                    onClick={openPopupSendEmail}
                >
                    <img src={emailIcon} alt='Send email' />
                </button>
                <button 
                    className="chat-container__button chat-container__button__guide"
                    onClick={openPopupGuide}
                >
                    <img src={guideIcon} alt='Guide for the application' />
                </button>
                <button 
                    className="chat-container__button chat-container__button__information"
                    onClick={openPopupInformation}
                >
                    <img src={infoIcon} alt='Information about the application' />
                </button>
            </div>
        </section>      
    )
}

export default ChatContainer;
