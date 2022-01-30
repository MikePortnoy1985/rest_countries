import styled from 'styled-components';

type PropsType = {
  img?: string;
  bold?: boolean;
};

const CountryContainer = styled.div`
  width: 100%;
  height: 25rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 7.5rem;

  @media (max-width: 1325px) {
    height: 100%;
    grid-template-columns: 1fr;
    grid-gap: 0;
  }
`;

export const CountryFlag = styled.div<PropsType>`
  max-width: 35rem;
  width: 100%;
  height: 25rem;
  background: center / cover no-repeat url(${(props) => props.img});
  border-radius: 10px;
  box-shadow: 0px 0px 14px 4px rgba(0, 0, 0, 0.0294384);
  justify-self: center;
`;

export const CountryInfo = styled.div`
  width: auto;
  height: 100%;
  padding: 2.5rem 0;
  display: flex;
  flex-direction: column;

  @media (max-width: 1325px) {
    padding: 0;
    padding-top: 1rem;
  }

  @media (max-width: 440px) {
    height: auto;
  } ;
`;

export const CountryTitle = styled.h2`
  font-size: 2rem;
  line-height: 2.75rem;
`;

export const CountryDescription = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 10rem;
  margin-top: 1rem;

  @media (max-width: 1325px) {
    margin-top: 0.5rem;
  }

  @media (max-width: 440px) {
    height: auto;
    flex-wrap: nowrap;
  } ;
`;

export const DescriptionFieldContainer = styled.div`
  display: flex;
  margin-top: 0.5rem;
`;

export const DescriptionField = styled.div<PropsType>`
  font-weight: ${(props) => (props.bold ? '800' : '600')};
`;

export default CountryContainer;
