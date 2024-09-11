import { calendarEvents } from '@/lib/data';
import {Wrapper as Content, Wrapper as Main, Wrapper as Asside } from '@/components/Wrapper';
import Shedule from '@/components/Shedule';
import Announcements from '@/components/Announcements/Components';


const TeacherPage = () => {
    return (
        <Content className='p-4 flex flex-1 gap-4 flex-col xl:flex-row '>
        <Main className='w-full xl:w-2/3 flex flex-col gap-8'>
            <Shedule title='Shedule (4A)' events={calendarEvents}/>
        </Main>
        <Asside className='w-full xl:w-1/3 flex flex-col gap-8'>
            <Announcements.Area className='bg-white p-4 rounded-md'>
                <Announcements.Header/>
                <Announcements.List/>
            </Announcements.Area>
        </Asside>
    </Content>
    )
}

export default TeacherPage;