import React from 'react';
import styled from 'styled-components';
import Colours from '../styles/Colours';


const Button = styled.button`
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 600;
  padding: 0.4em 1em;
  border: 0;
  border-radius: 0.3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  color: ${Colours.white};
  background-color: ${Colours.primary};
`

export default Button;