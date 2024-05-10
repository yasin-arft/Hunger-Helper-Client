import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <header>
        <h1 className="text-3xl font-bold underline">
          This is root
        </h1>
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
};

export default Root;