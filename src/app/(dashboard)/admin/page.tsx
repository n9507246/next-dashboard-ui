import UserCard from '@/components/UserCart';
import { ReactNode } from 'react';
import { CountChart } from '@/components/Charts/Charts';


const AdminPage = () => {
    return (
        <Wrapper>
            <Left>
                <UserCardList/>
                <Charts/>
            </Left>
            <Right>
                <div>rightSide</div>
            </Right>
        </Wrapper>
    )
}

export default AdminPage;

const Wrapper = ({ children }: { children: ReactNode }) => {
    return <div className=" p-4 flex gap-4 flex-col md:flex-row ">{children}</div>
}

const Left = ({ children }: { children: ReactNode }) => {
    return <div className="w-full lg:w-2/3">
        {children}
    </div>
}

const Right = ({ children }: { children: ReactNode }) => {
    return <div className="w-full lg:w-1/3">{children}</div>
}

const UserCardList = () => {
    return <div className="flex gap-4 justify-between flex-wrap">
        <UserCard type='student'/>
        <UserCard type='teacher'/>
        <UserCard type='parent'/>
        <UserCard type='staff'/>
    </div>
}

const Charts = () => {
    return <>
        <div className="flex gap-4 flex-col lg:flex-row">
            <div className="w-full lg:w-1/3 h-[450px]">
                {/* <CountChart /> */}
            </div>
            <div className="w-full lg:w-2/3 h-[450px]">
                {/* <AttendanceChart /> */}
            </div>
        </div>
        <div className="w-full h-[500px]">
            {/* <FinanceChart /> */}
        </div>
    </>
}
