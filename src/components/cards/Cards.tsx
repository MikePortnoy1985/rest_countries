import { FC, useEffect } from 'react';
import { observer } from 'mobx-react-lite';

import GridContainer from 'styles/GridContainer';
import Card from './Card';

import { ProcessEnum } from '../../constants';
import useStore from '../../hooks/useStore';

const Cards: FC = observer(() => {
  const store = useStore();

  useEffect(() => {
    if (store?.process === ProcessEnum.INITIAL) store?.getCountries();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (store?.process === ProcessEnum.SUCCEEDED) {
    return (
      <GridContainer>
        {store?.countriesToRender?.map((item) => {
          return (
            // eslint-disable-next-line react/jsx-props-no-spreading
            <Card key={item?.name?.official} {...item} />
          );
        })}
      </GridContainer>
    );
  }

  return <GridContainer>{store?.error}</GridContainer>;
});

export default Cards;
