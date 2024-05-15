import { Helmet } from "react-helmet-async";
import FeaturedFoods from "./featuredFoods/FeaturedFoods";
import Banner from "./banner/Banner";
import GetInTouch from "./getInTouch/GetInTouch";


const Home = () => {
  return (
    <div>

      <Helmet>
        <title>Hunger Helper | Home</title>
      </Helmet>

      <Banner />
      <FeaturedFoods />
      <GetInTouch />
    </div>
  );
};

export default Home;