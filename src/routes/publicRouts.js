import SignIn from "../components/pages/login";
import { ROUTES_DEFINATION } from "../constant/routes";

 const PublicRoutes = {
  element: <SignIn />,
  children: [
    {
      path:ROUTES_DEFINATION.LOG_IN ,
      title: "loginpage",
      element: <SignIn />,
    },
    {
      path: "*",
      title: "pageNotFounds",
      element: <SignIn />,
    },
  ],
};
export default PublicRoutes