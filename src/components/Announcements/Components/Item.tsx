import React from 'react';
import { Wrapper } from '@/components/Wrapper';

interface PropsItem {
  className?: string
}

const Item: React.FC<PropsItem> = ({className}) => {
  return (
    <Wrapper className={className}>
        <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem ipsum dolor sit</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
                2025-01-01
            </span>
        </div>
        <p className="text-sm text-gray-400 mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
            expedita. Rerum, quidem facilis?
        </p>
    </Wrapper>
  );
};

export default Item;