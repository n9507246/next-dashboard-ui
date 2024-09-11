import Events from '../Components'

export default ({events} : {events:any}) => (
    <Events.Area className='bg-white p-4 rounded-md'>
        <Events.Calendar/> 
        <Events.List events={events}/>
    </Events.Area>
)