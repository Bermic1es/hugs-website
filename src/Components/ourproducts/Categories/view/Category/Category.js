import React, { useState, useEffect } from "react";
import Categories from "./Categories";
import "./category.css";
import Axios from "axios"

const Category = ({ data }) => {

  return (
    <>
      <div className="productWrapper">
        {data.map((category, id) => {
          return (
            <>
              <div className="col-md-4 mb-4" key={id}>
                <div className="card">
                  <div className="imageWrapper">
                    <img className="card-img-top" src={category.image}/>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{category.title}</h5>
                    <p className="links"><a href={category.Shopee} target="_blank"><img className="ShopeeIcon"/></a>&nbsp;|
                    &nbsp;<a href={category.Lazada} target="_blank"><img className="LazadaIcon" img="images/Lazada.png"/></a>
                    </p>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Category;
