

import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllProducts } from '../../redux/slices/allproduct';
import { Container, Button, Typography } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from '../card/Card';

const Best = () => {
  const dispatch = useDispatch();
  const { items, isLoading, isError } = useSelector((state) => state.productsAll);
  const [showAllProducts, setShowAllProducts] = useState(false);
  const [randomItems, setRandomItems] = useState([]);
  const [showDataMessage, setShowDataMessage] = useState(false);

  const shuffleArray = (array) => {
    return array.sort(() => 0.5 - Math.random());
  };

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
  };

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  useEffect(() => {
    if (items.length > 0) {
      setShowDataMessage(true);
      setRandomItems(shuffleArray(items.slice()));
    }
  }, [items]);

  const toggleViewProducts = () => {
    setShowAllProducts((prev) => !prev);
  };

  if (isLoading) {
    return (
      <Container maxWidth="lg" sx={{ marginTop: '100px', padding: '0 20px', position: 'relative' }}>
        <Typography variant="h4">Best Selling Products</Typography>
        <Typography variant="subtitle1" sx={{ marginTop: '20px' }}>
          Загрузка...
        </Typography>
      </Container>
    );
  }

  if (isError) {
    return (
      <Container maxWidth="lg" sx={{ marginTop: '100px', padding: '0 20px', textAlign: 'center' }}>
        <Typography variant="h5" color="error">
          Произошла ошибка при загрузке продуктов.
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ marginTop: '100px', padding: '0 20px', position: 'relative' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'absolute', top: '-80px', width: '100%' }}>
        <Typography variant="h4">Лучшие продажи</Typography>
        <Button
          onClick={toggleViewProducts}
          variant="contained"
          style={{
            backgroundColor: '#DB4444',
            color: 'white',
            fontSize: '16px',
            borderRadius: '5px',
            paddingLeft: '20px',
            paddingRight: '20px',
          }}
        >
          {showAllProducts ? 'close' : 'View All'}
        </Button>
      </div>
      {showAllProducts ? (
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            marginBottom: '50px',
          }}
        >
          {randomItems.map(el => (
            <Card key={el?.id} el={el} showDiscount={false} showRating={true}  hideBox={false}/>
          ))}
        </div>
      ) : (
        <Slider {...sliderSettings}>
          {items.map(el => (
            <Card key={el?.id} el={el} showDiscount={false} showRating={true}/>
          ))}
        </Slider>
      )}
    </Container>
  );
};

export default Best;
