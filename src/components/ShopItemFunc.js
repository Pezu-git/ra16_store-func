import Item from './Item'
import propTypes from 'prop-types'
import React from 'react';
import coatColor from './coat';

//смена цвета
  const changeColor = coatColor('black')

function ShopItemFunc(props) {
  const { item } = props
  const itemCoat = `img/item-${changeColor}.jpg`

  return (
    <div className="App" style={{background: `linear-gradient(${changeColor}, #282c34 30%)`}}>
      <div className="window">
        <div className="ImgContainer">
          <img src={itemCoat} alt='Coat' className="Img"/>
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
        </div>
      </div>
  );
}

ShopItemFunc.propTypes = {
  item: propTypes.instanceOf(Item).isRequired
}

export default ShopItemFunc;