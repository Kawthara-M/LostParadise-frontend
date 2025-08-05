import { useState, useEffect } from "react"
import Info from "./Info"
import axios from "axios"
import PanelMenu from "./PanelMenu"

const Panel = ({ x, y, hasGame, gameIndex }) => {

  const deleteGame= async (gameId)=> {
    await axios.delete(`http://localhost:3001/games/${gameIndex}`)

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
          <Info gameIndex={gameIndex} />
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
