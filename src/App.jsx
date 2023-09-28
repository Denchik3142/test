import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import { Routes, Route } from 'react-router-dom';

export const AppContext = React.createContext();

function App() {

  const [searchValue, setSearchValue] = React.useState('');

  return (
    <>
      <AppContext.Provider value={{searchValue,setSearchValue}}>
        <Header />
        <main class="menu">
          <div class="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/basket" element={<Cart />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </main>
      </AppContext.Provider>
    </>
  );
}

export default App;
