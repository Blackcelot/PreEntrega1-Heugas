import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductData, getCategoryData } from "../../services/asyncMock";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);

  const { itemid } = useParams();

  useEffect(() => {
    getCategoryData(itemid)
      .then((response) => {
        setProduct(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [itemid]);

  return (
    <>
      <div>
        <img width={550} src={product.img} alt="imagen"></img>
      </div>
      <div>
        <h2>{product.title}</h2>
      </div>
      <div>
        <h4>$ {product.price}</h4>
        <small>{product.description}</small>
      </div>
    </>
  );
};
export default ItemDetailContainer;
