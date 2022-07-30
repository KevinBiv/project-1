import React from "react";
import './styles.css';


class About extends React.Component {
    render() {
        return(
            <>
                <div className="about">
                    <h2 className="about-title">WHO WE ARE</h2>
                    <p className="margin">This is an e-learning platform that aims at facilitating the connection between students in Rwanda and different lecturers will connect students from all parts of Rwanda and their facilitators. It will establish a network of Rwandan students together with their facilitators.</p>
                    <h2 className="about-title">OUR VISION</h2>
                    <p>Our vision is to connect students together as well as the facilitators and lecturers with a goal of improving networking, collaboration and team work amongst students.
                        This web application will establish a network of Rwandan students together with their facilitators.
                    </p>
                    <p>which is crucial and very substantial in the long run as it eases the students' learning process and equips them with the necessary skills for their careers</p>
                </div>
            </>
        )
    }
}

export default About;