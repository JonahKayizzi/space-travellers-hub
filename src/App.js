import './App.css';
import { Route, Routes } from 'react-router';
import Header from './Navigation/Header';
import Rockets from './Components/Rockets';
import MyProfile from './Components/MyProfile';
import Missions from './Components/Missions';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Rockets />} />
        <Route exact path="/myprofile" element={<MyProfile />} />
        <Route exact path="/missions" element={<Missions />} />
      </Routes>
    </div>
  );
}

export default App;
