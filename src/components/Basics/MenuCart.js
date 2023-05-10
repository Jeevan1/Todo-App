import React from 'react'

const MenuCart = ({menuData}) => {
    return (
        <>
        {menuData.map((curElem) =>{
            const { id,name,price,image,category,description} = curElem;
            return (
                <div className="cart-container">
                <div className="cart">
                    <div className="cart-body">
                        <span className='cart-number'>{id} </span>
                        <span className='cart-author'></span>
                        <h2 className="cart-title">{name}</h2>
                        <span className="cart-description">{description}
                        </span>
                        <div className="cart-read">Read</div>
                    </div>
                    <img src={image} alt="" />
                    <h4 className='cart-price'>{price}</h4>
                    <span className='cart-tag'>Order Now</span>
                </div>
            </div>
            )
        })}
        </>
    )
}

export default MenuCart;