import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Button,
  Container,
  IconButton,
  Typography,
} from "@mui/material";
import { fetchProductById } from "../../redux/slices/productsSlice";
import { addToLike } from "../../redux/slices/likeSlice";
import { FaMinus, FaPlus } from "react-icons/fa";
import { FaStar, FaStarHalfAlt, FaRegHeart } from "react-icons/fa";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { item } = useSelector((state) => state.products);
  console.log(item,'----item----');
  const [cardImg, setCardImg] = useState("");
  const [activeSize, setActiveSize] = useState("");
  const [circle, setCircle] = useState("");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (item.images && item.images.length > 0) {
      setCardImg(item.images[1]);
    }
  }, [item]);

  if (Object.keys(item).length === 0) {
    return <h3>Загрузка...</h3>;
  }

  const { title, images, price, description } = item;
  const randomRating = Math.floor(Math.random() * 100) + 1;

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div>
      <Container
        maxWidth="lg"
        sx={{ display: "flex", justifyContent: "space-between", pt: "180px" }}
      >
        <Box sx={{ display: "flex", gap: "20px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
            {images.map((imgUrl) => (
              <img
                onClick={() => {
                  setCardImg(imgUrl);
                }}
                key={imgUrl}
                width={146}
                src={imgUrl}
                alt=""
              />
            ))}
          </div>
          <div>
            <img width={500} src={cardImg} alt="" />
          </div>
        </Box>

        <Box sx={{ maxWidth: "400px" }}>
          <Typography variant="h6" component={"p"}>
            {title}
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              color: "rgba(255, 173, 51, 1)",
              marginTop: "8px",
            }}
          >
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfAlt />
            <b style={{ marginLeft: "20px", color: "grey" }}>
              ({3 * randomRating})
            </b>
          </Box>
          <Typography sx={{ padding: "24px 0" }} variant="body" component={"p"}>
            $ {price}
          </Typography>
          <Typography
            sx={{ pb: "24px", borderBottom: "1px solid #808080" }}
            variant="body"
            component={"p"}
          >
            {description}
          </Typography>
          <Typography
            sx={{ display: "flex", alignItems: "center", pt: "24px" }}
            variant="body"
            component={"p"}
          >
            Цвета:{" "}
            {["#A0BCE0", "#E07575"].map((color) => (
              <span
                onClick={() => setCircle(color)}
                key={color}
                style={{
                  display: "inline-block",
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  backgroundColor: color,
                  marginLeft: "10px",
                  border: circle === color ? "2px solid black" : "none",
                }}
              ></span>
            ))}
          </Typography>

          <Typography
            sx={{ display: "flex", alignItems: "center", padding: "24px 0" }}
            variant="body"
            component={"p"}
          >
            Размеры:{" "}
            {["SX", "S", "M", "L", "XL"].map((size) => (
              <span
                onClick={() => setActiveSize(size)}
                key={size}
                style={{
                  display: "inline-block",
                  textAlign: "center",
                  padding: "4px",
                  width: "32px",
                  height: "32px",
                  borderRadius: "4px",
                  border: activeSize === size ? "none" : "1px solid #000",
                  marginLeft: "10px",
                  cursor: "pointer",
                  background: activeSize === size ? "#DB4444" : "#fff",
                  color: activeSize === size ? "#fff" : "#000",
                }}
              >
                {" "}
                {size}
              </span>
            ))}
          </Typography>

          <Box sx={{ display: "flex", gap: "13px" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                maxWidth: "160px",
                border: "1px solid red",
              }}
            >
              <IconButton onClick={decrementQuantity}>
                <FaMinus />
              </IconButton>
              <input
                type="text"
                value={quantity}
                onChange={handleQuantityChange}
                style={{
                  minWidth: "5px",
                  textAlign: "center",
                  borderRight: "1.5px solid red",
                  borderLeft: "1.5px solid red",
                  height: "40px",
                }}
              />
              <IconButton onClick={incrementQuantity}>
                <FaPlus />
              </IconButton>
            </Box>
            <Button
              variant="contained"
              sx={{
                minWidth: "185px",
                bgcolor: "red",
                color: "#fff",
              }}
            >
              Купить сейчас
            </Button>
            <IconButton
              onClick={() => {
                dispatch(addToLike(item));
              }}
              sx={{
                border: "1px solid red",
                borderRadius: "5px",
                marginLeft: "10px",
                padding: "8px",
              }}
            >
              <FaRegHeart />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Detail;