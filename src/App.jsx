import { useRoutes, Routes, Route, Navigate } from 'react-router-dom';
import MainPage from './MainPage/MainPage';
import OpenPost from './OpenPost/OpenPost'; 
import { useState } from 'react';
import './style.scss'

function App() {
 
  return (<>
  <Routes>
    <Route 
      path={`/post/:id`} 
      element={<OpenPost 
     
      />} 
    />
    <Route 
      path='/main' 
      element={<MainPage 
         
      />} 
    />
    <Route 
      path='/' 
      element={<Navigate replace to="/main" />} 
    />
  </Routes>
  </>);
}

export default App;
