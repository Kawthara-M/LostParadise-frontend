import { useRef, useState } from "react"
import "./../map.css"
import Game from "./Game"
import Panel from "./Panel"

useRef
const Map = ({ placedComponents, setShowPanel, showPanel }) => {
  // states to toggle panel
  const [panelPos, setPanelPos] = useState({ x: 0, y: 0 })
  const [activeGame, setActiveGame] = useState(null)
  const [addPosition, setAddPosition] = useState(null)

  const mapUnit = 50
  const height = 15
  const widht = 30

  const styles = {
    map: {
      width: `${mapUnit * widht}px`,
      height: `${mapUnit * height}px`,
      backgroundColor: "antiquewhite",
      backgroundSize: `${mapUnit}px ${mapUnit}px`,
      display: "grid",
      gridTemplateColumns: `repeat(${widht}, 1fr)`,
      gridTemplateRows: `repeat(${height}, 1fr)`,
    },
    mapContainer: {
      display: "flex",
      widht: "100%",
      height: "100%",
      justifyContent: "center",
      alignItems: "center",
    },
  }
  const handlePlaceClick = (event, game) => {
    event.stopPropagation() // Prevent the click from going up to the parents?
    let offsetX
    let offsetY
    const rect = event.target.getBoundingClientRect()

    if (rect.left + rect.width + rect.width * 0.05 > window.innerWidth) {
      console.log("reached here")
      offsetX = rect.x
      offsetY = rect.top + rect.height
    } else {
      offsetX = rect.left + rect.width
      offsetY = rect.top
    }

    setPanelPos({ x: offsetX, y: offsetY })
    console.log(game)
    setActiveGame(game)
    setShowPanel(true)
  }
  const mapClick = (event) => {
    console.log("Map clicked", event)

    const mapCoordinates = {
      x: event.target.getBoundingClientRect().x,
      y: event.target.getBoundingClientRect().y,
    }
    const relativeClickCoordinates = {
      x: event.clientX - mapCoordinates.x,
      y: event.clientY - mapCoordinates.y,
    }

    const clickInCells = {
      x: Math.ceil(relativeClickCoordinates.x / mapUnit),
      y: Math.ceil(relativeClickCoordinates.y / mapUnit),
    }

    console.log(clickInCells.x + " " + clickInCells.y)

    // if game clicked
    if (clickInCells.x === 1 && clickInCells.y === 1) {
      console.log("game clicked!")
      const clickedGame = placedComponents.filter((game) =>
        // game.coordinates.x === mapCoordinates.x &&
        // game.coordinates.y === mapCoordinates.y
        console.log(
          " game x: " +
            game.coordinates.x +
            " " +
            "(mapCoordinates.x : " +
            mapCoordinates.x
        )
      )
      // console.log(clickedGame)
      // handlePlaceClick(event, clickedGame)
    } else {
      setShowPanel(true)
      setActiveGame(null)
      setAddPosition(clickInCells)
    }

    /*  if (event.clientX+( mapUnit*2) > window.innerWidth) {
      console.log(event.clientX+( mapUnit*2) )
         setPanelPos({
        x: event.clientX-(event.clientX*.1),
        y: event.clientY,
      })
     
    } else {
      
    }*/

    setPanelPos({
      x: event.clientX,
      y: event.clientY,
    })
  }
  return (
    <>
      <div className="mapContainer" style={styles.mapContainer}>
        <div
          className="map"
          style={styles.map}
          onClick={(event) => mapClick(event)}
        >
          {/* {console.log(placedComponents)} */}
          {placedComponents.map((game) => {
            return (
              <>
                {/* <div key={game._id} onClick={(e) => handlePlaceClick(e, game)}> */}
                {/* this division is causing the game positioning to now work, but when I remove it it does the onlick is wont work */}
                <Game
                  game={game}
                  key={game._id}
                  onClick={(e) => handlePlaceClick(e, game)}
                />
                {/* </div>   */}
                {showPanel && (
                  <Panel
                    x={panelPos.x}
                    y={panelPos.y}
                    activeGame={activeGame}
                    setShowPanel={setShowPanel}
                    addPosition={addPosition}
                  />
                )}
              </>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Map
