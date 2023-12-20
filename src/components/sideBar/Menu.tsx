import { RiHome6Line, RiNotification2Line  } from "react-icons/ri";
import { LuClock9,LuWallet, LuSettings  } from "react-icons/lu";
import { GoPeople } from "react-icons/go";
import { useState } from "react";



const data:JSX.Element[] =[<RiHome6Line/>, <RiNotification2Line/>, <LuClock9/>,<GoPeople/>, <LuWallet/>, <LuSettings/>]

function Menu() {
    const [Index, setIndex] = useState(0);
  return (
    <div className="flex-col gap-5 rounded-3xl bg-[#f7f6fc]">
        {data.map((item, index) => (
            <div 
                key={index} 
                className={`${index === Index ?'bg-[#5760e3] text-white':'bg-[#f7f6fc]'} rounded-full w-10 h-10 my-3 flex justify-center items-center`}
                onClick={()=>setIndex(index)}
                >{item}</div>
            ))}
    </div>
  )
}

export default Menu