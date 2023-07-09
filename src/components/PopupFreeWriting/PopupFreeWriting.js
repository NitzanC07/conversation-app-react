import './styles.css';
import Popup from "../Popup/Popup";
// import { useEffect, useRef, useState } from 'react';

function PopupFreeWriting(props) {

    return(
        <Popup 
            name="free-writing"
            title="כתיבה חופשית"
            isOpen={props.isOpen}
            onClose={props.onClose}
        >
            <form className='free-writing-form'>
                <label for='writingArea'>כתוב כל מה שעולה לך לראש...</label>
                <textarea id='writingArea' cols={15} />
                <button type='submit'>שמור כתיבה</button>
            </form>
        </Popup>
    )
}

export default PopupFreeWriting;