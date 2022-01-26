import styled from 'styled-components';

export const InputContainer = styled.div`
  display: inline-flex;
  width: 100%;
  max-width: 30rem;
  height: 3.5rem;
  background-color: ${(props) => props.theme.lightBackground};
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
  border-radius: 5px;
`;

export const Input = styled.input`
  display: block;
  background-color: transparent;
  height: 100%;
  width: 85%;
  border: 0;
  color: ${(props) => props.theme.inputTextColor};
  font-size: 0.875rem;
  line-height: 1.25rem;

  &:active,
  &:hover,
  &:focus {
    outline: 0;
    outline-offset: 0;
  }
`;

export const SearchButton = styled.div`
  height: 100%;
  width: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
