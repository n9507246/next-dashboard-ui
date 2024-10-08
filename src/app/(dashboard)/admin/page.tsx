
import { dataAttendanceChart, dataCountChart, dataFinanceChart, events } from '@/lib/fakeData';

import {Wrapper as Content, Wrapper as Main, Wrapper as Asside } from '@/components/Wrapper';
import Events from '@/components/Events';
import UserCard from '@/components/UserCard';
import Charts from '@/components/Charts/Components';
import Announcements from '@/components/Announcements';


const AdminPage = () => {
    return (
        <Content className='p-4 flex gap-4 flex-col md:flex-row '>
            <Main className='w-full lg:w-2/3 flex flex-col gap-8'>
                <UserCard/>

                {/*
                    
                    я придумал структуру для компонентов и
                    пусть этот компонент выполняет роль образца

                    здесь можно выводить компоненты в развернутом виде

                */}
                
                <Charts.Area className='flex flex-row flex-wrap p-1'>
                    <Charts.Count className='w-full lg:w-1/3 h-[450px] mb-2 pr-2' data={dataCountChart}/>
                    <Charts.Attendance className=' w-full lg:w-2/3 h-[450px] mb-2' data={dataAttendanceChart}/>
                    <Charts.Finance className='w-full h-[500px]' data={dataFinanceChart}/>
                </Charts.Area>  
                

                {/*                 

                ...или выводить через шаблон внутри (здесь не совсем уместно )

                import Charts from '@/components/Charts';

                <Charts  
                    dataCountChart={dataCountChart}
                    dataAttendanceChart={dataAttendanceChart}
                    dataFinanceChart={dataFinanceChart}
                />
                
                */}

            </Main>
            <Asside className='w-full lg:w-1/3 flex flex-col gap-8'>
                <Events events={events}/>
                <Announcements/>
            </Asside>
        </Content>
    )
}

export default AdminPage;



