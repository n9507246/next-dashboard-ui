'use client'
import React, { useState } from 'react';
import { Wrapper } from '@/components/Wrapper';
import { Calendar as ReactBigCalendar, View, Views, momentLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import './style.css'

import moment from 'moment'
const localizer = momentLocalizer(moment)

export type CalendarEvent = {
    title: string,    
    allDay: boolean,  
    start: Date,      
    end: Date         
};

interface PropsBigCalendar {
  className?: string
  /** Массив данных для вывода в календарь*/
  events: Array<CalendarEvent>
}

const Calendar: React.FC<PropsBigCalendar> = ({className, events}) => {

    const [view, setView] = useState<View>(Views.WORK_WEEK);
    const handleOnChangeView = (selectedView: View) => { setView(selectedView); };
    
    return (
        <Wrapper className={className + ' h-full'}>
            <ReactBigCalendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                views={["work_week", "day"]}
                view={view}
                style={{ height: "98%" }}
                onView={handleOnChangeView}
                min={new Date(2025, 1, 0, 8, 0, 0)}
                max={new Date(2025, 1, 0, 17, 0, 0)}
            />
        </Wrapper>
    );
};

export default Calendar;