import React, { Component } from "react";
// import { Helmet } from "react-helmet";
import Main from './Main'
import Navbar from "./Navbar";
import Footer from "../Login/components/Footer";

export default class ViewProperty extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Main/>
     
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#f3f4f5" fill-opacity="1" d="M0,64L48,106.7C96,149,192,235,288,261.3C384,288,480,256,576,213.3C672,171,768,117,864,133.3C960,149,1056,235,1152,256C1248,277,1344,235,1392,213.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg> */}
        <Footer/>




 
      </>
    );
  }
}
