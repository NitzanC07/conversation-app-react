import './chat-container.css';
import './__button/chat-container__button.css';
import './__conversation-field/chat-container__conversation-field.css';
import './__message/chat-container__message.css';
import './__nav/chat-container__nav.css';
import './__title/chat-container__title.css';

function ChatContainer(props) {

    return (
        <section className="chat-container">
            <h2 className="chat-container__title">חלון שיחה:</h2>
            <ul className="chat-container__conversation-field">
                
            </ul>
            <div className="chat-container__nav">
                <button className="chat-container__button chat-container__button__send-email">email</button>
                <button className="chat-container__button chat-container__button__guide">guide</button>
                <button className="chat-container__button chat-container__button__information">info</button>
            </div>

            {/* <template id="message">
                <li className="chat-container__message"></li>
            </template>                     */}
        </section>      
    )
}

export default ChatContainer;
