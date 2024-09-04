import React from 'react';
import { Wrapper } from '@/components/Wrapper';

interface PropsHeader {
  className?: string
}

const Header: React.FC<PropsHeader> = ({className}) => {
  return (
    <Wrapper className={className}>
      <h1 className='text-lx font-semibold'>Shedule (4A)</h1>
    </Wrapper>
  );
};

export default Header;