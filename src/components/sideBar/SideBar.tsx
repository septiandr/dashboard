import { GoCommentDiscussion } from "react-icons/go";
import { LuLogOut } from "react-icons/lu";
import Menu from "./Menu";
import Image from '../../assets/img.jpeg'

export default function SideBar() {
  return (
    <aside className='bg-white rounded-l-xl rounded-bl-2xl h-screen w-16 flex justify-around items-center flex-col pt-2 pb-20 fixed'>
      <div className="flex flex-col justify-center items-center ">
        <h2 className="font-bold text-xl">S.</h2>
        <div className="rounded-full bg-[#fedfc0] w-10 h-10 flex justify-center items-center mt-10">
          <GoCommentDiscussion />
        </div>
      </div>
      <div className="mt-20">
        <Menu />
      </div>
      <div className="">
        <div className="rounded-full w-10 h-10 flex justify-center items-center bg-[#f7f6fc]">
          <img src={Image} className="w-full h-full rounded-full object-cover" alt="Avatar" />
        </div>
        <div className="rounded-full w-10 h-10 flex justify-center items-center bg-[#f7f6fc]">
          <LuLogOut />
        </div>
      </div>
    </aside>
  )
}
