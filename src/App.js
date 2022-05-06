import "./App.css";
import HeaderMenu from "./components/HeaderMenu/HeaderMenu";
import ConvertionCurrenc from "./components/ConvertationCurrency/ConverationCurrency";
import { useEffect, useState } from "react";
import { actualCurrency } from "./shared/services/curencyExchange";

function App() {
  const [amount1, setAmount1] = useState(0);
  const [amount2, setAmount2] = useState(0);
  const [currency1, setCurrency1] = useState("USD");
  const [currency2, setCurrency2] = useState("EUR");
  const rate={
      "UAH":1
  }
 
  const [data, setData] = useState({
    data: [],
    error: null,
  });

  useEffect(() => {
    const fetchCurrency = async () => {
      try {
        const newData = await actualCurrency();
        setData(() => {
          return {
            data: newData,
          };
        });
      } catch (error) {
        setData((prevState) => {
          return {
            ...prevState,
            loading: false,
            error: error.message,
          };
        });
      }
    };
    fetchCurrency();
  }, []); 
  
  function handleAmount1Change(amount1) {

    setAmount2((amount1 * rate[currency1]) / rate[currency2]);
    setAmount1(amount1);
  }

  function handleCurrency1Change(currency1) {
    setAmount2((amount1 * rate[currency1]) / rate[currency2]);
    setCurrency1(currency1);
  }

  function handleAmount2Change(amount2) {
    setAmount1((amount2 * rate[currency2]) / rate[currency1]);
    setAmount2(amount2);
  }

  function handleCurrency2Change(currency2) {
    setAmount1((amount2 * rate[currency2]) / rate[currency1]);
    setCurrency2(currency2);
  }
  data.data.map(id=>{
      rate[id.cc]=id.rate
  });
  console.log(rate);
  return (
    <>
      <HeaderMenu data={rate}></HeaderMenu>

      <ConvertionCurrenc
        data={rate}
        amount={amount1}
        currency={currency1}
        onCurrencyChange={handleCurrency1Change}
        onAmountChange={handleAmount1Change}
      ></ConvertionCurrenc>
      <ConvertionCurrenc
        data={rate}
        amount={amount2}
        currency={currency2}
        onCurrencyChange={handleCurrency2Change}
        onAmountChange={handleAmount2Change}
      ></ConvertionCurrenc>
    </>
  );
}
export default App;
