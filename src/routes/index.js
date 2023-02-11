import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRoutes } from "react-router-dom";
import PrivateRoutes from "./privateRoutes";
import PublicRoutes  from "./publicRouts";
export default function HandleRoutes({ isLogdin }) {
  const [currentRoutes, setCurrentRoutes] = useState([]);
  useEffect(() => {
    if (isLogdin) {
      setCurrentRoutes([PrivateRoutes]);
    } else {
      setCurrentRoutes([PublicRoutes]);
    }
  }, [isLogdin]);

  return useRoutes(currentRoutes)
}
