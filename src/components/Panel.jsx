import { useState, useEffect } from "react"
import Info from "./Info"
import axios from "axios"
import Form from "./Form"
import PanelMenu from "./PanelMenu"

const Panel = ({ x, y, activeGame, setShowPanel, addPosition }) => {
  const [view, setView] = useState(activeGame ? "menu" : "add")
  const deleteGame = async () => {
    await axios.delete(`http://localhost:3001/games/${activeGame._id}`)
    setShowPanel(false)
  }
  useEffect(() => {
    setView(activeGame ? "menu" : "add")
  }, [x, y, activeGame])

  return (
    <div
      className="panel panel-absolute "
      onClick={(e) => e.stopPropagation()}
      style={{ top: `${y}px`, left: `${x}px` }}
    >
      {view === "menu" && (
        <PanelMenu activeGame={activeGame} setView={setView} />
      )}

      {view === "info" && (
        <>
          <Info activeGame={activeGame} />
        </>
      )}

      {view === "edit" && <></>}

      {view === "delete" && (
        <>
          <div className="container-item" onClick={() => deleteGame()}>
            Sure
          </div>
          <div className="container-item" onClick={() => setView("menu")}>
            Cancel
          </div>
        </>
      )}

      {view === "add" && (
        <>
          <Form addPosition={addPosition}></Form>
        </>
      )}
    </div>
  )
}

export default Panel
