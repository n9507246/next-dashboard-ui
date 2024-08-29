import CountChart from "./Count";
import AttendanceChart from "./Attendance/AttendanceChart";
import FinanceChart from "./Finance";

import { ReactNode } from 'react';

interface WrapperProps {
    className?: string;
    children: ReactNode
}

const Wrapper: React.FC<WrapperProps> = ({ children, className }) => <div className={className}> {children} </div>

export default {
    Area: Wrapper,
    Attendance: AttendanceChart,
    Count: CountChart,
    Finance:  FinanceChart
}

