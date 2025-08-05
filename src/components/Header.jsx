import { NavLink } from "react-router-dom"

const Header= () => {
return(
  <div>
  <header>
    <h1>LostParadise</h1>
  
  <nav>
  <ul>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/about">About</NavLink></li>
  </ul>
</nav>

   

  </header>
  
 </div>
)
}

export default Header 