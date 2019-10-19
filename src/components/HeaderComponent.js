import React, {Component} from 'react';
import data from "../data";
import {SocialIcon} from "react-social-icons";
import '../styles/HeaderStyle.css'

class Header extends Component{
    render() {
        return (
            <div className="header">
                <h1><i>{data.title}</i></h1>
                <h2><i>{data.subtitle}</i></h2>
                <div id="social_icon_status">
                    <div className="social-icon"><SocialIcon url={data.links.linkedin}/></div>
                    <div className="social-icon"><SocialIcon url={data.links.stackoverflow}/></div>
                    <div className="social-icon"><SocialIcon url={data.links.github}/></div>
                </div>
            </div>
        );
    }
}

export default Header