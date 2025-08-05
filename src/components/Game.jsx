const Game = ({ game }) => {
  const backendBaseUrl = "http://localhost:3001"
  return (
    <>
      {/* <div style={{`x:${game.coordinates.x}; y:${game.coordinates.y};`}}> */}
      <div
        
      >
        <img
          src={`${backendBaseUrl}/uploadedImages/${game.image}`} style={{
          position: "absolute",
          left: `${game.coordinates.x}px`,
          top: `${game.coordinates.y}px`,
          height:`${game.dimentions.height}px`,
          width:`${game.dimentions.width}px`
        }}
          alt={game.name + " image"}
        />
      </div>
    </>
  )
}
export default Game
