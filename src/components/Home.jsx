import { useState, useEffect } from "react"
import axios from "axios"
import Map from "./Map"

const Home = () => {
  const [showPanel, setShowPanel] = useState(false)

  const [placedComponents, setPlacedComponents] = useState([])


  useEffect(() => {
    const getGames = async () => {
      const response = await axios.get(" http://localhost:3001/games")
      setPlacedComponents(response.data)
    }
    getGames()
  }, [])


  return (
    <>
      <Map
        placedComponents={placedComponents}
        setShowPanel={setShowPanel}
        showPanel={showPanel}
      />
    </>
  )
}

export default Home