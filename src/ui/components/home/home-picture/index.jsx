import React from "react";
import './styles.css';
import homePicture from '../../../resources/img2.jpg';

class HomePicture extends React.Component {
    render() {
        return (
            <>
                <img src={homePicture} alt="" className="home-picture" />
            </>
        )
    }
}

export default HomePicture;