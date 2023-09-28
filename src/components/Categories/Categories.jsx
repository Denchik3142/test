import { useState } from "react";
import Search from "../Search/Search";


const Categories = ({value,onClickActive,searchValue,setSearchValue}) => {



  const categoryArray=["Все","Закуски" , "Салаты" , "Супы" , "Горячие блюда" , "Гарниры" , "Десерты"]

  return (
    <section class="categories">
      <div class="container">
        <nav>
          {categoryArray.map((item,index)=>{
            return(
              <li onClick={()=>onClickActive(index)} className={value===index ? 'activeli' : null} key={index}>{item}</li>
            )
          })}
        </nav>
        <Search/>
      </div>
    </section>
  );
};

export default Categories;




