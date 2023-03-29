import React from "react";

const ContactUs = () => {
  return (
    <section className="mt-5 font-abc  w-auto  mb-20">
     

      <div className="flex flex-col justify-evenly mt-8 sm:flex-row pl-2">
        
        <div>
        <h1 className=" text-start text-3xl text-primary font-semibold   mb-2 mt-8">
        Got a <span className="text-secondary"> question?</span>
      </h1>
      <p className="text-center text-gray-400 mt-8">
        If you are planning or developing a product, our team will reach you.
      </p>
          <img
            src="https://i.ibb.co/rm66HcD/Contact-us.png"
            className="max-w-sm rounded-lg "
          />
        </div>
        <div className="text-start mt-20">
          <div className="grid grid-cols-1  gap-5">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered input-primary input-sm w-96"
            />
            <input
              type="text"
              name="email"
              placeholder="Email"
              className="input input-bordered input-primary input-sm  w-96"
            />

            <textarea
              className="textarea textarea-borderd textarea-primary w-96"
              name="message"
              placeholder="Your Message"
              rows={6}
            ></textarea>
          </div>
          <button className="bg-primary border-none mt-5 btn btn-sm uppercase text-white rounded-full py-1  pr-10 pl-10 mb-8">
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
