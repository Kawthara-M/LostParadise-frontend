import { useState, useEffect } from "react"
import axios from "axios"
import Game from "./Game"
import Panel from "./Panel"
import Map from "./Map"

const Home = () => {
  // states to toggle panel
  const [panelPos, setPanelPos] = useState({ x: 0, y: 0 })
  const [showPanel, setShowPanel] = useState(false)

  const [placedComponents, setPlacedComponents] = useState([]) // static for now, but it should include the index for all cells in grid that contain a game component
  const [activeGame, setActiveGame] = useState(null)

  useEffect(() => {
    const getGames = async () => {
      const response = await axios.get(" http://localhost:3001/games")
      setPlacedComponents(response.data)
    }
    getGames()
  },[])

  const handlePlaceClick = (event, game) => {
    event.stopPropagation() // Prevent the click from going up to the parents?
    let offsetX
    let offsetY
    const rect = event.target.getBoundingClientRect()

    if (rect.left + rect.width + rect.width * 0.05 > window.innerWidth) {
      offsetX = rect.x
      offsetY = rect.top + rect.height
    } else {
      offsetX = rect.left + rect.width
      offsetY = rect.top
    }

    setPanelPos({ x: offsetX, y: offsetY })

    setActiveGame(game)

    setShowPanel(true)
  }

  const handleBodyClick = () => {
    setShowPanel(false)
  }

  return (
    <div onClick={handleBodyClick}>
      {<Map/>}
 

      {showPanel && (
        <Panel
          x={panelPos.x}
          y={panelPos.y}
          hasGame={activeGame
          }
          activeGame={
            activeGame
          }
          setShowPanel={setShowPanel}
        />
      )}
    </div>
  )
}

export default Home
