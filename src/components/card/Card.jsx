// import React from "react";
// import {
//   Card as MuiCard,
//   CardMedia,
//   CardContent,
//   Typography,
// } from "@mui/material";

// const Card = ({ title }) => {
//   return (
//     <MuiCard sx={{ maxWidth: 345 }}>
//       <CardMedia
//         component="img"
//         height="194"
//         image="https://mui.com/static/images/cards/paella.jpg"
//         alt="Paella dish"
//       />
//       <CardContent>
//         <Typography variant="body2" color="text.secondary">
//           {title}
//         </Typography>
//       </CardContent>
//     </MuiCard>
//   );
// };

// export default Card;

import React from "react";
import {
  Card as MuiCard,
  CardMedia,
  CardContent,
  Typography,
  Box,
} from "@mui/material";
import { FaRegHeart, FaStar, FaStarHalfAlt } from "react-icons/fa";

const Card = ({ title, images, price, id }) => {
  const discount = 30; // скидки
  const discountPrice = price - (price * discount) / 100;
  const randomRating = Math.floor(Math.random()  * 100) + 1; 

  return (
    <MuiCard className="Cart" sx={{ margin:"20px" , position: "relative", maxWidth: 270, }}>
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
        <Box
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
          }}
        >
          <FaRegHeart />
        </Box>
      </Box>
      <CardMedia
        component="img"
        height="140"
        image={images}
        alt={title}
        sx={{ zIndex: 1 }}
      />
      <button
        className="btnCart"
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
          marginTop:"-50px"
        }}
      >
        Add To Cart
      </button>
      <CardContent>
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
            <Box sx={{ color: "red", marginRight: "8px" }}>
              <b>${discountPrice.toFixed(2)}</b>
            </Box>
            <Box sx={{ textDecoration: "line-through", color: "grey" }}>
              <b>${price}</b>
            </Box>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", color: "rgba(255, 173, 51, 1)" }}>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfAlt />
            <b style={{ marginLeft: "20px", color: "grey" }}>({3* randomRating})</b>
          </Box>
        </Typography>
      </CardContent>
    </MuiCard>
  );
};

export default Card;