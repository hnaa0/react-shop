import AppRouter from "./AppRouter";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import itemStore from "./store/item";
import styled from "styled-components";

interface ItemData {
  id: number;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
  title: string;
  description: string;
  category: string;
  image: string;
}

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    let all: ItemData[] = [];
    let accessory: ItemData[] = [];
    let digital: ItemData[] = [];
    let fashion: ItemData[] = [];

    async function getItems() {
      const URL = "https://fakestoreapi.com/products";
      const res = await fetch(URL);
      const items: ItemData[] = await res.json();

      items.forEach((item) => {
        switch (item.category) {
          case "men's clothing":
            fashion.push(item);
            break;
          case "women's clothing":
            fashion.push(item);
            break;
          case "jewelery":
            accessory.push(item);
            break;
          case "electronics":
            digital.push(item);
            break;
          default:
            break;
        }

        all.push(item);
      });

      dispatch(itemStore.actions.fetchFashion({ data: fashion }));
      dispatch(itemStore.actions.fetchAccessory({ data: accessory }));
      dispatch(itemStore.actions.fetchDigital({ data: digital }));
      dispatch(itemStore.actions.fetchAll({ data: all }));
    }
    getItems();
  }, []);

  return (
    <>
      <Header />
      <Main>
        <AppRouter />
      </Main>
      <Footer />
    </>
  );
}

const Main = styled.main`
  min-height: calc(100vh - 352px);
`;
