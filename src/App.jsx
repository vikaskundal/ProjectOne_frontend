import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './component/MainPage';
import ProductPage from './component/Productpage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/productpage" element={<ProductPage />} />
      </Routes>
    </Router>
  );
};

export default App;
