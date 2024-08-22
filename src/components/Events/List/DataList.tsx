import React from 'react';

type EventData = {
    id: number; 
    title: string;
    time: string;
    description: string;
};

const Event: React.FC<EventData> = ({ id, title, time, description }) => (
    <div className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-mySky even:border-t-myPurple">
        <div className="flex items-center justify-between">
            <h1 className="font-semibold text-gray-600">{title}</h1>
            <span className="text-gray-300 text-xs">{time}</span>
        </div>
        <p className="mt-2 text-gray-400 text-sm">{description}</p>
    </div>
);

type ListProps = {
    events: EventData[]; 
};

const List: React.FC<ListProps> = ({ events }) => (
    <div className="flex flex-col gap-4">
        {events.map((event) => (
            <Event
                key={event.id}
                {...event}
            />
        ))}
    </div>
);

export default List;
