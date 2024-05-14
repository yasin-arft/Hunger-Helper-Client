import PropTypes from 'prop-types';
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const ManageFoodRow = ({ food, refetch }) => {
  const { _id, foodImage, foodName, additionalNotes, foodQuantity, pickupLocation, expiredDate } = food;
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/food/${id}`)
          .then(res => {
            if (res.data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your food item has been deleted.",
                icon: "success"
              });
              refetch();
            }
          });
      }
    });
  }

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
        <button onClick={() => handleDelete(_id)} className="bg-red-400 p-2 rounded-lg">
          <MdDeleteForever className='text-lg' />
        </button>
      </th>
    </tr>
  );
};

ManageFoodRow.propTypes = {
  food: PropTypes.object,
  refetch: PropTypes.func
};

export default ManageFoodRow;