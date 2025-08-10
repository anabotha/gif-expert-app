
export const GifGridItem =( { title,url})=>{

     return(
          <div className="card">
               <img src={ url}alt={ title }></img>
               <h6>{title}</h6>
          </div>
     )
}

