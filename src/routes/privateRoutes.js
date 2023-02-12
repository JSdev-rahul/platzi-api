// import SignIn from "../components/pages/login";
import AbouteUs from "../components/pages/AbouteUs";
import ProductListPage from "../components/pages/ProductList";
import ViewProduct from "../components/pages/ProductList/ViewProduct";
import { ROUTES_DEFINATION } from "../constant/routes";
import Navbar from "../layout/Navbar";

// const roleBasedRoutes = () => {
const PrivateRoutes = {
  element: <Navbar />,
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
    {
      path: ROUTES_DEFINATION.ABOUTE_US,
      title: "aboute-us",
      element: <AbouteUs />,
    },
  ],
};

// return PrivateRoutes;
// };
export default PrivateRoutes;
