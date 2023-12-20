import Analytics from "./Analytics"
import LastTransaction from "./LastTransaction"

function MainBottom() {
  return (
    <div className="mt-10 flex">
        <LastTransaction/>
        <Analytics/>
    </div>
  )
}

export default MainBottom