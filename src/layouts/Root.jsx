import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/navbar/Navbar";
import { Toaster } from "react-hot-toast";

const Root = () => {
  return (
    <div>
      <header className="bg-base-100 shadow-md rounded-lg">
        <Navbar />
      </header>
      <main className="container mx-auto px-2">
        <Toaster />
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
};

export default Root;