import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Houses from './Houses';
import Spell from './Spell';
import Character from './Character';
import Book from './Book';
import Navbar from './Navbar';

export default function Home() {
  return (
    <div>
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Book/>} ></Route>
            <Route path='/houses' element={<Houses/>}></Route>
            <Route path='/spell' element={<Spell/>}></Route>
            <Route path='/character' element={<Character/>}></Route>
        </Routes>
        </BrowserRouter>
    </div>
  )
}
