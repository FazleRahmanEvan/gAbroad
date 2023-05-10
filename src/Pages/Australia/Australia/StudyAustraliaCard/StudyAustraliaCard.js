import React from "react";
import { Link } from "react-router-dom";

const StudyCanadaCard = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-20 mb-20  lg:p-12 lg:ml-8">
      <div className="card w-80 bg-base-100 shadow-xl border-2 border-secondary">
        <div className="card-body">
          <h2 className="card-title text-2xl mt-4 ">Visa Requirements</h2>
          <p className="text-justify mt-6 mb-6">
            Obtaining your visa is a crucial step when you are a foreign student
            aspiring to pursue higher studies in Canada.
          </p>
          <div className="card-actions justify-end mr-2 mt-2 ">
            <Link to="/visaAustralia"><button className="btn btn-sm btn-primary text-white">
            Find More
            </button></Link>
          </div>
        </div>
      </div>
      <div className="card w-80 bg-base-100 shadow-xl border-2 border-secondary">
        <div className="card-body">
          <h2 className="card-title text-2xl mt-4 ">Funding in Canada</h2>
          <p className="text-justify mt-6 mb-6">
          For a foreign student, Canada offers some incredible educational opportunities. Moreover, Canada is a friendly nation, thus, many.
          </p>
          <div className="card-actions justify-end mr-2 mt-2 ">
          <Link to="/fundAustralia"><button className="btn btn-sm btn-primary text-white">
            Find More
            </button></Link>
          </div>
        </div>
      </div>
      <div className="card w-80 bg-base-100 shadow-xl border-2 border-secondary">
        <div className="card-body">
          <h2 className="card-title text-2xl mt-4 ">Education System</h2>
          <p className="text-justify mt-6 mb-6">
          Canada is the world's second-largest country and consistently ranks as one of the finest countries in the world - currently ranking.
          </p>
          <div className="card-actions justify-end mr-2 mt-2 ">
          <Link to="/educationAustralia"><button className="btn btn-sm btn-primary text-white">
            Find More
            </button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyCanadaCard;
