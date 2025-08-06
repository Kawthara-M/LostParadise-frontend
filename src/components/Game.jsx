import globals from "./../globals.json"
const Game = ({ game,onClick }) => {
  const backendBaseUrl = "http://localhost:3001"
  {
    console.log(game)
  }
  return (
    
      <img
        src={`${backendBaseUrl}/uploadedImages/${game.image}`}
        style={{
          // position: "absolute",
          gridColumn: `${game.coordinates.x} / ${
            game.dimentions.height + game.coordinates.x
          }`,
          gridRow: `${game.coordinates.y} / ${
            game.dimentions.width + game.coordinates.y
          }`,
          height: `${game.dimentions.height * globals.mapUnit}px`,
          width: `${game.dimentions.width * globals.mapUnit}px`,
        }}
        alt={game.name + " image"}
        onClick={onClick}
      />
    
  )
}
export default Game
