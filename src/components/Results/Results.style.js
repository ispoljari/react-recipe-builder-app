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
  flex-direction: column;
  margin: 0 auto;
  background-color: white;
  padding: 0 10px 0 0;
  list-style: none;
  color: black;
  overflow: -webkit-paged-y;

  li {
    margin-right: 5px;
    white-space: nowrap;
    font-size: 16px;

    @media (min-width: 992px) {
      font-size: 18px;
    }

    :last-of-type {
      margin-right: 0;
    }
  }
`;