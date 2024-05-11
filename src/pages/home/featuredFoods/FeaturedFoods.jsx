import { useNavigate } from "react-router-dom";
import Foods from "../../shared/foods/Foods";

const FeaturedFoods = () => {
  const navigate = useNavigate();

  return (
    <section className="my-5 md:my-8 lg:my-10">
      <h2 className="text-3xl font-bold text-center">Featured Foods</h2>
      <Foods path={'/featured_foods'}/>
      <div className="text-center mt-5">
        <button onClick={() => navigate('/available_food')} className="btn bg-green-light hover:bg-green-dark text-white px-8 font-bold">See all</button>
      </div>
    </section>
  );
};

export default FeaturedFoods;