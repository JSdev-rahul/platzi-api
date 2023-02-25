import AbouteUs from "../components/pages/AbouteUs";
import UserCart from "../components/pages/cart";
import ProductListPage from "../components/pages/ProductList";
import ViewProduct from "../components/pages/ProductList/ViewProduct";
import UserListPage from "../components/pages/User";
import CreateUser from "../components/pages/User/CreateUser";
import { ROUTES_DEFINATION } from "../constant/routes";
import Navbar from "../layout/Navbar";
const productListPage = {
  path: ROUTES_DEFINATION.PRODUCT_LIST,
  title: "productListPage",
  children: [
    {
      path: ROUTES_DEFINATION.PRODUCT_LIST,
      title: "productListPage",
      element: <ProductListPage />,
    },
    {
      path: ROUTES_DEFINATION.VIEW_PRODUCT,
      title: "viewSigleProduct",
      element: <ViewProduct />,
    },
  ],
};

const abouteUs = {
  path: ROUTES_DEFINATION.ABOUTE_US,
  title: "aboute-us",
  element: <AbouteUs />,
};
const cart = {
  path: ROUTES_DEFINATION.CART,
  title: "cart",
  element: <UserCart />,
};
const userRoutes = {
  path: ROUTES_DEFINATION.USER_LIST,
  title: "userListPage",
  children: [
    {
      path: ROUTES_DEFINATION.USER_LIST,
      title: "userListPage1",
      element: <UserListPage />,
    },
    {
      path: ROUTES_DEFINATION.CREATE_USER_PAGE,
      title: "createUserPage",
      element: <CreateUser formType="create" />,
    },
    {
      path: ROUTES_DEFINATION.UPDATE_USER,
      title: "createUserPage",
      element: <CreateUser formType="update" />,
    },
  ],
};
const roleBasedRoutes = (role = "") => {
  console.log("role", role);
  const PrivateRoutes = {
    element: <Navbar />,
    children: [
      {
        path: ROUTES_DEFINATION.PRODUCT_LIST,
        title: "pageNotFound",
        element: <ProductListPage />,
      },
    ],
  };
  switch (role) {
    case "admin":
      PrivateRoutes.children.push(userRoutes, productListPage);
      break;
    case "customer":
      PrivateRoutes.children.push(productListPage, abouteUs, cart);
      break;
  }

  return PrivateRoutes;
};
export default roleBasedRoutes;
