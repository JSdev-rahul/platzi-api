import { Box, Button, Grid, Paper, Skeleton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetailsThunk } from "../../../redux/asyncThunk/product.asyncThunk";

function ViewProduct() {
  const dispatch = useDispatch();
  const params = useParams();
  const [productDeatail, setProductDetail] = useState([]);

  useEffect(() => {
    if (params) {
      dispatch(getProductDetailsThunk({ id: parseInt(params?.id) }))
        .unwrap()
        .then((res) => {
          setProductDetail(res);
        });
    }
  }, [params]);
  return (
    <>
      <Box>
        <Grid sx={{ mt: 2, mx: { md: 5, xl: 5, xxl: 5, xs: 2 }, mb: 2 }}>
          <Paper
            sx={{
              boxShadow: {
                xs: "none",
                md: "0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)",
              },
            }}
          >
            <Grid
              sx={{
                flexGrow: 1,
                display: {
                  md: "flex",
                  xs: "flex",
                  sm: "flex",
                  xl: "flex",
                  xxl: "flex",
                },
                flexDirection: {
                  xs: "column",
                  sm: "column",
                  xl: "row",
                  xxl: "row",
                  md: "row",
                },
                overflow: "none",
              }}
              p={4}
            >
              <Box>
                {productDeatail?.category?.image ? (
                  <img
                    style={{
                      // width: { xs: "20px" },
                      width: "100%",
                      height: "100%",
                      borderRadius: "10px",
                    }}
                    src={productDeatail?.category?.image}
                    alt="product-thumbnail"
                  ></img>
                ) : (
                  <Skeleton
                    sx={{
                      width: { md: 500, sm: 500, xl: 500, xxl: 500, xs: 300 },
                      height: { md: 400, sm: 400, xl: 400, xxl: 400, xs: 200 },
                    }}
                    variant="rounded"
                  />
                )}
              </Box>
              {productDeatail ? (
                <Box
                  sx={{
                    ml: "auto",
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    sx={{
                      ml: 2,
                      alignSelf: "flex-start",
                      color: "red",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: 6,
                    }}
                  >
                    {productDeatail?.category?.name}
                  </Typography>
                  <Typography
                    sx={{
                      alignSelf: "flex-start",
                      ml: 2,
                      fontWeight: 700,
                    }}
                    variant="h3"
                  >
                    {productDeatail?.title}
                  </Typography>
                  <Typography
                    variant="overline"
                    sx={{
                      alignSelf: "flex-start",
                      ml: 2,
                      mt: 3,
                    }}
                  >
                    {productDeatail?.description}
                  </Typography>

                  <Box
                    sx={{
                      ml: 2,
                      mt: 3,
                      alignSelf: "flex-start",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                      }}
                    >
                      <Typography variant="h4">
                        ${productDeatail?.price}
                      </Typography>
                      <Button
                        sx={{
                          ml: 2,
                          color: "red",
                          borderColor: "red",
                        }}
                        variant="outlined"
                      >
                        50%
                      </Button>
                    </Box>
                    <Box>
                      <Typography variant="subtitle2">$250</Typography>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      alignSelf: {
                        xs: "center",
                        sm: "flex-start",
                        md: "flex-start",
                        xl: "flex-start",
                        xxl: "flex-start",
                      },

                      alignItems: "center",
                      display: {
                        md: "flex",
                        sm: "flex",
                        xs: "flex",
                        xl: "flex",
                        xxl: "flex",
                      },
                      flexDirection: {
                        md: "row",
                        xs: "column",
                        xl: "row",
                        xxl: "row",
                        md: "row",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        p: 2,
                        justifyItems: { md: "center" },
                        alignItems: "center",
                        gap: 2,
                        display: "flex",
                      }}
                    >
                      <Button variant="contained">-</Button>
                      <Typography>{1}</Typography>

                      <Button variant="contained">+</Button>
                    </Box>
                    <Box>
                      <Button
                        sx={{
                          display: { xs: "flex" },
                        }}
                        variant="contained"
                      >
                        Add to cart
                      </Button>
                    </Box>
                  </Box>
                </Box>
              ) : (
                <Box>
                  <Skeleton
                    sx={{
                      width: { md: 500, sm: 500, xl: 500, xxl: 500, xs: 300 },
                      height: { md: 400, sm: 400, xl: 400, xxl: 400, xs: 60 },
                    }}
                    variant="rounded"
                  />
                  <Skeleton
                    sx={{
                      width: { md: 500, sm: 500, xl: 500, xxl: 500, xs: 300 },
                      height: { md: 400, sm: 400, xl: 400, xxl: 400, xs: 600 },
                    }}
                    variant="rounded"
                  />
                </Box>
              )}
            </Grid>
          </Paper>
        </Grid>
      </Box>
    </>
  );
}

export default ViewProduct;
