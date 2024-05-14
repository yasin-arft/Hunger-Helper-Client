import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AddFood = () => {
  const { register, handleSubmit } = useForm();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const handleAddFood = data => {
    axiosSecure.post('/foods', data)
      .then(res =>{
        if(res.data.insertedId){
          Swal.fire({
            title: 'Done!',
            text: 'Food added successfully',
            icon: 'success',
            confirmButtonText: 'Ok'
          })
        }
      });
  }

  return (
    <section className="my-5 md:my-8 lg:my-10">
      <h2 className="text-2xl md:text-3xl font-bold mb-3 text-center">Add a Food</h2>
      <div className="max-w-xl mx-auto">
        <form onSubmit={handleSubmit(handleAddFood)} className="grid grid-cols-2 gap-5">
          {/* name */}
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-base font-medium">Food name</span>
            </div>
            <input
              {...register('foodName')}
              type="text" placeholder="Write food name" className="input input-bordered w-full" required />
          </label>

          {/* image */}
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-base font-medium">Food image url</span>
            </div>
            <input
              {...register('foodImage')}
              type="text" placeholder="Enter image url" className="input input-bordered w-full" required />
          </label>

          {/* quantity */}
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-base font-medium">Food quantity</span>
            </div>
            <input
              {...register('foodQuantity')}
              type="number" placeholder="Quantity" className="input input-bordered w-full" required />
          </label>

          {/* pickup location */}
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-base font-medium">Pickup location</span>
            </div>
            <input
              {...register('pickupLocation')}
              type="text" placeholder="Provide pickup location" className="input input-bordered w-full" required />
          </label>

          {/* additional notes */}
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-base font-medium">Additional Notes</span>
            </div>
            <input
              {...register('additionalNotes')}
              type="text" placeholder="Write additional notes" className="input input-bordered w-full" required />
          </label>

          {/* expiry date */}
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-base font-medium">Expiry Date</span>
            </div>
            <input
              {...register('expiredDate')}
              type="date" className="input input-bordered w-full" required />
          </label>

          {/* status */}
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-base font-medium">Food status</span>
            </div>
            <input
              {...register('foodStatus')}
              type="text" defaultValue={'Available'} className="input input-bordered w-full" readOnly />
          </label>

          {/* donator name */}
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-base font-medium">Donator name</span>
            </div>
            <input
              {...register('donatorName')}
              type="text" defaultValue={user?.displayName} className="input input-bordered w-full" readOnly />
          </label>

          {/* donator email */}
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-base font-medium">Donator email</span>
            </div>
            <input
              {...register('donatorEmail')}
              type="text" defaultValue={user?.email} className="input input-bordered w-full" readOnly />
          </label>

          {/* donator image */}
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-base font-medium">Donator image</span>
            </div>
            <input
              {...register('donatorImage')}
              type="text" defaultValue={user?.photoURL} className="input input-bordered w-full" readOnly />
          </label>

          {/* form submit button */}
          <input type="submit" value="Add Food" className="btn col-span-2 bg-blue-light text-white w-full mt-3 hover:bg-blue-dark" />
        </form>
      </div>
    </section>
  );
};

export default AddFood;