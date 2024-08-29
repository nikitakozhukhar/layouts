import "../ListView/list.module.css";
import ShopItems from "../ShopItems/ShopItems";

export default function ListView(props) {
  const { items } = props;
  return <ShopItems products={items} />;
}
