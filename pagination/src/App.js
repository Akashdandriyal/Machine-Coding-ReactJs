import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    let res = await fetch("https://dummyjson.com/products?limit=120");
    let data = await res.json();
    if (data && data.products) {
      setProducts(data.products);
    }
  };

  const selectPageClick = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= products.length / 12 &&
      selectedPage !== page
    )
      setPage(selectedPage);
  };

  return (
    <div className="App">
      <h1 className="heading">Products</h1>
      {products.length > 0 && (
        <div className="products">
          {products.slice((page - 1) * 12, page * 12).map((product) => (
            <div className="product" key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <span>{product.title}</span>
            </div>
          ))}
        </div>
      )}
      {products.length > 0 && (
        <div className="pagination">
          <span
            onClick={() => selectPageClick(page - 1)}
            className={page > 1 ? "" : "disable-page-selector"}
          >
            ◀️
          </span>
          {[...Array(products.length / 12)].map((_, i) => (
            <span
              key={i}
              onClick={() => selectPageClick(i + 1)}
              className={page === i + 1 ? "selected-page" : ""}
            >
              {i + 1}
            </span>
          ))}
          <span
            onClick={() => selectPageClick(page + 1)}
            className={
              page < products.length / 12 ? "" : "disable-page-selector"
            }
          >
            ▶️
          </span>
        </div>
      )}
    </div>
  );
};

export default App;
