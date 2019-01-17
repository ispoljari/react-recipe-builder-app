import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  border: 2px solid #d6dbdf;
  background-color: white;
  border-radius: 5px;
  min-height: 30px;
  padding: 5px;
  margin: 0;
  list-style: none;
  color: black;
  font-size: 20px;
  overflow: -webkit-paged-x;

  li {
    margin-right: 5px;
    padding: 5px;
    border-radius: 5px;
    background-color: antiquewhite;
    max-height: 45px;

    :last-of-type {
      margin-right: 0;
    }
  }
`;