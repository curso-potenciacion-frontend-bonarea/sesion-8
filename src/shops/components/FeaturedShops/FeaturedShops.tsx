import { useAppStore } from "@/store";
import "./FeaturedShops.scss";

const FeaturedShops = (): React.ReactElement => {
  const shops = useAppStore((state) => state.shops.featured);

  return (
    <ul className="featured-shops">
      {shops.map((shop) => (
        <li key={shop.id}>
          <article className="featured-shop">
            <h3>{shop.name}</h3>
            <img src={`/pictures/${shop.picture.large}`} alt={shop.name} />
          </article>
        </li>
      ))}
    </ul>
  );
};

export default FeaturedShops;
