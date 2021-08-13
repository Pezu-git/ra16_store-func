/* eslint-disable no-unreachable */
import Item from './User'
import propTypes from 'prop-types'
import React from 'react';

function ShopItemFunc(props) {
  const { item } = props
  return (
    <>
      <div className="ImgContainer">
        <img src={item.itemBlack} alt='black' className="Img" />
      </div>
      <div className="main-content_container">
        <div className="main-content">
          <div className="headerWrapper">
            <h2>{item.brand}</h2>
            <h1>{item.title}</h1>
            <h3>{item.description}</h3>
          </div>
          <div className="description-container">
            <div className="description">
              {item.descriptionFull}
            </div>
          </div>
            <div className="purchase-info">
              <div className="price-container">
                <p className="price">{item.currency}{item.price}.00</p>
              </div>
              <button className="button">Добавить в корзину</button>
            </div>
          </div>
      </div>
    </>
  );
}

ShopItemFunc.propTypes = {
  item: propTypes.instanceOf(Item).isRequired
}

export default ShopItemFunc;