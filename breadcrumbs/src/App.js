import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "./utils/appStore";
import Home from "./components/Home";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import "./App.css";

const router = createBrowserRouter([
  { path: "", element: <Home /> },
  { path: "products", element: <Products /> },
  { path: "products/:id", element: <ProductDetails /> },
]);

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default App;
