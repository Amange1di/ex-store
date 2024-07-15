
import {
  Card as MuiCard,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Button,
} from "@mui/material";
import { useTranslation } from 'react-i18next';

import { FaRegHeart, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/slices/cartSlice";
import { addToLike, removeFromLike } from "../../redux/slices/likeSlice";
import { toast } from "react-toastify";
import { RiDeleteBinLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useMemo } from "react";

const def_Img = "https://mui.com/static/images/cards/paella.jpg";

const Card = ({ el, showDiscount, showRating }) => {
  const { title, images, price, id } = el;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const discount = 30; // скидка
  const discountPrice = price - (price * discount) / 100;

  // Определение randomRating с помощью useMemo
  const randomRating = useMemo(() => Math.floor(Math.random() * 100) + 1, []);

  // Сохранение вычисленного значения ratingValue с использованием useMemo
  const ratingValue = useMemo(() => 3 * randomRating, [randomRating]);


  const handleClick = (id) => {
    navigate(`/detail/${id}`);
  };
  const { t } = useTranslation();
  return (
    <MuiCard
      className="Cart"
      sx={{ margin: "20px", position: "relative", maxWidth: 270 }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 10,
          right: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          zIndex: 100,
          width: "calc(95%)",
        }}
      >
        {showDiscount && (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              backgroundColor: "red",
              borderRadius: "5px",
              padding: "2px 6px",
              height: "25px",
            }}
          >
            -30%
          </Box>
        )}
        {el?.isLike ? (
          <Box
            onClick={() => {
              dispatch(removeFromLike(el));
              toast.error("Item removed from favorite");
            }}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "black",
              backgroundColor: "white",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              marginTop: "8px",
              cursor: "pointer",
            }}
          >
            <RiDeleteBinLine />
          </Box>
        ) : (
          <Box
            onClick={() => {
              dispatch(addToLike(el));
              toast.success("Item added to favorite");
            }}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "black",
              backgroundColor: "white",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              marginTop: "8px",
              cursor: "pointer",
            }}
          >
            <FaRegHeart />
          </Box>
        )}
      </Box>
      {/* <CardMedia
        component="img"
        height="250"
        width="270"
        image={images[0]?.length > 0 ? images[0].replace(/["]/, '') : def_Img}
        alt={title}
        sx={{ zIndex: 1 }}
      /> */}
      <CardMedia
  component="img"
  height="250 "
  width="270"
  image={images.length > 0 ? images[0].replace(/[\["\]]/g, '') : def_Img}
  alt={title}
  sx={{ zIndex: 1 }}
/>
     <button
        className="btnCart"
        onClick={() => {
          dispatch(addItem(el))
          toast("Добавлено в карзину")
        }}
        style={{
          background: "black",
          color: "white",
          width: "100%",
          height: "50px",
          display: "none",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          // top: 200,
          marginTop: "-50px",
        }}
      >
        {t('Add To Cart')}
      </button>
      <CardContent onClick={() => handleClick(id)}>
        <Typography variant="subtitle1" component="div">
          <Box
            sx={{
              fontSize: "16px",
              color: "black",
              fontWeight: "500",
              margin: 0,
              lineHeight: "1.2em",
              minHeight: "2.4em",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {title}
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: "8px",
            }}
          >
            {showDiscount && (
              <Box sx={{ color: "red", marginRight: "8px" }}>
                <b>${discountPrice.toFixed(2)}</b>
              </Box>
            )}
            <Box sx={{ textDecoration: showDiscount ? "line-through" : "none", color: "grey" }}>
              <b>${price}</b>
            </Box>
          </Box>
          {showRating && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                color: "rgba(255, 173, 51, 1)",
              }}
            >
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
              <b style={{ marginLeft: "20px", color: "grey" }}>
             ({ratingValue})
              </b>
            </Box>
          )}
        </Typography>
      </CardContent>
    </MuiCard>
  );
};

export default Card;
