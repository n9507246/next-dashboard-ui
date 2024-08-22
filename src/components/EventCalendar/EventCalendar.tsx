"use client";

import Image from "next/image";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import './style.css'
import { ReactNode } from 'react';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

// TEMPORARY
const events = [
  {
    id: 1,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const EventCalendar = () => {

  const [value, onChange] = useState<Value>(new Date());

  const Wrapper = ({ children }: { children: ReactNode }) => {
    return <div className="bg-white p-4 rounded-md">{children}</div>
  }  

  return (
    <Wrapper>
      <Calendar onChange={onChange} value={value} />
      <EventList/>
    </Wrapper>
  );
};

export default EventCalendar;




const EventList = () => {
    
    const Header = () => <>
        <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold my-4">Events</h1>
            <Image src="/moreDark.png" alt="" width={20} height={20} />
        </div> 
    </>

    const List = () => <>
        <div className="flex flex-col gap-4">
        {
            events.map(
                event => <div className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-mySky even:border-t-myPurple" key={event.id} >
                    <div className="flex items-center justify-between">
                    <h1 className="font-semibold text-gray-600">{event.title}</h1>
                    <span className="text-gray-300 text-xs">{event.time}</span>
                    </div>
                    <p className="mt-2 text-gray-400 text-sm">{event.description}</p>
                </div>
            )
        }
        </div>
    </>
    
    return <>
        <Header/>
        <List/>
    </>
}