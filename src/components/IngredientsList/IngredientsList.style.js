import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  background-color: white;
  border-radius: 5px;
  padding: 0;
  margin: 0;
  list-style: none;
  color: black;
  font-size: 20px;
  overflow: -webkit-paged-x;

  li {
    margin-right: 5px;
    padding: 0 5px;
    border-radius: 5px;
    background-color: antiquewhite;
    max-height: 45px;
    white-space: nowrap;

    :last-of-type {
      margin-right: 0;
    }
  }
`;