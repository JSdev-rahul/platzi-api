import { Box } from "@mui/material";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
function CommonCarosle() {
  return (
    

    <Carousel showThumbs={false} autoPlay={true}>
      <div>
        <img
          style={{
            height: "85vh",
          }}
          src="https://cdn.pixabay.com/p
          hoto/2017/08/05/00/12/girl-2581913__340.jpg"
        />
        {/* <p className="legend">Legend 1</p> */}
      </div>
      <div>
        <img
          style={{
            height: "85vh",
          }}
          src="https://cdn.pixabay.com/photo/2020/03/27/17/03/shopping-4974313__340.jpg"
        />
        {/* <p className="legend">Legend 2</p> */}
      </div>
      <div>
        <img
          style={{
            height: "85vh",
          }}
          src="https://cdn.pixabay.com/photo/2017/12/26/09/15/woman-3040029__340.jpg"
        />
        {/* <p className="legend">Legend 3</p> */}
      </div>
    </Carousel>
 
  );
}

export default CommonCarosle;
