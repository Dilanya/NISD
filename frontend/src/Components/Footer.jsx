import React from 'react';
import logo from '../images/logo.png'; 
import facebook from "../images/facebook.png" 
import linkedin from "../images/linkedin.png";

class Footer extends React.Component {
  

  render() {
    return (
        
    <footer style={{backgroundColor: 'rgb(22, 11, 102)'}}>
    <div class="container">
        
        <div class="row">
            <div class="col-md-3">
                <div class="foot-logo">
                    <a href="index-2.html">
                    <img src={logo} class="img-fluid" alt="footer_logo" style={{width: '150px', height: '150px'}}/>
                    </a>
                    <p>2024 © copyright
                    <br/> All rights reserved.</p>
                </div>
            </div>
            <div class="col-md-3">
                <div class="sitemap">
                <h3>Navigation</h3>
                <ul>
                    <li><a href="about.html">About</a></li>
                    <li><a href="admission-form.html">Admissions </a></li>
                    <li><a href="admission.html">Academics</a></li>
                    <li><a href="research.html">Research</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
                </div>
            </div>
            
            <div class="col-md-6">
                <div class="address">
                    <h3>Contact us</h3>
                    <p><span>Address: </span> National Institute of Social Development, <br/>
                        Liyanagemulla,<br/>
                        Seeduwa,<br/>
                        Sri Lanka</p>
                    <p>Email : <a href="" class="__cf_email__" >info@nisd.ac.lk</a>
                    <br/> Phone : +94 112 882 506 / 07</p>
                    <div  style={{flexDirection: 'row'}}>
                    <div style={{display:'flex' , justifyContent: 'center'}} >
                        <a href="" ><img src={facebook}   style={{width: '24px', height: '24px' , marginTop: '8px', marginRight: '14px'}}/> </a>
                        <a href="" ><img src={linkedin} style={{width: '24px', height: '24px' , marginTop: '8px', marginRight: '14px'}}/> </a>
                        
                    </div>
                </div>
                </div>
            </div>
            
        </div>
    </div>
</footer>
        
    )};
  }


export default Footer;