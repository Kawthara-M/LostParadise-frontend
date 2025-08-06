import { act } from "react"

const Info = ({ activeGame }) => {
  if (activeGame){
    return (
      <>
        <div className="info">
          <h3 style={{ color: "rgb(92, 3, 3)" }}>{activeGame.name}</h3>
          <div className="info-part"
            style={{
              display: "flex",
              justifyContent: "space-between",
              
            }}
          >
            <h4>Minimum Age:</h4>
            <p>{activeGame.minimumAge}</p>
          </div>
          <div className="info-part"
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <h4>Minimum Height:</h4>
            <p>{activeGame.minimumHeight}</p>
          </div>
          <div className="info-part"
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <h4>Capacity:</h4>
            <p>{activeGame.capacity}</p>
          </div>
          <div className="info-part"
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          ></div>
          <div className="info-part">
          <h4>Description:</h4>
          <p>{activeGame.description}</p></div>
        </div>
      </>
    )
  }else {
    return <></>
  }
}
export default Info
