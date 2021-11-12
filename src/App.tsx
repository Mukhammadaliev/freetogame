import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import FavoritePage from './pages/FavoritePage';
import GamePage from './pages/GamePage';
import Home from './pages/Home';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path='/'  element={<Home />}/>
          <Route path='/game/:id' element={<GamePage />}/>
          <Route path='/favorite' element={<FavoritePage />}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
