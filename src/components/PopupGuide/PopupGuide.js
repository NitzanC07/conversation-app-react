import Popup from "../Popup/Popup";

function PopupGuide(props) {

    return(
        <Popup
            name="guide"
            title='מדריך שימוש בשיחון'
            isOpen={props.isOpen}
            onClose={props.onClose}
        >
            <div className="popup__info">
                <ol>
                    <li className="popup__info__text">הוספה של משתתף חדש בלחיצה על <img className="popup__icons" src="./images/add-person-icon.svg" alt="Add person" /></li>
                    <li className="popup__info__text">לוחצים על שם של משתתף שרוצה לדבר וכותבים הודעה</li>
                    <li className="popup__info__text">לוחצים על כפתור השיחה <img className="popup__icons" src="./images/talk.svg" alt="Talking message" /> כדי לשלוח את ההודעה.</li>
                    <li className="popup__info__text">אם רוצים שולחים את השיחה לאי מייל בעזרת לחיצה על הכפתור <img className="popup__icons" src="./images/email-icon.svg" alt="Email icon" />.</li>
                </ol>
            </div>
        </Popup>
    )
}

export default PopupGuide;
