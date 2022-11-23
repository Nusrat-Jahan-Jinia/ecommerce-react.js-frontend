import React, { useEffect, useState } from "react";
import Title from "./Title";
import Product from "./Product";
import axios from "axios";

const ProductList = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);

  return (
    <React.Fragment>
      <div className="py-5">
        <div className="container">
          <Title name="our" title="products" />
        </div>
      </div>
      <section>
        <Product />
      </section>
    </React.Fragment>
  );
};

export default ProductList;
