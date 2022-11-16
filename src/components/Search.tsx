import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

interface ItemDataType {
  title: string;
  description: string;
  category: string;
  image: string;
  id: number;
  price: number;
}

export default function Search() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [searchArr, setSearchArr] = useState<ItemDataType[]>([]);
  const [searching, setSearching] = useState(false);
  const itemData = useSelector((state: any) => state.itemStore.all);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    const {
      target: { value },
    } = e;
    const arr = [];
    for (let i in itemData) {
      if (itemData[i].title.includes(value)) {
        arr.push(itemData[i]);
      }
    }
    setSearchArr(arr);
  };

  const onFocus = () => {
    setSearching(true);
  };

  const goLink = (id: any) => {
    setSearch("");
    setSearchArr([]);
    navigate(`/product/${id}`);
  };

  return (
    <div className="order-5">
      <input
        className="input w-56 h-12 px-4 rounded-lg focus:outline-none bg-gray-200"
        onChange={onChange}
        onFocus={onFocus}
        type={"search"}
        placeholder="Search"
        value={search || ""}
      />
      {searching && searchArr.length > 0 && (
        <ul
          tabIndex={0}
          className="menu w-56 max-h-96 overflow-y-scroll absolute right-15 top-14 text-base-content bg-white"
        >
          {searchArr.map((item) => (
            <li key={item.id}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  goLink(item.id);
                }}
              >
                <span className="text-left px-4 line-clamp-2">
                  {item.title}
                </span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
