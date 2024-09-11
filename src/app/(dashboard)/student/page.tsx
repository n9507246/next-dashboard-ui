
import { events } from '@/lib/fakeData';

import { calendarEvents } from '@/lib/data';
import {Wrapper as Content, Wrapper as Main, Wrapper as Asside } from '@/components/Wrapper';

import Shedule from '@/components/Shedule';
import Events from '@/components/Events';
import Announcements from '@/components/Announcements';


const AdminPage = () => {
    return (
        <Content className='p-4 flex gap-4 flex-col xl:flex-row '>
            <Main className='w-full xl:w-2/3 flex flex-col gap-8'>
                <Shedule title='Shedule (4A)' events={calendarEvents}/>
            </Main>
            <Asside className='w-full xl:w-1/3 flex flex-col gap-8'>
                <Events events={events}/>
                <Announcements/>
            </Asside>
        </Content>
    )
}

export default AdminPage;



