import{ useEffect, useState } from "react";
import {GifGridItem} from "./GifGridItem"
import useFetchGifs from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) =>{
     
     const { images,isLoading }= useFetchGifs( category );
     return (
          <>
          
          <h3>{ category }</h3>
          {
               isLoading && <h2> cargando ...</h2>
          }
               <div className="card-grid">
                    {images.map( ( image )=>(
                         <GifGridItem 
                         key={ image.id }
                         {...image} //aca agarra todos las properties q tiene.
                              // title={image.title}
                              // image={image.url}
                              />
                    ) )}
               </div>
          
          </>
     )
}