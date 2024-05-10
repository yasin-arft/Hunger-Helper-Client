import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import logo from '../../assets/logo/hunger_helper_logo.png';
import { useState } from "react";

const SignIn = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [hidePassword, setHidePassword] = useState(true);

  // login handler
  const handleSignIn = data => {
    const email = data.email;
    const password = data.password;
    console.log(email, password);
  }

  return (
    <div className="hero my-10">
      <div className="hero-content flex-col lg:flex-row gap-10">
        <img src={logo} className="max-w-sm rounded-lg" />
        <div>
          <h2 className="text-3xl font-extrabold text-center">Sign In</h2>
          <form onSubmit={handleSubmit(handleSignIn)}>
            {/* email */}
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-base font-medium">Email</span>
              </div>
              <input
                {...register('email', {
                  required: 'Provide your email'
                })}
                type="email" placeholder="example@email.com" className="input input-bordered w-full" />
            </label>
            {errors.email && (<small className="text-error">{errors.email.message}</small>)}

            {/* password */}
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-base font-medium">Password</span>
              </div>
              <div className="relative">
                <input
                  {...register('password', {
                    required: 'Provide your password'
                  })}
                  type={hidePassword ? "password" : "text"}
                  placeholder="Your password" className="input input-bordered w-full" />
                <span onClick={() => setHidePassword(!hidePassword)} className="absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer p-1 w-6">
                  {
                    hidePassword ? <FaEye /> : <FaEyeSlash />
                  }
                </span>
              </div>
            </label>
            {errors.password && (<small className="text-error">{errors.password.message}</small>)}

            {/* form submit button */}
            <input type="submit" value="Sign In" className="btn bg-blue-light text-white w-full mt-3 hover:bg-blue-dark" />
          </form>

          {/* redirect to register */}
          <p className="mt-4 text-center">Don&#39;t have an account? Please <Link className="underline text-orange-light" to={'/sign_up'}>Sign Up</Link></p>

          <div className="divider">Or Sign in using</div>

          {/* social login options */}
          <div className="text-center">
            <button className="btn bg-green-light hover:bg-green-dark text-white mr-4">
              <FaGoogle className="text-xl" />
              Sign In with Google
            </button>
            <button className="btn bg-green-light hover:bg-green-dark text-white">
              <FaGithub className="text-xl" />
              Sign In with Github
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;