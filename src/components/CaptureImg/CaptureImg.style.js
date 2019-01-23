import styled from 'styled-components';
import camera from '../../svg/camera.svg';

export const Img = styled.img`
  max-width: ${props => props.maxWidth};
  display: ${props => props.show ? "block" : "none"};
  width: 100%;
  border-radius: 5px;
`;

export const Input = styled.input`
  display: ${props => props.show ? "block" : "none"};
  color: transparent;
  width: 130px;
  height: 0;
  border-radius: 20px;
  background: url(${camera}) no-repeat center center;
  background-size: 110px;
  overflow: hidden;
  padding-top: 110px;
  margin: 0 auto;

  :hover {
    cursor: pointer;
  }
`;

export const Button = styled.button`
  display: ${props => props.show ? "block" : "none"};
  position: absolute;
  top: 5px;
  right: 5px;
  font-size: 1.7em;
  color: white;
  background-color: #28a745;
  border: 0;
  padding: 0px 7px;
  border-radius: 5px;

  :hover {
    cursor: pointer;
  }
`;