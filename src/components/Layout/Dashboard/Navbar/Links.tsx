import Link from "next/link";
import Image from "next/image";
import { role } from "@/lib/data";



export default ({menuItems}:{menuItems:any}) =>  (
    <div className=" text-sm">
        {
            menuItems.map(
                (item : any) => <div className=" mt-4 flex-col gap-2" key={item.title}>
                    <span className=" hidden lg:block text-gray-400 font-light my-4">{item.title}</span>
                    {
                        item.items.map(
                          (item : any) => { 
                                if(item.visible.includes(role)) return(
                                    <Link href={item.href} key={item.label} className=" flex items-center justify-center lg:justify-start gap-4 text-gray-400 py-2 rounded-md hover:bg-mySkyLight md:pl-3">
                                        <Image src={item.icon} alt='' width={20} height={20} />
                                        <span className=" hidden lg:block">{item.label}</span>                                        
                                    </Link>
                                )
                            }
                        )
                    }
                </div>
            )
        }
    </div>
)
