import './styles.css';
import Popup from "../Popup/Popup";
// import { useState } from 'react';
// import { useEffect, useRef, useState } from 'react';

function PopupTypingTraining(props) {

    return(
        <Popup 
            className="popup popup__typing-training"
            name="typing-training"
            title="אימון הקלדה"
            isOpen={props.isOpen}
            onClose={props.onClose}
        >
            
        </Popup>
    )
}

export default PopupTypingTraining;