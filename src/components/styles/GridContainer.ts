import styled from 'styled-components';

const GridContainer = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16.5rem, 1fr));
  gap: ${(props) => props.theme.cardMargin / 16}rem;
`;

export default GridContainer;
