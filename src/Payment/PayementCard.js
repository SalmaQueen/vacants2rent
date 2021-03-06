import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Mpesa from './Mpesa'



class PayementCard extends Component {
    render() {
        return (

<>
<Helmet>
                <style type="text/css">{`
                .box-container {
                    display: flex;
                    flex-direction:row-reverse;
                    height: 500px;
                
                  }
                    
                  .box1 {
                    background-color: dodgerblue;
                    width: 50%;
                    /* margin-right: 2rem; */
                    height: 80%;
                  }
                
                  .box2 {
                    background-color: orangered;
                    width: 50%;
                    height: 50%;
                  }
                
                .price h1{
                    font-weight: 300;
                    color: #18C2C0;
                    letter-spacing: 2px;
                
                }
                    
                       
                .card{
                    /* margin-top: 30px;
                    margin-bottom: 30px; */
                    padding: 4rem;;
                    width: 520px;
                    height: 400px;
                    background-color: orange;
                    background:url("https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500");
                    
                    /* opacity: 0.8; */
                
                }
                  
                    .card .row{
                        height: 20%;
                        width: 100%;
                        border-bottom: 1.2px solid #292C58;
                
                    }
                      
                       
                    .card .paypal{
                        border-top-left-radius: 10px;
                        border-top-right-radius: 10px;
                
                    }
                        
                    .card .details{
                        border-bottom-left-radius: 10px;
                        border-bottom-right-radius: 10px;
                
                    }
                        
                    .paypal, .credit{
                        background-color: #1E2148;
                
                    }
                      
                    .cardholder, .number, .details{
                        background-color: #242852
                
                
                    }
                        
                
                .paypal, .credit, .left, .right{
                    position: relative;
                    top: 50%;
                    transform: translateY(-50%);
                
                }
                    
                     
                    .left{
                        float: left;
                        margin-left: 50px;
                
                    }
                        
                        label{
                            margin-left: 10px;
                            font-size: 1rem;
                            cursor: pointer;
                            font-weight: 700;
                            letter-spacing: 0.5px;
                            color: #fff;
                
                        }
                           
                        input[type=radio]{
                            visibility: hidden;
                
                
                        }
                        .radio{
                            position: absolute;
                            top: -2px;
                            left: -20px;
                            border: 3px solid #414365;
                            width: 25px;
                            height: 25px;
                            border-radius: 50%;
                            background-color: #292B52;
                            transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                
                        }
                            
                            .radio ::before{
                                position: absolute;
                                content: '';
                                border-radius: 50%;
                                top: 5px;
                                left: 5px;
                                width: 9px;
                                height: 9px;
                                background-color: transparent;
                                transition: background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                
                            }
                               
                    .right{
                        float: right;
                        margin-right: 30px;
                
                    }
                        
                        img{
                            width: 100px;
                            height: 70px;
                            margin-left: 10px;
                
                        }
                           
                
                input[type=radio]:checked ~ .radio{
                    border: 3px solid #90E1E3;
                    background-color: #18C2C0;
                
                }
                    
                    input ::before{
                        background-color: #fff;
                
                
                    }
                    
                .cardholder, .number, .info{
                    position: relative;
                    top: 50%;
                    transform: translateY(-50%);
                    /* margin-left: 40px; */
                
                }
                      
                        label{
                            display: inline-block;
                            letter-spacing: 0.5px;
                            color: #8F92C3;
                            width: 100px;
                
                        }
                           
                        input{
                            display: inline-block;
                            max-width: 300px;
                            width: 50%;
                            background-color: transparent;
                            font-family: 'Source Code Pro';
                            border: none;
                            outline: none;
                            margin-left: 50px;
                            color: black;
                
                        }
                            
                            input ::placeholder{
                                font-family: 'Source Code Pro';
                                color: #444880;
                
                            }
                                
                            
                #cardnumber, #cardnumber::placeholder{
                
                
                    letter-spacing: 2px;
                }
                
                .details,
                    .left, .right{
                        position: relative;
                        top: 50%;
                        transform: translateY(-50%);
                
                    }
                    .wrapper{
                        width:100%;
                        height:100%;
                        /* padding: 2%; */
                        /* position: relative; */
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                    }
                       
                    .details, .left{
                        float: left;
                        padding-left: 40px;
                        width: 50%;
                
                    }
                    select #expiry-date{
                        padding: 0px !important;
                    }
                       
                        label{
                            letter-spacing: 0.5px;
                            color: #8F92C3;
                            width: 100px;
                            margin-right: 20px;
                
                        }
                            
                        select{
                            font-family: 'Source Code Pro';
                            cursor: pointer;
                            appearance: none;
                            background: transparent;
                            border: none;
                            outline: none;
                            color: #444880;
                        }
                           
                        span{
                            font-family: 'Source Code Pro';
                            color: #444880;
                            margin: 0 2px;
                
                        }
                            
                    .right{
                        float: right;
                        width: 50%;
                
                    }
                        
                        label{
                            margin-right: 20px;
                            color: #8F92C3;
                
                        }
                           
                        input{
                            text-align: center;
                            width: 50%;
                            font-family: 'Source Code Pro';
                            cursor: pointer;
                            background: transparent;
                            border: none;
                            outline: none;
                            color:black;
                
                        }
                            
                
                
                
                .button button{
                    font-size: 1.2rem;
                    font-weight: 400;
                    letter-spacing: 1px;
                    width: 520px;
                    background-color: #18C2C0;
                    border: none;
                    color: #fff;
                    padding: 18px;
                    border-radius: 5px;
                    outline: none;
                    transition: background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                
                }
                   
                .button button :hover{
                    background-color: #15aeac;
                
                
                }
                .button button :active{
                    background-color: #139b99;
                
                }
                  


   
                  `}</style>
                    </Helmet>




<div className="container">
            <div className="box-container">

<div className="box1">
    <Mpesa/>
            
              
            </div>
                

        <div className="card box2">
            <div className="row paypal">
            
              
            </div>
       
           
            <div className="row cardholder">
                <div className="info">
                    <label for="cardholdername">Name</label>
                    <input placeholder="e.g. Richard Bovell" id="cardholdername" type="text" />
                </div>
            </div>
            <div className="row number">
                <div className="info">
                    <label for="cardnumber">Card number</label>
                    <input id="cardnumber" type="text" pattern="[0-9]{16,19}" maxlength="19" placeholder="8888-8888-8888-8888"/>
                </div>
            </div>
            <div className="row details">
                <div className="">
                    <label for="expiry-date">Expiry</label>
                    <select id="expiry-date">
                        <option>MM</option>
                        <option value="1">01</option>
                        <option value="2">02</option>
                        <option value="3">03</option>
                        <option value="4">04</option>
                        <option value="5">05</option>
                        <option value="6">06</option>
                        <option value="7">07</option>
                        <option value="8">08</option>
                        <option value="9">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                    </select>
                    <span>/</span>
                     <select id="expiry-date">
                        <option>YYYY</option>
                        <option value="2016">2016</option>
                        <option value="2017">2017</option>
                        <option value="2018">2018</option>
                        <option value="2019">2019</option>
                        <option value="2020">2020</option>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>
                        <option value="2025">2025</option>
                        <option value="2026">2026</option>
                        <option value="2027">2027</option>
                        <option value="2028">2028</option>
                        <option value="2029">2029</option>
                        <option value="2030">2030</option>
                    </select>
                </div>
              
            </div>

                
            </div>
           
        </div>
    </div>
    </>
  
        );
    }
}

export default PayementCard;