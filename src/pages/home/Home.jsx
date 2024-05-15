import { Helmet } from "react-helmet-async";
import FeaturedFoods from "./featuredFoods/FeaturedFoods";
import Banner from "./banner/Banner";
import GetInTouch from "./getInTouch/GetInTouch";
import About from "./about/About";


const Home = () => {
  return (
    <div>

      <Helmet>
        <title>Hunger Helper | Home</title>
      </Helmet>

      <Banner />
      <About />
      <FeaturedFoods />
      <GetInTouch />
    </div>
  );
};

export default Home;