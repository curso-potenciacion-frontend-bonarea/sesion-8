import "./FeaturedShops.scss";
import { useAppSelector } from "@/store/hooks";

const FeaturedShops = (): React.ReactElement => {
  const shops = useAppSelector((state) => state.shops.featured);

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
