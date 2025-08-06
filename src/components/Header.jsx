import { NavLink } from "react-router-dom"
import houseImg from "../assets/house.png"
import aboutImg from "../assets/about.png"
import searchImg from "../assets/search.png"

const Header = () => {
  return (
    <>
      <div className="header">
        <nav>
          <NavLink to="/games">
            <div className="iconContainer">
              <img src={houseImg} height="12rem" />
            </div>
          </NavLink>
          <NavLink to="/about">
            <div className="iconContainer">
              <img src={aboutImg} height="12rem" />
            </div>
          </NavLink>
        </nav>
        <div className="search"><img src={searchImg} height="12rem" className="searchIcon"/></div>
      </div>
    </>
  )
}

export default Header