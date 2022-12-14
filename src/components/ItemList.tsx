import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

interface ItemDataType {
  id: number;
  price: number;
  title: string;
  category: string;
  image: string;
}

interface propsType {
  category: string;
}

function Item({ data }: { data: ItemDataType }) {
  let img = new Image();
  img.src = data.image;
  return (
    <Link
      to={`/product/${data.id}`}
      className="card border border-gray-200 dark:border-gray-700 bg-base-100"
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
      <div className="card-body h-36 bg-gray-100 dark:bg-gray-900 rounded-b-2xl">
        <h2 className="card-title text-base line-clamp-2">{data.title}</h2>
        <p>${data.price}</p>
      </div>
    </Link>
  );
}

export default function ItemList({ category }: propsType) {
  interface State {
    itemStore: {
      [key: string]: ItemDataType[];
    };
  }

  const itemData = useSelector((state: State) => state.itemStore[category]);
  const categoryTitles: { [key: string]: string } = {
    fashion: "패션",
    accessory: "액세서리",
    digital: "디지털",
  };

  return (
    <div className="pb-8">
      <h1 className="text-center pt-16 mb-8 text-3xl lg:text-4xl font-bold">
        {categoryTitles[category]}
      </h1>
      <div className="px-8 lg:px-12">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {itemData.map((itemDataInfo, index) => {
            if (index < 4) {
              return <Item key={itemDataInfo.id} data={itemDataInfo} />;
            }
          })}
        </div>
      </div>
    </div>
  );
}
