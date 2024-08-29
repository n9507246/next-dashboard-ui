
import { ReactNode } from 'react';
import { dataAttendanceChart, dataCountChart, dataFinanceChart, events } from '@/lib/fakeData';
import Events from '@/components/Events';
import UserCard from '@/components/UserCard';
import Charts from '@/components/Charts';


const AdminPage = () => {
    return (
        <Content>
            <Main>
                <UserCard.List>
                    <UserCard.Item type='student' />
                    <UserCard.Item type='teacher' />
                    <UserCard.Item type='parent' />
                    <UserCard.Item type='staff' />
                </UserCard.List>
                <Charts.Area className='flex flex-row flex-wrap'>
                    <Charts.Count className='mb-2 pr-2' data={dataCountChart}/>
                    <Charts.Attendance className='mb-2' data={dataAttendanceChart}/>
                    <Charts.Finance data={dataFinanceChart}/>
                </Charts.Area> 
            </Main>
            <Asside>
                <Events.Area>
                    <Events.Calendar/> 
                    <Events.List events={events}/>
                </Events.Area>
            </Asside>
        </Content>
    )
}

export default AdminPage;



const Content = ({ children }: { children: ReactNode }) => {
    return <div className=" p-4 flex gap-4 flex-col md:flex-row ">{children}</div>
}

const Main = ({ children }: { children: ReactNode }) => {
    return <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {children}
    </div>
}

const Asside = ({ children }: { children: ReactNode }) => {
    return <div className="w-full lg:w-1/3 flex flex-col gap-8">{children}</div>
}


