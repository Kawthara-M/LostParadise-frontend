const PanelMenu = ({ activeGame, setView }) => {
  return (
    <>
      {!activeGame ? (
        <div className="container-item" onClick={() => setView("Form")}>
          Add
        </div>
      ) : (
        <>
          <div className="container-item" onClick={() => setView("info")}>
            Info
          </div>
          <div className="container-item" onClick={() => setView("edit")}>
            Edit
          </div>
          <div className="container-item" onClick={() => setView("delete")}>
            Delete
          </div>
        </>
      )}
    </>
  )
}

export default PanelMenu
