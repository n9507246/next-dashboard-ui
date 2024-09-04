'use client'
import React, { useState } from 'react';
import { Wrapper } from '@/components/Wrapper';
import { Calendar, View, Views, momentLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import './style.css'

import moment from 'moment'
const localizer = momentLocalizer(moment)

type CalendarEvent = {
    title: string,    
    allDay: boolean,  
    start: Date,      
    end: Date         
};

interface PropsBigCalendar {
  className?: string
  events: Array<CalendarEvent>
}

const BigCalendar: React.FC<PropsBigCalendar> = ({className, events}) => {

    const [view, setView] = useState<View>(Views.WORK_WEEK);
    const handleOnChangeView = (selectedView: View) => { setView(selectedView); };
    console.log(events)
    return (
        <Wrapper className={className + ' h-full'}>
            <Calendar
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

export default BigCalendar;