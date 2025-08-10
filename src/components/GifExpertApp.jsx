import{ React, useState } from "react";
import { AddCategory } from "./addCategory";
import { GifGrid } from "./GifGrid";

export const GifExpertApp=()=>{
     const [categories,setCategories]=useState(["avatar"]);
     const onAddCategory=( newCategory )=>{
     if ( categories.includes(newCategory) )return;
          setCategories([newCategory, ...categories]);
     }

          return (
               <>
               <div className="title">

               <h1 >Gif Expert App</h1>
               </div>

               <AddCategory 
               onNewCategory={ (event) =>onAddCategory(event) }
               />
                    {
                         categories.map(category=>( //esto es un return
                              <GifGrid 
                                   key={ category } 
                                   category={category}
                              />
                              )
                         )
                    }
                    
               </>
          )
}