import Actions from "./Actions"
import Search from "./Search"
import { Wrapper as ControlArea, Wrapper} from "@/components/Wrapper"
import Title from "./Title"

//TEMP
const role = "admin"

const DefaultHeader = ({title} : {title: string}) => (
    <Wrapper className="flex items-center justify-between">
        <Title>{title}</Title>
        <ControlArea className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
            <Search/>
            <Actions.Area className="flex items-center gap-4 self-end">
                <Actions.Filter/>
                <Actions.Sort/>
                <Actions.Add/>
            </Actions.Area>
        </ControlArea>
    </Wrapper>
)

export default DefaultHeader;

