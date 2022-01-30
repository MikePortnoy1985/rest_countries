import styled from 'styled-components';

const BackButton = styled.button`
  margin: 5rem 0;
  padding: 0.625rem 2rem;
  border: 0;
  background-color: ${(props) => props.theme.lightBackground};
  display: inline-flex;
  align-items: center;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.293139);
  border-radius: 2px;

  @media (max-width: 1325px) {
    margin: 2rem 0;
  }
`;

export const ButtonTitle = styled.span`
  margin-left: 0.625rem;
  color: ${(props) => props.theme.textColor};
`;

export default BackButton;
