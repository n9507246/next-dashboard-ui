
import { shedule, events } from '@/lib/fakeData';
import {Wrapper as Content, Wrapper as Main, Wrapper as Asside } from '@/components/Wrapper';
import Shedule from '@/components/Shedule';
import Events from '@/components/Events';
import Announcements from '@/components/Announcements';


const AdminPage = () => {
    return (
        <Content className='p-4 flex gap-4 flex-col xl:flex-row '>
            <Main className='w-full xl:w-2/3 flex flex-col gap-8'>
                <Shedule.Area className='h-full bg-white p-4 rounded-md'>
                    <Shedule.Header/>
                    <Shedule.Calendar events={shedule}/>
                </Shedule.Area>
            </Main>
            <Asside className='w-full xl:w-1/3 flex flex-col gap-8'>
                <Events.Area className='bg-white p-4 rounded-md'>
                    <Events.Calendar/> 
                    <Events.List events={events}/>
                </Events.Area>
                <Announcements.Area className='bg-white p-4 rounded-md'>
                    <Announcements.Header/>
                    <Announcements.List/>
                </Announcements.Area>
            </Asside>
        </Content>
    )
}

export default AdminPage;



