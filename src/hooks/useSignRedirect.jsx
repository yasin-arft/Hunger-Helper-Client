import { useLocation, useNavigate } from "react-router-dom";

const useSignRedirect = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const redirect = () => {
    navigate(location?.state || '/');
  }

  return redirect;
};

export default useSignRedirect;