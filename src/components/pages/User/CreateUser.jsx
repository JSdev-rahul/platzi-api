import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { toHaveStyle } from "@testing-library/jest-dom/dist/matchers";
import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { ROUTES_DEFINATION } from "../../../constant/routes";
import {
  createUserThunk,
  getUserDetailsThunk,
} from "../../../redux/asyncThunk/user.asyncThunk";
import { ToastMessage } from "../../atoms/toaster";

function CreateUser({ formType }) {
  console.log("formType", formType);
  const params = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [initialValues, setInitialValues] = useState({
    name: "",
    email: "",
    avatar:
      "https://images.unsplash.com/photo-1606115915090-be18fea23ec7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
    password: "",
    role: "customer",
  });

  const formik = useFormik({
    initialValues,
    // enableReinitialize: true,
    enableReintialize:true,
    onSubmit: (values) => {
      dispatch(createUserThunk({ ...values }))
        .then((res) => {
          ToastMessage("success", "success", "User Created Successfull");
          navigate(ROUTES_DEFINATION.USER_LIST);
        })
        .catch((err) => {
          console.log("err", err);
        });
    },
  });

  useEffect(() => {
    if (formType == "update") {
      const { id } = params;
      dispatch(getUserDetailsThunk({ id })).then((res) => {
        const { payload } = res;
        console.log("res", payload);
        setInitialValues({...initialValues,name:payload?.name} );
        formik.values({...payload})
      });
    }
  }, [params]);
console.log("initialValue",initialValues)
  const handleImageChange = (e) => {
    let reader = new FileReader();
    let file = e.target.files[0];

    console.log(file);
    reader.onloadend = () => {
      formik.values.avatar = reader.result;
    };

    reader.readAsDataURL(file);
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        my: { xs: 0, sm: 0, md: 10, xl: 10, xxl: 10 },
      }}
    >
      <Paper elevation={5} sx={{}}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mt: 1,
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: 30, sm: 50, md: 60 },
            }}
          >
            Create New User
          </Typography>
        </Box>
        <form onSubmit={formik.handleSubmit}>
          <Box
            gap={2}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              p: 8,
            }}
          >
            <Box>
              <TextField
                value={formik.values.name || initialValues?.name}
                name="name"
                onChange={formik.handleChange}
                id="outlined-basic"
                label="name"
                variant="outlined"
              />
              <TextField
                sx={{
                  ml: { xs: 0, sm: 2, md: 4, xxl: 4, xl: 4 },
                  mt: { xs: 2, sm: 2, md: 0, xxl: 0, xl: 0 },
                }}
                value={formik.values.email}
                name="email"
                onChange={formik.handleChange}
                id="outlined-basic"
                label="email"
                variant="outlined"
              />
            </Box>
            <Box>
              <TextField
                value={formik.values.password}
                name="password"
                onChange={formik.handleChange}
                id="outlined-basic"
                label="password"
                variant="outlined"
              />
              <FormControl
                sx={{
                  minWidth: { xs: 230, sm: 260, md: 260, xl: 260, xxl: 260 },
                }}
                size="large"
              >
                <InputLabel
                  sx={{
                    ml: { xs: 0, sm: 4, md: 4, xl: 4, xxl: 4 },
                    mt: { xs: 2, sm: 0, md: 0, xl: 0, xxl: 0 },
                  }}
                  id="demo-simple-select-standard-label"
                >
                  role
                </InputLabel>
                <Select
                  sx={{
                    ml: { xs: 0, sm: 2, md: 4, xxl: 4, xl: 4 },
                    mt: { xs: 2, sm: 2, md: 0, xxl: 0, xl: 0 },
                  }}
                  labelId="demo-simple-select-standard-label"
                  id="value"
                  name="role"
                  onChange={formik.handleChange}
                  value={formik.values.role}
                  label="role"
                >
                  <MenuItem value={"customer"}>Customer</MenuItem>
                  <MenuItem value={"admin"}>Admin</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Box>
              <Button type="submit">submit</Button>
              <Button type="button">cancel</Button>
            </Box>
          </Box>
        </form>
      </Paper>
    </Box>
  );
}

export default CreateUser;
