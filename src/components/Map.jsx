import { useRef } from "react"
import "./../map.css"
import Game from "./Game"

useRef
const Map = ({
  placedComponents,
  handlePlaceClick,
  setActiveGame,
  setShowPanel,
  setAddPosition,
  setPanelPos,
}) => {
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

    // console.log("mapCoordinates", mapCoordinates)
    // console.log("relativeClickCoordinates", relativeClickCoordinates)

    const clickInCells = {
      x: Math.ceil(relativeClickCoordinates.x / mapUnit),
      y: Math.ceil(relativeClickCoordinates.y / mapUnit),
    }
    const clickedGame = placedComponents.some(
      (game) =>
        game.coordinates.x === clickInCells.x &&
        game.coordinates.y === clickInCells.y
    )

    if (clickedGame) {
      handlePlaceClick(event, clickedGame)
    } else {
      setActiveGame(null)
      setShowPanel(true)
      console.log(event.clientX)
      console.log(event.clientY)

      setAddPosition({
        x: event.clientX,
        y: event.clientY
      })
      setPanelPos({
        x: event.clientX,
        y: event.clientY
      })
      
    }
  }
  return (
    <>
      <div className="mapContainer" style={styles.mapContainer}>
        <div
          className="map"
          style={styles.map}
          onClick={(event) => mapClick(event)}
        >
          {placedComponents.map((game) => {
            const x = game.coordinates?.x
            const y = game.coordinates?.y

            return (
              <div
                key={game._id}
                style={{ top: `${y}px`, left: `${x}px` }}
                onClick={(e) => handlePlaceClick(e, game)}
              >
                <Game game={game} />
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Map
