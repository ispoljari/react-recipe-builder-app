import styled from 'styled-components';

export const Link = styled.a`
  text-decoration: none;

  img {
    min-width: 100px;
    max-width: 100px;
    border-style: none;
    height: 80px;
    border-radius: 5px;
  }
`; 

export const List = styled.ul`
  display: flex;
  background-color: white;
  padding: 0;
  list-style: none;
  color: black;
  overflow: -webkit-paged-x;

  li {
    white-space: nowrap;

    :last-of-type {
      margin-right: 0;
    }
  }
`;