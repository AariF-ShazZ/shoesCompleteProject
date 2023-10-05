import { useSelector } from "react-redux";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Input } from "@chakra-ui/react";
import Card from "./Card";

export const MultipleItems = () => {
  const products = useSelector((store) => store.productsReducer.products);
  // console.log("product => ", products);

  const [settings, setSettings] = useState({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    rtl: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  const onChangeCenterMode = (e) => {
    if (e.target.checked) {
      setSettings({
        ...settings,
        centerMode: true,
        centerPadding: "50px",
      });
    } else {
      setSettings({
        ...settings,
        centerMode: false,
        centerPadding: "0",
      });
    }
  };

  const NextArrow = (props) => {
    const { className, onClick } = props;
    return <div className={className} onClick={onClick} />;
  };

  const PrevArrow = (props) => {
    const { className, onClick } = props;
    return <div className={className} onClick={onClick} />;
  };

  return (
    <div>
   
      <Slider
        {...settings}
        nextArrow={<NextArrow className="slick-next" />}
        prevArrow={<PrevArrow className="slick-prev" />}
      >
        {products.length > 0 && products.map((x, i) => {
          if(i<10){
            return (
              <Card data={x}/>
            )
          }
         
        })}
      </Slider>
    </div>
  );
};
