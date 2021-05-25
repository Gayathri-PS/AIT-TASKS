import React, {component} from 'react';

class Footer extends React.Component{
constructor(){
    super();   
    this.state={
menus:['HEADING 1','HEADING 2','HEADING 3'],
menu1:['Payment Center','Contact Directory','Forms','News and Updates','FAQs'],
menu2:['Website Tutorial','Accessibility','Disclaimer','Privacy Policy','FAQs','Webmaster']
    }
    this.changeheading=this.changeheading.bind(this);
}
changeheading(){
    alert('hai');
    this.setState({
        menus:['HTML','CSS','JS']
    });
    
}
render(){
    let menuItems=this.state.menu1.map((menu)=>{
        return<li><a href="#">{menu}</a></li>
    });
    let menuItems2=this.state.menu2.map((menu1)=>{
        return<li><a href="#">{menu1}</a></li>
    });
    return(
        // <footer>
        //     {/* <ul>
        //         <li>{this.state.menu[0]}</li>
        //         <li>{this.state.menu[1]}</li>
        //         <li>{this.state.menu[2]}</li> 
        //     </ul> */}
            
            
        //     <ul>{menuItems}</ul>
            
        // </footer>
        <footer className="mainfooter" role="contentinfo">
  <div className="footer-middle">
  <div className="container">
    <div className="row">
      <div className="col-md-3 col-sm-6">
        {/* <!--Column1--> */}
        <div className="footer-pad">
          <h4>{this.state.menus[0]}</h4>
          <ul className="list-unstyled">
            {/* <li><a href="#"></a></li>
            <li><a href="#">Payment Center</a></li>
            <li><a href="#">Contact Directory</a></li>
            <li><a href="#">Forms</a></li>
            <li><a href="#">News and Updates</a></li>
            <li><a href="#">FAQs</a></li> */}
            {menuItems}
          </ul>
        </div>
      </div>
      <div className="col-md-3 col-sm-6">
        {/* <!--Column1--> */}
        <div className="footer-pad">
          <h4>{this.state.menus[1]}</h4>
          <ul className="list-unstyled">
            {/* <li><a href="#">Website Tutorial</a></li>
            <li><a href="#">Accessibility</a></li>
            <li><a href="#">Disclaimer</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Webmaster</a></li> */}
            {menuItems2}
          </ul>
        </div>
      </div>
      <div className="col-md-3 col-sm-6">
        {/* <!--Column1--> */}
        <div className="footer-pad">
          <h4>{this.state.menus[2]}</h4>
          <ul className="list-unstyled">
            <li><a href="#">Parks and Recreation</a></li>
            <li><a href="#">Public Works</a></li>
            <li><a href="#">Police Department</a></li>
            <li><a href="#">Fire</a></li>
            <li><a href="#">Mayor and City Council</a></li>
            <li>
              <a href="#"></a>
            </li>
          </ul>
        </div>
      </div>
    	<div className="col-md-3">
    		<h4>Follow Us</h4>
            <ul className="social-network social-circle">
             <li><a href="#" className="icoFacebook" title="Facebook"><i className="fa fa-facebook"></i></a></li>
             <li><a href="#" className="icoLinkedin" title="Linkedin"><i className="fa fa-linkedin"></i></a></li>
            </ul>				
		</div>
    </div>
	<div className="row">
		<div className="col-md-12 copy">
			<p className="text-center">&copy; Copyright 2018 - achieversit.  All rights reserved.</p>
		</div>
	</div>


  </div>
  </div>
  <button onClick={this.changeheading}>click here</button>
</footer>
    )
}

}
export default Footer; 