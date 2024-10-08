
import { calendarEvents } from '@/lib/data';
import {Wrapper as Content, Wrapper as Main, Wrapper as Asside } from '@/components/Wrapper';

import Announcements from '@/components/Announcements';
import Shedule from '@/components/Shedule';


const TeacherPage = () => {
    return (
        <Content className='p-4 flex flex-1 gap-4 flex-col xl:flex-row '>
        <Main className='w-full xl:w-2/3 flex flex-col gap-8'>
            <Shedule title='Shedule' events={calendarEvents}/>
        </Main>
        <Asside className='w-full xl:w-1/3 flex flex-col gap-8'>
            <Announcements/>
        </Asside>
    </Content>
    )
}

export default TeacherPage;