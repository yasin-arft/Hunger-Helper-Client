import PropTypes from 'prop-types';
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const ManageFoodRow = ({ food }) => {
  const { _id, foodImage, foodName, additionalNotes, foodQuantity, pickupLocation, expiredDate } = food;
  const navigate = useNavigate();

  return (
    <tr className='border-2'>
      <td>
        <figure className="size-16 rounded-lg">
          <img src={foodImage} className='w-full h-auto' />
        </figure>
      </td>
      <td>
        <span className='font-semibold'>Name: {foodName}</span>
        <br />
        <span>{additionalNotes}</span>
      </td>
      <td>{foodQuantity}</td>
      <td>{expiredDate}</td>
      <td>{pickupLocation}</td>
      <th className='space-x-2'>
        <button onClick={() => navigate(`/update_food/${_id}`)} className="bg-yellow-400 p-2 rounded-lg">
          <FaEdit className='text-lg' />
        </button>
        <button className="bg-red-400 p-2 rounded-lg">
          <MdDeleteForever className='text-lg' />
        </button>
      </th>
    </tr>
  );
};

ManageFoodRow.propTypes = {
  food: PropTypes.object
};

export default ManageFoodRow;