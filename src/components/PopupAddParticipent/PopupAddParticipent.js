import Popup from "../Popup/Popup";
import { useState } from 'react';

function PopupAddParticipent(props) {

    const [participentName, setParticipentName] = useState('')

    return(
        <Popup 
            name="add-participent"
            title="הוספת משתתף לשיחה"
            isOpen={props.isOpen}
            onClose={props.onClose}
        >
            <form className="popup__form">
                <div className="popup__form__input-field">
                    <label className="popup__form__label" htmlFor="message-content">שם:
                        <input 
                            className="popup__form__input popup__input_type_participent" 
                            name="message-content"
                            type="text" 
                            placeholder="הכנס את שמך"
                            value={participentName || ''}
                            onChange={(e) => setParticipentName(e.target.value)}
                            required 
                        />
                    </label>
                </div>                
                <button className="popup__form__submit-button" type="submit">צרף לשיחה</button>
            </form>
        </Popup>
    )
}

export default PopupAddParticipent;