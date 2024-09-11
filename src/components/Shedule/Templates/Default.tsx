import Shedule from '@/components/Shedule/Components';

type SheduleProps ={
    title: string,
    events: any
}

export default ({title, events} : SheduleProps) => (
    <Shedule.Area className='h-full bg-white p-4 rounded-md'>
        <Shedule.Header>{title}</Shedule.Header>
        <Shedule.Calendar events={events}/>
    </Shedule.Area>
)
