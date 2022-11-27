import HomeCarousel from "../components/Carousel";
import ItemList from "../components/ItemList";

export default function Home() {
  return (
    <div>
      <HomeCarousel />
      <section className="xl:container mx-auto">
        <ItemList category="fashion" />
        <ItemList category="accessory" />
        <ItemList category="digital" />
      </section>
    </div>
  );
}
