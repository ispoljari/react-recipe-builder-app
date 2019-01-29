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
  overflow: -webkit-paged-y;
`;

export const ListItem = styled.li`
  color: ${props => props.color};
`;
