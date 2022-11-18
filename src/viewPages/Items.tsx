import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import styled from "styled-components";

interface ItemDataType {
  id: number;
  price: number;
  title: string;
  category: string;
  image: string;
}

function Item({ data }: { data: ItemDataType }) {
  let img = new Image();
  img.src = data.image;
  return (
    <Link
      to={`/product/${data.id}`}
      className="card w-72 bg-base-100 border border-gray-200 dark:border-gray-700"
    >
      <figure className="h-80 bg-white">
        {img.width < img.height ? (
          <img
            src={data.image}
            alt={data.title}
            className="max-h-[50%] hover:scale-125 duration-300"
          />
        ) : (
          <img
            src={data.image}
            alt={data.title}
            className="max-w-[50%] hover:scale-125 duration-300"
          />
        )}
      </figure>
      <div className="card-body h-40 bg-gray-100 dark:bg-gray-900 rounded-b-2xl">
        <h2 className="card-title text-base">{data.title}</h2>
        <p>${data.price}</p>
      </div>
    </Link>
  );
}

export default function Items({ category }: any) {
  const [categoryName, setCategoryName] = useState("");
  const [items, setItems] = useState<ItemDataType[]>();

  interface State {
    itemStore: {
      [key: string]: ItemDataType[];
    };
  }

  const itemData = useSelector((state: State) => state.itemStore[category]);
  useEffect(() => {
    if (category === "accessory") {
      setCategoryName("액세서리");
    } else if (category === "digital") {
      setCategoryName("디지털");
    } else if (category === "fashion") {
      setCategoryName("패션");
    } else {
      <Navigate to="*" replace={true} />;
    }
  });

  useEffect(() => {
    setItems(itemData);
  }, [categoryName]);

  return (
    <section className="main">
      <section className="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
        <div className="text-sm breadcrumbs">
          <ul>
            <li>홈</li>
            <li>{categoryName}</li>
          </ul>
        </div>
        <article className="pt-2 lg:pt-4 pb-4 lg:pb-8 px-4 xl:px-2 mb-20 xl:container mx-auto">
          <h2 className="mb-5 lg:mb-8 text-3xl lg:text-4xl text-center font-bold">
            {categoryName}
          </h2>
          <div
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 item_list"
            data-scroll="false"
          >
            {itemData.map((itemDataInfo) => {
              return <Item key={itemDataInfo.id} data={itemDataInfo} />;
            })}
          </div>
        </article>
      </section>
    </section>
  );
}
