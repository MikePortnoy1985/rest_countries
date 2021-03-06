import styled from 'styled-components';

const Header = styled.header`
  width: 100%;
  height: 5rem;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0562443);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5rem;
  background-color: ${(props) => props.theme.lightBackground};

  @media (max-width: 720px) {
    padding: 0 1rem;
  }
`;

export const Title = styled.h1`
  user-select: none;
  font-size: 1.5rem;
  line-height: 2rem;
`;

export default Header;
