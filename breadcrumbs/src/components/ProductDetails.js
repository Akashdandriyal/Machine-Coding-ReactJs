import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import BreadCrumbs from "./BreadCrumbs";

const ProductDetails = () => {
  const { id } = useParams();
  const products = useSelector((state) => state?.products);
  const [productDetails, setProductDetails] = useState({});

  useEffect(() => {
    let product = products?.products?.products?.find(
      (product) => product.id.toString() === id
    );
    console.log(product);
    setProductDetails(product);
  }, [products, id]);

  return (
    <>
      <BreadCrumbs />
      <div className="product-details">
        <div className="product-image">
          <img src={productDetails?.thumbnail} alt={productDetails?.title} />
        </div>
        <div className="product-info">
          <h1>{productDetails?.title}</h1>
          <span>{productDetails?.rating} ⭐</span>
          <span>{productDetails?.tags?.join(" | ")}</span>
          <p>$ {productDetails?.price}</p>
          <p>{productDetails?.description}</p>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
