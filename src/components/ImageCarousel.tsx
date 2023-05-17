import React, { useState, useEffect } from "react";

import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { motion } from "framer-motion";

import { Grid, Card, CardMedia, Typography, IconButton } from "@mui/material";
import {
  PlayArrow,
  Pause,
  NavigateBefore,
  NavigateNext,
} from "@mui/icons-material";

export interface ImageData {
  src: string;
  description: string;
}

interface ImageCarouselProps {
  images: ImageData[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null);
  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
  };

  const togglePlaying = () => {
    setPlaying(!playing);
  };
 

  useEffect(() => {
    if (playing) {
      const timer = setTimeout(handleNext, 3000);
      setTimerId(timer);
    } else {
      clearTimeout(timerId!);
      setTimerId(null);
    }

    return () => {
      clearTimeout(timerId!);
    };
  }, 
  [playing, currentIndex]);

  return (
    <Grid
      container
      spacing={2}
      sx={{ padding: "16px", backgroundColor: "background.paper" }}
    >
      <Grid item xs={12} md={8} sx={{ marginBottom: "16px" }}>
        <motion.div {...fadeIn}>
          <Card style={{borderRadius:"50px"}}>
            <CardMedia
              component="img"
              alt={images[currentIndex].description}
              height="450"
              image={images[currentIndex].src} style={{borderRadius:"50px"}}
            />
          </Card>
        </motion.div>
      </Grid>
      <Grid item xs={12} md={4} sx={{ marginBottom: "16px" }}>
        <motion.div {...fadeIn}>
          <Typography variant="h6" className="gradient-text" style={{marginTop:"50px"}}>
            {images[currentIndex].description}
          </Typography>
        </motion.div>
      </Grid>
      <Grid item xs={12} md={8} sx={{ marginBottom: "16px" }}>
        <Carousel
          additionalTransfrom={0}
          arrows={true}
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 5,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 3,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 4,
              partialVisibilityGutter: 30,
            },
          }}
          
        >
           {images.map((image, index) => (
    <div
      key={index}
      onClick={() => handleThumbnailClick(index)}
      style={{
        width: 150,
        height: 150,
        filter: currentIndex === index ? "none" : "grayscale(100%)",
        cursor: "pointer",
        overflow: "hidden", // Add this to hide the overflowing part of the image
        borderRadius: "15px", // Optional: Add this to round the edges of the thumbnail images
      }}
    >
      <img
        src={image.src}
        alt={image.description}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover", // Add this to make the image cover the thumbnail card
        }}
      />
    </div>
  ))}
        </Carousel>
      </Grid>
      <Grid item xs={12} md={4}>
        <motion.div {...fadeIn}>
          <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={2}
            style={{marginTop:"20px"}}
          >
            <Grid item>
  <IconButton
    onClick={handlePrev}
    className="gradient-button"
     // Change this value to your desired color
  >
    <NavigateBefore style={{color:"red",fontSize:"4rem"}}/>
  </IconButton>
</Grid>
<Grid item>
  <IconButton
    onClick={togglePlaying}
    className="gradient-button"
     // Change this value to your desired color
  >
    {playing ? (
      <Pause style={{color:"blue",fontSize:"4rem"}} />
    ) : (
      <PlayArrow style={{color:"blue",fontSize:"4rem"}} />
    )}
  </IconButton>
</Grid>
<Grid item>
  <IconButton
    onClick={handleNext}
    className="gradient-button"
     // Change this value to your desired color
  >
    <NavigateNext style={{color:"red",fontSize:"4rem"}} />
  </IconButton>
</Grid>
          </Grid>
        </motion.div>
      </Grid>
    </Grid>
  );
};

export default ImageCarousel;
