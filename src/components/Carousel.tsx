import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";

import DigitalImg from "../assets/carouselImgs/digital.jpeg";
import FashionImg from "../assets/carouselImgs/fashion.jpeg";
import GroceryImg from "../assets/carouselImgs/grocery.jpeg";

interface CarouselItemsType {
  path: string;
  title: string;
  image: string;
  comment: string;
}

function CarouselItems({ path, title, image, comment }: CarouselItemsType) {
  return (
    <div className="lg:h-162 w-full min-w-96 pt-16">
      <img src={image} />
      <div className="absolute transform -translate-y-1/3 top-1/2 lg:left-20 left-4">
        <div className="text-white text-left">
          <h1 className="lg:text-3xl text-2xl font-bold">{title}</h1>
          <p className="pb-6 lg:text-lg text-md pt-2 break-all">{comment}</p>
          <Link to={path}>
            <button className="btn btn-active text-xs btn-sm lg:btn-md">
              바로가기
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-right ml-1"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function HomeCarousel() {
  return (
    <Carousel
      showArrows={true}
      showStatus={true}
      showThumbs={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={3500}
    >
      <CarouselItems
        path={"/digital"}
        title={"신속한 업무처리!"}
        image={DigitalImg}
        comment={"다양한 디지털 상품을 둘러보세요."}
      />
      <CarouselItems
        path={"/fashion"}
        title={"물빠진 청바지!"}
        image={FashionImg}
        comment={"이제 막 도착한 패션 청바지를 구경해 보세요."}
      />
      <CarouselItems
        path={"*"}
        title={"신선한 상품"}
        image={GroceryImg}
        comment={"농장 직배송으로 더욱 신선한 식료품을 만나보세요."}
      />
    </Carousel>
  );
}
