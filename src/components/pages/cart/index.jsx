import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
  removeItem,
} from "../../../redux/slice/cart";

function UserCart() {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);
  console.log("cart", cart);
  return (
    <>
      <Box sx={{mt:10}}>
        <Grid
          container
          // spacing={2}
          sx={{
            my: 2,
            mx: 5,
            rowGap: 2,
            // columnGap: 1,
            display: "flex",
            flexDirection: {
              xs: "column",
              sm: "column",
              xl: "row",
              xxl: "row",
              md: "row",
            },
            // alignContent:"center",
            // justifyContent:"center",
          }}
        >
          {cart?.map((item) => {
            return (
              <Grid xs={12} sm={6} md={4} xl={3} xxl={4}>
                <Card sx={{ maxWidth: 400, Height: 400 }}>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={item?.category?.image}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="body1" component="div">
                      {item?.category?.name}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                      {item?.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item?.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">
                      Price  {item?.price * item?.quantity}
                    </Button>
                    <Box
                      sx={{
                        p: 2,
                        justifyItems: { md: "center" },
                        alignItems: "center",
                        gap: 2,
                        display: "flex",
                      }}
                    >
                      {" "}
                      <Button
                        onClick={() => dispatch(decrementQuantity(item?.id))}
                        variant="contained"
                      >
                        -
                      </Button>
                      <Typography>{item?.quantity}</Typography>
                      <Button
                        onClick={() => dispatch(incrementQuantity(item?.id))}
                        variant="contained"
                      >
                        +
                      </Button>
                      <Button
                        onClick={() => dispatch(removeItem(item?.id))}
                        variant="outlined"
                        startIcon={<DeleteIcon />}
                      >
                        Delete
                      </Button>
                    </Box>
                    {/* <Button size="small">Quantity : {item?.quantity}</Button> */}
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
          {
            cart.length==0&& <>
           <Box sx={{
            display:"flex",
            alignSelf:"center",
            justifyContent:"center"
           }}  >

           <h1  >No item available in your cart</h1>
           </Box>
          
            </>
          }
        </Grid>
      </Box>
    </>
  );
}

export default UserCart;
