import PropTypes from 'prop-types';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return
  }

  if (user) {
    return children
  }

  return (<Navigate to={'/sign_in'} state={location.pathname} />);
};

PrivateRoute.propTypes = {
  children: PropTypes.node
};

export default PrivateRoute;