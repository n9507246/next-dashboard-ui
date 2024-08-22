import Image from "next/image";
import { ReactNode } from 'react';

type HeaderType = {
    Area: ({ children }: { children: ReactNode }) => JSX.Element;
    Title: () => JSX.Element;
    ControlBtn: () => JSX.Element;
};

const Header: HeaderType = {
    Area: ({ children }: { children: ReactNode }) => <>
            <div className="flex items-center justify-between">
                {children}
            </div>
        </>,
    Title: () => <h1 className="text-xl font-semibold my-4">Events</h1>,
    ControlBtn: () => <Image src="/moreDark.png" alt="" width={20} height={20} />,  
};

export default Header;