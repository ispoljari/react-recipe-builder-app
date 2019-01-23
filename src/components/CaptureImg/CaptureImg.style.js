import styled from 'styled-components';

export const Img = styled.img`
  max-width: ${props => props.maxWidth};
  display: ${props => props.show ? "block" : "none"};
  margin-top: 30px;
  width: 100%;
  border-radius: 5px;
`;

export const Input = styled.input`
  margin: a auto;
  width: 220px;
`;