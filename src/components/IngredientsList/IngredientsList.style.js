import styled from 'styled-components';

const List = styled.ul`
  display: ${props => (props.visible ? 'flex' : 'none')};
  background-color: white;
  border: 1px solid #E3E2E6;
  border-radius: 5px;
  padding: 5px;
  margin: 0;
  list-style: none;
  color: black;
  font-size: 20px;
  overflow: -webkit-paged-x;
  min-height: 50px;

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

export default List;
