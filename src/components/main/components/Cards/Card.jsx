
export default function Card(props) {
    const {name, link, isLiked} = props.card;
    return (
        <li className="card">
                <button type="button" aria-label="Delete Card" className="card__erase-button"/>
                <img className="card__img" src={link} id="user-img" alt=""/>
                <div className="card__ftr">
                    <p id="new-card-title">{name}</p>
                    <button className="card__button" type="button" aria-label="Like Card"/>
                </div>
        </li>
    )
}