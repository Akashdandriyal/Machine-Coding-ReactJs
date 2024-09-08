import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { fetchProducts } from "../utils/productSlice";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <div className="home">
      <h1>Breadcrumbs</h1>
      <Link to={"products"}>View All Products</Link>
    </div>
  );
};

export default Home;
