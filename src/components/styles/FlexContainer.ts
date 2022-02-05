import styled from 'styled-components';

type PropsType = {
  padding?: string;
  width?: string;
};

const FlexContainer = styled.section<PropsType>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: ${(props) => props.padding || '3.125rem 0'};
  width: ${(props) => props.width || ''}px;
  margin: 0 auto;
`;

export default FlexContainer;
