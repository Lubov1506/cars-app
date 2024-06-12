import { NavLink } from "react-router-dom"
import { buildLinkClass } from "../../helpers/addActiveClass"
import s from './Navigation.module.css'
const Navigation = () => {
  return (
      <nav className={s.nav_list}>
          <NavLink to='/' className={({isActive})=>buildLinkClass(isActive, s.active)}>Home</NavLink>
      <NavLink to='/catalog' className={({ isActive }) => buildLinkClass(isActive, s.active)}>Catalog</NavLink>
                <NavLink to='/favorites'className={({isActive})=>buildLinkClass(isActive, s.active)}>Favorites</NavLink>
    </nav>
  )
}

export default Navigation