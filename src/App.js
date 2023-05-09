import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar'
import RecommendedVideos from './RecommendedVideos';
import SearchPage from "./SearchPage"

import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="app">
      <Header/>

      <Routes>
        <Route path ="/" element={<Sidebar comp={<RecommendedVideos/>}/>} />
        <Route path ="/search/:inputSearch" element={<Sidebar comp={<SearchPage />}/>} />
      </Routes>


      <Routes>
      
      </Routes>
    

    
  </div>
  );
}

export default App;
