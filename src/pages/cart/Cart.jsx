import { Box, Breadcrumbs, Button, Container, IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { TiDelete } from "react-icons/ti";
import { removeItem, updateQuantity } from "../../redux/slices/cartSlice";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { updateCart } from "../../redux/slices/cartSlice";

const Cart = () => {
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [couponCode, setCouponCode] = useState(""); // State for coupon code
  const [discount, setDiscount] = useState(0); // State for discount
  const subtotal = items?.reduce((acc, item) => acc + item.price * item.quantity, 0) || 0;
  const total =  subtotal - (subtotal * discount);

 

  const handleCouponChange = (e) => {
    setCouponCode(e.target.value);
  };

  const handleCouponApply = () => {
    // Replace with your actual coupon logic
    if (couponCode === "www") {
      setDiscount(0.1); // 10% discount
    } else {
      setDiscount(0);
      alert("Invalid coupon code");
    }
  };

  useEffect(() => {
    dispatch(updateCart());
  }, [dispatch]);

  const handleRemoveItem = (id) => {
    dispatch(removeItem({ id }));
  };

  const handleChangeQuantity = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity: parseInt(quantity, 10) }));
  };

  return (
    <div>
      <Breadcrumbs aria-label="breadcrumb" style={{ margin: '80px 1200px 0px 135px' }}>
        <Link underline="hover" color="#7F7F7F" to="/">
          <p style={{ color: "#7F7F7F" }}>Home</p>
        </Link>
        <Link
          underline="hover"
          color="inherit"
          to="/cart"
        >
          Cart
        </Link>
      </Breadcrumbs>
      <Container maxWidth="lg" sx={{ paddingTop: "180px" }}>
        <Box>
          <Box
            sx={{
              padding: "24px 40px",
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "40px",
              boxShadow: "0px 1px 13px 0px #0000000D",
            }}
          >
            <Box sx={{ width: "400px" }}>Product</Box>
            <Box sx={{ width: "200px" }}>Price</Box>
            <Box sx={{ width: "200px" }}>Quantity</Box>
            <Box sx={{ width: "200px" }}>Subtotal</Box>
          </Box>
          {items.map((item) => (
            <Box
              key={item.id}
              sx={{
                padding: "39px 40px",
                marginBottom: "24px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                boxShadow: "0px 1px 13px 0px #0000000D",
              }}
            >
              <Box
                sx={{
                  width: "400px",
                  display: "flex",
                  gap: "20px",
                  position: "relative",
                  alignItems: "center",
                }}
              >
                <IconButton
                  sx={{
                    position: "absolute",
                    top: "-20px",
                    left: "-20px",
                    "&:hover": {
                      backgroundColor: "transparent",
                    },
                  }}
                  onClick={() => handleRemoveItem(item.id)}
                >
                  <TiDelete />
                </IconButton>
                <img
                  width={"54px"}
                  src={item.images[0].replaceAll('["', "")}
                  alt="img"
                />
                <p style={{ width: "166px" }}>{item.title}</p>
              </Box>
              <Box sx={{ width: "200px" }}>$ {item.price}</Box>
              <Box sx={{ width: "200px", display: "flex", justifyContent: "center" }}>
                <input
                  style={{ width: '60px' }}
                  type="number"
                  value={item.quantity}
                  onChange={(e) => handleChangeQuantity(item.id, e.target.value)}
                />
              </Box>
              <Box sx={{ width: "200px" }}>{item.price * item.quantity}</Box>
            </Box>
          ))}
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              component={Link}
              to="/"
              variant="outlined"
              sx={{
                padding: "16px 48px",
                color: "#000",
                border: "1px solid black",
                borderRadius: "4px",
                "&:hover": {
                  border: "1px solid black",
                },
              }}
            >
              Return to Shop
            </Button>
            <Button
              variant="outlined"
              sx={{
                padding: "16px 48px",
                color: "#000",
                border: "1px solid black",
                borderRadius: "4px",
                "&:hover": {
                  border: "1px solid black",
                },
              }}
            >
              Update to Cart
            </Button>
          </Box>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: "80px" }}>
          <Box sx={{ display: "flex", gap: "16px" }}>
            <div style={{ width: "300px", height: "56px", border: "1px solid #000", borderRadius: "4px", padding: "16px 5px 16px 24px" }}>
              <input onChange={handleCouponChange} style={{ width: "100%", outline: "none" }} type="text" placeholder="coupon code" />
            </div>
            <div>
              <Button onClick={handleCouponApply}
                variant="outlined"
                sx={{
                  padding: "16px 48px",
                  background: "#DB4444",
                  color: "#fff",
                  border: "none",
                  borderRadius: "4px",
                  "&:hover": {
                    backgroundColor: "#DB4444",
                    border: "none",
                  },
                }}
              >
                Apply coupon
              </Button>
            </div>
          </Box>
          <Box width={"470px"} sx={{ border: "1px solid #000", padding: "32px 24px" }}>
            <h3 style={{ fontWeight: "500", fontSize: "20px", marginBottom: "24px" }}>Cart Total</h3>
            <Box sx={{ display: "flex", justifyContent: "space-between", paddingBottom: "16px", borderBottom: "1px solid #909090" }}>
              <p>Shipping</p>
              <p>free</p>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <p>Subtotal:</p>
              <p style={{ marginBottom: '16px' }}>${subtotal}</p>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <p>Discount:</p>
              <p style={{ marginBottom: '16px' }}>- ${subtotal * discount}</p>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", padding: "16px 0", borderBottom: "1px solid #909090" }}>
              <p>Total:</p>
              <p>{total}</p>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", marginTop: "16px" }}>
              <Button
                component={Link}
                to="/checkOut"
                variant="outlined"
                sx={{
                  padding: "16px 48px",
                  background: "#DB4444",
                  color: "#fff !important",
                  border: "none",
                  borderRadius: "4px",
                  "&:hover": {
                    backgroundColor: "#DB4444",
                    border: "none",
                  },
                }}
              >
                Proceed to checkout
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Cart;
