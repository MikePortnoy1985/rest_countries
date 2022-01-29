import { FC, useState, useRef, MouseEvent } from 'react';
import { observer } from 'mobx-react-lite';

import { Select, ExpandButton, Menu, MenuItem } from 'styles/Select';

import useStore from '../../hooks/useStore';
import useClickOutside from '../../hooks/useClickOutside';
import { SELECT_PLACEHOLDER, REGIONS } from '../../constants';
import { Expand } from '../icons/Icons';

const Filter: FC = observer(() => {
  const store = useStore();
  const [expanded, setExpanded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleExpanded = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  const handleClickOutside = () => {
    if (!expanded) return;
    setExpanded(false);
  };

  const handleFilter = (e: MouseEvent<HTMLDivElement>) => {
    store?.filterRegions((e.target as HTMLDivElement).textContent ?? '');
  };

  useClickOutside(ref, handleClickOutside);

  return (
    <Select>
      <div>{SELECT_PLACEHOLDER}</div>
      <ExpandButton
        type="button"
        isExpanded={expanded}
        onClick={handleExpanded}
      >
        <Expand />
      </ExpandButton>
      <Menu ref={ref} isExpanded={expanded}>
        {REGIONS.map(({ id, region }) => (
          <MenuItem key={id} onClick={handleFilter}>
            {region}
          </MenuItem>
        ))}
      </Menu>
    </Select>
  );
});

export default Filter;
