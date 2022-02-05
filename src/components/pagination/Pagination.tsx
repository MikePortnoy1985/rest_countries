import { observer } from 'mobx-react-lite';

import Button from 'components/button/Button';
import FlexContainer from 'styles/FlexContainer';
import useStore from '../../hooks/useStore';
import { CARD_WIDTH } from '../../constants';

const Pagination = () => {
  const store = useStore();

  return (
    <FlexContainer padding="1rem 0" width={String(CARD_WIDTH)}>
      <Button onClick={store?.setPrevPage} />
      <Button next onClick={store?.setNextPage} />
    </FlexContainer>
  );
};

export default observer(Pagination);
