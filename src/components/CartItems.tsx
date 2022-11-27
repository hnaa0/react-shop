import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { cartActions, CartItemsType } from "../store/cart";

type PropsType = {
  data: CartItemsType;
} & typeof defaultProps;

const defaultProps = {
  data: [],
};

export default function CartItems({ data }: PropsType) {
  const dispatch = useDispatch();
  const cartItems = useSelector(
    (state: any) => state.cartStore.items[`${data.id}`]
  );

  const reduceFromCart = () => {
    dispatch(cartActions.removeCartItem({ id: data.id }));
  };

  const addToCart = () => {
    dispatch(cartActions.addCartItem({ id: data.id }));
  };

  return (
    <div className="lg:flex lg:items-center mt-4 px-2 lg:px-0">
      <Link to={`/product/${data.id}`}>
        <figure className="w-56 min-w-full flex-shrink-0 rounded-2xl overflow-hidden px-4 py-4 bg-white">
          <img
            src={data.image}
            alt="상품 이미지"
            className="object-contain w-full h-48"
          />
        </figure>
      </Link>
      <div className="card-body px-1 lg:px-12">
        <h2 className="card-title text-lg lg:text-xl">{data.title}</h2>
        <p className="mt-1 lg:mt-2 mb-4 text-2xl lg:text-3xl">${data.price}</p>
        <div className="card-actions">
          <div className="btn-group">
            <button className="btn btn-primary" onClick={reduceFromCart}>
              -
            </button>
            <button className="btn btn-ghost no-animation">
              {cartItems.count}
            </button>
            <button className="btn btn-primary" onClick={addToCart}>
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
