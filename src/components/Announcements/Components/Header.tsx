import React from 'react';
import { Wrapper } from '@/components/Wrapper';

interface PropsHeader {
  className?: string
}

const Header: React.FC<PropsHeader> = ({className}) => {
  return (
    <Wrapper className={className + ' flex items-center justify-between'}>
        <h1 className="text-xl font-semibold">Announcements</h1>
        <span className="text-xs text-gray-400">View All</span>
    </Wrapper>
  );
};

export default Header;