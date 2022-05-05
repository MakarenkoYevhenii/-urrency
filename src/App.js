import './App.css';
import HeaderMenu from './components/HeaderMenu/HeaderMenu';
import ConvertionCurrenc from './components/ConvertationCurrency/ConverationCurrency';
import { useEffect, useState } from "react";
import { actualCurrency } from "./shared/services/curencyExchange";

function App() {
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
 
  const names = data.data.map((id) => {
  
      return id;
    
  });

  return (
    <>
  
      <HeaderMenu data={names}></HeaderMenu>
      
 
    <ConvertionCurrenc data={names}></ConvertionCurrenc>
    </>
  );
}

export default App;
