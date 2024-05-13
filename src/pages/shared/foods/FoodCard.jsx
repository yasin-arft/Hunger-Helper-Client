import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const FoodCard = ({ foodData }) => {
  const navigate = useNavigate();
  const { _id, foodImage, foodName, additionalNotes, foodQuantity, pickupLocation, donatorImage, donatorName, expiredDate } = foodData;

  return (
    <div className="card border p-4">
      <figure>
        <img className='w-full h-auto max-h-60 rounded-md' src={foodImage} alt={`${foodName} image`} />
      </figure>
      <div className="card-body p-0 pt-5">
        <hr className='border border-dashed opacity-80' />
        <div className='flex gap-4 items-center'>
          <figure className='size-16 rounded-full'>
            <img src={donatorImage} alt="Donator image" />
          </figure>
          <h4 className='font-semibold text-lg'>{donatorName}</h4>
        </div>
        <h2 className="card-title">{foodName}</h2>
        <p>{additionalNotes}</p>
        <hr className='border border-dashed opacity-80' />
        <div className='flex flex-col font-medium space-y-1'>
          <span>Quantity: {foodQuantity}</span>
          <span>Pickup location: {pickupLocation}</span>
          <span>Expires At: {expiredDate}</span>
        </div>
        <hr className='border border-dashed opacity-80' />
        <div className="card-actions justify-end">
          <button onClick={() => navigate(`/food_details/${_id}`)} className="btn bg-blue-light hover:bg-blue-dark text-white">View Details</button>
        </div>
      </div>
    </div>
  );
};

FoodCard.propTypes = {
  foodData: PropTypes.object
};

export default FoodCard;