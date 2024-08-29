import classes from "../ShopItems/shopitems.module.css";

export default function ShopItems(props) {
  const { products } = props;
  const product = products.map((p) => {
    return (
      <div key={p.key} className={classes.shopCard}>
        <img className={classes.img} src={p.img} alt={p.name} />
        <div className={classes.name}>{p.name}</div>
        <div className={classes.color}>{p.color}</div>
        <div className={classes.price}>${p.price}</div>
        <div className={classes.addToCart}>ADD TO CART</div>
      </div>
    );
  });
  return (
    <>
      <div className={classes.cards}>{product}</div>
    </>
  );
}
