import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import MTGImage from '../assets/mtg.jpg';

 const Styles = styled.div`
  .jumbo {
    background: url(${MTGImage}) no-repeat;
    background-size: cover;
    color: #FFFFFF;
    height: 200px;
    position: relative;
    z-index: -2;
  }

`;

 export const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <Container>
      </Container>
    </Jumbo>
  </Styles>
)
