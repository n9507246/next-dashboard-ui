"use client";

import { ReactNode } from 'react';
const Area = ({ children }: { children: ReactNode }) => {
  return <div className="flex flex-row flex-wrap">
      {children}
  </div>
}


// const Areaxx = () => {
//   return <>
//       <div className="flex flex-row flex-wrap">
//           <CountChart className="pr-2 mb-2" data={dataCountChart}/>
//           <AttendanceChart className='mb-2' data={dataAttendanceChart} />
//           <FinanceChart data={dataFinanceChart}/>
//       </div>
      
//   </>
// }

export default Area;
