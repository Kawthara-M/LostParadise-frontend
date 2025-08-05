import { useState } from "react"
import { newRecored } from "../services/GameForm"
// import { useNavigate } from 'react-router-dom'

const New = () => {
  // let navigate=useNavigate()
  const defaultValue = {
    name: "",
    minimumAge: "",
    minimumHeight: "",
    description: "",
    capacity: "",
    coordinates: "",
    dimentions: "",
    image: "",
  }
  const [payload, setPayload] = useState(defaultValue)

  const handleChange = async (e) => {
    setPayload({ ...payload, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    await newRecored({
      name: payload.name,
      minimumAge: payload.minimumAge,
      minimumHeight: payload.minimumHeight,
      description: payload.description,
      capacity: payload.capacity,
      coordinates: payload.coordinates,
      dimentions: payload.dimentions,
      image: payload.image,
    })
    // navigate('/index')
  }

  return (
    <form className="new" onSubmit={handleSubmit} encType="multipart/form-data">
      <label htmlFor="name">name</label>
      <input
        type="text"
        id="name"
        name="name"
        required
        onChange={handleChange}
      />

      <label htmlFor="minimumAge">minimumAge</label>
      <input
        type="text"
        id="minimumAge"
        name="minimumAge"
        onChange={handleChange}
      />

      <label htmlFor="minimumHeight">minimumHeight</label>
      <input
        type="text"
        id="minimumHeight"
        name="minimumHeight"
        onChange={handleChange}
      />

      <label htmlFor="description">description</label>
      <input
        type="text"
        id="description"
        name="description"
        required
        onChange={handleChange}
      />

      <label htmlFor="capacity">capacity</label>
      <input
        type="text"
        id="capacity"
        name="capacity"
        required
        onChange={handleChange}
      />

      <label htmlFor="coordinates">coordinates</label>
      <input
        type="text"
        id="coordinates"
        name="coordinates"
        onChange={handleChange}
      />

      <label htmlFor="dimentions">dimentions</label>
      <input
        type="text"
        id="dimentions"
        name="dimentions"
        onChange={handleChange}
      />

      {/* <label htmlFor="image">image</label>
            <input type="file" id="image" name="image" onChange={handleChange} /> */}

      <button>submit</button>
    </form>
  )
}
export default New
