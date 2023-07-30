import './styles.css';
import Popup from "../Popup/Popup";
import { useState } from 'react';
// import { useEffect, useRef, useState } from 'react';

function PopupTypingTraining(props) {

    const [stage, setStage] = useState(0);

    const startExercise = (stage) => {
        setStage(stage)
    }

    return(
        <Popup 
            className="popup popup__typing-training"
            name="typing-training"
            title="אימון הקלדה"
            isOpen={props.isOpen}
            onClose={props.onClose}
        >
            <div className='trainingPlans'>
                <button className='stage' type='button' onClick={() => startExercise(1)}>שלב 1</button>
                <button className='stage' type='button' onClick={() => startExercise(2)}>שלב 2</button>
                <button className='stage' type='button' onClick={() => startExercise(3)}>שלב 3</button>
            </div>
            <div className='trainingBox'>
                אתה נמצא בשלב {stage}
            </div>
        </Popup>
    )
}

export default PopupTypingTraining;