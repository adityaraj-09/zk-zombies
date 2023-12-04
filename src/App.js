import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Homepage from './pages/homepage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<Navigate to={"playground"}/>}/>
        <Route path=":state" element={<Homepage m="abc"/>}/>
        </Route>
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
