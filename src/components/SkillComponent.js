import React, {Component} from 'react';
import data from "../data";
import reactImg from "../images/react_logo.png";
import jsImg from "../images/javaScript_logo.png";
import cssImg from "../images/css_logo.png";
import pythonImg from "../images/python_logo.png";
import androidImg from "../images/android-logo.png";
import phpImg from "../images/php-logo.png";
import ciscoImg from "../images/cisco-logo.png";
import mysqlImg from "../images/MySQL-logo.png";
import '../styles/SkillSytle.css';
import doubleTop from "../images/doubleTop.png";

class Skills extends Component{
    scrollTop(){
        var Scroll = require('react-scroll');
        var scroll = Scroll.animateScroll;
        scroll.scrollToTop();
    }
    render() {
        return (
            <div id="skills_section">
                <h1 className="about_txt" id="skill_title">{data.sections[1].title}</h1>
                <div className="col-3 skill_item">
                    <img src={reactImg} alt="React logo" className="logos"/>
                    <p>{data.sections[1].items[0].content.title}</p>
                </div>
                <div className="col-3 skill_item">
                    <img src={jsImg} alt="JavaScript logo" className="logos"/>
                    <p>{data.sections[1].items[1].content.title}</p>
                </div>
                <div className="col-3 skill_item">
                    <img src={cssImg} alt="CSS logo" className="logos"/>
                    <p>{data.sections[1].items[2].content.title}</p>
                </div>
                <div className="col-3 skill_item">
                    <img src={pythonImg} alt="Python logo" className="logos"/>
                    <p>{data.sections[1].items[3].content.title}</p>
                </div>
                <div className="col-3 skill_item">
                    <img src={androidImg} alt="Python logo" className="logos"/>
                    <p>{data.sections[1].items[4].content.title}</p>
                </div>
                <div className="col-3 skill_item">
                    <img src={phpImg} alt="Python logo" className="logos"/>
                    <p>{data.sections[1].items[5].content.title}</p>
                </div>
                <div className="col-3 skill_item">
                    <img src={ciscoImg} alt="Python logo" className="logos"/>
                    <p>{data.sections[1].items[6].content.title}</p>
                </div>
                <div className="col-3 skill_item">
                    <img src={mysqlImg} alt="Python logo" className="logos"/>
                    <p>{data.sections[1].items[7].content.title}</p>
                </div>
                <img src={doubleTop} id="topUpIcon" onClick={this.scrollTop}/>
            </div>
        );
    }

}

export default Skills