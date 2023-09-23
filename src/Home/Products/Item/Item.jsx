import React from 'react';
import './Item.css';
import { ImgRatio } from '../../../util';

function Item({
  name, src, brand, cost, id,
}) {
  return (
    <div className="productItem">
      <div className="itemLink" to={`/products/item/${id}`}>
        <div className="boxImgItem">
          <ImgRatio
            src={src}
            alt={name}
            aspectRatio={1}
          />
        </div>
        <div className="boxText">
          <span className="textMarcaItem">{brand}</span>
          <span className="textNombreItem">{name}</span>
          <span className="textPrecioItem">
            S/
            {' '}
            {cost}
          </span>
        </div>
      </div>
      <button type="button" className="addCardButton pointer">
        Agregar al carro
      </button>
    </div>
  );
}

export default Item;
