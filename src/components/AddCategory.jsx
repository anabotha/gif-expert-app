import { useActionState } from "react";
import { useState } from "react";

export const AddCategory=({ onNewCategory })=>{
     
     const [ inputValue,setInputValue ]= useState('');
     const onInputChange=(event)=>{
          setInputValue(event.target.value);
     }
     
     const onSubmit=(event)=>{
          event.preventDefault();
          const inpValue=inputValue.trim();
          if(inpValue.length<=1)return;
               onNewCategory( inpValue );
               setInputValue('');
     }
     
     return (
          <form onSubmit={onSubmit}>
               <input
               type="text"
               placeholder="Buscar Gifs"
               value={ inputValue }
               onChange={onInputChange }
               />
          </form>
     )
}