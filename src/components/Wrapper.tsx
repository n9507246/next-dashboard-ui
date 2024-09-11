import { ReactNode } from 'react';

interface WrapperProps {
    className?: string;
    children: ReactNode
}

export const Wrapper: React.FC<WrapperProps> = ({ children, className }) => <div className={className}> {children} </div>

export default Wrapper;