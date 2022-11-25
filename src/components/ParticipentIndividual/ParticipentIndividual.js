function ParticipentIndividual(props) {

    function handleCurrentSpeaker() {
        props.handleCurrentSpeaker(props.name)
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