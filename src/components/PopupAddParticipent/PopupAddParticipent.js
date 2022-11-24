import Popup from "../Popup/Popup";

function PopupAddParticipent(props) {

    return(
        <Popup 
            name="add-participent"
            title="הוספת משתתף לשיחה"
        >
            <form className="popup__form">
                <div className="popup__form__input-field">
                    <lable className="popup__form__label">שם:
                        <input className="popup__form__input popup__input_type_participent" type="text" required />
                    </lable>
                </div>                
                <button className="popup__form__submit-button" type="submit">צרף לשיחה</button>
            </form>
        </Popup>
    )
}

export default PopupAddParticipent;