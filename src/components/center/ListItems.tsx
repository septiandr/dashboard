import { IoIosArrowForward } from "react-icons/io";
import BadgeList from "./Listcard";

const dataObject:string[] = ["Macbook", "Motorcycle", "Bicyle", "Iphone"]

function ListItems() {
  return (
    <div className="bg-white rounded-lg w-[50%] py-2 px-5">
        <h2 className="font-bold">List of items to buy</h2>
        <div className="flex items-center gap-5 mt-4">
            <div>
                <h3 className="font-semibold">02:00</h3>
                <p className="text-[#a2a5ad] text-xs">Sat,August 12</p>
            </div>
            <div className="text-[#a2a5ad] flex items-center">
                <IoIosArrowForward/>
            </div>
            <div>
                <h3 className="font-semibold">05:00</h3>
                <p className="text-[#a2a5ad] text-xs" >Sat,September 12</p>
            </div>
        </div>
        <div className="flex justify-between mt-6">
            <div>
                <span className="text-[#a2a5ad]" >0/3 </span>
                <span className="font-bold text-sm">Shopping List</span>
            </div>
            <div className="flex items-center gap-1">
                <a className="font-bold text-black cursor-pointer text-xl">+</a>
                <p className="font-bold text-sm">Add an item</p>
            </div>
        </div>
        <div>
            <BadgeList data={dataObject}/>
        </div>
    </div>
  )
}

export default ListItems