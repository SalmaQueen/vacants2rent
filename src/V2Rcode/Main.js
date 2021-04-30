import React, { Component } from 'react'
import { Helmet } from "react-helmet";
import Cards from "../cards/Cards";


export default class Main extends Component {
    render() {
        return (
            <>
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
                  height:100%;
                  padding:5%;
                  display:inline-block;
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
                    
         

   
                `}</style>
                </Helmet>

<div className="body-type" style={{backgroundColor:"#273036"}}>

<form style={{marginTop:"2rem"}}>
<h1 style={{color:"orange", textAlign:"center"}}>Enter V2R code</h1>


<div className="form-wrapper">

<input type="text" id="fname" placeholder="Enter your V2R code here..."/>
  <button className="btn" style={{backgroundColor:"orange", borderRadius:"30px"}}>Submit</button>

</div>

<Cards />

<button className="btn" style={{backgroundColor:"orange",marginTop:"1rem", borderRadius:"30px"}}>Finish</button>


</form>
</div>

                
            </>
        )
    }
}
