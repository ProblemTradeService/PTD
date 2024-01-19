import logo from './logo.svg';
import './App.css'; 
import { Route, Routes } from 'react-router-dom';
import MainPage from './page/mainpage/MainPage';
import UploadPage from './page/uploadpage/UploadPage';
import ExplorePage from './page/explorepage/ExplorePage';
import ProblemPage from './page/problempage/ProblemPage';
import MyPage from './page/mypage/MyPage';
import SignInPage from './page/signinpage/SignInPage';
import CompletePage from './page/uploadcomplete/CompletePage';
import BoughtPage from './page/boughtpage/BoughtPage';
import SellingPage from './page/sellingpage/SellingPage';
import WaitingPage from './page/waitingpage/WaitingPage';

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<MainPage/>}></Route>
      <Route exact path='/upload' element={<UploadPage/>}></Route>
      <Route exact path='/explore' element={<ExplorePage/>}></Route>
      <Route exact path='/problem' element={<ProblemPage/>}></Route>
      <Route exact path='/mypage' element={<MyPage/>}></Route>
      <Route exact path='/sign' element={<SignInPage/>}></Route>
      <Route exact path='/complete' element={<CompletePage/>}></Route>
      <Route exact path='/bought' element={<BoughtPage/>}></Route>
      <Route exact path='/selling' element={<SellingPage/>}></Route>
      <Route exact path='/waiting' element={<WaitingPage/>}></Route>
    </Routes>
  );
}

export default App;
