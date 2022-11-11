import HomeCarousel from "../components/Carousel";
import ItemList from "../components/ItemList";

export default function Home() {
  return (
    <div>
      <HomeCarousel />
      <ItemList category="fashion" />
      <ItemList category="accessory" />
      <ItemList category="digital" />
    </div>
  );
}
