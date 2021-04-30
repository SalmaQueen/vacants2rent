import React from "react";
import { Helmet } from "react-helmet";

function Cards() {
    return (
      
      <div className="container">
         <Helmet>
            <style type="text/css">{`
            img{
              width:130px;
              height:120px;
              border-radius:50%;
            }
            .cont{
              margin-top:4%;
              padding:1%;
              font-size:1rem;
            }
            .box-1{
              float:left;
              margin-left:1rem;
              
            }
            hr{
              border-top: 1px dashed #8c8b8b;
            
            }
            button{
              margin-right:4rem;
            }
            table{
              float:left;
            }
            h1{
              
                font-size:1.5rem;
              text-align:center;
            
              
            }
            
            .box-2{
              float:right;
              margin-right:2rem;
            }
            .card{
               
              display:flex;
              flex-direction:column;
              background-color:#f3f4f5;
              color:blue;
              width:400px;
              height:500px;
              border-radius:50px;
              
                
            }
            
           
            
           
             


`}</style>
</Helmet>


<div className="row">
<div className="card col-md-4">
  <div calssName="row" style={{marginTop:"2rem"}}>
  <div className=" row">
    <div className="col-6 ">
      <img src="https://images.pexels.com/photos/2079234/pexels-photo-2079234.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
    </div>
    <div className="col-6 ">
      <h1>Eden Apartment</h1>
      <p>Westlands</p>
    </div>

  </div>
  </div>
  
  <div className="cont">
   <p>No of clicks on the Property</p>
    <span style={{color:"orange"}}>37</span>
    <hr/>
  
  <p>No of people who got your contact</p>
   <span style={{color:"orange"}}>37</span>
    <hr/>
   <p>Period Left <span style={{color:"orange", padding:"4px"}}>2 days</span>
     
   </p>
   
    
   
  
  <table>
    <td>Enter Period</td>
            <td>
              <select>
                <option value="1 weeks">1 week</option>
                <option value="2 weeks">2 weeks</option>
                <option value="3 weeks">3 weeks</option>
                <option value="4 weeks">4 weeks</option>
              </select>
            </td>
   
  </table>
     <button style={{backgroundColor:"orange", borderRadius:"20px",height:"30px",
      width:"50px", float:"right", color:"white"}}>OK</button>
 
    {/* <svg className="svg" aria-hidden="true" focusable="false" data-prefix="far" data-icon="trash-alt" class="svg-inline--fa fa-trash-alt fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z"></path></svg> */}
</div>
</div>




<div className="card col-md-4">
  <div calssName="row" style={{marginTop:"2rem"}}>
  <div className=" row">
    <div className="col-6 ">
      <img src="https://images.pexels.com/photos/2079234/pexels-photo-2079234.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
    </div>
    <div className="col-6 ">
      <h1>Eden Apartment</h1>
      <p>Westlands</p>
    </div>

  </div>
  </div>
  
  <div className="container">
   <p>No of clicks on the Property</p>
    <span style={{color:"orange"}}>37</span>
    <hr/>
  
  <p>No of people who got your contact</p>
   <span style={{color:"orange"}}>37</span>
    <hr/>
   <p>Period Left <span style={{color:"orange", padding:"4px"}}>2 days</span>
     
   </p>
   
    
   
  
  <table>
    <td>Enter Period</td>
            <td>
              <select>
                <option value="1 weeks">1 week</option>
                <option value="2 weeks">2 weeks</option>
                <option value="3 weeks">3 weeks</option>
                <option value="4 weeks">4 weeks</option>
              </select>
            </td>
   
  </table>
     <button style={{backgroundColor:"orange", borderRadius:"20px",height:"30px",
      width:"50px", float:"right", color:"white"}}>OK</button>
 
    {/* <svg className="svg" aria-hidden="true" focusable="false" data-prefix="far" data-icon="trash-alt" class="svg-inline--fa fa-trash-alt fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z"></path></svg> */}
</div>
</div>




<div className="card col-md-4">
  <div calssName="row" style={{marginTop:"2rem"}}>
  <div className=" row">
    <div className="col-6 ">
      <img src="https://images.pexels.com/photos/2079234/pexels-photo-2079234.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
    </div>
    <div className="col-6 ">
      <h1>Eden Apartment</h1>
      <p>Westlands</p>
    </div>

  </div>
  </div>
  
  <div className="container">
   <p>No of clicks on the Property</p>
    <span style={{color:"orange"}}>37</span>
    <hr/>
  
  <p>No of people who got your contact</p>
   <span style={{color:"orange"}}>37</span>
    <hr/>
   <p>Period Left <span style={{color:"orange", padding:"4px"}}>2 days</span>
     
   </p>
   
    
   
  
  <table>
    <td>Enter Period</td>
            <td>
              <select>
                <option value="1 weeks">1 week</option>
                <option value="2 weeks">2 weeks</option>
                <option value="3 weeks">3 weeks</option>
                <option value="4 weeks">4 weeks</option>
              </select>
            </td>
   
  </table>
     <button style={{backgroundColor:"orange", borderRadius:"20px",height:"30px",
      width:"50px", float:"right", color:"white"}}>OK</button>
 
    {/* <svg className="svg" aria-hidden="true" focusable="false" data-prefix="far" data-icon="trash-alt" class="svg-inline--fa fa-trash-alt fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z"></path></svg> */}
</div>
</div>
 
</div>

   

      
      </div>
    )
  }

export default Cards;
