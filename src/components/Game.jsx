const Game = ({
  game
}) => {
  return (
    <>
      {/* <div style={{`x:${game.coordinates.x}; y:${game.coordinates.y};`}}> */}
      <div style={{position: 'absolute', left: `${game.coordinates.x}px`, top: `${game.coordinates.y}px`}} >
        <h6>{game.description}</h6>
      {/*   <img src={} alt="Cat" width="100" /> */}
      </div>
    </>
  )
}
export default Game
