/* eslint-disable react/prop-types */
import SpaceImage1 from '../../assets/images/space_1.png';
import SpaceImage2 from '../../assets/images/space_2.png';
import SpaceImage3 from '../../assets/images/space_3.png';
import SpaceImage4 from '../../assets/images/space_4.png';

import './Offers.scss';

const defaultCards = [
    {
        title: 'Move the borders of reality!',
        subtitle: 'Go on space adventure - it\'s possible with us!',
        imageSrc: SpaceImage1
    },
    {
        title: 'Space is not just stars and planets',
        subtitle: 'Go on a space adventure',
        imageSrc: SpaceImage2
    },
    {
        title: 'For those who dream of stars',
        subtitle: 'Our offer: make your dream come true',
        imageSrc: SpaceImage3
    },
    {
        title: 'Fulfill your fantastic dreams',
        subtitle: 'Space has never been so close',
        imageSrc: SpaceImage4
    }
];

const offersInfoText = `
Travelling into space is one of the most exciting and unforgettable adventures that can change your life forever. 
And if you have ever dreamed of exploring stars, planets and galaxies, then our company is ready to help you realize this dream. 
We offer a unique experience that will allow you to go on a space journey and see all the secrets of the universe. 
We guarantee that every moment in space will be filled with incredible impressions, excitement and new discoveries. 
Our team of professionals takes care of your safety and comfort so that you can fully enjoy your adventure in space. 
We offer various options for space excursions.`;

const gradient = 'linear-gradient(270deg, rgba(0, 0, 0, 0) 0%, rgba(15, 20, 32, 0.79) 100%)';

const Card = ({title, subtitle, imageSrc}) => {
    return (
        <div
            className="card"
            style={{
                backgroundImage: `${gradient}, url(${imageSrc})`
            }}
        >
            <div className="card__container">
                <h3 className="card__title">{title}</h3>
                <p className="card__subtitle">{subtitle}</p>
                <button className="card__learn-btn">Learn more</button>
            </div>
        </div>
    );
};

const Offers = () => {
    return (
        <section className='offers'>
            <div className="offers__container">
                <h2 className="offers__title">Offers</h2>
                <div className="offers__cards">
                    {defaultCards.map((card, index) => <Card key={index} {...card}/>)}
                </div>
                <h2 className="offers__title">Embark on a space journey</h2>
                <div className="info">
                    <p className="info__text">
                        {offersInfoText}
                    </p>
                    <button className="info__more-btn">Read more</button>
                </div>
            </div>
        </section>
    );
};

export default Offers;
