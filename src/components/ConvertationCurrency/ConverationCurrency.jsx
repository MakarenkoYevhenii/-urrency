import { useEffect, useState } from "react";


const ConvertionCurrenc = (data) => {
 
  
  const handleClicl=(e)=>{
       console.log(e.target.value);
   }

  const options=data.data.map(id=>{
      
    return <option value={id.cc} key={id.cc}>{id.cc}</option>
})

  return (
    <>
      <input type="number"   name="left" ></input>
      <select name="currency" id="1" onClick={handleClicl}>
      {options}
      </select>
      <input type="number"  name="right" ></input>
      <select name="currency" id="2" onClick={handleClicl}>
      {options}
      </select>
    </>
  );
};

export default ConvertionCurrenc;
