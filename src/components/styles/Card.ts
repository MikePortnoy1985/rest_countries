import styled from 'styled-components';

type PropsType = {
  img?: string;
};

const Card = styled.div`
  background-color: ${(props) => props.theme.lightBackground};
  width: 100%;
  max-width: 16.5rem;
  height: 21rem;
  border-radius: 5px;
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
  overflow: hidden;
  transition: all 0.4s ease;
`;

export const Image = styled.div<PropsType>`
  height: 45%;
  width: 100%;
  background: center / cover no-repeat url(${(props) => props.img});
  border-bottom: 1px solid #000;
`;

export const CountryInfoContainer = styled.div`
  height: 55%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 1.5rem;
`;

export const CardTitle = styled.h6`
  font-weight: 800;
  font-size: 1.125rem;
  line-height: 1.625rem;
`;

export const CountryInfo = styled.div`
  font-size: 0.875rem;
  line-height: 1rem;
`;

export default Card;
