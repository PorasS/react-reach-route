import React from 'react';
import { Router } from '@reach/router';
import About from '../components/About';
import Home from '../components/Home';
import Contact from '../components/contact';
import UserForm from '../UserForm';

const Route = () => {
    return (
        <Router>
            <Home path="/" />
            <About path="about" />
            <Contact path="contact" />
            <UserForm path="form" />
        </Router>
    )
}

export default Route;