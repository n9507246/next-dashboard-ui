import React from 'react';
import { Wrapper } from '@/components/Wrapper';
import Item from './Item';

interface PropsList {
  className?: string
}

const List: React.FC<PropsList> = ({className}) => {
  return (
    <Wrapper className={className + ' flex flex-col gap-4 mt-4'}>
        <Item className='bg-mySkyLight rounded-md p-4'/>
        <Item className='bg-myPurpleLight rounded-md p-4'/>
        <Item className='bg-myYellowLight rounded-md p-4'/>
    </Wrapper>
  );
};

export default List;