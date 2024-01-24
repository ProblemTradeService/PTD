import './App.css'; 
import { Route, Routes } from 'react-router-dom';
import MainPage from './page/mainpage/MainPage';
import UploadPage from './page/uploadpage/UploadPage';
import ExplorePage from './page/explorepage/ExplorePage';
import MyPage from './page/mypage/MyPage';
import BoughtPage from './page/boughtpage/BoughtPage';
import ProblemPage from'./page/problempage/ProblemPage';
import IntroPage from './page/intropage/IntroPage';

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<IntroPage/>}></Route>
      <Route exact path='/main' element={<MainPage/>}></Route>
      <Route exact path='/upload' element={<UploadPage/>}></Route>
      <Route exact path='/explore' element={<ExplorePage/>}></Route>
      <Route exact path='/mypage' element={<BoughtPage/>}></Route>
      <Route path="/explore/problem/*" element={<ProblemPage/>}></Route>
    </Routes>
  );
}

export default App;
