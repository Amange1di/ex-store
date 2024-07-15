import { useEffect, useState } from "react";
import { headerMenu } from "../../constants";

import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Menu,
  Box,
  IconButton,
  MenuItem,
  // Link,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Search from "../search/Search";
import { FaRegHeart } from "react-icons/fa";
import { GrCart } from "react-icons/gr";
import { VscAccount } from "react-icons/vsc";



import {Link } from "react-router-dom";
import {useSelector} from "react-redux"
import { useTranslation } from "react-i18next";

const Header = () => {
  
const { t, i18n } = useTranslation();

  const [anchorElNav, setAnchorElNav] = useState(null);
const {items} = useSelector(store => store.cart)
const {items: likeItems} = useSelector(store => store.like)

const [isAuthenticated, setIsAuthenticated] = useState(false);


useEffect(() => {
  // Здесь вы можете проверить состояние аутентификации пользователя
  // Например, проверка наличия токена в localStorage
  const token = localStorage.getItem("token");
  if (token) {
    setIsAuthenticated(true);
  }
}, []);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };



  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const favoriteCount = (
    <span style={{
      position:"absolute",
      width:"20px",
      height:'20px',
      borderRadius:'100px',
      background:"red",
      color:"#fff",
      display:"flex",
      alignItems:"center",
      justifyContent:"center",
      top:"-3px",
      right:"-3px",
      fontSize:'14px'
    }}>{likeItems.length}</span>
  )


  const cartCount = (
    <span style={{
      position:"absolute",
      width:"20px",
      height:'20px',
      borderRadius:'100px',
      background:"red",
      color:"#fff",
      display:"flex",
      alignItems:"center",
      justifyContent:"center",
      top:"-3px",
      right:"-3px",
      fontSize:'14px'
    }}>{items.length}</span>
  );

  return (
    <AppBar position="static" sx={{ bgcolor: "#fff", pt:"40px",pb:"16px"  , borderBottom:"1px solid rgba(0, 0, 0, 1) " }} elevation={0} >
      <Container maxWidth="lg" sx={{p:"0px"}}>
        <Toolbar sx={{ bgcolor: "#fff",p:"0px" }}>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: "190px",
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              // letterSpacing: '.3rem',
              color: "#000",
              textDecoration: "none",
            }}
          >
            Exclusive
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {headerMenu.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{t(page.name)}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              gap: "48px",
              display: { xs: "none", md: "flex" },
            }}
          >
            {headerMenu.map((page) => (
              <Link
                component={"a"}
                to={page.path}
                color="#000"
                key={page.name}
              >
                {t(page.name)}
              </Link>
            ))}
          </Box>
          <Box sx={{display:"flex" ,gap:"16px", alignItems:'center'}}>
            <Search  />
            <IconButton component={Link} to="/favorite" >
              <FaRegHeart />  {likeItems.length > 0 && favoriteCount}
            </IconButton>
            <IconButton component={Link} to="/cart"
             sx={{
              position:"relative"
            }} >
              <GrCart  />  {items.length > 0 && cartCount}
            </IconButton>
            <IconButton
              component={Link}
              to={isAuthenticated ? "/profile" : "/login"}
              sx={{
                display: "block",
              }}
            >
              <VscAccount />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
