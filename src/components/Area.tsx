import { ReactNode } from 'react';

interface AreaProps {
    className?: string;
    children: ReactNode
}

export const Area: React.FC<AreaProps> = ({ children, className }) => <div className={className}> {children} </div>

export default Area;