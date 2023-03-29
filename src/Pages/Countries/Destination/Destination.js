import React from "react";
import { Link } from "react-router-dom";

const Destination = () => {
  return (
    <div>
      <h1 className="text-4xl text-primary text-start font-medium mt-16 mb-8 lg:ml-16">
        Pick a study <span className="text-secondary">Destination</span>{" "}
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-6 p-6 lg:ml-6">
        <div className="card w-80 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://i.insider.com/5f3424f2988ee31668198a09?width=1136&format=jpeg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Australia</h2>
            <p className="text-justify">Lorem ipsum dolor sit amet consectetur. Cursus lacinia volutpat urna senectus ac sit amet. Amet proin senectus et.</p>
          </div>
        </div>
        <div className="card w-80 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://c8.alamy.com/comp/GMFNRG/toronto-ontario-canada-city-hall-nathan-phillips-square-GMFNRG.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title"><Link to="/studyCanada">Canada</Link></h2>
            <p className="text-justify">Lorem ipsum dolor sit amet consectetur. Cursus lacinia volutpat urna senectus ac sit amet. Amet proin senectus et.</p>
          </div>
        </div>
        <div className="card w-80 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/10/2f/fe/united-kingdom.jpg?w=700&h=500&s=1"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">UK</h2>
            <p className="text-justify">Lorem ipsum dolor sit amet consectetur. Cursus lacinia volutpat urna senectus ac sit amet. Amet proin senectus et.</p>
          </div>
        </div>
        <div className="card w-80 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://www.worldfamousthings.com/wp-content/uploads/2022/04/Berlins-Brandenburg-Gate.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Germany</h2>
            <p className="text-justify">Lorem ipsum dolor sit amet consectetur. Cursus lacinia volutpat urna senectus ac sit amet. Amet proin senectus et.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
