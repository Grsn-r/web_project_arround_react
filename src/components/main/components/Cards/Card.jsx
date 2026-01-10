
export default function Card(props) {
    
    const {card, onCardClick, onCardLike} = props;
    const {name, link} = card;
    
    const imageComponent = {
        name,
        link
    };

    const isLiked = card.isLiked;

    const cardLikeButtonClassName = `card__like-button ${
    isLiked ? 'card__like-button_is-active' : ''
    }`;

    const handleLikeClick = () => {
        onCardLike(card);
    };

    return (
        <li className="card">
                <button type="button" aria-label="Delete Card" className="card__erase-button"/>
                <img className="card__img" src={link} id="user-img" alt={name} onClick={() => onCardClick(imageComponent)}/>
                <div className="card__ftr">
                    <p id="new-card-title">{name}</p>
                    <button className={cardLikeButtonClassName} type="button" aria-label="Like Card" onClick={handleLikeClick}/>
                </div>
        </li>
    )
}