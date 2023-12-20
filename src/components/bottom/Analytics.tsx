import { CiMenuKebab } from "react-icons/ci"
import Progressbar from "./Progressbar";

function Analytics() {

    return (
        <div className="rounded-lg w-[40%] bg-white">
            <div className="flex justify-between p-2">
                <h2 className="font-bold">Analytics</h2>
                <CiMenuKebab />
            </div>
            <div className="p-5 w-full">
                <Progressbar />
            </div>
        </div>
    )
}

export default Analytics