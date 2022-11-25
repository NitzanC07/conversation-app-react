import './footer.css';
import './__text/footer__text.css';

function Footer(props) {

    const currentYear = new Date().getFullYear()   

    return(
        <footer className="footer">
            <p className="footer__text">Developed by Nitzan Cohen &#169; {currentYear}</p>
            <p className="footer__text">Beta version</p>
        </footer>
    )
}

export default Footer;
