import axios from "axios";
import { useState,useEffect } from "react";
import Graph from './graph';
import './index.css';
const App=()=>{
    const [open,setOpen]=useState();
    const [high,setHigh]=useState();
    const [low,setLow]=useState();
    const [close,setClose]=useState();
    const findValues=(obj,open,high,low,close)=>{
        let nums=[];
        let svgVariable="";
        var values=Object.values(obj);
        values.forEach((item)=>{
          nums.push(parseFloat(item[open]))
        })
        svgVariable = `M${0} ${(23000-nums[0])/15}`
        for(let i=1; i<nums.length; i++){
            svgVariable+= ` L${0+7*i} ${(23000-nums[i])/15}`
            setOpen(svgVariable);
        }
      nums=[];
      svgVariable="";
      values.forEach((item)=>{
        nums.push(parseFloat(item[high]))
      })
      svgVariable = `M${0} ${(23000-nums[0])/15}`
      for(let i=1; i<nums.length; i++){
          svgVariable+= ` L${0+7*i} ${(23000-nums[i])/15}`
          setHigh(svgVariable);
      }
      nums=[];
      svgVariable="";
      values.forEach((item)=>{
        nums.push(parseFloat(item[low]))
      })
      svgVariable = `M${0} ${(23000-nums[0])/15}`
      for(let i=1; i<nums.length; i++){
          svgVariable+= ` L${0+7*i} ${(23000-nums[i])/15}`
          setLow(svgVariable);
      }
      nums=[];
      svgVariable="";
      values.forEach((item)=>{
        nums.push(parseFloat(item[close]))
      })
      svgVariable = `M${0} ${(23000-nums[0])/15}`
      for(let i=1; i<nums.length; i++){
          svgVariable+= ` L${0+7*i} ${(23000-nums[i])/15}`
          setClose(svgVariable);
      }
    }
    const query=()=>{
        const options = {
            method: 'GET',
            url: 'https://alpha-vantage.p.rapidapi.com/query',
            params: {market: 'CNY', symbol: 'BTC', function: 'DIGITAL_CURRENCY_DAILY'},
            headers: {
                'X-RapidAPI-Key': '21b80da699mshd4bc6f20998e8d7p1344b5jsnca16b9cdd521',
                'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
            }
        };
        axios.request(options).then(function (response) {
            console.log(response.data)
            findValues(response.data["Time Series (Digital Currency Daily)"],"1b. open (USD)","2b. high (USD)","3b. low (USD)","4b. close (USD)");
        }).catch(function (error) {
            console.error(error);
        });
    }
    useEffect(()=>query(),[])
    return (
        <div className="main">
            <h1>Bitcoin daily market graph</h1>
            <Graph svgVariable={[open,high,low,close]}/>
            <div className="caption">
                <p><span className="box open"></span>Open</p>
                <p><span className="box high"></span>High</p>
                <p><span className="box low"></span>Low</p>
                <p><span className="box close"></span>Close</p>
            </div>
        </div>
    )
}

export default App;
