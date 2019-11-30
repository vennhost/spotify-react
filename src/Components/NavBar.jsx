import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  
  Nav,
  NavItem,
  NavLink
  
  
} from 'reactstrap';
import '../index.css'





const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  

  return (
    <div className="nav-wrap">
      <Navbar id="nav-bar" color="dark" dark expand="md">
        
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav id="nav" className="mr-auto justify-content-center" navbar>
            <NavItem>
              <NavLink href="/components/">TRENDING</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">PODCAST</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">MOODS AND GENRES</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">NEW RELEASES</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">DISCOVER</NavLink>
            </NavItem>
            
           
          </Nav>
         
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;


/* 
                                                                <li class="nav-item">
                                                            <a class="nav-link active text-white" href="#">TRENDING</a>
                                                          </li>
                                                          <li class="nav-item">
                                                            <a class="nav-link text-white" href="#">PODCAST</a>
                                                          </li>
                                                          <li class="nav-item">
                                                            <a class="nav-link text-white" href="#">MOODS AND GENRES</a>
                                                          </li>
                                                          <li class="nav-item">
                                                            <a class="nav-link text-white" href="#">NEW RELEASES</a>
                                                          </li>
                                                          <li class="nav-item">
                                                            <a class="nav-link text-white" href="#">DISCOVER</a>
                                                          </li> */