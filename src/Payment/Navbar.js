import React, { Component } from 'react'
import {Link} from 'react-router-dom'



export default class Navbar extends Component {
  render() {
    return (
      <>
     
<nav class="navbar navbar-expand-lg  fixed-top" style={{backgroundColor:"blue",color:"white"}} >
  <div class="container-fluid">
    <Link class="navbar-brand text-white" to="/">Vacant2Rent</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse  " id="navbarNavDropdown">
      <ul class="navbar-nav ml-auto">
        
          <li className="nav-item">
              <Link
                className="nav-link text-white active"
                to="/search_property"
              >
                Search Property
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link text-white active"
                to="/list_property"
              >
                List Property
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link text-white active"
                to="/view_property"
              >
                View Property
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link text-white active"
                to="/blog"
              >
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-white active"
                to="/contact"
              >
                Contact us
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link text-white active"
                to="/login"
              >
                Login
              </Link>
            </li>

           


            <li className="nav-item ">
              <a
                className="nav-link text-white active"
                 
                href="#pablo"
              >
                {/* <i
                  className={
                    (props.transparent
                      ? "lg:text-gray-300 text-gray-500"
                      : "text-gray-500") +
                    " fab fa-facebook text-lg leading-lg "
                  }
                /> */}
                <span className="lg:hidden inline-block ml-2">Share</span>
              </a>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link text-white active"
                  
                href="#pablo"
              >
                {/* <i
                  className={
                    (props.transparent
                      ? "lg:text-gray-300 text-gray-500"
                      : "text-gray-500") +
                    " fab fa-twitter text-lg leading-lg "
                  }
                /> */}

                <span className="lg:hidden inline-block ml-2">Tweet</span>
              </Link>
            </li>
      
      
        
      </ul>
    </div>
  </div>
</nav>





        
      </>
    )
  }
}
