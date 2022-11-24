import './header.css';
import './__title/header__title.css';

function Header(props) {
    return(
        <header className="header">
            <p className="header__title">מקליד את דעתי</p>
            <p className="header__title header__time">שעה</p>
        </header>
    )
}

export default Header;
