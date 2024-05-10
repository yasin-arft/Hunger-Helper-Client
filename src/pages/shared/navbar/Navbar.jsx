import NavItem from "./NavItem";
import logo from '../../../assets/logo/hunger_helper_logo.png';
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const user = false;
  const navigate = useNavigate();

  const navItemData = [
    { path: '/', text: 'Home' },
    { path: '/available_food', text: 'Available Food' },
  ]

  // private routes
  user && navItemData.push(
    { path: '/add_food', text: 'Add Food' },
    { path: '/manage_my_food', text: 'Manage My Foods' },
    { path: '/my_food_request', text: 'My Food Request' },
  );

  const navItems = <>
    {
      navItemData.map((item, idx) => <NavItem key={idx} data={item} />)
    }
  </>

  const userControls = <>
    {
      user ? <button className="btn btn-sm lg:btn-md bg-blue-light hover:bg-blue-dark text-white font-semibold text-base">Sing Out</button> :
        <>
          <button
            onClick={() => navigate('/sign_in')}
            className="btn btn-sm lg:btn-md bg-blue-light hover:bg-blue-dark text-white font-semibold text-base mr-3">Sign In</button>
          <button
            onClick={() => navigate('/sign_up')}
            className="btn btn-sm lg:btn-md bg-blue-light hover:bg-blue-dark text-white font-semibold text-base">Sign Up</button>
        </>
    }
  </>;

  return (
    <div className="navbar bg-base-100 shadow-md rounded-lg">
      <div className="navbar-start w-auto flex-1">
        <Link to={'/'}>
          <div className="flex gap-2 h-full items-center">
            <img src={logo} alt="logo" className="size-12" />
            <span className="text-xl font-bold">Hunger Helper</span>
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex mr-3">
        <ul className="menu-horizontal px-1">
          {navItems}
        </ul>
      </div>
      <div className="navbar-end items-center w-auto">
        <div className="hidden lg:block">
          {userControls}
        </div>
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <div className="dropdown-content right-0 ">
            <ul tabIndex={0} className="gap-4 menu-sm mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navItems}
            </ul>
            <div className="flex flex-col">
              {userControls}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;