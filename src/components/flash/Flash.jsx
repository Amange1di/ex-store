import React, { useState } from "react";
import { Container, Button, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "../card/Card";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import ReactLoading from 'react-loading';

const Flash = () => {
  const { items, categoryName } = useSelector((store) => store.products);
  const [showAllProducts, setShowAllProducts] = useState(false);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: Math.min(items.length, 4),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(items.length, 4),
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: Math.min(items.length, 3),
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: Math.min(items.length, 1),
        },
      },
    ],
    slideWidth: "80%",
    cellSpacing: 0,
  };

  const sliderRef = React.useRef(null);

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const previousSlide = () => {
    sliderRef.current.slickPrev();
  };

  const handleViewAllProducts = () => {
    setShowAllProducts(true);
  };

  const handleCloseViewAllProducts = () => {
    setShowAllProducts(false);
  };

  if (items.length === 0) {
    return <p style={{display:"grid",alignItems:'center', justifyContent:'center'}}><ReactLoading color="#0000000"/> Loading...</p> 
  }

  return (
    <Container maxWidth="lg" sx={{ marginTop: "100px", padding: "0 20px" }}>
      {!showAllProducts ? (
        <>
          <Grid container alignItems="center" justifyContent="space-between" position="relative">
            <Grid item>
              <h2 style={{ marginBottom: 0, fontSize: "36px", fontWeight: '600' }}>{categoryName}</h2>
            </Grid>
            <Grid item>
              <Button
                style={{
                  padding: "0",
                  minWidth: "auto",
                  margin: "0 10px",
                  background: "rgba(245, 245, 245, 1)",
                  borderRadius: "50%",
                  width: "36px",
                  height: "46px",
                  color: "black",
                  fontSize: "22px",
                }}
                onClick={previousSlide} className="nav-button">
                <GoArrowLeft />
              </Button>
              <Button
                style={{
                  padding: "0",
                  minWidth: "auto",
                  margin: "0 10px",
                  background: "rgba(245, 245, 245, 1)",
                  borderRadius: "50%",
                  width: "36px",
                  height: "46px",
                  color: "black",
                  fontSize: "22px",
                }}
                onClick={nextSlide} className="nav-button">
                <GoArrowRight />
              </Button>
            </Grid>
          </Grid>
          <Slider {...sliderSettings} ref={sliderRef}>
            {items.map((el) => (
              <Card key={el?.id} el={el} showDiscount={true} showRating={true} />
            ))}
          </Slider>
          <button
            onClick={handleViewAllProducts}
            style={{
              background: "rgba(219, 68, 68, 1)",
              color: "white",
              fontSize: "16px",
              padding: "5px 10px",
              borderRadius: "5px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "50px auto",
            }}
          >
            View All Products
          </button>
        </>
      ) : (
        <>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around",
              marginBottom: "50px",
            }}
          >
            {items?.map((el) => (
              <Card key={el?.id} el={el} showDiscount={true} showRating={true} />
            ))}
          </div>
          <button
            onClick={handleCloseViewAllProducts}
            style={{
              background: "rgba(219, 68, 68, 1)",
              color: "white",
              fontSize: "16px",
              padding: "5px 10px",
              borderRadius: "5px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 50px auto",
            }}
          >
            Close
          </button>
        </>
      )}
    </Container>
  );
};

export default Flash;
