import PropTypes from 'prop-types';

const MyFoodRow = ({ food }) => {
  const { foodName, pickupLocation, expiredDate, requestDate } = food;

  return (
    <tr className='border-2'>
      <td>{foodName}</td>
      <td>{pickupLocation}</td>
      <td>{expiredDate}</td>
      <td>{requestDate}</td>
    </tr>
  );
};

MyFoodRow.propTypes = {
  food: PropTypes.object,
  refetch: PropTypes.func
};

export default MyFoodRow;