function ParticipentIndividual(props) {

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