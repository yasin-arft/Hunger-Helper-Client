import { FaGoogle, FaGithub } from "react-icons/fa";

const SocialSignIns = () => {
  return (
    <div className="text-center flex gap-4 flex-col lg:flex-row">
      <button className="btn bg-green-light hover:bg-green-dark text-white">
        <FaGoogle className="text-xl" />
        Sign In with Google
      </button>
      <button className="btn bg-green-light hover:bg-green-dark text-white">
        <FaGithub className="text-xl" />
        Sign In with Github
      </button>
    </div>
  );
};

export default SocialSignIns;