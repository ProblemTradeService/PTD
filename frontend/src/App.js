import React, {useEffect, useState} from 'react';
import axios from 'axios';
import MainP from './MainP'
import InputP from './InputP'
import InputImageP from './InputImageP';
import OutputP from './OutputP';
import { BrowserRouter, Routes, Route,Link } from 'react-router-dom';
import OutputOddP from './OutputOddP';

function App() {
   
   
    /*
    useEffect(() => {
        axios.get('/api/hello')
        .then(response => setHello(response.data))
        .catch(error => console.log(error))
    }, []);
    
    useEffect(() => {
        axios.get('/api/articles')
        .then(response => setHello(response.data))
        .catch(error => console.log(error))
    }, []);
    */
    return (
        <div>
            <a href="/input">입력 하자<br></br></a>
            <a href="/problems">사진 보러 가자<br></br></a>
            <a href="/outputs">전체 문제 보기<br></br></a>
            <a href="/input/image">문제 올리자<br></br></a>
            
            <BrowserRouter>
            <Routes>
                <Route path="/input" element={<InputP/>}></Route>
                <Route path="/problems" element={<MainP/>}></Route>
                <Route path="/outputs" element={<OutputP/>}></Route>
                <Route path="/input/image" element={<InputImageP/>}></Route>
            </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;