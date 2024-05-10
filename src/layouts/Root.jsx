import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/navbar/Navbar";

const Root = () => {
  return (
    <div>
      <header className="container mx-auto px-2">
        <Navbar />
      </header>
      <main className="container mx-auto px-2">
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
};

export default Root;