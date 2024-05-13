import PropTypes from "prop-types";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";

const RequestModal = ({ modalOpen, setModalOpen, foodData }) => {
  const { _id, foodName, foodImage, donatorName, donatorEmail, pickupLocation, expiredDate, additionalNotes } = foodData;
  const { user } = useAuth();
  const date = new Date();
  const requestDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  const { register, handleSubmit } = useForm();

  const handleClose = () => {
    setModalOpen(false);
  }
  const handleConfirmRequest = data => {
    console.log(data.additionalNotes);
  }

  return (
    <dialog open={modalOpen} className="absolute top-0 left-0 w-full min-h-full bg-[#0006]">
      <div className="flex items-center justify-center min-h-full">
        <div className="bg-white pt-10 p-4 md:p-7 lg:p-10 rounded-xl md:rounded-2xl lg:rounded-3xl relative my-5">
          <button onClick={handleClose} className="btn btn-circle btn-sm btn-ghost absolute top-2 right-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
          <h2 className="text-2xl font-bold mb-2">Request This Food</h2>
          <div className="space-y-2">
            <figure className="h-20">
              <img src={foodImage} className="h-full w-auto mx-auto rounded-md" alt="Food Image" />
            </figure>
            <p><span className="font-semibold">Food Id: </span>{_id}</p>
            <p><span className="font-semibold">Food Name: </span>{foodName}</p>
            <p><span className="font-semibold">Donator Name: </span>{donatorName}</p>
            <p><span className="font-semibold">Donator Email: </span>{donatorEmail}</p>
            <p><span className="font-semibold">User Email: </span>{user?.email}</p>
            <p><span className="font-semibold">Pickup Location: </span>{pickupLocation}</p>
            <p><span className="font-semibold">Expiry Date: </span>{expiredDate}</p>
            <p><span className="font-semibold">Request Date: </span>{requestDate} </p>
            <form onSubmit={handleSubmit(handleConfirmRequest)}>
              <label className="form-control">
                <div className="label">
                  <span className="font-semibold">Additional Notes: </span>
                </div>
                <textarea 
                {...register('additionalNotes')} 
                className="textarea textarea-bordered h-24" 
                defaultValue={additionalNotes} 
                placeholder="Additional Notes"
                required></textarea>
              </label>
              <input type="submit" value="Confirm Request" className="btn bg-blue-light hover:bg-blue-dark text-white w-full mt-2" />
            </form>
          </div>
        </div>
      </div>
    </dialog>
  );
};

RequestModal.propTypes = {
  modalOpen: PropTypes.bool,
  setModalOpen: PropTypes.func,
  foodData: PropTypes.object
};

export default RequestModal;