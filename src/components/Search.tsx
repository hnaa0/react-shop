import React, { useState, useRef } from "react";
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
  const searchBar = useRef<HTMLInputElement>(null);

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

  const toggleSearch = () => {
    searchBar?.current?.classList.toggle("-z-10");
    searchBar?.current?.classList.toggle("translate-y-full");
    searchBar?.current?.classList.toggle("!opacity-100");
  };

  return (
    <div className="order-5">
      <button
        className="btn btn-ghost btn-square sm:hidden w-11"
        onClick={toggleSearch}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
      <input
        className="input absolute top-4 sm:top-0 right-0 sm:z-100 sm:static w-screen sm:w-full h-12 px-4 -z-10 opacity-0 sm:opacity-100 rounded-none sm:rounded-lg focus:outline-none dark:text-white bg-gray-200 dark:bg-gray-600"
        onChange={onChange}
        onFocus={onFocus}
        type="text"
        placeholder="Search"
        value={search || ""}
        ref={searchBar}
      />
      {searching && search.length > 0 && (
        <ul
          tabIndex={0}
          className="menu w-full sm:w-56 max-h-36 sm:max-h-96 overflow-y-scroll absolute right-0 sm:right-10 top-28 sm:top-16 text-base-content bg-white dark:bg-gray-600 dark:text-white flex-row"
        >
          {searchArr.map((item) => (
            <li key={item.id} className="w-full">
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
