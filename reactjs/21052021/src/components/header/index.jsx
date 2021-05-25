
import React from 'react';
function Header(props){
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
  <div className="container">
    <a className="navbar-brand" href="#">
          <img src="https://www.achieversit.com/assets/images/AIT-white.jpg" alt="logo"/>
        </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
    <div className="collapse navbar-collapse" id="navbarResponsive">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          {/* <a className="nav-link" href="#">{props.menudata}
                <span className="sr-only">(current)</span>
              </a> */}
              <Link to="/" className="nav-item active">{props.menudata}</Link>
        </li>
        <li className="nav-item active">
          <Link to="about" className="nav-item active">About</Link>
        </li> 
        <li className="nav-item active">
          <Link to="services" className="nav-item active">Services</Link>
        </li>
        <li className="nav-item active">
          <Link to="contact" className="nav-item active">Contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    );
}
export default Header;