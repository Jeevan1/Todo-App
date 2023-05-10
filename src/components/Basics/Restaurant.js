import React, { useState } from 'react';
import "./style.css";
import Menu from "./menuApi";
import MenuCart from './MenuCart';
import Navbar from './Navbar';

const uniqueList = [
    ...new Set(Menu.map((curElem) =>{
    return curElem.category;
})
),"All"
];
// console.log(uniqueList)

const Restaurant = () => {
    const [menuData, setMenuData] = useState(Menu);
    const [menuList, setMenuList] = useState(uniqueList)

    const filterItem = (catgory) =>{
        if(catgory==="All"){
            setMenuData(Menu);
            return;
        }
        const updatedList = Menu.filter((curElem) =>{
            return curElem.category ===catgory;
        })
        setMenuData(updatedList);
    }
  return (
    <>
        <Navbar filterItem={filterItem} menuList = {menuList}/>
        <MenuCart menuData={menuData}/>
    </>

  )
}

export default Restaurant