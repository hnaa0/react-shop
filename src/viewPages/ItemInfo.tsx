import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { cartActions } from "../store/cart";

interface ItemDataType {
  title: string;
  description: string;
  category: string;
  image: string;
  id: number;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
}

interface State {
  itemStore: {
    [key: string]: ItemDataType[];
  };
}

const getCategory = (category: string) => {
  let result = "";

  switch (category) {
    case "men's clothing":
      result = "패션";
      break;
    case "women's clothing":
      result = "패션";
      break;
    case "jewelery":
      result = "액세서리";
      break;
    case "electronics":
      result = "디지털";
      break;
    default:
      break;
  }
  return result;
};

const getRateStar = (rateNumber: number) => {
  const stars = [];
  let starsCount = Math.floor(rateNumber * 2);

  for (let i = 0; i < starsCount; i++) {
    if (i % 2 === 0) {
      stars.push(
        <input
          key={i}
          type="radio"
          name="rating-10"
          className="bg-yellow-400 cursor-default mask mask-star-2 mask-half-1"
          disabled
          checked
        />
      );
    } else {
      stars.push(
        <input
          key={i}
          type="radio"
          name="rating-10"
          className="bg-yellow-400 cursor-default mask mask-star-2 mask-half-2"
          disabled
          checked
        />
      );
    }
  }

  if (rateNumber < 5) {
    for (let i = starsCount; i < 10; i++) {
      if (i % 2 === 0) {
        stars.push(
          <input
            key={i}
            type="radio"
            name="rating-10"
            className="bg-yellow-400 cursor-default mask mask-star-2 mask-half-1"
            disabled
          />
        );
      } else {
        stars.push(
          <input
            key={i}
            type="radio"
            name="rating-10"
            className="bg-yellow-400 cursor-default mask mask-star-2 mask-half-2"
            disabled
          />
        );
      }
    }
  }

  return stars;
};

export default function ItemInfo() {
  const params = useParams();
  const id = Number(params.pid);
  const itemData = useSelector((state: State) => state.itemStore.all[id - 1]);
  const category = getCategory(itemData?.category);
  const title = itemData?.title;
  const description = itemData?.description;
  const image = itemData?.image;
  const price = itemData?.price;
  const rate = itemData?.rating.rate;
  const count = itemData?.rating.count;

  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(cartActions.addCartItem({ id: id }));
  };

  return (
    <section className="main px-4 pt-5 pb-8">
      <section className="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
        <div>
          <div className="text-sm breadcrumbs">
            <ul>
              <li>{category}</li>
              <li>{title}</li>
            </ul>
          </div>
          <div className="lg:flex lg:items-center mt-6 md:mt-14 px-2 lg:px-0">
            <figure className="flex-shrink-0 rounded-2xl overflow-hidden px-4 py-4 bg-white view_image">
              <img
                src={image}
                alt={title}
                className="object-contain w-full h-72"
              />
            </figure>
            <div className="card-body px-1 lg:px-12">
              <h2 className="card-title">
                {title}
                <span className="badge badge-accent ml-2 text-white">NEW</span>
              </h2>
              <p>{description}</p>
              <div className="flex items-center mt-3">
                <div className="rating rating-half">{getRateStar(rate)}</div>
                <div className="ml-2">
                  {rate} / {count} 참여
                </div>
              </div>
              <p className="mt-2 mb-4 text-3xl">${price}</p>
              <div className="card-actions">
                <button className="btn btn-primary" onClick={addToCart}>
                  장바구니에 담기
                </button>
                <Link className="btn btn-outline ml-1" to={"/cart"}>
                  장바구니로 이동
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
