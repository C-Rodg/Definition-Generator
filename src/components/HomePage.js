import React from 'react';
import NavBar from './Navbar';
import Content from './Content';

const HomePage = () => {
    return (
        <div className="home-page">
            <NavBar />
            <Content />
        </div>
    );
};

export default HomePage;