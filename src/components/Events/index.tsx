import Calendar from './Calendar';
import List from './List';


import { ReactNode } from 'react';

interface WrapperProps {
    className?: string;
    children: ReactNode
}

const Wrapper: React.FC<WrapperProps> = ({ children, className }) => <div className={className}> {children} </div>


export default {
    Area: Wrapper,
    Calendar: Calendar,
    List: List
}
