import styled from 'styled-components';

const Badge = styled.button`
  padding: 0.625rem;
  border: 0;
  background-color: ${(props) => props.theme.lightBackground};
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.293139);
  border-radius: 2px;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  color: ${(props) => props.theme.textColor};
`;

export const BadgeRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-top: auto;
`;

export default Badge;
