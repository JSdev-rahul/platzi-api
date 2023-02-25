import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Outlet, useNavigate } from "react-router-dom";
import { ROUTES_DEFINATION } from "../constant/routes";
import { useDispatch, useSelector } from "react-redux";
import { removeToken } from "../redux/slice/loginSlice";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Badge } from "@mui/material";
import { styled } from "@mui/material/styles";
// import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const adminroutes = [
  {
    name: "User",
    path: ROUTES_DEFINATION.USER_LIST,
  },
  { name: "Product", path: ROUTES_DEFINATION.PRODUCT_LIST },
];

const customerRoutes = [
  {
    name: "Home",
    path: "#",
  },
  // {
  //   name: "User",
  //   path: ROUTES_DEFINATION.USER_LIST,
  // },
  {
    name: "Aboute us",
    path: ROUTES_DEFINATION.ABOUTE_US,
  },
  {
    name: "Terms & Conditon",
    path: "#",
  },
  { name: "Product", path: ROUTES_DEFINATION.PRODUCT_LIST },
];

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Navbar() {
  const { cart } = useSelector((state) => state?.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { role, avatar, name } = useSelector((state) => state?.auth?.user);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 3,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));
  return (
    <>
      <AppBar sx={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex:"999px",
        
      }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Platzi
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
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Platzi
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {role == "customer"
                ? customerRoutes?.map((item, index) => (
                    <Button
                      key={index}
                      onClick={() => navigate(item?.path)}
                      sx={{ my: 2, color: "white", display: "block" }}
                    >
                      {item?.name}
                    </Button>
                  ))
                : adminroutes?.map((item, index) => (
                    <Button
                      key={index}
                      onClick={() => navigate(item?.path)}
                      sx={{ my: 2, color: "white", display: "block" }}
                    >
                      {item?.name}
                    </Button>
                  ))}
              <IconButton
                onClick={() => navigate(ROUTES_DEFINATION.CART)}
                aria-label="cart"
              >
                <StyledBadge badgeContent={cart?.length} color="secondary">
                  <AddShoppingCartIcon />
                </StyledBadge>
              </IconButton>
              <Button
                onClick={() => dispatch(removeToken())}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                LogOut
              </Button>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src={avatar} />
                  <Box>
                    <Typography
                      sx={{ ml: 2, color: "white", display: "block" }}
                    >
                      {role}
                    </Typography>
                    <Typography
                      sx={{ ml: 2, color: "white", display: "block" }}
                    >
                      {name}
                    </Typography>
                  </Box>
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
    </>
  );
}
export default Navbar;
