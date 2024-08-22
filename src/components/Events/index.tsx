import { ReactNode } from 'react';
import Calendar from './Calendar';
import List from './List';

export default {
    Area:( { children }: { children: ReactNode }  ) => {
        return <div className="bg-white p-4 rounded-md">{children}</div>
    },
    Calendar:()=> <Calendar/>,
    List: (props : any) => <List events={props.events} />
}
