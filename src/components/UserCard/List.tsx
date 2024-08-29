import { ReactNode } from 'react';

const UserCardList = ({ children }: { children: ReactNode }) => {
    return <div className="flex gap-4 justify-between flex-wrap">
        {children}
    </div>
}

export default UserCardList;