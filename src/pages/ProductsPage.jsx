import { useEffect, useState } from "react";
import axios from "axios";

const apiURL = "https://fakestoreapi.com/products";

export default function ProductsPage() {
  const [products, getProducts] = useState([]);

  const fetchProducts = () => {
    axios.get(apiURL).then((res) => {
      getProducts(res.data);
    });
  };

  useEffect(fetchProducts, []);

  return (
    <>
      <main>
        <div className=" py-4">
          <h1 className="text-center mb-4">Products</h1>
          <div className="productsList">
            {products.map((product) => (
              <div className="card my-4 productsCard" key={product.id}>
                <div className="card-image">
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.title}
                  />
                </div>
                <div className="card-body">
                  <small className="text-body-secondary d-block my-1">
                    {product.category}
                  </small>
                  <h5 className="card-title">{product.title}</h5>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <small className="text-body-secondary d-block my-1">
                      Description:{""}
                    </small>
                    <div className="descriptionText">{product.description}</div>
                  </li>
                  <li className="list-group-item">
                    <small className="text-body-secondary d-block my-1">
                      Price:{""}
                    </small>
                    € {product.price}
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
