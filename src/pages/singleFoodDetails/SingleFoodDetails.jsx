import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import RequestModal from "./RequestModal";
import { useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";

const SingleFoodDetails = () => {
  const { id } = useParams();
  const [modalOpen, setModalOpen] = useState(false);
  const axiosSecure = useAxiosSecure();
  const { data: foodData, isPending } = useQuery({
    queryKey: ['single-food'],
    queryFn: async () => {
      const res = await axiosSecure.get(`/food/${id}`);
      return res.data
    }
  });

  if (isPending) return

  const { foodImage, foodName, foodQuantity, pickupLocation, donatorName, expiredDate } = foodData;

  const handleRequest = () => {
    setModalOpen(true);
  }


  return (
    <section className="my-5 md:my-8 lg:my-10">
      
      <Helmet>
        <title>Hunger Helper | Food Details</title>
      </Helmet>
      
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
              <button onClick={handleRequest} className="btn bg-blue-light hover:bg-blue-dark text-white w-full">Request</button>
            </div>
          </div>
        </div>
        <div className="md:w-1/3 text-center border rounded-2xl p-6">
          <h3 className="text-2xl md:text-3xl font-semibold mb-3">Donor Information</h3>
          <h4 className='font-semibold text-lg'>Name: {donatorName}</h4>
          <p className="font-medium">Pickup Location: {pickupLocation}</p>
        </div>
      </div>

      <RequestModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        foodData={foodData} />
    </section>
  );
};

export default SingleFoodDetails;