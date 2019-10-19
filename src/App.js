import React from 'react';
import './App.css';
import Header from "./components/HeaderComponent";
import About from "./components/AboutComponent";
import Skills from "./components/SkillComponent";
import Navbar from "./components/NavbarComponent";
import DownIcon from "./components/DownIconComponent";
import SnowStorm from 'react-snowstorm';


function App() {
    return (
        <div className="App" id="appID">
            <SnowStorm />
            <Navbar/>
            <Header/>
            <About/>
            <Skills/>
            <DownIcon/>
        </div>
    );
}

export default App;
