import "./FeaturedShops.scss";
import { Shop } from "@/shops/types";

const FeaturedShops = (): React.ReactElement => {
  const shops: Shop[] = [];

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
