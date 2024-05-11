import { useLoaderData } from "react-router-dom";

const SingleFoodDetails = () => {
  const foodData = useLoaderData();
  const { foodImage, foodName, foodQuantity, pickupLocation, donatorName, expiredDate } = foodData;

  return (
    <section className="my-5 md:my-8 lg:my-10">
      <h2 className="text-2xl md:text-3xl font-bold mb-3 text-center">Food Details</h2>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-2/3 card md:card-side border">
          <figure className="md:w-1/2">
            <img src={foodImage} alt={`${foodName} image`} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{foodName}</h2>
            <div className='flex flex-col font-medium space-y-1 flex-1'>
              <span>Quantity: {foodQuantity}</span>
              <span>Expires At: {expiredDate}</span>
            </div>
            <div className="card-actions">
              <button className="btn bg-blue-light hover:bg-blue-dark text-white w-full">Request</button>
            </div>
          </div>
        </div>
        <div className="md:w-1/3 text-center border rounded-2xl p-6">
          <h3 className="text-2xl md:text-3xl font-semibold mb-3">Donor Information</h3>
          <h4 className='font-semibold text-lg'>Name: {donatorName}</h4>
          <p className="font-medium">Pickup Location: {pickupLocation}</p>
        </div>
      </div>
    </section>
  );
};

export default SingleFoodDetails;