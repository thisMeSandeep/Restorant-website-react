import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ClientCard from "../componentsSingle/ClientCard.jsx";
import img1 from "../assets/testimonial-1.jpg"
import img2 from "../assets/testimonial-2.jpg"
import img3 from "../assets/testimonial-3.jpg"
import img4 from "../assets/testimonial-4.jpg"

const Swiper = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true, 
    arrows: false, 
    draggable: true, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots:false,
        },
      },
    ],
  };

  return (
    <div className="px-2 cursor-grab"> 
      <Slider {...settings}>
        <div className="px-2"> 
          <ClientCard   img={img1} name={"Amelia Harper"} post={"Graphic Designer"}/>
        </div>
        <div className="px-2">
          <ClientCard   img={img2} name={"Lucas Chen"} post={"Software Engineer"}/>
        </div>
        <div className="px-2">
          <ClientCard   img={img3} name={"Ethan Brooks"} post={"Data Analyst"}/>
        </div>
        <div className="px-2">
          <ClientCard   img={img4} name={"Priya Kapoor"} post={"Marketing Specialist"}/>
        </div>
        <div className="px-2"> 
          <ClientCard   img={img1} name={"Amelia Harper"} post={"Graphic Designer"}/>
        </div>
        <div className="px-2">
          <ClientCard   img={img2} name={"Lucas Chen"} post={"Software Engineer"}/>
        </div>
        <div className="px-2">
          <ClientCard   img={img3} name={"Ethan Brooks"} post={"Data Analyst"}/>
        </div>
        <div className="px-2">
          <ClientCard   img={img4} name={"Priya Kapoor"} post={"Marketing Specialist"}/>
        </div>
        <div className="px-2"> 
          <ClientCard   img={img1} name={"Amelia Harper"} post={"Graphic Designer"}/>
        </div>
        <div className="px-2">
          <ClientCard   img={img2} name={"Lucas Chen"} post={"Software Engineer"}/>
        </div>
        <div className="px-2">
          <ClientCard   img={img3} name={"Ethan Brooks"} post={"Data Analyst"}/>
        </div>
        <div className="px-2">
          <ClientCard   img={img4} name={"Priya Kapoor"} post={"Marketing Specialist"}/>
        </div>
        
      </Slider>
    </div>
  );
};

export default Swiper;
