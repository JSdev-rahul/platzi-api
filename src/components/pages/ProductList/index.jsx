import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategoryListAsncThunk,
  getProductListAsyncThunk,
} from "../../../redux/asyncThunk/product.asyncThunk";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  Skeleton,
} from "@mui/material";
import CommonCarosle from "../../common/carosole";
import { useNavigate } from "react-router-dom";
import { replaceUrl } from "../../../redux/constant/reduxHelper";
import { ROUTES_DEFINATION } from "../../../constant/routes";

function ProductListPage() {
  const { list, categoryList } = useSelector((state) => state?.product);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [pageData, setPageData] = useState({
    offset: 10,
    limit: 10,
    categoryId: "",
  });
  useEffect(() => {
    dispatch(getProductListAsyncThunk(pageData));
  }, [pageData]);
  useEffect(() => {
    dispatch(getCategoryListAsncThunk());
  }, []);
  const [selectedCategory, setSelectedCategory] = useState("");
  const handleChange = (e, value) => {
    setPageData({
      ...pageData,
      offset: 10 * value,
      limit: 10 * value,
      categoryId: selectedCategory,
    });
  };

  const handleFilterChange = (e, value) => {
    setSelectedCategory(e.target.value);
    setPageData({
      ...pageData,
      offset: 10,
      limit: 10,
      categoryId: e.target.value,
    });
  };

  return (
    <>
      <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
        <CommonCarosle />
      </Box>
      <Box sx={{ mt: 2, mb: 2, mx: 2 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectedCategory}
            label="category"
            onChange={handleFilterChange}
          >
            {categoryList?.map((item) => {
              return (
                <MenuItem key={item.id} value={item?.id}>
                  {item?.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Box>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 0 }}>
        {list?.map((item) => {
          return (
            <Card sx={{ maxWidth: 365, mt: 3, ml: 5 }}>
              {item ? (
                <CardMedia
                  sx={{ height: 140 }}
                  image={item?.category.image}
                  title="green iguana"
                />
              ) : (
                <Skeleton variant="rectangular" width={365} height={140} />
              )}
              {item ? (
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item?.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              ) : (
                <Box sx={{ pt: 0.5 }}>
                  <Skeleton variant="rectangular" />
                  <Skeleton variant="rectangular" width="60%" />
                </Box>
              )}
              <CardActions>
                <Button
                  onClick={() =>
                    navigate(
                      replaceUrl(ROUTES_DEFINATION.VIEW_PRODUCT, {
                        id: item?.id,
                      })
                    )
                  }
                  size="small"
                >
                  View
                </Button>
                <Button size="small">Add to cart</Button>
              </CardActions>
            </Card>
          );
        })}
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 2, mb: 3 }}>
        <Pagination
          size="large"
          onChange={handleChange}
          count={20}
          color="primary"
        />
      </Box>
    </>
  );
}

export default ProductListPage;
