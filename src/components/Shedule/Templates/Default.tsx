import Shedule from '@/components/Shedule/Components';
import { CalendarEvent } from '../Components/Calendar/Calendar';

/** Свойства шаблона */
type SheduleProps ={
    /** Заголовок шаблона */
    title: string,
    /** Массив данных для вывода в календарь*/
    events: CalendarEvent[]
}

/**
 * Расписание(календарь), дефолтный шаблон.
 */
export default (props: SheduleProps) => (
    <Shedule.Area className='h-full bg-white p-4 rounded-md'>
        <Shedule.Header>{props.title}</Shedule.Header>
        <Shedule.Calendar events={props.events}/>
    </Shedule.Area>
)
