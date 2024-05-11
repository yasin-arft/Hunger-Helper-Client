import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";

const AddFood = () => {
  const { register, handleSubmit } = useForm();
  const { user } = useAuth();

  const handleAddFood = data => {
    console.log(data);
  }


  // foodName
  // "Banana"
  // foodImage
  // "https://i.ibb.co/vHJKCvC/spaghetti-bolognese.jpg"
  // foodQuantity
  // 10
  // pickupLocation
  // "456 Elm Street"
  // expiredDate
  // "2024-05-17"
  // additionalNotes
  // "Ripe bananas"
  // donatorName
  // "Jane Smith"
  // donatorEmail
  // "jane@example.com"
  // donatorImage
  // "https://i.ibb.co/n7xGsYb/images.jpg"
  // foodStatus
  // "requested"

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
          <input type="submit" value="Sign In" className="btn col-span-2 bg-blue-light text-white w-full mt-3 hover:bg-blue-dark" />
        </form>
      </div>
    </section>
  );
};

export default AddFood;