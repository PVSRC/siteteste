import React, { Component } from 'react';
import {Navbar,NavbarBrand, NavLink} from 'reactstrap';
import styled from 'styled-components';


class AppNav extends Component {
    state = {  }
    render() {
        return (
          <div>
            <Header>
              <Navbar color="dark" dark  expand="md">
                  <NavbarBrand style={{paddingLeft:"20px"}} href="/">Test Application</NavbarBrand>
                  <NavLink style={{paddingLeft:"20px"}} href="/">Home</NavLink>
                  <NavLink style={{paddingLeft:"20px"}} href="/students">Students</NavLink>
                  <NavLink style={{paddingLeft:"20px"}} href="/studentsinsertion">Add Students</NavLink>
              </Navbar>
            </Header>
          </div>
        );
      }
}

const Header = styled.header`
  width: 100%;
  height: auto;
  padding-top: 2%;
  padding-bottom: 2%;
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.25);

  a:link {
    color: black;
    text-decoration: none;
  }
  
  a:visited {
    color: black;
    text-decoration: none;
  }
  
  a:hover {
    color: black;
    text-decoration: underline;
  }
  
  a:active {
    color: blue;
    text-decoration: underline;
  }
`;
 
export default AppNav;