import { useEffect, useState } from "react";
import Foods from "../shared/foods/Foods";
import axios from "axios";

const AvailableFoods = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    axios.get(`/foods`)
      .then(res => setFoods(res.data));
  }, []);

  const handleSearch = e => {
    e.preventDefault();
    console.log(e.targe.search.value);
  }

  return (
    <section className="my-5 md:my-8 lg:my-10">
      <h2 className="text-2xl md:text-3xl font-bold mb-3 text-center">Available Foods</h2>
      <div className="flex justify-between">
        <form onSubmit={handleSearch} className="flex gap-2">
          <label className="form-control w-full">
            <input
              type="text"
              name="search"
              placeholder="Search..."
              className="input input-bordered w-full"
            />
          </label>
          <input type="submit" value="Search" className="btn bg-blue-light text-white  hover:bg-blue-dark" />
        </form>
        <div>
          <label className="form-control">
            <select className="select select-bordered">
              <option disabled selected>Sort By Expiry Date</option>
              <option>Ascending</option>
              <option>Descending</option>
            </select>
          </label>
        </div>
      </div>
      <Foods data={foods} />
    </section>
  );
};

export default AvailableFoods;