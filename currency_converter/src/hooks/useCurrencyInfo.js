import { useEffect, useState } from "react";
//github repo
//https://github.com/hiteshchoudhary/chai-aur-react/blob/main/06currencyConvertor/src/components/InputBox.jsx
//custom hook

function useCurrencyInfo(currency){
const [data, setData] = useState({});
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res)=>res.json())
        .then((res)=> setData(res[currency]));
        console.log(data);
    },[currency])
    return data;
}

export default useCurrencyInfo;

