import './Header.scss';

const Header = () => {
    return (
        <header className='header'>
            <div className="header__container">
                <div className="info">
                    <h1 className="info__title">
                        Discover the vast<br/> expanses of <span className='text__pink'>space</span>
                    </h1>
                    <p className="info__subtitle">
                        Where the possibilities are <span className='text__yellow'>endless!</span>
                    </p>
                    <button className="info__learn-btn">Learn more</button>
                </div>
            </div>
        </header>
    );
};

export default Header;
