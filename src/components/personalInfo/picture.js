import React from 'react'
const picture =(props)=>{
      return (
        <div onClick={props.onClick}  className=" personalInfo-img with-title">
        <img alt="" style={{display: "relative", height: "100%", width: "100%", borderRadius: "2px"}} src={props.src}  />
        </div>
      );
  }
  
  export default picture;