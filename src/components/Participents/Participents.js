import './participents.css';
import './__button/participents__button.css';
import './__names/participents__names.css';
import './__title/participents__title.css';

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
                add
            </button>
        </section>
    )
}

export default Participents;