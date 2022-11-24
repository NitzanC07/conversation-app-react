import './participents.css';
import './__button/participents__button.css';
import './__names/participents__names.css';
import './__title/participents__title.css';
import addPersonIcon from '../../images/icons/add-person-icon.svg';

function Participents(props) {

    function openAddParticipentPopup() {
        props.handlePopupOpen()
    }

    return(
        <section className="participents">
            <h2 className="participents__title">משתתפים בשיחה:</h2>
            <div className="participents__names">
                
            </div>
            <button 
                className="participents__button participents__add-one"
                onClick={openAddParticipentPopup}
            >
                <img src={addPersonIcon} alt='Add participent to the conversation' />
            </button>
        </section>
    )
}

export default Participents;