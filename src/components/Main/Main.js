import './main.css';
import { useState } from 'react';
import ChatContainer from '../ChatContainer/ChatContainer';
import Participents from '../Participents/Participents';
import Speaker from '../Speaker/Speaker';
import PopupAddParticipent from '../PopupAddParticipent/PopupAddParticipent';
import PopupContent from '../PopupContent/PopupContent';
import PopupSendEmail from '../PopupSendEmail/PopupSendEmail';
import PopupGuide from '../PopupGuide/PopupGuide';

function Main(props) {

    const [popupAddParticipentIsOpen, setPopupAddParticipentIsOpen] = useState(false);
    const [popupContentIsOpen, setPopupContentIsOpen] = useState(false);
    const [popupSendEmailIsOpen, setPopupSendEmailIsOpen] = useState(false);
    const [popupGuideIsOpen, setPopupGuideIsOpen] = useState(false);
    const [participentsList, setParticipentsList] = useState([]);
    const [currentSpeaker, setCurrentSpeaker] = useState('דובר');
    const [messagesContentList, setMessageContentList] = useState([]);
    const [activeInput, setActiveInput] = useState(null);
    
    function handleCurrentInput(currentInput) {
        setActiveInput(currentInput);
    }
    
    function closeAllPopup() {
        setPopupAddParticipentIsOpen(false);
        setPopupContentIsOpen(false);
        setPopupSendEmailIsOpen(false);
        setPopupGuideIsOpen(false);
        setActiveInput(null)
    }
    function handleAddParticipentOpen() {
        setPopupAddParticipentIsOpen(true);
    }

    function handlePopupSendEmailOpen() {
        setPopupSendEmailIsOpen(true);
    }

    function handlePopupContentPopupOpen() {
        setPopupContentIsOpen(true);
    }

    function handlePopupGuideOpen() {
        setPopupGuideIsOpen(true);
    }

    function createParticipentsList(newUser) {
        setParticipentsList([...participentsList, newUser])
        closeAllPopup();
    }

    function handleCurrentSpeaker(name) {
        setCurrentSpeaker(name);
    }

    function handleMessagesList(message) {
        setMessageContentList([...messagesContentList, message]);
    }

    function submitSendEmail(email, subject) {
        console.log('Send E-Mail...');
        console.log(messagesContentList);
        let conversationStamp
        messagesContentList.forEach(messageData => {
            conversationStamp += `${messageData.speakerName} (${messageData.timeStamp}): ${messageData.messageContent}%0D%0A`
        })
        console.log(conversationStamp);

        window.open(`mailto:${email}?subject=${subject}&body=${conversationStamp}`)
        closeAllPopup();
    }

    return(
        <main className="main">

            <Participents 
                handlePopupOpen={handleAddParticipentOpen}
                participentsList={participentsList}
                handleCurrentSpeaker={handleCurrentSpeaker}
                handleCurrentInput={activeInput}
            />

            <Speaker 
                currentSpeaker={currentSpeaker}
                handleCurrentInput={handleCurrentInput}
                handleMessagesList={handleMessagesList}
            />

            <ChatContainer 
                handlePopupContentOpen={handlePopupContentPopupOpen}
                handlePopupSendEmailOpen={handlePopupSendEmailOpen}
                handlePopupGuideOpen={handlePopupGuideOpen}
                messagesContentList={messagesContentList}
            />

            <PopupAddParticipent 
                isOpen={popupAddParticipentIsOpen}
                onClose={closeAllPopup}
                createNewParticipent={createParticipentsList}
            />
            <PopupContent 
                isOpen={popupContentIsOpen}
                onClose={closeAllPopup}
            />

            <PopupSendEmail 
                isOpen={popupSendEmailIsOpen}
                onClose={closeAllPopup}
                onSubmit={submitSendEmail}
            />

            <PopupGuide 
                isOpen={popupGuideIsOpen}
                onClose={closeAllPopup}
            />
            
        </main>
    )
}

export default Main;
