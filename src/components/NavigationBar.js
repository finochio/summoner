import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar {
    background-color: #FFFFFF;
  }

  a, .navbar-nav .nav-link {
    color: #000000;

    &:hover {
      color: #F39C12;
    }
  }
`;

 export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
    <Navbar.Brand><b>Summoner | Magic: The Gathering | Creature Card Explorer - Powered by KUBERNETES</b></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/about">About Project</Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles >
)
