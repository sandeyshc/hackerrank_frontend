import React, { useState,useEffect } from 'react';
import Axios from "axios";
import Cards from './Cards';
function MainPage(){
    const [state, setstate] = useState()
    useEffect(() => {
        const apiss = Axios.create({
            baseURL: 'http://localhost:3005/api',
        })
        // var body=JSON.stringify({ state, body_fat,activity_levels});
        // console.log("uploading",body,apiss)
        const headers={
            'Content-Type': 'application/json'
        }
        apiss.post(`/getdata`, state,{
            headers:headers
        }).then(vid=>{
            setstate(vid.data.data)
            // console.log(state)
            // console.log(vid.data.data,state);
            // vid.data.data.map(hi=>{console.log(hi)})
            // console.log("wait",vid.data.TDEE,vid.data.BMR)
        })
        .catch(err=>{
            console.log("err",err)
        })
    }, [])
    return(
        <div>
            {state!=undefined ? state.map(hi=>(
            <div>
                <Cards propss={hi}/>
                {/* {()=>Cards(hi)} */}

                </div>
            )) : "No elements"}
            {/* {state!=undefined ? (
                <p>{state}</p>
            ) :"No elements found"} */}
        </div>
    )
}
export default MainPage;
            // <div>
            //     {state.map((hi)=>{
            //         <p>{hi}</p>
            //     })}
            // </div>