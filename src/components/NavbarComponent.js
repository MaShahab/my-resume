import React, {Component} from 'react';
import '../styles/NavbarStyle.css'
import About from "./AboutComponent";
import Skills from "./SkillComponent";


class Navbar extends Component{

    headerScroll(){
        let distance = 0;
        console.log(distance);
        let Scroll = require('react-scroll');
        let scroll = Scroll.animateScroll;
        scroll.scrollTo(distance);
    }

    aboutUsScroll(){
        let aboutElement = document.getElementById('totalAbout');
        let distance = aboutElement.offsetTop;
        console.log(distance);
        distance = distance-30;
        let Scroll = require('react-scroll');
        let scroll = Scroll.animateScroll;
        scroll.scrollTo(distance);
    }

    skillScroll(){
        let skillsElement = document.getElementById('skills_section');
        let distance = skillsElement.offsetTop;
        console.log(distance);
        distance = distance-30;
        let Scroll = require('react-scroll');
        let scroll = Scroll.animateScroll;
        scroll.scrollTo(distance);
    }

    changeTheme(){
        let bodyElement = document.getElementById("appID");
        if(bodyElement.style.background === "rgb(164, 189, 157)"){
            bodyElement.style.background="rgb(28, 51, 3)"
        }
        else {
            bodyElement.style.background="rgb(164, 189, 157)"
        }
    }

    render() {
        return (
            <div id="navbar">
                <div className="row">
                    <div className="col-1 navbarItem" id="header_navBar" onClick={this.headerScroll}>
                        Header
                    </div>
                    <div className="col-1 navbarItem" id="about_us_navBar" onClick={this.aboutUsScroll}>
                        About me
                    </div>
                    <div className="col-1 navbarItem" id="introduction_navBar" onClick={this.skillScroll}>
                        Skills
                    </div>
                    <div className="col-1 navbarItem" id="change_color_nav" onClick={this.changeTheme}>
                        Color me!
                    </div>
                </div>
            </div>
        );
    }
}
export default Navbar