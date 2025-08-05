import { useState, useEffect } from "react"
import Info from "./Info"
import axios from "axios"
import PanelMenu from "./PanelMenu"

const Panel = ({ x, y, hasGame, activeIndex, setShowPanel }) => {

  const deleteGame= async ()=> {
    await axios.delete(`http://localhost:3001/games/${activeIndex}`)
    setShowPanel(false)

  }
  const [view, setView] = useState("menu")
  useEffect(() => {
    setView("menu")
  }, [x, y])
  console.log(x, y)

  return (
    <div
      className="panel panel-absolute "
      onClick={(e) => e.stopPropagation()}
      style={{ top: `${y}px`, left: `${x}px` }}
    >
      {view === "menu" && <PanelMenu hasGame={hasGame} setView={setView} />}

      {view === "info" && (
        <>
          <Info activeIndex={activeIndex} />
        </>
      )}

      {view === "edit" && <></>}

      {view === "delete" && (
        <>
          <div className="container-item" onClick={()=>deleteGame()}>Sure</div>
          <div className="container-item" onClick={() => setView("menu")}>
            Cancel
          </div>
        </>
      )}

      {view === "add" && <></>}
    </div>
  )
}

export default Panel
