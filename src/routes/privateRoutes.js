// import SignIn from "../components/pages/login";
import AbouteUs from "../components/pages/AbouteUs";
import ProductListPage from "../components/pages/ProductList";
import ViewProduct from "../components/pages/ProductList/ViewProduct";
import UserListPage from "../components/pages/User";
import CreateUser from "../components/pages/User/CreateUser";
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
    {
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
    },
  ],
};

// return PrivateRoutes;
// };
export default PrivateRoutes;
