import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar'
import RecommendedVideos from './RecommendedVideos';

import { BrowserRouter ,Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="app">
    <Header/>
    <BrowserRouter>
   
      <Routes>
      <Route path ="/" element={<Sidebar comp={<RecommendedVideos/>}/>} />
   
      

        
      </Routes>
    </BrowserRouter>

    
  </div>
  );
}

export default App;
