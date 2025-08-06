import { useState } from "react"
import axios from "axios"
const Form = ({ addPosition,setShowPanel }) => {
  let initialState = {
    name: "",
    minimumAge: "",
    minimumHeight: "",
    description: "",
    capacity: "",
    x: "",
    y: "",
    width: "",
    height: "",
    image: null,
  }
  const [formData, setFormData] = useState(initialState)

  const handleChange = (e) => {
    console.log()
    setFormData({
      ...formData,
      x:addPosition.x,
      y:addPosition.y,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const postData = new FormData()
    Object.keys(formData).forEach((key) => {
      postData.append(key, formData[key])
    })
    const response = await axios.post(
      "http://localhost:3001/games/new",
      postData
    )
    setShowPanel(false)
}

  const handleImageChange = (event) => {
    setFormData({...formData, image:event.target.files[0]})
  }
  return (
    <div className="form">
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <label htmlFor="name">Name:</label>
        <br />
        <input
          type="text"
          id="name"
          name="name"
          onChange={handleChange}
          required
        />
        <br />

        <label htmlFor="minimumAge">Minimum Age:</label>
        <br />
        <input
          type="number"
          id="minimumAge"
          name="minimumAge"
          // value={formData.minimumAge}
          onChange={handleChange}
        />
        <br />

        <label htmlFor="minimumHeight">Minimum Height (cm):</label>
        <br />
        <input
          type="number"
          id="minimumHeight"
          name="minimumHeight"
          // value={formData.minimumHeight}
          onChange={handleChange}
        />
        <br />

        <label htmlFor="description">Description:</label>
        <br />
        <textarea
          id="description"
          name="description"
          // value={formData.description}
          onChange={handleChange}
          required
        ></textarea>
        <br />

        <label htmlFor="capacity">Capacity:</label>
        <input
          type="number"
          id="capacity"
          name="capacity"
          // value={formData.capacity}
          onChange={handleChange}
          required
        />

        <label htmlFor="width">Width:</label>
        <input
          type="number"
          id="width"
          name="width"
          // value={formData.width}
          onChange={handleChange}
        />

        <label htmlFor="height">Height:</label>
        <input
          type="number"
          id="height"
          name="height"
          // value={formData.height}
          onChange={handleChange}
        />

        <label htmlFor="image">Image Upload:</label>
        <input
          type="file"
          id="image"
          name="image"
          required
          onChange={handleImageChange}
        />

        <button type="submit">Submit Game</button>
      </form>
    </div>
  )
}

export default Form
