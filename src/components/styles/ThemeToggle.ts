import styled from 'styled-components';

import { MODE } from '../../constants';

type PropsType = {
  mode?: keyof typeof MODE;
};

export const ToggleContainer = styled.div`
  width: 10.5rem;
  display: inline-flex;
  align-items: center;
`;

export const Toggle = styled.div`
  touch-action: pan-x;
  display: inline-block;
  position: relative;
  cursor: pointer;
  background-color: transparent;
  border: 0;
  padding: 0;
  user-select: none;

  -webkit-tap-highlight-color: transparent;
`;

export const Track = styled.div<PropsType>`
  width: 3.125rem;
  height: 1.5rem;
  padding: 0;
  border-radius: 2rem;
  background-color: ${(props) => props.theme.backgroundInverted};
  transition: all 0.4s ease;

  -webkit-tap-highlight-color: transparent;
`;

export const Thumb = styled.div<PropsType>`
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  position: absolute;
  top: 1px;
  left: ${(props) => (props.mode === MODE.DARK ? '27px' : '1px')};
  width: 1.375rem;
  height: 1.375rem;
  border-radius: 50%;
  background-color: ${(props) => props.theme.background};
  transition: all 0.4s ease;
`;

export const Label = styled.label`
  color: ${(props) => props.theme.textColor};
  user-select: none;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-left: 0.5rem;
`;
