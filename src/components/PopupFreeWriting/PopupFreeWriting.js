import './styles.css';
import Popup from "../Popup/Popup";
import { useState } from 'react';
// import { useEffect, useRef, useState } from 'react';

function PopupFreeWriting(props) {

    const [text, setText] = useState('');

    function saveWriting(e) {
        e.preventDefault();
        console.log(text);
    }
    return(
        <Popup 
            className="popup popup__free-writing"
            name="free-writing"
            title="כתיבה חופשית"
            isOpen={props.isOpen}
            onClose={props.onClose}
        >
            <form className='free-writing-form' onSubmit={saveWriting}>
                <div className='writingAreaContainer'>
                    <label for='writingArea' className='popup__info__text'>זה המקום לכתוב באופן חופשי.</label>
                    <textarea 
                        id='writingArea' 
                        rows={10} 
                        value={text || ''}
                        onChange={(e) => setText(e.target.value)} 
                    />
                </div>               
                <button className='save-button' type='submit'>שמור כתיבה</button>
            </form>
        </Popup>
    )
}

export default PopupFreeWriting;