import MainChart from "../chart/MainChart"
import card from '../../assets/card.png'
import MainCenterComponent from "../center/MainCenterComponent"
import MainBottom from "../bottom/MainBottom"

function Dashboard() {
    return (
        <div className="py-10 pl-36 pr-20 w-[70%]">
            <div>
                <h2 className="font-bold text-3xl">Hello, Jhon .D</h2>
                <p className="text-lg">View and control your finances here!</p>
            </div>
            <div className="flex items-center gap-5 mt-10 w-full">
                <MainChart />
                <div className="w-[40%] h-full">
                    <img src={card} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
            </div>
            <div>
                <MainCenterComponent />
            </div>
            <div>
                <MainBottom />
            </div>
        </div>
    )
}

export default Dashboard