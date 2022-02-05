import styled from 'styled-components';

type PropsType = {
  withMargin?: boolean;
};

const BackButton = styled.button<PropsType>`
  margin: ${(props) => (props.withMargin ? '5rem 0' : '0 auto')};
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

  &:active {
    transform: translateY(-2px);
  }
`;

export const ButtonTitle = styled.span`
  margin: 0 0.625rem;
  color: ${(props) => props.theme.textColor};
`;

export default BackButton;
