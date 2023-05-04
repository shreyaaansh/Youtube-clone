import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar'
import RecommendedVideos from './RecommendedVideos';
import { BrowserRouter as Routes, Route,Link, Outlet } from 'react-router-dom';


function App() {
  return (
    <div className="app">
    <BrowserRouter>
    <Route path ="/" element={<Header />} />
      <Routes>
        <Route path="/search/:searchTerm">
          <h1>Search PAge</h1>
          
        </Route>

        <Route path="/">
          
          <div className='app__page'>
            <Sidebar />
            <RecommendedVideos />

            <Sidebar />
            <RecommendedVideos />

            <Sidebar />
            <RecommendedVideos />
          </div>
        </Route>
      </Routes>
    </BrowserRouter>

    
  </div>
  );
}

export default App;
