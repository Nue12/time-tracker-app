import Profile from "./component/Profile"
import TimeTrackTable from "./component/TimeTrackTable"
import { useState } from "react"

function App() {
  const [method, setMethod] = useState("weekly");
  return (
    <div className="mx-4 my-36 sm:flex mt-28 sm:my-6 lg:items-center justify-center">
      <Profile 
        method = {method}
        setMethod={setMethod}
      />
      <TimeTrackTable 
        method={method}
      />
    </div>
  )
}

export default App
