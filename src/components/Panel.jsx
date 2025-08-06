import { useState, useEffect } from "react"
import Info from "./Info"
import axios from "axios"
import Form from "./Form"
import PanelMenu from "./PanelMenu"
import EditForm from "./EditForm"

const Panel = ({ x, y, activeGame, setShowPanel, addPosition }) => {
  const [view, setView] = useState("menu")
  const deleteGame = async () => {
    const response = await axios.delete(`http://localhost:3001/games/${activeGame._id}`)
    console.log(response)
    setShowPanel(false)
  }


  useEffect(() => {
    setView("menu")
  }, [x, y])

  return (
    <div
      className="panel panel-absolute "
      style={{ top: `${y}px`, left: `${x}px` }}
      onClick={(e) => {
        e.stopPropagation()
      }}
    >
      <div
        onClick={(e) => {
          e.stopPropagation()
          setShowPanel(false)
        }}
      >
        x
      </div>

      {view === "menu" && (
        <PanelMenu activeGame={activeGame} setView={setView} />
      )}

      {view === "info" && (
        <>
          <Info activeGame={activeGame} />
        </>
      )}

      {view === "edit" && (
        <>
          <>
            <EditForm activeGame={activeGame} setShowPanel={setShowPanel} />
          </>
        </>
      )}

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
          <div className="container-item" onClick={() => setView("Form")}>
            Add
          </div>
        </>
      )}
      {view === "Form" && (
        <>
          <Form addPosition={addPosition} setShowPanel={setShowPanel} />
        </>
      )}
    </div>
  )
}

export default Panel
