import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainPage from './page/mainpage/MainPage';
import UploadPage from './page/uploadpage/UploadPage';

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<MainPage/>}></Route>
      <Route exact path='/upload' element={<UploadPage/>}></Route>
    </Routes>
  );
}

export default App;
