import {
  Box,
  Container,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import storeService from "../../api/service";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaArrowRight } from "react-icons/fa6";
import apple_icon from "../../assets/apple_icon.svg";
import { useDispatch } from "react-redux";
import { fetchProductsByCategory } from "../../redux/slices/productsSlice";
import { useTranslation } from "react-i18next";
import "./Hero.css"

const fakeData = [
  {
    title: "iPhone 14 Series",
    sale: "Up to 10% off Voucher",
    image: "https://applefun.com.ua/upload/2023-10/iPhone-15-release-date-price-specs-and-must-know-features1696340204.jpeg"
  },
  {
    title: "iPhone 15 Series",
    sale: "Up to 15% off Voucher",
    image: "https://www.discountsforteachers.co.uk/blog/wp-content/uploads/2022/09/hero_iphone_14_pro__kzr001ge0262_large-1024x851.jpg",
  },
  {
    title: "iPhone 15 Pro Series",
    sale: "Up to 20% off Voucher",
    image: "https://1734811051.rsc.cdn77.org/data/thumbs/full/436046/820/0/0/0/iphone-15-pro.jpg"
  },
  {
    title: "iPhone 15 Pro Max Series",
    sale: "Up to 25% off Voucher",
    image: "https://maxmobiles.ru/images/companies/1/Product/iPhone/iPhone%2015%20Pro%20Max/54.jpg?1694596046073"
  },
];

const Hero = () => {
  const { t } = useTranslation()
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    const getCategories = async () => {
      const { data } = await storeService.getAllCategories();
      console.log(data, "---data---");
      setCategories(data.slice(0, 8));
      dispatch(
        fetchProductsByCategory({ id: data[4]?.id, name: data[4]?.name })
      );
    };
    // dispatch(fetch....());
    getCategories();
  }, [dispatch]);

  const handleListItemClick = (id, name) => {
    dispatch(fetchProductsByCategory({ id, name }));
  };

  return (
    <Container maxWidth="lg" sx={{ display: "flex" }}>
      <div className="box">
        <div className="category">
          <Box
            sx={{
              minWidth: "265px",
              borderRight: "0.5px solid #000000",
            }}
          >
            <List sx={{ width: "100%", bgcolor: "background.paper" }}>
              {categories?.map((el) => (
                <ListItem sx={{ cursor: "pointer" }} key={el.id}>
                  <ListItemText
                    onClick={() => handleListItemClick(el.id, el.name)}
                    primary={`${t(el.name)}`}
                  // secondary={`${t(el.name)}`}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        </div>
        <Box
          sx={{
            width: "73%",
            height: "344px",
            bgcolor: "black",
            marginLeft: "45px",
            marginTop: "40px",
          }}
        >

          <Slider className="slider" {...settings}>
            {fakeData.map((promo, index) => (
              <div key={index}>
                <Box
                  sx={{
                    background: `url(${promo.image}) no-repeat right/contain`,
                    height: "344px",
                  }}
                >
                  <Typography
                    component={"p"}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "24px",
                      color: "#fff",
                      fontSize: "16px",
                      marginBottom: "20px",
                      marginLeft: "64px",
                      paddingTop: "58px",
                    }}
                  >
                    <img src={apple_icon} alt="" />
                    {promo.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#fff",
                      fontSize: "48px",
                      width: "294px",
                      marginBottom: "22px",
                      marginLeft: "64px",
                      lineHeight: "60px",
                    }}
                    component={"h1"}
                  >
                    {promo.sale}
                  </Typography>
                  
                </Box>
              </div>
            ))}
          </Slider>
        </Box>
      </div>
    </Container>
  );
};

export default Hero;
