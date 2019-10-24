import * as React from 'react';

// Styles
import { StyledIcon, StyledInput } from './styles';

interface Props {
  height: number;
  iconSrc?: string;
  placeholder?: string;
}

const SearchInput = ({
  placeholder,
  height,
  iconSrc,
  ...input
}: Props) => (
  <div style={{ position: 'relative', paddingBottom: 25 }}>
    {iconSrc && <StyledIcon height={height} iconSrc={iconSrc} />}
    <StyledInput
      {...input}
      height={height}
      placeholder={placeholder}
    />
  </div>
);

export default SearchInput;
