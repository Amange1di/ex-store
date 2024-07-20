import { Box, Button, Container, Typography } from "@mui/material";
import Card from "../../components/card/Card";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../redux/slices/cartSlice";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
const Favorite = () => {
  const { items } = useSelector((state) => state.like);
  const dispatch = useDispatch(); // Corrected spelling of dispatch
  
  const { t, i18n } = useTranslation();
  if (items.length === 0) {
    return (
      <Typography variant="h5" align="center" sx={{ mt: "5px" }}>
        {t('No Favorites')} 
      </Typography>
    );
  }

  const moveAllToBag = () => {
    items.forEach((item) => {
      dispatch(addItem(item));
    });
  };

  return (
    <div>
      <Container maxWidth="lg">
        <Box sx={{ display: "flex", justifyContent: "space-between" ,marginTop:"100px"}}>
          <Typography variant="h5">WishList({items.length})</Typography>
          <Button onClick={moveAllToBag} variant="contained" sx={{ bgcolor: "red", color: "#fff" }}>
          {t('Move All To Bag')}   
          </Button>
        </Box>

        <Box sx={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          {items.map((el) => (
            <Card key={el.id} el={el} />
          ))}
        </Box>
      </Container>
    </div>
  );
};

export default Favorite;
