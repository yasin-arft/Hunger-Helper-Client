import FoodCard from "./FoodCard";
import PropTypes from 'prop-types';

const Foods = ({ data }) => {

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-4 lg:mt-6">
      {
        data.map(food => <FoodCard key={food._id} foodData={food} />)
      }
    </div>
  );
};

Foods.propTypes = {
  data: PropTypes.array
};

export default Foods;