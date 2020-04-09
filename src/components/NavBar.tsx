import React from 'react';
import { Link } from '@reach/router';

const NavBar = (): JSX.Element => {

    return (
        <nav>
            <Link to="/">Home</Link>{" "}
            <Link to="about">About</Link>{" "}
            <Link to="contact">contact</Link>{" "}
            <Link to="form">UserForm</Link>
        </nav>
    )
}

export default NavBar;