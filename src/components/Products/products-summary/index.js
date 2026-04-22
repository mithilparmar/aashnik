import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";

const ProductSummary = ({ title, contents, productPath, isLightMode = true, backgroundImage = "" }) => {
  return (
    <div
      className="bgImgContainer"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        justifyContent: isLightMode ? "end" : "start",
      }}
    >
      <div className={isLightMode ? "trapezoidBottomBig" : "trapezoidTopBig"}>
        <div className={`container_products ${isLightMode ? "container_light" : "container_dark"}`}>
          <h2 className={`product_title ${isLightMode ? "title_light" : "title_dark"}`}>{title}</h2>
          <div className={`contentContainerProduct ${isLightMode ? "content_light" : "content_dark"}`}>
            {contents.map((content, index) => (
              <p key={index} className="content_products">
                {content}
              </p>
            ))}
          </div>
          <Link to={productPath} className={`button ${isLightMode ? "button_light" : "button_dark"}`}>
            EXPLORE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductSummary;
