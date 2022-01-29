import { FC } from 'react';

import Card, {
  Image,
  CardTitle,
  CountryInfo,
  CountryInfoContainer,
} from 'styles/Card';

import { CountryType } from '../../store/store';
import { COUNTRY_INFO } from '../../constants';

type PropsType = {
  handleNavigation: (name: string) => void;
} & CountryType;

const AppCard: FC<PropsType> = (props) => {
  const { POPULATION, REGION, CAPITAL } = COUNTRY_INFO;
  const { flags, population, region, capital, name, handleNavigation } = props;

  return (
    <Card onClick={() => handleNavigation(name?.official)}>
      <Image img={flags?.svg} />
      <CountryInfoContainer>
        {
          // eslint-disable-next-line react/destructuring-assignment
          <CardTitle>{props?.name?.official}</CardTitle>
        }
        <CountryInfo>{`${POPULATION}: ${population}`}</CountryInfo>
        <CountryInfo>{`${REGION}: ${region}`}</CountryInfo>
        <CountryInfo>{`${CAPITAL}: ${capital ?? ''}`}</CountryInfo>
      </CountryInfoContainer>
    </Card>
  );
};

export default AppCard;
