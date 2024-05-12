import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import ManageFoodRow from "./ManageFoodRow";

const ManageMyFoods = () => {
  const { user } = useAuth();
  const { data: myFoods, isPending } = useQuery({
    queryKey: ['my-foods'],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:5000/my_foods?donatorEmail=${user.email}`);
      return res.data
    }
  });

  if (isPending) return

  // console.log(myFoods);

  return (
    <section className="my-5 md:my-8 lg:my-10">
      <h2 className="text-2xl md:text-3xl font-bold mb-3 text-center">Manage My Foods</h2>
      <div className="max-w-full">
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full text-center">
            {/* head */}
            <thead className="border">
              <tr>
                <th>Image</th>
                <th>Details</th>
                <th>Quantity</th>
                <th>Expiry Date</th>
                <th>Pickup Location</th>
                <th>Controls</th>
              </tr>
            </thead>

            <tbody>
              {
                myFoods.map(food => <ManageFoodRow key={food._id} food={food} />)
              }
            </tbody>

          </table>
        </div>
      </div>
    </section>
  );
};

export default ManageMyFoods;