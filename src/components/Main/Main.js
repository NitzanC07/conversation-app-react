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

    function closeAllPopup() {
        setPopupAddParticipentIsOpen(false);
        setPopupContentIsOpen(false);
        setPopupSendEmailIsOpen(false);
        setPopupGuideIsOpen(false);
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

    return(
        <main className="main">

            <Participents 
                handlePopupOpen={handleAddParticipentOpen}
            />

            <Speaker />

            <ChatContainer 
                handlePopupContentOpen={handlePopupContentPopupOpen}
                handlePopupSendEmailOpen={handlePopupSendEmailOpen}
                handlePopupGuideOpen={handlePopupGuideOpen}
            />

            <PopupAddParticipent 
                isOpen={popupAddParticipentIsOpen}
                onClose={closeAllPopup}
            />
            <PopupContent 
                isOpen={popupContentIsOpen}
                onClose={closeAllPopup}
            />

            <PopupSendEmail 
                isOpen={popupSendEmailIsOpen}
                onClose={closeAllPopup}
            />

            <PopupGuide 
                isOpen={popupGuideIsOpen}
                onClose={closeAllPopup}
            />
            
        </main>
    )
}

export default Main;
