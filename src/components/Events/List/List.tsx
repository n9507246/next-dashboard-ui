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

const EventList = ({events}:{events:Array<EventData>}) => {
    return <>
        <Header.Area>
            <Header.Title/>
            <Header.ControlBtn/>
        </Header.Area>
        <Data events={events}/>
    </>
}

export default EventList;

