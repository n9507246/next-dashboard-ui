"use client";

import Header from './HeaderList';
import Data from './DataList';
import './style.css'

type EventData = {
    id: number; 
    title: string;
    time: string;
    description: string;
};

interface PropsEventList {
    events: Array<EventData>
}

const EventList: React.FC<PropsEventList> = ({events}) => {
    return <>
        <Header.Area>
            <Header.Title/>
            <Header.ControlBtn/>
        </Header.Area>
        <Data events={events}/>
    </>
}

export default EventList;

