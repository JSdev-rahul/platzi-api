import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductListAsyncThunk } from "../../../redux/asyncThunk/product.asyncThunk";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Grid, Pagination, Skeleton } from "@mui/material";
import CommonCarosle from "../../common/carosole";
import { width } from "@mui/system";

function ProductListPage() {
  const { list } = useSelector((state) => state?.product);

  const dispatch = useDispatch();
  const [pageData, setPageData] = useState({
    offset: 0,
    limit: 10,
  });
  useEffect(() => {
    dispatch(getProductListAsyncThunk(pageData));
  }, [pageData]);
  const handleChange = (e, value) => {
    setPageData({
      ...pageData,
      offset: pageData.offset + 10,
      limit: 10 * value,
    });
    // console.log("eee",e)
    // console.log("value",value)
  };
  console.log("pageData", pageData);
  return (
    <>
      <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
        <CommonCarosle />
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
                  <Skeleton />
                  <Skeleton width="60%" />
                </Box>
              )}
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
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
