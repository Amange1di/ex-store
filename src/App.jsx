import AppRoutes from "./routes/routes";
import Header from "./components/header/Header";
import { Box, Breadcrumbs, Container, Link, Typography } from "@mui/material";
import Footer from "./components/footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { useTranslation } from "react-i18next";

const App = () => {
  const { t, i18n } = useTranslation();

  const handleChangeLang = ({ target: { value } }) => {
    i18n.changeLanguage(value);
  };
  return (
    <div>
      <ToastContainer />
      <Box sx={{ bgcolor: "#000", py: "12px" }}>
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            justifyContent: "center",
            px: "55px",
            margin: "0 auto  ",
            paddingRight: "20px",
          }}
        >
          <Typography
            fontSize={"14px"}
            textAlign={"center"}
            color={"#fff"}
            sx={{ flexGrow: 1 }}
          >
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            ShopNow
          </Typography>

          <select
            onChange={handleChangeLang}
            style={{
              background: "#000",
              color: "#fff",
              border: "none",
            }}
          >
            <option value="en">English</option>
            <option value="ru">Russian</option>
            <option value="kg">Kyrgyz</option>
          </select>
        </Container>
      </Box>
      <Header />

      <AppRoutes />

      <Footer />
    </div>
  );
};

export default App;
