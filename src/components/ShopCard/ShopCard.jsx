import classes from "../ShopCard/shopcard.module.css";

export default function ShopCard(props) {
  const { products } = props;
  const product = products.map((p) => {
    return (
      <>
        <div key={p.key} className={classes.shopCard}>
          <div className={classes.name}>{p.name}</div>
          <div className={classes.color}>{p.color}</div>
          <img src={p.img} alt={p.name} />
          <div className={classes.priceContainer}>
            <div className={classes.price}>${p.price}</div>
            <div className={classes.addToCart}>ADD TO CART</div>
          </div>
        </div>
      </>
    );
  });
  return (
    <>
      <div className={classes.cards}>{product}</div>
    </>
  );
}
