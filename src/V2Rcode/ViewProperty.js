import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Cards from "../cards/Cards";

export default class ViewProperty extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Helmet>
          <style type="text/css">{`
            
                  .body-type {
                    font: 13px 'Lucida sans', Arial, Helvetica;
                    color: black;
                    text-align: center;
                }
                
                button{
                  background-color:orange;
                  width:10%;
                  border-radius:30px;
                  height:50px;
                 
                }
                input{
                  border-radius:30px;
                  width:70%;
                  height:50px;
                }

                form{
                  width:100%;
                  height:550px;
                  // background-color:black;
                }
                .form-wrapper{
                  display:flex;
                  justify-content:center;
                  // background-color:#f4f4f5;
                  align-items:center;
                  margin-top:3rem;
                  padding:3%;
                }
                    
               
            // svg{
            //   height:300px;
            // }


   
                  `}</style>
        </Helmet>
        {/* <h1 style={{backgroundColor:"black", color:"orange", textAlign:"center", marginTop:"2rem"}}>Enter V2R code</h1> */}

            <div className="body-type" style={{backgroundColor:"#273036",backgroundSize:"cover", backgroundRepeat:"no-repeat", backgroundImage:`url("https://images.pexels.com/photos/3397348/pexels-photo-3397348.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")`}}>

{/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#f3f4f5" fill-opacity="1" d="M0,256L48,229.3C96,203,192,149,288,154.7C384,160,480,224,576,218.7C672,213,768,139,864,101.3C960,64,1056,64,1152,90.7C1248,117,1344,171,1392,197.3L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
</svg>  */}

<form style={{marginTop:"2rem"}}>

<div className="form-wrapper">

<input type="text" id="fname" placeholder="Enter your V2R code here..."/>
  <button className="btn" style={{backgroundColor:"orange", borderRadius:"30px"}}>Submit</button>

</div>
<Cards  style={{marginBottom:"2rem"}}/>
<button className="btn" style={{backgroundColor:"orange",marginTop:"1rem", borderRadius:"30px"}}>Finish</button>


</form>



       
       
{/* <Footer/>  */}

<div style={{marginTop:"4rem"}}>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#f3f4f5" fill-opacity="1" d="M0,64L48,106.7C96,149,192,235,288,261.3C384,288,480,256,576,213.3C672,171,768,117,864,133.3C960,149,1056,235,1152,256C1248,277,1344,235,1392,213.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
</svg>

</div>


       
      </div>

      {/* <Footer /> */}
      </>
    );
  }
}
