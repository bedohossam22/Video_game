import image1 from "../Images/img/category-1.jpg";
import image2 from "../Images/img/category-2.jpg";
import image3 from "../Images/img/category-3.jpg";
import image4 from "../Images/img/category-4.jpg";
import image5 from "../Images/img/category-5.jpg";
import image6 from "../Images/img/category-6.jpg";
import image7 from "../Images/img/category-7.jpg";
import image8 from "../Images/img/category-8.jpg";
import image12 from "../Images/img/product-1-1.jpg";
import image13 from "../Images/img/product-1-2.jpg";
import image14 from "../Images/img/product-10-1.jpg";
import image16 from "../Images/img/product-10-2.jpg";
import image19 from "../Images/img/product-11-1.jpg";
import image20 from "../Images/img/product-11-2.jpg";
import image22 from "../Images/img/product-12-1.jpg";
import image21 from "../Images/img/product-12-2.jpg";

const images = [image1, image2, image3, image4, image5, image6, image7, image8];
export default images ;

const products = [image12, image13, image14, image16, image19, image20, image22, image21];
const mappedImages = products.map((image, index) => (
    <img id='ok' key={index} src={image} alt={`ss ${index + 1}`} />
  ));
export {products} ;;
export {mappedImages}