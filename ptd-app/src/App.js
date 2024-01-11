import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainPage from './page/mainpage/MainPage';
import UploadPage from './page/uploadpage/UploadPage';
import ExplorePage from './page/explorepage/ExplorePage';
import ProblemPage from './page/problempage/ProblemPage';
import UploadPreview from './page/uploadpage/UploadPreview'

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<MainPage/>}></Route>
      <Route exact path='/upload' element={<UploadPage/>}></Route>
      <Route exact path='/explore' element={<ExplorePage/>}></Route>
      <Route exact path='/problem' element={<ProblemPage/>}></Route>
      <Route exact path='/preview' element={<UploadPreview/>}></Route>
    </Routes>
  );
}

export default App;
