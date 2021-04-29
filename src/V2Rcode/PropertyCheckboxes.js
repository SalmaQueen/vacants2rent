import React, { Component } from 'react'
import { Helmet } from 'react-helmet';



export default class PropertyCheckboxes extends Component {
    render() {
        return (
            <>
             <Helmet>
                <style type="text/css">{`

ul {
    column-count: 2;
    column-gap: 2rem;
    list-style: none;
  }
  
  /* ADDITIONAL STYLING */
  
  /* The container */
  .container {
    display: block;
    font-family: Montserrat;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 18px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  
  /* Hide the browser's default checkbox */
  .container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  
  /* Create a custom checkbox */
  .checkmark {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    height: 20px;
    width: 20px;
    background-color: #eee;
  }
  
  
  /* When the checkbox is checked, add a blue background */
  .container input:checked ~ .checkmark {
    background-color: #c90000;
  }
  
  /* Create the checkmark/indicator (hidden when not checked) */
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }
  
  /* Show the checkmark when checked */
  .container input:checked ~ .checkmark:after {
    display: block;
  }
  
  /* Style the checkmark/indicator */
  .container .checkmark:after {
    left: 7px;
    top: 2px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  
 
  


   
                  `}</style>
                    </Helmet>
  <div className="container">
 
  <div className="row">
    <div className="col-3">
      <ul>
        
       <li>
          <label className="container">
            <input type="checkbox" />Apartment
            <span className="checkmark"></span>
          </label>
       </li>    
       </ul>
    </div>

    <div className="col-3">
      <ul>
        
       <li>
          <label className="container">Mansion
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
       </li>    
       </ul>
    </div>

    <div className="col-3">
      <ul>
        
       <li>
          <label className="container">Mansionate
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
       </li>    
       </ul>
    </div>

    <div className="col-3">
      <ul>
        
       <li>
          <label className="container">Bungalow
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
       </li>    
       </ul>
    </div>
  </div>


</div>
 
                
            </>
        )
    }
}
