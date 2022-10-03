import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Projects from '../Pages/Projects';
import Nav from '../Components/Nav';
export default function Rotas() {
    return (
        <Router>
            <Nav />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='About' element={<About />} />
                <Route path='Projects' element={<Projects />} />
            </Routes>
        </Router>
    )
}