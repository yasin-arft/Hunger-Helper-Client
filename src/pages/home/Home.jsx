import { Helmet } from "react-helmet-async";
import FeaturedFoods from "./featuredFoods/FeaturedFoods";


const Home = () => {
  return (
    <div>
      
      <Helmet>
        <title>Hunger Helper | Home</title>
      </Helmet>
      
      <FeaturedFoods />
    </div>
  );
};

export default Home;