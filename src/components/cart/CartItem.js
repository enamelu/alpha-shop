 import { useContext, useState } from 'react';
import { CartContext } from '../../Context/CartContext';
import minus from '../../icons/minus.svg';
 import plus from '../../icons/plus.svg';

 
 export default function CartItem({index}){
  const {data, setData} = useContext(CartContext);
  const itemData = data[index];
  function handleClickMinus(e) {
    e.stopPropagation();
    if (itemData.quantity > 1) {
      const nextItemData = {
        ...itemData, 
        quantity: itemData.quantity - 1
      };
      const nextData = [...data];
      nextData[index] = nextItemData ; 
      setData(nextData);
    } else { 
      data.splice(index, 1);    //剪掉不要的
      const nextData = [...data];  //回傳剩下的
      setData(nextData);
    }
  }
  function handleClickPlus(e) {
    e.stopPropagation();
    const nextItemData = {
      ...itemData, 
      quantity: itemData.quantity + 1
    };
    const nextData = [...data];
    nextData[index] = nextItemData ; 
    setData(nextData);
  }

  return(
    <div className="product-container col col-12" >
      <img
        className="img-container"
        src={itemData.img} alt=""/>
      <div className="product-info">
        <div className="product-name">{itemData.name}</div>
        <div className="product-control-container">
          <div className="product-control">
            <img src={minus} className="product-action minus" alt="minus" onClick={handleClickMinus} />
            <span className="product-count" >{itemData.quantity}</span>
            <img src={plus} className="product-action plus" alt="plus" onClick={handleClickPlus}/>
          </div>
        </div>
        <div className="price" >{`$${itemData.price}`}</div>
      </div>
    </div>
  );}