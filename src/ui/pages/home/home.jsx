import React from "react";
import About from "../../components/home/about";
import Footer from "../../components/home/footer";
import HomePicture from "../../components/home/home-picture";
import Navbar from "../../components/home/navbar";
import Services from "../../components/home/services";
import './home.css';

class Home extends React.Component {
    render() {
        return(
            <>
                <Navbar />
                <HomePicture />
                <About />
                <Services />
                <Footer /> 
            </>
        )
    }
}

export default Home;