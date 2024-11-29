import './Card.css';
import star from '/star.png';

export default function Card({key, title, description, price, coverImg, stats, location, openSpots}) {
    let badgeText = "NULL";
    if(openSpots === 0) {
        badgeText = "SOLD OUT";
    } else if (location === "Online") {
        badgeText = "ONLINE";
    }

    return(
        <div className='card'>
            {badgeText != "NULL" && <p  className='card-badge'>{badgeText}</p>}
            <img className='card-image' src={coverImg} alt='Main card image.'/>
            <div className='rating'>
                <img src={star} alt='Star rating symbol.'/>
                <p>
                    {stats.rating} <span className='light-text'>&#40;{stats.reviewCount}&#41; • {location}</span>
                </p>
            </div>
            <h2>
                {title}
            </h2>
            <p>
                <span className='inline-bold'>From ${price} /</span> person
            </p>
        </div>
    )
}