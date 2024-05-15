
const GetInTouch = () => {
  return (
    <section className="max-w-xl mx-auto my-5 md:my-8 lg:my-10">
      <h2 className="text-3xl font-semibold text-center my-3">Get in Touch</h2>
      <div>
        <form>

          {/* email */}
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-base font-medium">Your email</span>
            </div>
            <input type="email" placeholder="Enter user email" className="input input-bordered w-full" />
          </label>

          {/* message */}
          <label className="form-control">
            <div className="label">
              <span className="label-text text-base font-medium">Write your message</span>
            </div>
            <textarea className="textarea textarea-bordered" placeholder="Write your message"></textarea>
          </label>

          {/* submit */}
          <input
            type="submit"
            value="Send"
            className="btn bg-green-light text-white w-full mt-3 hover:bg-green-dark" />
        </form>
      </div>
    </section>
  );
};

export default GetInTouch;