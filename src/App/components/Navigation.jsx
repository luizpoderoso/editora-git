import { NavLink } from "react-router-dom";

const Navigation = () => {
  const texts = require('../../api/texts.json');
  const cssNavLink = (bool) => bool ? 'text-red-600' : 'transition ease-in-out hover:text-zinc-500'; // return the corret className to NavLink

  return (
    <nav className="w-full inline-flex items-center justify-center p-4 space-x-10 text-xl">
      <NavLink className={({ isActive }) => cssNavLink(isActive)} to='/'>Início</NavLink>
      <h1 className="select-none text-5xl">{texts.title}</h1>
      <NavLink className={({ isActive }) => cssNavLink(isActive)} to='/catalogo'>Catálogo</NavLink>
    </nav>
  );
};

export default Navigation;
