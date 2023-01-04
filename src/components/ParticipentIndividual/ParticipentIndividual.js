function ParticipentIndividual(props) {

    // Click on each name change the name in Speaker component and focus on the input message field.
    function handleCurrentSpeaker() {
        props.handleCurrentSpeaker(props.name)
        props.handleCurrentInput.current.focus();
    }

    return(
        <li 
            className='participents__name' 
            key={props.i}
            onClick={handleCurrentSpeaker}
        >
            {props.name}
        </li>
    )
}

export default ParticipentIndividual;