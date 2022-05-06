import axios from "axios";

const instanse=axios.create({
        baseURL:"https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json",

})

export async function actualCurrency() {
    const  {data}  = await instanse.get()

    return data;}
  
