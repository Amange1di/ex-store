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
import { BiLogOut } from "react-icons/bi";
import { ImUser } from "react-icons/im";
import { logoutUser, setUser } from "../../redux/slices/userSlice";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation();

  const [anchorElNav, setAnchorElNav] = useState(null);
  const { items } = useSelector((store) => store.cart);
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const { items: likeItems } = useSelector((store) => store.like);
  const [userBlockOpen, setUserBlockOpen] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      dispatch(setUser(user));
    }
  }, [dispatch]);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleUserBlockToggle = () => {
    setUserBlockOpen((prev) => !prev);
  };

  const favoriteCount = (
    <span
      style={{
        position: "absolute",
        width: "20px",
        height: "20px",
        borderRadius: "100px",
        background: "red",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        top: "-3px",
        right: "-3px",
        fontSize: "14px",
      }}
    >
      {likeItems.length}
    </span>
  );

  const cartCount = (
    <span
      style={{
        position: "absolute",
        width: "20px",
        height: "20px",
        borderRadius: "100px",
        background: "red",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        top: "-3px",
        right: "-3px",
        fontSize: "14px",
      }}
    >
      {items.length}
    </span>
  );

  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: "#fff",
        pt: "40px",
        pb: "16px",
        borderBottom: "1px solid rgba(0, 0, 0, 1) ",
      }}
      elevation={0}
    >
      <Container maxWidth="lg" sx={{ p: "0px" }}>
        <Toolbar sx={{ bgcolor: "#fff", p: "0px" }}>
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
              <Link  style ={{
                // width:"90px",
                }}component={"a"} to={page.path} color="#000" key={page.name}>
                {t(page.name)}
              </Link>
            ))}
          </Box>
          <Box sx={{ display: "flex", gap: "16px", alignItems: "center" }}>
            <Search />
            <IconButton component={Link} to="/favorite">
              <FaRegHeart /> {likeItems.length > 0 && favoriteCount}
            </IconButton>
            <IconButton
              component={Link}
              to="/cart"
              sx={{
                position: "relative",
              }}
            >
              <GrCart /> {items.length > 0 && cartCount}
            </IconButton>
            {user ? (
              <IconButton
                component={Link}
                to="/profile"
                sx={{
                  display: "block",
                  ml: "10px",
                  position: "relative",
                }}
                onClick={handleUserBlockToggle}
              >
                <VscAccount />
                {userBlockOpen && (
                  <Box
                    sx={{
                      position: "absolute",
                      width: "224px",
                      height: "108px",
                      borderRadius: "4px",
                      top: "40px",
                      right: "0",
                      p: 2,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      background: "rgba(125, 125, 125, 0.9)",
                      zIndex: 1,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        gap: "13px",
                        alignItems: "center",
                        mb: 1,
                        color: "#FAFAFA",
                      }}
                    >
                      <ImUser sx={{ mr: 1 }} />
                      <Typography
                        component={Link}
                        to="/my-account"
                        sx={{ color: "#fff !important" }}
                      >
                        Manage My Account
                      </Typography>
                    </Box>
                    <Box
                      onClick={() => {
                        dispatch(logoutUser(user));
                        localStorage.removeItem("token");
                        localStorage.removeItem("user");
                      }}
                      sx={{
                        display: "flex",
                        gap: "13px",
                        alignItems: "center",
                        color: "#FAFAFA",
                      }}
                    >
                      <BiLogOut sx={{ mr: 1 }} />
                      <Typography>Logout</Typography>
                    </Box>
                  </Box>
                )}
              </IconButton>
            ) : (
              <link to="signup" />
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
