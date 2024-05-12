import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';

const NavItem = ({ data }) => {
  return (
    <li>
      <NavLink to={data.path}
        className={({ isActive }) => {
          return isActive ? 'text-green-light underline font-semibold text-base hover:bg-base-300 px-4 py-2 rounded-md' : 'font-semibold text-base hover:bg-base-300 px-4 py-2 rounded-md'
        }}
      >{data.text}</NavLink>
    </li>
  );
};

NavItem.propTypes = {
  data: PropTypes.object
};

export default NavItem;