import './App.css';
import { Route, Routes } from 'react-router';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from './Navigation/Header';
import Rockets from './Components/Rockets/Rockets';
import MyProfile from './Components/MyProfile';
import Missions from './Components/Missions';
import { fetchMissons } from './Components/redux/missions/missions';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMissons());
  }, [dispatch]);
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
