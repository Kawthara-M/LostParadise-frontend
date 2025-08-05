import { useRef } from "react"
import "./../map.css"

useRef
const Map = () => {
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
    const mapCoordinates = {
      x: event.target.getBoundingClientRect().x,
      y: event.target.getBoundingClientRect().y,
    }
    // console.log("mapCoordinates", mapCoordinates)
    const relativeClickCoordinates = {
      x: event.clientX - mapCoordinates.x,
      y: event.clientY - mapCoordinates.y,
    }
    // console.log("relativeClickCoordinates", relativeClickCoordinates)

    const clickInCells = {
      x: Math.ceil(relativeClickCoordinates.x / mapUnit),
      y: Math.ceil(relativeClickCoordinates.y / mapUnit),
    }
  } 
  return (
    <>
      <div className="mapContainer" style={styles.mapContainer}>
        <div
          className="map"
          style={styles.map}
          onClick={(event) => mapClick(event)}
        ></div>
      </div>
    </>
  )
}

export default Map
