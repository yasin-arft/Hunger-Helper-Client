import axios from "axios";
import { useState, useEffect } from "react";
import FeaturedFoodCard from "./FeaturedFoodCard";
import { useNavigate } from "react-router-dom";

const FeaturedFood = () => {
  const navigate = useNavigate();
  const [featuredFoods, setFeaturedFoods] = useState([]);

  useEffect(() => {
    axios.get('/featured_foods')
      .then(res => setFeaturedFoods(res.data));
  }, []);

  return (
    <section className="my-5 md:my-8 lg:my-10">
      <h2 className="text-3xl font-bold text-center">Featured Foods</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-4 lg:mt-6">
        {
          featuredFoods.map(food => <FeaturedFoodCard key={food._id} foodData={food} />)
        }
      </div>
      <div className="text-center mt-5">
      <button onClick={() => navigate('/available_food')} className="btn bg-green-light hover:bg-green-dark text-white px-8 font-bold">See all</button>
      </div>
    </section>
  );
};

export default FeaturedFood;