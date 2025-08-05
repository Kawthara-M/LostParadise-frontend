import { useState, useEffect } from "react"
import Info from "./Info"
import PanelMenu from "./PanelMenu"

const Panel = ({ x, y, hasGame, gameIndex }) => {
  const [view, setView] = useState("menu")
  useEffect(() => {
    setView("menu")
  }, [x, y])
  console.log(x, y)

  return (
    <div
      className="panel panel-absolute "
      onClick={(e) => e.stopPropagation()}
      style={{ position: 'absolute', top: `${y}px`, left: `${x}px` }}
    >
      {view === "menu" && <PanelMenu hasGame={hasGame} setView={setView} />}

      {view === "info" && (
        <>
          <Info gameIndex={gameIndex} />
        </>
      )}

      {view === "edit" && <></>}

      {view === "delete" && <></>}

      {view === "add" && <></>}
    </div>
  )
}

export default Panel
