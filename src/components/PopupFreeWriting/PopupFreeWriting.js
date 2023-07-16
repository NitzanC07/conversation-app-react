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
            name="free-writing"
            title="כתיבה חופשית"
            isOpen={props.isOpen}
            onClose={props.onClose}
        >
            <form className='free-writing-form' onSubmit={saveWriting}>
                <label for='writingArea' className='popup__info__text'>כתוב כל מה שעולה לך לראש...</label>
                <textarea 
                    id='writingArea' 
                    rows={10} 
                    value={text || ''}
                    onChange={(e) => setText(e.target.value)} 
                />
                <button className='save-button' type='submit'>שמור כתיבה</button>
            </form>
        </Popup>
    )
}

export default PopupFreeWriting;