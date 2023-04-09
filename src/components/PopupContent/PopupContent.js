import Popup from "../Popup/Popup";

function PopupContent(props) {

    return(
        <Popup
            name="content"
            title="אודות"
            isOpen={props.isOpen}
            onClose={props.onClose}
        >
            <div className="popup__info">
                <p className='popup__info__text'>מטרת היישום לאפשר למי שלא יכול לדבר בקול להביע דעתו.</p>
                <p className='popup__info__question'>יעד אישי</p>
                <p className='popup__info__answer'>אני מקליד עם כל אחד, בכל מקום, מביע את דעתי בהיר וברור בלי בעיות, עובר מילה אחר מילהומשפטעם עצמאות.</p>
                <p className='popup__info__question'>מי אתה ומה היא הקלדה בשבילך?</p>
                <p className='popup__info__answer'>שמי אורי והקלדה היא דרך להביע את מחשבותיי ואת הרגשות והרצונות שלי. הקלדה היא הפה שלי, באמצעותה אני מתקשר עם משפחה ועם אנשים סביבי</p>
                <p className='popup__info__question'>במה אתה משתמש בהקלדה היום?</p>
                <p className='popup__info__answer'>היום אני מקליד  עם אבא ובמרכז להבעה אני, מקליד כאשר אני רעב או כשיש לי דברים לומר.</p>
                <p className='popup__info__question'>יש מצבים שבהם לא יוצא לך להשתמש בהקלדה והיית רוצה?</p>
                <p className='popup__info__answer'>כן אני רוצה ללכת לסופר ולהקלד עם המוכר. אני רוצה להליד עם עד אנשים לידי אני רוצה שכולם יכירו את הדרך הזאת .</p>
                <p className='popup__info__question'>מה זו הדרך הזאת?</p>
                <p className='popup__info__answer'>הדרך להביע ולדבר בחופשיות את מה שבראש.</p>
            </div>
        </Popup>
        
    )
}

export default PopupContent;