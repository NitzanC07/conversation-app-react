import './popup-container.css';
import './popup.css';
import './_open/popup-container_open.css';
import './__title/popup__title.css';
import './__close/popup__close.css';
import './__info/popup__info.css';
import './__info/__text/popup__info__text.css';
import './__info/__question/popup__info__question.css';
import './__info/__answer/popup__info__answer.css';
import './__icons/popup__icons.css';

function Popup(props) {

    return(
        <div className={`popup-container ${props.isOpen ? 'popup-container_open' : ''}`}>
            <div className="popup">
                <button className="popup__close" onClick={ () => {props.onClose()} }>X</button>
                <h2 className="popup__title">{props.title}</h2>

                { props.children }

            </div>
        </div>
    )
}

export default Popup;
