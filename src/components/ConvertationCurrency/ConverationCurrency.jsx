import { useEffect, useState } from "react";


const ConvertionCurrenc = (data) => {

  const options=Object.keys(data.data).map(id=>{

    return <option value={id} key={id}>{id}</option>
})

  return (
    <>
      <input type="number"   name="left" value={data.amount} onChange={ev => data.onAmountChange(ev.target.value)} ></input>
      <select name="currency" id="1"value={data.currency} onChange={ev => data.onCurrencyChange(ev.target.value)} >
      {options}
      </select>
    </>
  );
};

export default ConvertionCurrenc;
