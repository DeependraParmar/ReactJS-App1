import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Coin from './Coin';
import Loader from './Loader';


export default function Home() {
  const [coins, setCoins] = useState([]);
  const [loading,setLoading] = useState(true);
  useEffect(() => {
    const fetchAllCoins = async () => {
      try{
        const { data } = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&per_page=1000");
        console.log(data);
        setCoins(data);
        setLoading(false);
      }
      catch(err){
        setLoading(false);
        
      }
    }
    fetchAllCoins();
  }, []);
  return (
    <>
      <div className="coincontainer">

        {
          loading ? <Loader /> : coins.map((i) => (
            <Coin name={i.name} symbol={i.symbol} key={i.id} image={i.image} price={i.current_price} />
          ))
        }
      </div>
    </>
  )
}
