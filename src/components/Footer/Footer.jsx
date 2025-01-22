import RocketIcon from '../../assets/images/rocket.png';
import './Footer.scss';

const Footer = () => {
    return (
        <footer className='footer'>
            <img className='footer__icon' src={RocketIcon} alt="Rocket" />
            <p className="footer__phrase">Exciting space adventure!</p>
        </footer>
    );
};

export default Footer;
