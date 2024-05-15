import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center h-screen">

      <Helmet>
        <title>Error</title>
      </Helmet>
      
      <figure className="w-1/3 mx-auto">
        <img src='https://i.ibb.co/5n72WBQ/eror404.jpg' alt="error image" />
      </figure>
      <button onClick={() => navigate('/')} className="btn bg-blue-light text-white hover:bg-blue-dark">Go back to home</button>
    </div>
  );
};

export default ErrorPage;
