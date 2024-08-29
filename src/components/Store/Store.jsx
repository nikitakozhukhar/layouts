import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import IconSwitch from "../IconSwitch/IconSwitch";
import CardView from "../CardView/CardView";
import ListView from "../ListView/ListView";

export default function Store() {
  const initialState = [
    {
      key: uuidv4(),
      name: "Nike Metcon 2",
      price: "130",
      color: "red",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg",
    },
    {
      key: uuidv4(),
      name: "Nike Metcon 2",
      price: "130",
      color: "green",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg",
    },
    {
      key: uuidv4(),
      name: "Nike Metcon 2",
      price: "130",
      color: "blue",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg",
    },
    {
      key: uuidv4(),
      name: "Nike Metcon 2",
      price: "130",
      color: "black",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg",
    },
    {
      key: uuidv4(),
      name: "Nike free run",
      price: "170",
      color: "black",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg",
    },
    {
      key: uuidv4(),
      name: "Nike Metcon 3",
      price: "150",
      color: "green",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg",
    },
  ];

  const [products, setProduct] = useState(initialState);
  const [view, setView] = useState(true);
  const [icon, setIcon] = useState("view_list");

  const handleCardView = () => {
    setIcon(icon == "view_list" ? "view_module" : "view_list");
    setView(!view);
  };

  return (
    <>
      <IconSwitch icon={icon} onSwitch={handleCardView} />
      {view ? <CardView products={products} /> : <ListView items={products} />}
    </>
  );
}
