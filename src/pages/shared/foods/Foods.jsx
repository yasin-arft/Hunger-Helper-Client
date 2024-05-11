import axios from "axios";
import { useEffect, useState } from "react";
import FoodCard from "./FoodCard";
import PropTypes from 'prop-types';

const Foods = ({path}) => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    axios.get(path)
      .then(res => setFoods(res.data));
  }, [path]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-4 lg:mt-6">
      {
        foods.map(food => <FoodCard key={food._id} foodData={food} />)
      }
    </div>
  );
};

Foods.propTypes = {
  path: PropTypes.string
};

export default Foods;