import { FC, ReactNode } from 'react';
import { observer } from 'mobx-react-lite';
import { Navigate } from 'react-router-dom';

import CountryContainer, {
  CountryFlag,
  CountryInfo,
  CountryTitle,
  CountryDescription,
  DescriptionFieldContainer,
  DescriptionField,
} from 'styles/CountryContainer';
import Badge from 'components/badge/Badge';

import useStore from '../../hooks/useStore';

const Country: FC = observer(() => {
  const store = useStore();
  let description = {};

  if (!store?.selectedCountry?.flags?.svg) {
    return <Navigate to="/" />;
  }

  if (store) {
    description = store.getCountryDescription();
  }

  return (
    <CountryContainer>
      <CountryFlag img={store?.selectedCountry.flags.svg} />
      <CountryInfo>
        <CountryTitle>{store?.selectedCountry?.name?.official}</CountryTitle>
        <CountryDescription>
          {Object.entries(description).map(([key, value]) => {
            return (
              <DescriptionFieldContainer key={key + value}>
                <DescriptionField bold key={key}>
                  {key}:&nbsp;
                </DescriptionField>
                <DescriptionField key={value as string}>
                  {value as ReactNode}
                </DescriptionField>
              </DescriptionFieldContainer>
            );
          })}
        </CountryDescription>
        <Badge />
      </CountryInfo>
    </CountryContainer>
  );
});

export default Country;
