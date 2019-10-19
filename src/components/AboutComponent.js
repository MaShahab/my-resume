import React, {Component} from 'react';
import data from "../data";
import '../styles/AboutStyle.css'

class About extends Component{
    render() {
        return (
            <div className="about_section" id="totalAbout">
                <h1 className="about_txt">{data.sections[0].title}</h1>

                <div id="about_items" className="about_txt">
                    <div id="my_text">
                        {this.props.name}
                        <p>{data.sections[0].items[0].content[0].experience}</p>
                        <p>{data.sections[0].items[0].content[0].educational[0].bsc}</p>
                        <p>{data.sections[0].items[0].content[0].educational[1].msc}</p>
                    </div>
                </div>
            </div>
        );
    }

}

export default About