import { useState } from 'react'
import Card from './components/Cards/Card'
import Popup from './components/popup/Popup'
import EditProfile from './components/form/EditProfile/EditProfile'
import EditAvatar from './components/form/EditAvatar/EditAvatar'
import NewCard from './components/form/NewCard/NewCard'
import editAvatarBtn from '../../images/edit_avatar_btn.png'
import editButton from '../../images/edit-button.png'
import avatar from '../../images/avatar.jpg'
import addButton from '../../images/add-btn-img.png'
import '../../index.css'

const cards = [
  {
    isLiked: false,
    _id: '5d1f0611d321eb4bdcd707dd',
    name: 'Yosemite Valley',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg',
    owner: '5d1f0611d321eb4bdcd707dd',
    createdAt: '2019-07-05T08:10:57.741Z',
  },
  {
    isLiked: false,
    _id: '5d1f064ed321eb4bdcd707de',
    name: 'Lake Louise',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg',
    owner: '5d1f0611d321eb4bdcd707dd',
    createdAt: '2019-07-05T08:11:58.324Z',
  },
];

console.log(cards);

export default function Main() {
    const [popup, setPopup] = useState(null);

    const newCardPopup = { title: "Nuevo lugar", children: <NewCard /> };
    const editProfilePopup = { title: "Editar perfil", children: <EditProfile />};
    const editAvatarPopup = { title: "Editar avatar", children: <EditAvatar />};

    function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null)
  }
    return (
        <main>
            <section className="profile">
            <div className="profile__avatar-container"> <img className="profile__avatar" src={avatar} alt="foto de perfil"/>
            <img className="profile__avatar_edit" src={editAvatarBtn} alt="editar foto" onClick={() => handleOpenPopup(editAvatarPopup)}/></div>
            <div className="profile__info">
                <p className="profile__info profile__info_name">Name</p>
                <p className="profile__info profile__info_explorer">About</p>
            </div>
            <img className="edit-button" src={editButton} alt="boton de editar" onClick={() => handleOpenPopup(editProfilePopup)}/>
            <div className="profile__add-button"onClick={() => handleOpenPopup(newCardPopup)}>
                <img className="profile__add-button profile__add-button_img" src={addButton} alt="boton de añadir" />
            </div>
            </section>
            <section>
              <ul className='card__list'>
                {cards.map((card) => (
                  <Card key={card._id} card={card}/>
                ))}
              </ul>
            </section>
            {popup && (<Popup 
             onClose={handleClosePopup} 
             title={popup.title}>
                 {popup.children} 
                 </Popup>
             )}
        </main>
    )
}
