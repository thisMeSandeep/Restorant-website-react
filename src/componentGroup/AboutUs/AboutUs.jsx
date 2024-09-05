import React, { useState, useEffect, useRef } from "react";
import img1 from "../../assets/about-1.jpg";
import img2 from "../../assets/about-2.jpg";
import img3 from "../../assets/about-3.jpg";
import img4 from "../../assets/about-4.jpg";
import Button from "../../componentsSingle/Button";
import { PiForkKnifeFill } from "react-icons/pi";

const AboutSection = () => {
  const [experience, setExperience] = useState(0);
  const [chefs, setChefs] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  // Function to start the animation
  const startAnimation = () => {
    if (!hasAnimated) {
      setHasAnimated(true);

      // Increment experience
      const experienceInterval = setInterval(() => {
        setExperience((prev) => {
          if (prev < 15) return prev + 1;
          clearInterval(experienceInterval);
          return 15;
        });
      }, 100);

      // Increment chefs
      const chefsInterval = setInterval(() => {
        setChefs((prev) => {
          if (prev < 50) return prev + 1;
          clearInterval(chefsInterval);
          return 50;
        });
      }, 50);
    }
  };

  // Use Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startAnimation();
          observer.disconnect(); // Stop observing after animation starts
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <section
      className="bg-white py-12 md:py-20"
      ref={sectionRef}
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        {/* Images Section */}
        <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
          <img
            src={img1}
            alt="Restaurant 1"
            className="w-full h-48 md:h-64 object-cover"
          />
          <img
            src={img2}
            alt="Restaurant 2"
            className="w-full h-48 md:h-64 object-cover"
          />
          <img
            src={img3}
            alt="Restaurant 3"
            className="w-full h-48 md:h-64 object-cover"
          />
          <img
            src={img4}
            alt="Restaurant 4"
            className="w-full h-48 md:h-64 object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 lg:pl-12 mt-8 lg:mt-0">
          <div className="text-left">
            <h3 className="text-orange text-lg font-cursive font-semibold">About Us</h3>
            <h2 className="text-4xl font-bold text-black mb-4 flex items-center flex-col sm:flex-row font-nunito pt-5">
              Welcome to <PiForkKnifeFill className='text-orange text-3xl sm:text-4xl md:text-5xl font-bold' /> Restoran
            </h2>
            <p className="text-gray mb-4">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
              diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem
              sit.
            </p>
            <p className="text-gray mb-8">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
              diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem
              sit clita duo justo magna dolore erat amet
            </p>
          </div>

          {/* Experience and Chefs */}
          <div className="flex items-center justify-start mb-6">
            <div className="pr-6 flex items-center ">
              <h3 className="text-5xl font-bold text-orange">
                {experience}
              </h3>
              <p className="text-gray text-sm">Years of <span className="text-black font-semibold">EXPERIENCE</span> </p>
            </div>
            <div className="flex items-center">
              <h3 className="text-5xl font-bold text-orange">{chefs}</h3>
              <p className="text-gray text-sm">Popular  <span className="text-black font-semibold">MASTER CHEFS</span></p>
            </div>
          </div>

          {/* Insert your custom button component here */}
          <Button>Read More</Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
