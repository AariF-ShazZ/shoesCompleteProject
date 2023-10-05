import { Box, useBreakpointValue } from '@chakra-ui/react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import image1 from "../Images/image_1.jpg"
import image2 from "../Images/image_2.jpg"
import image3 from "../Images/image_3.jpg"
import image4 from "../Images/image_4.jpg"
import image5 from "../Images/image_5.jpg"

const HomeSlider = () => {
  const sliderStyle = {
    height: '400px',
    borderRadius: '20px'
  };

  const images = [image4, image1, image2, image3, image5];
  const responsiveSliderHeight = useBreakpointValue({
    base: '200px',
    sm: '300px',
    md: '400px',
    lg: '500px',
  });

  return (
    <Box backgroundColor={""}>
      <AwesomeSlider style={{ ...sliderStyle, height: responsiveSliderHeight }} backgroundColor={""}>
        {images.map((ele, i) => (
          <Box key={i} h={"100px"} backgroundColor={"#f6f7f9"} data-src={ele} />
        ))}
      </AwesomeSlider>
    </Box>
  );
};

export default HomeSlider;
