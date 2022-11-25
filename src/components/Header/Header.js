import './header.css';
import './__title/header__title.css';
import './__time/header__time.css';
import './__content/header__content.css';
import { useEffect, useState } from 'react';

function Header(props) {

    const [date, setDate] = useState(String(new Date().getDate()).padStart(2, '0'))
    const [month, setMonth] = useState(String(new Date().getMonth() + 1).padStart(2, '0'))
    const [year, setYear] = useState(String(new Date().getFullYear()).padStart(2, '0'))
    const [hour, setHour] = useState(String(new Date().getHours()).padStart(2, '0'));
    const [minutes, setMinutes] = useState(String(new Date().getMinutes()).padStart(2, '0'));

    useEffect(() => {
        setInterval(() => tick(), 15*1000);
    }, [])

    function tick() {
        setHour(String(new Date().getHours()).padStart(2, '0'));
        setMinutes(String(new Date().getMinutes()).padStart(2, '0'));
        setDate(String(new Date().getDate()).padStart(2, '0'));
        setMonth(String(new Date().getMonth() + 1).padStart(2, '0'));
        setYear(String(new Date().getFullYear()).padStart(2, '0'));
    }

    return(
        <header className="header">
            <p className="header__title">מקליד את דעתי</p>
            <div className='header__time'>
                <p className="header__content">{date}/{month}/{year}</p>
                <p className="header__content">{hour}:{minutes}</p>
            </div>
            
        </header>
    )
}

export default Header;
