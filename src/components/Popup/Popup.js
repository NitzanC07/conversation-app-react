import './popup-container.css';
import './popup.css';
import './__title/popup__title.css';
import './__close/popup__close.css';
import './__form/popup__form.css';
import './__form/__input/popup__form__input.css';
import './__form/__input-field/popup__form__input-field.css';
import './__form/__label/popup__form__label.css';
import './__form/__submit-button/popup__form__submit-button.css';

function Popup(props) {

    return(
        <div className="popup-container popup_type_add-person">
            <div className="popup">
                <button className="popup__close">X</button>
                <h2 className="popup__title">{props.title}</h2>

                { props.children }

            </div>
        </div>
    )
}

export default Popup;
