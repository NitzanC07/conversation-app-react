import './participents.css';
import './__button/participents__button.css';
import './__names/participents__names.css';
import './__name/participents__name.css';
import './__title/participents__title.css';
import addPersonIcon from '../../images/icons/add-person-icon.svg';
import { useState, useEffect } from 'react';
import ParticipentIndividual from '../ParticipentIndividual/ParticipentIndividual';

function Participents(props) {

    const [participentsList, setParticipentsList] = useState([props.participentsList]);

    useEffect(() => {
        setParticipentsList(props.participentsList);
    }, [props.participentsList])

    function openAddParticipentPopup() {
        props.handlePopupOpen()
    }

    return(
        <section className="participents">
            <h2 className="participents__title">משתתפים בשיחה:</h2>
            <ul className="participents__names">
                {
                    participentsList.map((participent, i) => (
                        <ParticipentIndividual 
                            key={i}
                            name={participent}
                            handleCurrentSpeaker={props.handleCurrentSpeaker}
                        />
                    ))
                }
            </ul>
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