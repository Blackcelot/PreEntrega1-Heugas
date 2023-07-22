import { useState, useEffect } from "react";
import { getProductData, getCategoryData } from "../../services/asyncMock";
import Item from "../Item/Item";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  const { categoryid } = useParams();

  useEffect(() => {
    const asyncFunc = categoryid ? getCategoryData : getProductData;

    asyncFunc(categoryid)
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [categoryid]);

  return (
    <div>
      <h1>{greeting}</h1>
      <Item products={products}></Item>
    </div>
  );
};

export default ItemListContainer;
