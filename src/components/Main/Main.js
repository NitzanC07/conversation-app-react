// import { useState } from 'react';
import ChatContainer from '../ChatContainer/ChatContainer';
import Participents from '../Participents/Participents';
import Speaker from '../Speaker/Speaker';
import PopupAddParticipent from '../PopupAddParticipent/PopupAddParticipent';
import './main.css';
// import PopupContent from '../PopupContent/PopupContent';

function Main(props) {

    // const [popupTitle, setPopupTitle] = useState('');

    return(
        <main className="main">

            <Participents />

            <Speaker />

            <ChatContainer />

            <PopupAddParticipent />
            {/* <PopupContent /> */}
            
        </main>
    )
}

export default Main;
