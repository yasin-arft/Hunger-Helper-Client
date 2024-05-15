import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/navbar/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "../pages/shared/footer/Footer";

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
      <footer className="bg-blue-dark">
        <Footer />
      </footer>
    </div>
  );
};

export default Root;