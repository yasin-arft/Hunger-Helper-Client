import { useEffect, useState } from "react";
import Foods from "../shared/foods/Foods";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import FoodCard from "../shared/foods/FoodCard";

const AvailableFoods = () => {
  const [foods, setFoods] = useState([]);
  const [twoColLayout, setTwoColLayout] = useState(false);

  useEffect(() => {
    axios.get(`/foods`)
      .then(res => setFoods(res.data));
  }, []);

  const handleSearch = e => {
    e.preventDefault();
    console.log(e.targe.search.value);
  }

  const handleLayout = () => {
    setTwoColLayout(!twoColLayout);
  }
  console.log(twoColLayout);

  return (
    <section className="my-5 md:my-8 lg:my-10">

      <Helmet>
        <title>Hunger Helper | Available Foods</title>
      </Helmet>

      <h2 className="text-2xl md:text-3xl font-bold mb-3 text-center">Available Foods</h2>
      <div className="flex flex-col sm:flex-row gap-2 justify-between">
        <form onSubmit={handleSearch} className="flex gap-2">
          <label className="form-control w-full">
            <input
              type="text"
              name="search"
              placeholder="Search..."
              className="input input-bordered w-full"
            />
          </label>
          <input type="submit" value="Search" className="btn bg-green-light text-white  hover:bg-green-dark" />
        </form>
        <div>
          <label className="form-control">
            <select defaultValue={''} className="select select-bordered">
              <option value={''} disabled >Sort By Expiry Date</option>
              <option value={'Ascending'}>Ascending</option>
              <option value={'Descending'}>Descending</option>
            </select>
          </label>
        </div>
        <div className="hidden md:block">
          <button onClick={handleLayout} className="btn bg-green-light hover:bg-green-dark text-white">Change Layout</button>
        </div>
      </div>
      <div className={`grid grid-cols-1
      md:grid-cols-${twoColLayout ? 2 : 3} 
      gap-4 md:gap-6 mt-4 lg:mt-6`}>
        {
          foods.map(food => <FoodCard key={food._id} foodData={food} />)
        }
      </div>
    </section>
  );
};

export default AvailableFoods;