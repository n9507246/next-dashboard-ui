import React from 'react';
import { Wrapper } from '@/components/Wrapper';

interface PropsHeader {
  className?: string,
  children: string
}

const Header: React.FC<PropsHeader> = ({className, children}) => {
  return (
    <Wrapper className={className}>
      <h1 className='text-lx font-semibold'>{children}</h1>
    </Wrapper>
  );
};

export default Header;