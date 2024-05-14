import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const axiosSecure = axios.create({
  // baseURL: import.meta.env.VITE_ServerBaseUrl,
  baseURL: 'http://localhost:5000',
  withCredentials: true
});

const useAxiosSecure = () => {
  const { signOutUser, setLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    axiosSecure.interceptors.response.use(res => {
      return res
    }, err => {
      if (err.response.status === 401 || err.response.status === 403) {
        signOutUser()
          .then(() => {
            toast.error('An unknown error happen. Please login again!');
            setLoading(false);
            navigate('/sign_in');
          })
          .catch(() => {
            setLoading(false);
            navigate('/sign_in');
            toast.error('An unknown error happen. Please login again!');
          })
      }
    })
  }, []);

  return axiosSecure;
};

export default useAxiosSecure;