// App.js

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Search from './Search';

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/Search/:da' element={<Search />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
