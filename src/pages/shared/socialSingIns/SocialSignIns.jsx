import { FaGoogle, FaGithub } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const SocialSignIns = () => {
  const { googleSignIn, githubSignIn, setLoading } = useAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(() => {
        setLoading(false);
        navigate('/');
        toast.success('Signed in successfully!');
      })
      .catch(() => {
        setLoading(false);
        toast.error('An unexpected error happened!');
      })
  }
  const handleGithubSignIn = () => {
    githubSignIn()
      .then(() => {
        setLoading(false);
        navigate('/');
        toast.success('Signed in successfully!');
      })
      .catch(() => {
        setLoading(false);
        toast.error('An unexpected error happened!');
      })
  }

  return (
    <div className="text-center flex gap-4 flex-col lg:flex-row">
      <button onClick={handleGoogleSignIn} className="btn bg-green-light hover:bg-green-dark text-white">
        <FaGoogle className="text-xl" />
        Sign In with Google
      </button>
      <button onClick={handleGithubSignIn} className="btn bg-green-light hover:bg-green-dark text-white">
        <FaGithub className="text-xl" />
        Sign In with Github
      </button>
    </div>
  );
};

export default SocialSignIns;