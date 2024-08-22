import UserCard from '@/components/UserCart';
import { ReactNode } from 'react';
import { CountChart, AttendanceChart, FinanceChart } from '@/components/Charts/Charts';

import Events from '@/components/Events';
import { events } from '@/lib/fakeData';

const AdminPage = () => {
    return (
        <Content>
            <Main>
                <UserCardList/>
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

const UserCardList = () => {
    return <div className="flex gap-4 justify-between flex-wrap">
        <UserCard type='student'/>
        <UserCard type='teacher'/>
        <UserCard type='parent'/>
        <UserCard type='staff'/>
    </div>
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
