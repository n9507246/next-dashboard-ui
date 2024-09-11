import Charts from '@/components/Charts/Components';

type ChartProps = {
    dataCountChart : any,
    dataAttendanceChart: any, 
    dataFinanceChart: any
}

export default ({dataCountChart, dataAttendanceChart, dataFinanceChart } : ChartProps) => (
    
    <Charts.Area className='flex flex-row flex-wrap p-1'>
        <Charts.Count className='w-full lg:w-1/3 h-[450px] mb-2 pr-2' data={dataCountChart}/>
        <Charts.Attendance className=' w-full lg:w-2/3 h-[450px] mb-2' data={dataAttendanceChart}/>
        <Charts.Finance className='w-full h-[500px]' data={dataFinanceChart}/>
    </Charts.Area> 
)