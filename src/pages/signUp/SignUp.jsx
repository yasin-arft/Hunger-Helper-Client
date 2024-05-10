import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import logo from '../../assets/logo/hunger_helper_logo.png';
import { useState } from "react";
import SocialSignIns from "../shared/socialSingIns/SocialSignIns";

const SignUp = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [hidePassword, setHidePassword] = useState(true);

  // login handler
  const handleSignUp = data => {
    const name = data.name;
    const email = data.email;
    const password = data.password;
    const photo = data.photo;
    console.log(name, email, password, photo);
  }
  return (
    <div className="hero my-5 md:my-8 lg:my-10">
      <div className="hero-content flex-col md:flex-row gap-5 md:gap-10">
        <img src={logo} className="w-1/2 md:max-w-sm rounded-lg" />
        <div>
          <h2 className="text-3xl font-extrabold text-center">Sign Up</h2>
          <form onSubmit={handleSubmit(handleSignUp)}>
            {/* name */}
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-base font-medium">Name</span>
              </div>
              <input
                {...register('name', {
                  required: 'Name is required'
                })}
                type="text"
                placeholder="Your name"
                className="input input-bordered w-full"
              />
            </label>
            {errors.name && (<small className="text-error">{errors.name.message}</small>)}

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
                    required: 'Provide your password',
                    pattern: {
                      value: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
                      message: 'Password must contain an uppercase letter, lowercase letter and 6 characters'
                    }
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
            <div className="max-w-full">
              {errors.password && (<small className="text-error text-wrap">{errors.password.message}</small>)}
            </div>

            {/* photo url */}
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-base font-medium">Photo Url</span>
              </div>
              <input
                {...register('photo', {
                  required: 'Photo url is required'
                })}
                type="text"
                placeholder="Paste your photo url"
                className="input input-bordered w-full" />
            </label>
            {errors.photo && (<small className="text-error">{errors.photo.message}</small>)}

            {/* form submit button */}
            <input type="submit" value="Sign Up" className="btn bg-blue-light text-white w-full mt-3 hover:bg-blue-dark" />
          </form>

          {/* redirect to sign in */}
          <p className="mt-4 text-center">Already have an account? Please <Link className="underline text-orange-light" to={'/sign_in'}>Sign In</Link></p>

          <div className="divider">Or Sign in using</div>

          {/* social login options */}
          <SocialSignIns />
        </div>
      </div>
    </div>
  );
};

export default SignUp;