import ShopCard from "../ShopCard/ShopCard";

export default function CardView(props) {
  const { products } = props;
  return <ShopCard products={products} />;
}
