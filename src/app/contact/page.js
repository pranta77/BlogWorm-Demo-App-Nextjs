const ContactPage = () => {
  return (
    <div>
      <h1 className="w-full text-center text-4xl font-semibold my-20">
        Contact
      </h1>
      <div>
        <p className=" lg:mx-64 max-sm:mx-10 my-3">Name</p>

        <div className="text-center">
          <input
            type="text"
            placeholder="Name"
            className="input input-bordered input-md lg:w-3/5 max-sm:w-4/5"
          />
        </div>
      </div>
      <div>
        <p className=" lg:mx-64 max-sm:mx-10 my-3">Email</p>

        <div className="text-center">
          <input
            type="text"
            placeholder="Email"
            className="input input-bordered input-md lg:w-3/5 max-sm:w-4/5"
          />
        </div>
      </div>
      <div>
        <p className=" lg:mx-64 max-sm:mx-10 my-3">Subject</p>

        <div className="text-center">
          <input
            type="text"
            placeholder="Subject"
            className="input input-bordered input-md w-3/5 max-sm:w-4/5"
          />
        </div>
      </div>
      <div>
        <p className="lg:mx-64 max-sm:mx-10 my-3">Message</p>

        <div className="text-center">
          <textarea
            placeholder="Message"
            className="textarea textarea-bordered textarea-lg lg:w-3/5 max-sm:w-4/5 h-48"
          ></textarea>
        </div>
        <div className="lg:mx-64 max-sm:mx-10 my-3 mb-16">
          <button className="btn btn-outline btn-accent text-base">
            Submit Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
