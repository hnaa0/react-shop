import { useDispatch, useSelector } from "react-redux";
import CartEmpty from "../components/CartEmpty";
import CartList from "../components/CartList";

export default function Cart() {
  const cartItemsCount = useSelector(
    (state: any) => state.cartStore.totalCount
  );

  return (
    <div className="ml-12">
      <div className="text-sm breadcrumbs">
        <ul>
          <li>홈</li>
          <li>장바구니</li>
        </ul>
        <div className="mt-10">
          {cartItemsCount === 0 ? <CartEmpty /> : <CartList />}
        </div>
      </div>
    </div>
  );
}
