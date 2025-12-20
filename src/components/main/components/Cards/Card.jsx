import EraseBtn from '../../../../images/trash-btn.png'

export default function Card() {
    return (
        <div className="card">
                <img src={EraseBtn} className="card__erase-button" alt="boton eliminar"/>
                <img className="card__img" src="" id="user-img" alt="imagen de usuario"/>
                <div className="card__ftr">
                    <p id="new-card-title"></p>
                    <img className="card__button" src="./images/elements-icon.svg" alt="icono de corazon"/>
                </div>
        </div>
    )
}