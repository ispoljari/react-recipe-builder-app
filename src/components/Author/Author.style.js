import styled from 'styled-components';

const Author = styled.div`
  display: flex;
  justify-content: center;
`;

const Social = styled(Author)`
  margin-top: 5px;

  img {
    position:relative;
    right: 1px;
    width: 36px;
    display: block;
  }
`;

const LinkedIn = styled.div`
  max-width: 34px;
  position: relative;
  background-color: white;
  border-radius: 5px;
`;

const Github = styled(LinkedIn)`
  margin-left: 10px;
  border-radius: 20px;
`;

export {
  Author,
  Social,
  LinkedIn,
  Github,
};
