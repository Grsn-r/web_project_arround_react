import './index.css'
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import api from './utils/api';
import {useState, useEffect} from 'react'
import CurrentUserContext from './context/CurrentUserContext';

function App() {

  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    api.getUserInfo()
    .then((data) => {
      setCurrentUser(data);
    })
    .catch((error) => console.error(error));
  }, []);

  return (
<div className="page">
  <CurrentUserContext.Provider value={currentUser}>
    <Header />
    <Main />
    <Footer />
  </CurrentUserContext.Provider>
</div>
  );
}

export default App