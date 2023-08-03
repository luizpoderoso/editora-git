import { NavLink } from "react-router-dom";

const Navigation = ({ texts, isModal, setIsModal }) => {
  const cssNavLink = (bool) => bool ? 'text-red-600' : 'transition ease-in-out hover:text-zinc-500'; // return the corret className to NavLink

  return (
    <nav className="w-full inline-flex items-center justify-center p-4 space-x-10 text-xl">
      <NavLink className={({ isActive }) => cssNavLink(isActive)} to='/'>{texts["nav-home"]}</NavLink>
      <h1 onClick={() => setIsModal(true)} className="select-none text-5xl transition duration-300 hover:text-zinc-600 cursor-pointer">{texts['title']}</h1>
      <NavLink className={({ isActive }) => cssNavLink(isActive)} to='/catalogo'>{texts["nav-catalog"]}</NavLink>
    </nav>
  );
};

export default Navigation;
