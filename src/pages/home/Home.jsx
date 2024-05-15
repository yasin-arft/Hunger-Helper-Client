import { Helmet } from "react-helmet-async";
import FeaturedFoods from "./featuredFoods/FeaturedFoods";
import Banner from "./banner/Banner";


const Home = () => {
  return (
    <div>

      <Helmet>
        <title>Hunger Helper | Home</title>
      </Helmet>
      
      <Banner />
      <FeaturedFoods />
    </div>
  );
};

export default Home;