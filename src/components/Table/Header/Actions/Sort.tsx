import Image from "next/image"

export default () =>(
    <button className="w-8 h-8 flex items-center justify-center rounded-full bg-myYellow">
        <Image src="/sort.png" alt="" width={14} height={14} />
    </button>
)