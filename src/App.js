import { useRoutes, Routes, Route, Navigate } from 'react-router-dom';
import MainPage from './MainPage/MainPage';
import OpenPost from './OpenPost/OpenPost';
import './App.css';
import { useState } from 'react';

function App() {
  const [route, setRoute] = useState({});
  
  return (<>
  <Routes>
    <Route 
      path={`/post/${route.id}`} 
      element={<OpenPost route={route} />} 
    />
    <Route 
      path='/main' 
      element={<MainPage setRoute={setRoute} />} 
    />
    <Route 
      path='/' 
      element={<Navigate replace to="/main" />} 
    />
  </Routes>
  </>);
}

export default App;
