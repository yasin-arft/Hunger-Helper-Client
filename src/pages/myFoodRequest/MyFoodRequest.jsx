import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import MyFoodRow from "./MyFoodRow";

const MyFoodRequest = () => {
  const { user } = useAuth();
  const { data: myFoodRequests, isPending } = useQuery({
    queryKey: ['my-food-requests'],
    queryFn: async () => {
      const res = await axios.get(`/requested_foods?userEmail=${user.email}`);
      return res.data
    }
  });

  if (isPending) return

  console.log(myFoodRequests);
  return (
    <section className="my-5 md:my-8 lg:my-10">
      <h2 className="text-2xl md:text-3xl font-bold mb-3 text-center">My Food Requests</h2>
      <div className="max-w-full">
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full text-center">
            {/* head */}
            <thead className="border">
              <tr>
                <th>Donor Name</th>
                <th>Pickup Location</th>
                <th>Expiry Date</th>
                <th>Request Date</th>
              </tr>
            </thead>

            <tbody>
              {
                myFoodRequests.map(food => <MyFoodRow
                  key={food._id}
                  food={food} />)
              }
            </tbody>

          </table>
        </div>
      </div>
    </section>
  );
};

export default MyFoodRequest;