import React, { useState, useEffect } from "react";
import { Box, Breadcrumbs, Button, Container, IconButton } from "@mui/material";
import { TiDelete } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { updateCart, removeItem } from "../../redux/slices/cartSlice";
import Bcash from "../../assets/Bkash.svg";
import Visa from "../../assets/Visa.svg";
import MasterCard from "../../assets/Mastercard.svg";
import Nagad from "../../assets/Nagad.svg";
import { Link } from "react-router-dom";

const inputs = [
  { name: "First Name*", required: true },
  { name: "Company Name", required: true },
  { name: "Street Address*", required: true },
  { name: "Apartment, floor, etc. (optional)", required: true },
  { name: "Town/City*", required: true },
  { name: "Phone Number*", required: true },
  { name: "Email Address*", required: true },
];

const CheckOut = () => {
  const { items } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const subtotal = items?.reduce((prev, next) => prev + next.price * next.quantity, 0) || 0;
  const total = subtotal - (subtotal * 0.1);

  const [selectedPayment, setSelectedPayment] = useState("");
  const [formValues, setFormValues] = useState({});
  const [formErrors, setFormErrors] = useState({});

  const handlePaymentChange = (event) => {
    setSelectedPayment(event.target.value);
  };

  useEffect(() => {
    dispatch(updateCart());
  }, [dispatch]);

  const handleChange = (index, value) => {
    setFormValues({
      ...formValues,
      [index]: value
    });
  };

  const handlePlaceOrder = () => {
    const errors = {};

    inputs.forEach((input, index) => {
      if (input.required && !formValues[index]) {
        errors[index] = true;
      }
    });

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      // Логика размещения заказа
      alert("Order placed successfully!");
    }
  };

  return (
    <div>
      <Breadcrumbs aria-label="breadcrumb" style={{ margin: '80px 0px 0px 135px' }}>
        <Link underline="hover" color="#7F7F7F" to="/">
          <p style={{ color: "#7F7F7F" }}>Home</p>
        </Link>
        <Link underline="hover" color="#7F7F7F" to="/cart">
          <p style={{ color: "#7F7F7F" }}>Cart</p>
        </Link>
        <Link underline="hover" color="inherit" to="/checkOut">
          CheckOut
        </Link>
      </Breadcrumbs>
      <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: "space-between", alignItems: "center", marginTop: "180px" }}>
        <Box width={470}>
          <h1
            style={{
              fontSize: "36px",
              fontWeight: "500",
              paddingBottom: "48px",
            }}
          >
            Billing Details
          </h1>

          {inputs.map((input, index) => (
            <div key={index} style={{ marginBottom: "32px" }}>
              <p style={{ color: "#999999", paddingBottom: "8px" }}>
                {input.name}
              </p>
              <input
                style={{
                  width: "100%",
                  height: "50px",
                  outline: "none",
                  background: "#F5F5F5",
                  borderRadius: "4px",
                  border: formErrors[index] ? "2px solid red" : "none",
                }}
                type="text"
                value={formValues[index] || ""}
                onChange={(e) => handleChange(index, e.target.value)}
              />
            </div>
          ))}
        </Box>

        <Box width={527}>
          <Box sx={{ mb: "32px" }} width={425}>
            {items.map(el => (
              <Box
                key={el?.id}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: "32px"
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    gap: "20px",
                    position: "relative",
                    alignItems: "center",
                  }}
                >
                  <IconButton onClick={() => {
                    dispatch(removeItem(el));
                  }}
                    sx={{
                      position: "absolute",
                      top: "-20px",
                      left: "-20px",
                      "&:hover": {
                        backgroundColor: "transparent",
                      },
                    }}
                  >
                    <TiDelete />
                  </IconButton>
                  <img
                    width={"54px"}
                    src={el?.images[0].replaceAll('["', "")}
                    alt="img"
                  />
                  <p style={{ width: "166px" }}>{el?.title}</p>
                </Box>
                <Box>$ {items.reduce((prev, next) => next.id === el.id ? prev + (next.price * next.quantity) : prev, 0)}</Box>
              </Box>
            ))}

            <Box sx={{ display: "flex", justifyContent: "space-between", paddingBottom: '16px', borderBottom: '1px solid #909090' }}>
              <p>Shipping</p>
              <p>free</p>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", padding: '16px 0', borderBottom: '1px solid #909090' }}>
              <p>Total: </p>
              <p>{total}</p>
            </Box >
            <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: "32px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="bank"
                  checked={selectedPayment === 'bank'}
                  onChange={handlePaymentChange}
                />
                <p>Bank</p>
              </div>
              <div style={{ display: "flex", gap: "8px" }}>
                <img src={Bcash} alt="Bcash" />
                <img src={Visa} alt="Visa" />
                <img src={MasterCard} alt="MasterCard" />
                <img src={Nagad} alt="Nagad" />
              </div>
            </Box>
            <Box display={"flex"} gap={"16px"}>
              <input
                type="radio"
                name="paymentMethod"
                value="cash"
                checked={selectedPayment === 'cash'}
                onChange={handlePaymentChange}
              />
              <p style={{ }}>Cash on delivery</p>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', gap: '16px' }}>
            <div style={{ width: '300px', height: '56px', border: '1px solid #000', borderRadius: "4px", padding: "16px 5px 16px 24px  " }}>
              <input style={{ width: '100%', outline: "none", }} type="text" placeholder="coupon code" />
            </div>
            <div>
              <Button variant="outlined" sx={{
                padding: '16px 48px', background: '#DB4444', color: '#fff', border: 'none', borderRadius: '4px', '&:hover': {
                  backgroundColor: "#DB4444",
                  border: "none"
                }
              }}>Apply coupon</Button>
            </div>
          </Box>
          <Button variant="outlined" sx={{
            padding: '16px 48px', background: '#DB4444', color: '#fff', border: 'none', borderRadius: '4px', mt: "32px", '&:hover': {
              backgroundColor: "#DB4444",
              border: 'none'
            }
          }}
            onClick={handlePlaceOrder}
          >Place Order</Button>
        </Box>
      </Container>
    </div>
  );
};

export default CheckOut;
