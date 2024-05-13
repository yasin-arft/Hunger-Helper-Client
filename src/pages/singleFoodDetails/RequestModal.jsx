import PropTypes from "prop-types";

const RequestModal = ({ modalOpen, setModalOpen }) => {

  const handleClose = () => {
    setModalOpen(false);
  }

  return (
    <dialog open={modalOpen} className="absolute top-0 right-0 bottom-0 left-0 w-full h-full bg-[#0006]">
      <div className="flex items-center justify-center h-full">
        <div className="bg-white pt-10 p-4 md:p-7 lg:p-10 rounded-xl md:rounded-2xl lg:rounded-3xl relative">
          <button onClick={handleClose} className="btn btn-circle btn-sm btn-ghost absolute top-2 right-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
          <h2 className="text-2xl font-bold ">Request This Food</h2>
        </div>
      </div>
    </dialog>
  );
};

RequestModal.propTypes = {
  modalOpen: PropTypes.bool,
  setModalOpen: PropTypes.func
};

export default RequestModal;