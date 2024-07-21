import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllProducts } from '../../redux/slices/allproduct';
import { Container, Button, Typography, Grid } from '@mui/material';
import Card from '../card/Card';
import ReactLoading from "react-loading";

const BestTwo = () => {
  const dispatch = useDispatch();
  const { items, isLoading, isError } = useSelector((state) => state.productsAll);
  const [showAllProducts, setShowAllProducts] = useState(false);
  const [randomItems, setRandomItems] = useState([]);

  const shuffleArray = (array) => {
    return [...array].sort(() => 1.5 - Math.random());
  };

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  useEffect(() => {
    if (items.length > 0) {
      setRandomItems(shuffleArray(items.slice()));
    }
  }, [items]);

  const toggleViewProducts = () => {
    setShowAllProducts((prev) => !prev);
  };

  if (isLoading) {
    return (
      <Container maxWidth="lg" sx={{ marginTop: '100px', padding: '0 20px', position: 'relative' }}>
        <Typography variant="h4">Разное</Typography>
        <Typography variant="subtitle1" sx={{ marginTop: '20px', textAlign: 'center' }}>
          <ReactLoading type="spinningBubbles" color="#000000" />
          Loading...
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
        <Typography variant="h4">Разное</Typography>
      
      </div>
      <Grid container spacing={3} style={{ marginTop: '50px' }}>
        {randomItems.slice(0, showAllProducts ? randomItems.length : 6).map((el) => (
          <Grid item xs={12} sm={6} md={4} key={el?.id}>
            <Card el={el} showDiscount={false} showRating={true} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default BestTwo;
