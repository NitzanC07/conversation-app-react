import './header.css';
import './__title/header__title.css';
import './__content/header__content.css';
import { useState, useEffect } from 'react';

function Header(props) {

    // const timeStamp = useContext(timeContext);

    const [day, setDay] = useState(String(new Date().getDate()).padStart(2, '0'))
    const [month, setMonth] = useState(String(new Date().getMonth() + 1).padStart(2, '0'))
    const [year, setYear] = useState(String(new Date().getFullYear()).padStart(2, '0'))
    
    useEffect(() => {
        setInterval(() => tick(), 5*1000);
        }, [])
    
    function tick() {
        setDay(String(new Date().getDate()).padStart(2, '0'));
        setMonth(String(new Date().getMonth() + 1).padStart(2, '0'));
        setYear(String(new Date().getFullYear()).padStart(2, '0'));
    }

    return(
        <header className="header">
            <p className="header__title">מקליד את דעתי</p>
            <p className="header__content">{day}.{month}.{year}</p>
        </header>
    )
}

export default Header;
