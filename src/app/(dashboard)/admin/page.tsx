
import { ReactNode } from 'react';
import { CountChart, AttendanceChart, FinanceChart } from '@/components/Charts/Charts';

import Events from '@/components/Events';
import UserCard from '@/components/UserCard';

import { events } from '@/lib/fakeData';

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
                <Charts/>
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


const Charts = () => {
    return <>
        <div className="flex gap-4 flex-col lg:flex-row">
            <div className="w-full lg:w-1/3 h-[450px]">
                <CountChart />
            </div>
            <div className="w-full lg:w-2/3 h-[450px]">
                <AttendanceChart />
            </div>
        </div>
        <div className="w-full h-[500px]">
            <FinanceChart />
        </div>
    </>
}
