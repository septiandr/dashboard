import Chat from "./Chat"
import ListItems from "./ListItems"

function MainCenterComponent() {
  return (
    <div className="flex mt-10 gap-1">
        <ListItems/>
        <Chat/>
    </div>
  )
}

export default MainCenterComponent