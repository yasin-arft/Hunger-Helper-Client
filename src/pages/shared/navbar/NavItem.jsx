import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const NavItem = ({ data }) => {
  return <li className="font-medium text-base"><Link to={data.path}>{data.text}</Link></li>;
};

NavItem.propTypes = {
  data: PropTypes.object
};

export default NavItem;