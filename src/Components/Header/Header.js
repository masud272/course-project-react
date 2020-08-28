import React from 'react';
import logo from '../../images/logo-coral.svg'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Header.css'

const Header = () => {
    return (
        <div className="Header">
             <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <img  style={{width:"100px", height:"60px"}} src={logo} alt=""/>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav navItem">
                        <a className="nav-link active" href="/Home">Home <span class="sr-only">(current)</span></a>
                        <a className="nav-link" href="/Courses">Online Courses</a>
                        <a className="nav-link" href="/Certification">Certification</a>
                        <a className="nav-link" href="/More" aria-disabled="true">More</a>
                    </div>    
                </div>
                <div style={{width:'300px'}}>
                      <input className="form-control" type="search" placeholder="Search" aria-label="Search"></input>
             </div>
                 <div>
                        <button className="btn btn-success  my-sm-0" type="submit">Search</button>
                </div>
                </nav>
  
        </div>
    );
};

export default Header;