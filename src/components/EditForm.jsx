import { useState } from "react"
import axios from "axios"
const EditForm = ({ activeGame,setShowPanel }) => {
  let initialState = {
    name: "",
    minimumAge: "",
    minimumHeight: "",
    description: "",
    capacity: "",
    image: null,
  }
  const [formData, setFormData] = useState(initialState)
  const handleChange = (e) => {
    console.log()
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const putData = new FormData()
    
    Object.keys(formData).forEach((key) => {
      putData.append(key, formData[key])
    })
    
    await axios.put(`http://localhost:3001/games/${activeGame._id}`, putData)
    setShowPanel(false)
  }

  const handleImageChange = (event) => {
    setFormData({ ...formData, image: event.target.files[0] })
    console.log( event.target.files[0])
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
          placeholder={activeGame.name}
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
          placeholder={activeGame.minimumAge}
          onChange={handleChange}
        />
        <br />

        <label htmlFor="minimumHeight">Minimum Height (cm):</label>
        <br />
        <input
          type="number"
          id="minimumHeight"
          name="minimumHeight"
          placeholder={activeGame.minimumHeight}
          onChange={handleChange}
        />
        <br />

        <label htmlFor="description">Description:</label>
        <br />
        <textarea
          id="description"
          name="description"
          placeholder={activeGame.description}
          onChange={handleChange}
          required
        ></textarea>
        <br />
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
export default EditForm
