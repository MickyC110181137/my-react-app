import Image01 from "./images/Image01.jpg";
import Image02 from "./images/Image02.jpg";
import Image03 from "./images/Image03.jpg";
import Image04 from "./images/Image04.jpg";

const Getimage = (idx) => {
  switch (idx) {
    case 1:
      return Image01;
    case 2:
      return Image02;
    case 3:
      return Image03;
    case 4:
      return Image04;
  }
};
export default Getimage;
