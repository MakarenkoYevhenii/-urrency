import style from "./ConverationCurrency.module.css"


const CurrencyConverter = (data) => {
 
  const options=Object.keys(data.data).map(id=>{
    
    return <option value={id} key={id}>{id}</option>
})
  options.sort()
  console.log();
  return (
    <div className={style.Converter}>
      <input type="number"   name="left" value={data.amount} onChange={ev => data.onAmountChange(ev.target.value)} className={style.input}></input>
      <select name="currency" id="1" value={data.currency} onChange={ev => data.onCurrencyChange(ev.target.value)} >
      {options}
  
      </select>
    </div>
  );
};

export default CurrencyConverter;
