import React, { useEffect, useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


 const Livedata=()=>{

    const[data,setData]=useState([]);
    
    

    const getCovidData=async()=>{
        try{
            const res=await fetch('https://api.covid19india.org/data.json');
            const actualData=await res.json();
            console.log(actualData.statewise);
            setData(actualData.statewise);
            
        }catch(err){
            console.log(err);
        }
            

    }
useEffect(()=>{

    getCovidData();

},[]);



return(
<>
 
<h1 className="text-center">COVID19 LIVE DATA</h1>
 <h3 className="text-center">INDIA</h3>
 <p className="text-lg-end">~Managed by Pankaj Kumar</p>


 <div className="fixTableHead">
        <table className="table-bordered">
            <thead>
            <tr>
                <th>State</th>
                <th>Confirmed</th>
                <th>Recovered</th>
                <th>Deaths</th>
                <th>Active</th>
                <th>DeltaConfirmed</th>
                <th>DeltaDeaths</th>
                <th>DeltaRecovered</th>
                <th>Updated</th>
            </tr>
        </thead>
        <tbody>
            
            {
                data.map((curElem,index)=>{
                    return(
                        
                        
                        <tr key={index}>
                            
                            
            <th>{curElem.state}</th>
                <td>{curElem.confirmed}</td>
                <td>{curElem.recovered}</td>
                <td>{curElem.deaths}</td>
                <td>{curElem.active}</td>
                <td>{curElem.deltaconfirmed}</td>
                <td>{curElem.deltadeaths}</td>
                <td>{curElem.deltarecovered}</td>
                <td>{curElem.lastupdatedtime}</td>

            </tr>
            
                
            
            
            
                    )
                })
            }
            
            
        </tbody>
    </table>
</div>




</>
)
 }
 export default Livedata;
 