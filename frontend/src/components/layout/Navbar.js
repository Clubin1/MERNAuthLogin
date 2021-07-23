import React, {Component} from "react";
import {Link} from "react-router-dom";
import '../../assets/styles/navbar.css'

class Navbar extends Component {

    render() {
        return (
         <div className="navContainer">
            <nav class="navbar navbar-expand-md navbar-light bg-light">
            <div className="navWidth"></div>
          <a class="navbar-brand" href="#"><img className='lendingTree' src="https://www.adweek.com/wp-content/uploads/2018/07/lendingtree-leaf-450-2018-450x450.png"></img></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        
          <div class="collapse navbar-collapse " id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
            <li class="nav-item ">
                <a class="nav-link" href="#">Home </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item ">
                <a class="nav-link" href="#">Home </a>
              </li>
    
              
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Dropdown
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <a class="dropdown-item" href="#">Something else here</a>
                </div>
              </li>

            </ul>
            <Link to='/register'>
              Sign up for free
            </Link>
            <Link to='/login'>
            <button class="btn navBtn  waves-effect waves-light my-2 my-sm-0" type="submit"> Log In </button>
            </Link>
            <div className="navWidth"></div> 

          </div>
        </nav>
         </div>
        );
    }
}
export default Navbar;
