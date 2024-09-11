import { ReactNode } from "react";

type TitleProps = {
    children : ReactNode,
    className? : string
}

export default ({children, className = ''} : TitleProps) => (
    <h1 className={'hidden md:block text-lg font-semibold' + ' ' + className}>{children}</h1>
)