import React from 'react'
const picture =(props)=>{
      return (
        <div style={{height: "200px", width: "200px"}}  className=" container with-title App">
        <img style={{display: "relative", height: "100%", width: "100%", transform:"scale(1.2)", borderRadius: "2px"}} src={props.src}  />
        </div>
      );
  }
  
  export default picture;