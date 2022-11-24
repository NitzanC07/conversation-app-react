import { useState } from 'react';
import ChatContainer from '../ChatContainer/ChatContainer';
import Participents from '../Participents/Participents';
import Speaker from '../Speaker/Speaker';
import PopupAddParticipent from '../PopupAddParticipent/PopupAddParticipent';
import './main.css';
import PopupContent from '../PopupContent/PopupContent';

function Main(props) {

    const [popupAddParticipentIsOpen, setPopupAddParticipentIsOpen] = useState(false);
    const [popupContentIsOpen, setPopupContentIsOpen] = useState(false);

    function closeAllPopup() {
        setPopupAddParticipentIsOpen(false);
        setPopupContentIsOpen(false);
    }
    function handleAddParticipentOpen() {
        setPopupAddParticipentIsOpen(true);
    }

    function handleContentPopupOpen() {
        setPopupContentIsOpen(true);
    }

    return(
        <main className="main">

            <Participents 
                handlePopupOpen={handleAddParticipentOpen}
            />

            <Speaker />

            <ChatContainer 
                handlePopupContentOpen={handleContentPopupOpen}
            />

            <PopupAddParticipent 
                isOpen={popupAddParticipentIsOpen}
                onClose={closeAllPopup}
            />
            <PopupContent 
                isOpen={popupContentIsOpen}
                onClose={closeAllPopup}
            />
            
        </main>
    )
}

export default Main;
