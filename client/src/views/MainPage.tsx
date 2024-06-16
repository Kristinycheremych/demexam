import React, { useEffect, useState } from "react";
import { Product } from "./ProductInterface";
import axios from "axios";
import "./style.css";
import HeaderMain from "../components/header/HeaderMain";

const URL = process.env.REACT_APP_URL;

const MainPage = () => {
  const [data, setData] = useState<Product[]>([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");

  useEffect(() => {
    axios
      .get(`${URL}/get/product`)
      .then((res) => setData(res.data))
      .catch((error) => console.log(error));
  }, []);

  const filteredData = data
    .filter((product) =>
      product.ProductName.toLowerCase().includes(search.toLowerCase())
    )
    .filter((product) => (filter ? product.ProductCategory === filter : true))
    .sort((a, b) => {
      const prictA = parseFloat(a.ProductCost);
      const priceB = parseFloat(b.ProductCost);

      if (sort === "asc") {
        return prictA - priceB;
      } else if (sort === "desc") {
        return priceB - prictA;
      }
      return 0;
    });

  const hendleSearch = (e: any) => {
    setSearch(e.target.value);
  };
  const hendleSort = (e: any) => {
    setSort(e.target.value);
  };
  const hendleFilter = (e: any) => {
    setFilter(e.target.value);
  };

  return (
    <>
      <HeaderMain />
      <div>
        <div className="search_filter_sort">
          <div className="div_search">
            <input type="text" onChange={hendleSearch} placeholder="Поиск" />
          </div>
          <div className="div_filter">
            <select name="" id="" onChange={hendleFilter}>
              <option value="">Все</option>
              {Array.from(
                new Set(data.map((product) => product.ProductCategory))
              ).map((type) => (
                <option value={type} key={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
          <div className="div_sort">
            <select name="" id="" onChange={hendleSort}>
              <option value="">Сортировка</option>
              <option value="asc">По возрастанию</option>
              <option value="desc">По убыванию</option>
            </select>
          </div>
        </div>
        <div>
          {filteredData.map((product) => (
            <>
              <div key={product._id} className="div_content">
                <div className="image_content">
                  <img
                    src={`${URL}${product.ProductPhoto}`}
                    alt={product.ProductName}
                  />
                </div>
                <div className="product_info">
                  <div className="title_content">{product.ProductName}</div>
                  <div className="category_content">
                    {product.ProductCategory}
                  </div>
                  <div className="price_content">{product.ProductCost}</div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default MainPage;
