import { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';

import Badge, { BadgeRow } from 'styles/Badge';
import { DescriptionField } from 'styles/CountryContainer';

import useStore from '../../hooks/useStore';
import { BORDER_COUNTRIES, CCA3_MAP } from '../../constants';

const AppBadge: FC = observer(() => {
  const store = useStore();
  const navigate = useNavigate();

  const handleNavigation = (border: string) => {
    const name = store?.getCountryByCCA3(border);
    if (name) navigate(`/${name}`, { state: {}, replace: true });
  };

  return (
    <BadgeRow>
      <DescriptionField bold>{BORDER_COUNTRIES}:&nbsp;</DescriptionField>
      {store?.selectedCountry?.borders?.map((border) => (
        <Badge
          key={border}
          type="button"
          onClick={() => handleNavigation(border)}
        >
          {CCA3_MAP[border as keyof typeof CCA3_MAP]}
        </Badge>
      ))}
    </BadgeRow>
  );
});

export default AppBadge;
