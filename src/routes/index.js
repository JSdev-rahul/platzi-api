import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRoutes } from "react-router-dom";
import PrivateRoutes from "./privateRoutes";
import PublicRoutes from "./publicRouts";
export default function HandleRoutes({ isLogdin }) {
  const [currentRoutes, setCurrentRoutes] = useState([]);
  const { user } = useSelector((state) => state?.auth);
  console.log("user", user?.role);
  useEffect(() => {
    if (isLogdin) {
      setCurrentRoutes([PrivateRoutes(user?.role)]);
    } else {
      setCurrentRoutes([PublicRoutes]);
    }
  }, [isLogdin]);

  return useRoutes(currentRoutes);
}
