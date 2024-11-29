import './Card.css';
import star from '/star.png';

export default function Card({img,rating,reviews,location,title,price}) {
    return(
        <div className='card'>
            <img className='card-image' src={img} alt='Main card image.'/>
            <div className='rating'>
                <img src={star} alt='Star rating symbol.'/>
                <p>
                    {rating} <span className='light-text'>&#40;{reviews}&#41; • {location}</span>
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