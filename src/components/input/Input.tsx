import { FC, ChangeEvent } from 'react';
import { observer } from 'mobx-react-lite';

import { InputContainer, SearchButton, Input } from 'styles/Input';
import { Search } from 'components/icons/Icons';

import useStore from '../../hooks/useStore';
import { INPUT_PLACEHOLDER } from '../../constants';

const AppInput: FC = observer(() => {
  const store = useStore();

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    store?.setSearchQuery(event.target.value);
    if (event.target.value.length > 3) {
      store?.findCountry(event.target.value);
    }
  };
  return (
    <InputContainer>
      <SearchButton>
        <Search />
      </SearchButton>
      <Input
        type="text"
        placeholder={INPUT_PLACEHOLDER}
        value={store?.searchQuery}
        onChange={handleSearch}
      />
    </InputContainer>
  );
});

export default AppInput;
