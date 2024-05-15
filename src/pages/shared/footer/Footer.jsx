import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaGithubSquare } from "react-icons/fa";
import logo from '../../../assets/logo/hunger_helper_logo.png';

const Footer = () => {
  return (
    <div className="container mx-auto p-3 py-5 md:p-6 lg:p-10 text-white">
      <div className="space-y-3 md:space-y-0 md:grid md:grid-cols-3 w-full">
        <aside>
          <figure className='max-w-40'>
            <img src={logo} className="w-full h-auto" alt="logo" />
          </figure>
        </aside>
        <div>
          <h2 className="text-xl font-semibold mb-3 space-y-2">Contacts</h2>
          <p><span className="font-semibold">Phone: </span>+880 010111-121212</p>
          <p><span className="font-semibold">Email: </span>example@gmail.com</p>
          <address>
            <span className="font-semibold">Address: </span>
            13/8, sir Syed road, Mohammadpur., 1207, Dhaka,Bangladesh
          </address>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-3">Social links</h2>
          <div className="flex items-center gap-2 text-2xl">
            <a><FaFacebookSquare /></a>
            <a><FaInstagramSquare /></a>
            <a><FaTwitterSquare /></a>
            <a><FaGithubSquare /></a>
          </div>
        </div>
      </div>
      <hr className="text-white my-8 opacity-50" />
      <p className="text-center ">Copyright © 2024 - All right reserved</p>
    </div>
  );
};

export default Footer;