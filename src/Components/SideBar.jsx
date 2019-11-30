import React from 'react';
import {Div, Row, Col, Container} from 'reactstrap';
import Logo from './logo.png';
import '../index.css';
import MaterialIcon, {colorPalette} from 'material-icons-react';


class SideBar extends React.Component {
    state = {  }
    render() { 
        return ( 

            <Container className="sideBar">
            
            
                        
                    <div className="container logo-wrapper">
                            <img src={Logo}  className="logo ml-3 mt-3" alt="Logo"/> 
                    </div>

                <div className="container vertical-menu pt-3">
                    <nav className="nav flex-column">
                        <a className="nav-link active text-white" href="#"><i className="material-icons mr-1">home</i><span className="ml-1">Home</span></a>
                        <a className="nav-link text-white" href="#"><i className="material-icons mr-1">search</i><span className="ml-1">Search</span></a>
                        <a className="nav-link text-white" href="#"><i className="material-icons mr-1">local_library</i><span className="ml-1">Your Library</span></a>
                    </nav>
                </div>
               
                        <Row pt="10">
                          <div className="col pt-5 mt-5 bt-5 footer-wrapper" /* style="background: black" */>
                            <div className="button-wrap container login-wrapper p-3">
                                <button id="btn1" type="button" className="btn btn-light btn-sm btn-block" data-toggle="modal" data-target="#signupModal">SIGN UP</button>
                                <button id="btn2" type="button" className="btn btn-secondary btn-sm btn-block" data-toggle="modal" data-target="#loginModal">LOGIN</button> 
                            </div>
                            
                            <div className="container footer-nav mb-3">
                                <p className="text-white"><a className="text-white" href="#">Cookie</a> | <a className="text-white" href="#">Privacy Policy</a></p>
                            </div>
                          </div>

                    </Row>
                          
    </Container>
             );
    }
}

export default SideBar;
