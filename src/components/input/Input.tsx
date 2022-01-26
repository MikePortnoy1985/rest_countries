import { FC } from 'react';
import { observer } from 'mobx-react-lite';

import { InputContainer, SearchButton, Input } from 'styles/Input';
import { Search } from 'components/icons/Icons';

import useStore from '../../hooks/useStore';
import { INPUT_PLACEHOLDER } from '../../constants';

const AppInput: FC = observer(() => {
  const store = useStore();
  return (
    <InputContainer>
      <SearchButton>
        <Search />
      </SearchButton>
      <Input
        type="text"
        placeholder={INPUT_PLACEHOLDER}
        value={store?.searchQuery}
        onChange={store?.setSearchQuery}
      />
    </InputContainer>
  );
});

export default AppInput;
