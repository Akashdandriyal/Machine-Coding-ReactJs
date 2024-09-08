import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import BreadCrumbs from "./BreadCrumbs";

const Products = () => {
  const products = useSelector((state) => state?.products);
  const navigate = useNavigate();
  return (
    <>
      <BreadCrumbs />
      <div className="products">
        {products?.products?.products?.map((product) => (
          <div
            className="product"
            key={product.id}
            onClick={() => navigate(`/products/${product.id}`)}
          >
            <img src={product.thumbnail} />
            <span>{product.title}</span>
            <span>⭐ {product.rating}</span>
            <p>$ {product.price}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
