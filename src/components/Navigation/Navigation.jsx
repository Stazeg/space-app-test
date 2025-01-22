import CartIcon from '../../assets/icons/CartIcon';
import LogoIcon from '../../assets/images/logo.svg';

import './Navigation.scss';

const routes = [
    {
        title: 'Home',
        url: '#'
    },
    {
        title: 'Products',
        url: '#'
    },
    {
        title: <CartIcon />,
        url: '#'
    },
];

const Navigation = () => {
    return (
        <nav className="nav">
            <div className="nav__container">
                <div className="logo">
                    <img src={LogoIcon} alt="Logo" />
                </div>
                <div className="menu">
                    <input id="menu-toggle" type="checkbox" />
                    <label className="menu-button-container" htmlFor="menu-toggle">
                        <div className="menu-button-container__btn"></div>
                    </label>
                    <ul className="menu__list list">
                        {routes.map((route, index) =>
                            <li key={index} className="list__item">
                                <a className='link' href={route.url}>{route.title}</a>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
