import logo from './logo.svg';
import './App.css';
import Adress from './Component/Profile/Adress';
import FullName from './Component/Profile/FullName';
import ProfilePhoto from './Component/Profile/ProfilePhoto';

function App() {
  return (
    <div className="App">
      
      <p>Profile: <ProfilePhoto/></p> <hr />
      <p>Nom complet: <FullName/></p> <hr />
      <p>Adresse: <Adress/></p> <hr />


    </div>
  );
}

export default App;
