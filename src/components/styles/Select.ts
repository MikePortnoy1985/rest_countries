import styled from 'styled-components';

type PropsType = {
  isExpanded?: boolean;
};

export const Select = styled.div`
  position: relative;
  width: 12.5rem;
  height: 3.5rem;
  background-color: ${(props) => props.theme.lightBackground};
  padding: 1.125rem 1.5rem;
  color: ${(props) => props.theme.inputTextColor};
  font-size: 0.875rem;
  line-height: 1.25rem;
  display: flex;
  justify-content: space-between;
  user-select: none;
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
  border-radius: 5px;

  @media (max-width: 839px) {
    margin-top 2.5rem;
  }
`;

export const ExpandButton = styled.button<PropsType>`
  background: transparent;
  border: 0;
  transform: ${(props) => (props.isExpanded ? 'rotate(180deg)' : 'rotate(0)')};

  &:active {
    transform: translateY(2px);
  }
`;

export const Menu = styled.div<PropsType>`
  display: ${(props) => (props.isExpanded ? 'block' : 'none')};
  position: absolute;
  left: 0;
  top: 3.75rem;
  width: 12.5rem;
  padding: 1rem 1.5rem;
  background-color: ${(props) => props.theme.lightBackground};
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
  border-radius: 5px;
`;

export const MenuItem = styled.div`
  &::after {
    margin-bottom: -1px;
    content: '';
    width: 50%;
    border-bottom: 1px solid ${(props) => props.theme.inputTextColor};
    width: 0;
    transition: all 0.6s ease;
  }

  &:hover::after {
    margin-bottom: -1px;
    display: block;
    content: '';
    width: 50%;
    border-bottom: 1px solid ${(props) => props.theme.inputTextColor};
  }
`;
