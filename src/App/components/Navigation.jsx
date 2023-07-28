import { NavLink } from "react-router-dom";

const Navigation = () => (
  <nav>
    <NavLink className={({ isActive }) => isActive ? 'text-red-500' : 'transition ease-in-out hover:text-zinc-500'} to='/'>Início</NavLink>
    <NavLink className={({ isActive }) => isActive ? 'text-red-500' : 'transition ease-in-out hover:text-zinc-500'} to='/catalogo'>Catálogo</NavLink>
  </nav>
)

export default Navigation;
