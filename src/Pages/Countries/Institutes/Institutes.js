import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Institutes = () => {
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  }

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    // autoplay: true,
    speed: 1000,
    autoplaySpeed: 600,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    pauseOnHover: true,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          gap: true,
        },
      },
    ],
  };
  return (
    <div className="gap-3 text-center  mb-20  mt-20">
        
      <div className="justify-center bg-slate-100 p-12 ">
      <h1 className="text-4xl font-medium text-secondary mt-6 mb-10">Our <span className="text-primary">Valued Institutes</span> </h1>
        <Slider {...settings}>
          <div className="card w-56 ">
            <figure>
              <img className="w-1/2 mt-16 mb-16"
                src="https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/Logo_of_the_University_of_Melbourne.svg/1200px-Logo_of_the_University_of_Melbourne.svg.png"
                alt="Shoes"
              />
            </figure>
          </div>
          <div className="card w-56 ">
            <figure>
              <img className="w-1/2 mt-16 mb-16"
                src="https://crowdresearch.uwa.edu.au/wp-content/uploads/2015/12/cropped-uwa-crest-512.png"
                alt="Shoes"
              />
            </figure>
          </div>
          <div className="card w-56 ">
            <figure>
              <img className="w-1/2 mt-16 mb-16"
                src="https://assets.stickpng.com/images/626ba1571dc4c3b537787e08.png"
                alt="Shoes"
              />
            </figure>
          </div>
          <div className="card w-56 ">
            <figure>
              <img className="w-1/2 mt-16 mb-16"
                src="https://upload.wikimedia.org/wikipedia/en/thumb/6/6e/University_of_Waterloo_seal.svg/1200px-University_of_Waterloo_seal.svg.png"
                alt="Shoes"
              />
            </figure>
          </div>
          <div className="card w-56 ">
            <figure>
              <img className="w-1/2 mt-16 mb-16"
                src="https://www.pngitem.com/pimgs/m/367-3671415_university-of-toronto-logo-png-logo-of-university.png"
                alt="Shoes"
              />
            </figure>
          </div>
          <div className="card w-56 ">
            <figure>
              <img className="w-1/2 mt-16 mb-16"
                src="https://png.pngitem.com/pimgs/s/195-1956228_lincoln-university-uk-logo-hd-png-download.png"
                alt="Shoes"
              />
            </figure>
          </div>
          <div className="card w-56 ">
            <figure>
              <img className="w-1/2 mt-16 mb-16"
                src="https://miro.medium.com/v2/resize:fit:576/1*7loPd6m3l8b_ailCWpA_1Q.png"
                alt="Shoes"
              />
            </figure>
          </div>
          
        </Slider>
      </div>
    </div>
  );
};

export default Institutes;
