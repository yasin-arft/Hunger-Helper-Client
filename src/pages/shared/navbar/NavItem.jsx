import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';

const NavItem = ({ data }) => {
  return (
    <li className="font-semibold text-base hover:bg-base-300 px-4 py-2 rounded-md">
      <NavLink to={data.path}
        className={({ isActive }) => {
          return isActive ? 'text-green-light underline' : ''
        }}
      >{data.text}</NavLink>
    </li>
  );
};

NavItem.propTypes = {
  data: PropTypes.object
};

export default NavItem;