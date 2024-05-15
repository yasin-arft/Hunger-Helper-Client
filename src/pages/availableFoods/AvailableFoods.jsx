import { useEffect, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import FoodCard from "../shared/foods/FoodCard";
import toast from "react-hot-toast";

const AvailableFoods = () => {
  const [foods, setFoods] = useState([]);
  const [twoColLayout, setTwoColLayout] = useState(false);
  const [sortOption, setSortOption] = useState('0');
  const [title, setTitle] = useState('All');

  useEffect(() => {
    axios.get(`/available_foods?sort=${sortOption}`)
      .then(res => setFoods(res.data));
  }, [sortOption]);

  const handleSearch = e => {
    e.preventDefault();
    const searchedFood = foods.find(food => food.foodName === e.target.search.value);
    if (searchedFood) {
      setFoods([searchedFood]);
      setTitle('Searched');
    } else {
      toast.error('No food matched');
    }
  }

  const handleSort = e => {
    const val = e.target.value;
    setSortOption(val);
    setTitle('Sorted');
  }

  const handleLayout = () => {
    setTwoColLayout(!twoColLayout);
  }

  return (
    <section className="my-5 md:my-8 lg:my-10">

      <Helmet>
        <title>Hunger Helper | Available Foods</title>
      </Helmet>

      <h2 className="text-2xl md:text-3xl font-bold mb-3 text-center"> {title} Available Foods</h2>
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
            <select onChange={handleSort} defaultValue={''} className="select select-bordered">
              <option value={''} disabled >Sort By Expiry Date</option>
              <option value={'1'}>Ascending</option>
              <option value={'-1'}>Descending</option>
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