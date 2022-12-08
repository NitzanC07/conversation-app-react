import { useState } from "react";
import Popup from "../Popup/Popup";

function PopupSendEmail(props) {

    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');

    function submitSendEmail(e) {
        e.preventDefault();
        props.onSubmit(email, subject);
        setEmail('');
        setSubject('');
    }

    return(
        <Popup 
            name="send-email"
            title='שליחת שיחה לדוא"ל'
            isOpen={props.isOpen}
            onClose={props.onClose}
        >
            <form className="popup__form" onSubmit={submitSendEmail}>
                <div className="popup__form__input-field">
                    <label className="popup__form__label">דוא"ל:
                        <input 
                            className="popup__form__input popup__input_type_email" 
                            type="email" 
                            placeholder="הכנס דואר אלקטרוני"
                            value={email || ''}
                            onChange={(e) => setEmail(e.target.value)}
                            required 
                        />
                    </label>
                </div>
                <div className="popup__form__input-field">
                    <label className="popup__form__label">נושא:
                        <input 
                            className="popup__form__input popup__input_type_subject" 
                            type="text" 
                            placeholder="הכנס נושא שיחה"
                            value={subject || ''}
                            onChange={(e) => setSubject(e.target.value)}
                            required 
                        />
                    </label>
                </div>
                
                <button className="popup__form__submit-button" type="submit">שלח שיחה</button>
            </form>
        </Popup>
    )
}

export default PopupSendEmail;
