export default function ImagePopup(props) {
const {card} = props;
return (
    <div className="img-full">
            <button className="close-icon" type="button" aria-label="Close popup"/>
            <img className="card-img" src={card.link} alt={card.name}/>
            <p className="img-footer">{card.name}</p>
        </div>
)
}