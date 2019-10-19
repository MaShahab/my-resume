import React, {Component} from 'react';
import '../styles/DownIconStyle.css'
import downIcon from '../images/arrow-pointing-downwards.png'


class DownIcon extends Component{

    nextpage(){
        let Scroll = require('react-scroll');
        let scroll = Scroll.animateScroll;

        let headerElement = 0;
        let aboutElement = document.getElementById('totalAbout');
        let aboutDistance = aboutElement.offsetTop;
        let skillsElement = document.getElementById('skills_section');
        let skillDistance = skillsElement.offsetTop;
        let currentPosition = (document.documentElement.scrollTop);
        if(currentPosition<aboutDistance-30){
            scroll.scrollTo(aboutDistance-25);
        }
        else if(currentPosition >= aboutDistance-30 && currentPosition < skillDistance){
            scroll.scrollTo(skillDistance-30);
        }
    }
    render() {
        window.addEventListener("scroll", function(event) {
            var bottomPosition = (document.body.offsetHeight);
            var top = this.scrollY;
            bottomPosition = bottomPosition-715;
            // console.log(bottomPosition);
            // console.log(top);
            if(bottomPosition < top){
                console.log("salam");
                document.getElementById("down_icon").style.display="none";
            }
            else {
                document.getElementById("down_icon").style.display="block";
            }
        });
        return (
            <div id="down_icon" onClick={this.nextpage}>
                <img src={downIcon} style={{width:"45px"}}/>
            </div>
        );
    }
}


export default DownIcon