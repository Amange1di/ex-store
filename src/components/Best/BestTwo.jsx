import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllProducts } from '../../redux/slices/allproduct';
import { Container, Button, Typography, Grid } from '@mui/material'; // Импорт Grid из MUI для создания сетки
import Card from '../card/Card';

const BestTwo = () => {
  const dispatch = useDispatch();
  const { items, isLoading, isError } = useSelector((state) => state.productsAll);
  const [showAllProducts, setShowAllProducts] = useState(false);
  const [randomItems, setRandomItems] = useState([]);
  const [showDataMessage, setShowDataMessage] = useState(false);

  const shuffleArray = (array) => {
    return [...array].sort(() => 0.5 - Math.random());
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
        <Typography variant="h4">Лучшие продажи</Typography>
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
        <Typography variant="h4">Лучшие Лучшие </Typography>
       
      </div>
      {showAllProducts ? (
        <Grid container spacing={3} style={{ marginTop: '50px' }}>
          {randomItems.slice(0, 9).map((el) => (
            <Grid item xs={4} key={el?.id}> {/* Предполагается, что каждый элемент занимает 1/3 ширины (4 колонки в сетке) */}
              <Card el={el} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Grid container spacing={3} style={{ marginTop: '50px' }}>
          {randomItems.slice(0, Math.min(randomItems.length, 9)).map((el) => (
            <Grid item xs={4} key={el?.id}> {/* Предполагается, что каждый элемент занимает 1/3 ширины (4 колонки в сетке) */}
              <Card el={el} showDiscount={false} showRating={true} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};



export default BestTwo