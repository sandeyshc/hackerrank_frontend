import React, { useState } from 'react';
import Axios from "axios";
import { useHistory } from "react-router-dom";
function MainPage(){

    // const [weight,setweight]=useState(0)
    // const [Body_fat,setBody_fat]=useState(0)
    // const [activity,setactivity]=useState(0)
        // function handleInputChange(event) {
    //     setweight(event.target.value);

    // }
    const history = useHistory();

    // function handleClick() {
    //   history.push("/home");
    // }
    const [state, setState] = useState({
        weight: 0,
        body_fat: 0,
        activity_levels:1.2,
        username:""
      })
    const [mystate,setmystate]=useState({
        TDEE: "",
        BMR: ""
    })
    const [cal, setcal] = useState({
        curr:0,
        tot:0,
        a:[]
    })
    function handleInputChange(evt) {
        const value = evt.target.value;
        setState({
          ...state,
          [evt.target.name]: value
        });
      }
    function onSubmits(){
        const apiss = Axios.create({
            baseURL: 'https://phable-care-backend.herokuapp.com/api',
        })
        // var body=JSON.stringify({ state, body_fat,activity_levels});
        // console.log("uploading",body,apiss)
        const headers={
            'Content-Type': 'application/json'
        }
        apiss.post(`/calculate`, state,{
            headers:headers
        }).then(vid=>{
            setmystate({
                BMR:vid.data.BMR,
                TDEE:vid.data.TDEE
            })
            console.log("wait",vid.data.TDEE,vid.data.BMR)
        })
        .catch(err=>{
            console.log("err",err)
        })
    }
    return(
        <div style={{backgroundColor:"#145DA0",color:"#ffffff",maxHeight:"100vh"}}>
            <button onClick={()=>history.push("/get_data")}>See all data</button>
            <br/>
            <input type="text" placeholder="username" name="username" onChange={handleInputChange}/>
            <input type="number" placeholder="weight" name="weight" onChange={handleInputChange}/>
            <input type="number" placeholder="Body fat" name="body_fat" onChange={handleInputChange}/><br/><br/>
            {/* <input type="number" placeholder="activity levels" name="activity_levels" onChange={handleInputChange} /> */}
            <select
                    value={state.activity_levels} 
                    onChange={handleInputChange} 
                    name="activity_levels" >
                <option value="1.2">Sedentary</option>
                <option value="1.375">Lightly active</option>
                <option value="1.55">moderately active</option>
                <option value="1.725">active</option>
                <option value="1.9">extra active</option>
            </select><br/><br/>
            <button onClick={onSubmits}>Submit</button><br/>
            {mystate.TDEE!="" ? (<label>TDEE: {mystate.TDEE}</label>) : null}<br/>
            {mystate.BMR!="" ? (<label>BMR: {mystate.BMR}</label>) : null}<br/>
            {console.log(cal)}
            {cal.a!=[] ? <p>Total calories: {cal.a.reduce(function(acc, val) { return parseInt(acc) + parseInt(val); }, 0)}</p>: null}
            {cal.a!=[] ? cal.a.map(hir=>(
                <div>
                <p>{hir}</p>
                <p style={{cursor:"pointer"}} onClick={()=>{var index = cal.a.indexOf(hir);var rp=cal.a;rp.splice(index, 1);setcal({...cal,a:rp})}}>-</p>
                </div>
            )) : null}
            <input type="number" placeholder="Enter number of calories" value={cal.cur} onChange={(e)=>setcal({...cal,cur:e.target.value})}/>
            <p onClick={()=>{setcal({...cal,a:[...cal.a,cal.cur],cur:0})}} style={{cursor:"pointer"}}>+</p>
            {/* <p style={{cursor:"pointer"}} onClick={()=>}>-</p> */}


            <br/>
            {mystate.TDEE!="" ? (<p>Your present calorie expenditure is {mystate.TDEE}. </p>) : null}
            {mystate.TDEE!="" ? (<p>If you want to decrease 2kg in a month then you need to burn {(14000-mystate.TDEE*30)*-1} calories</p>):null}
            {mystate.TDEE!="" ? (<p>If you want to increase 2kg in a month then you need to save {14000+mystate.TDEE*30} calories</p>):null}
            {mystate.TDEE!="" ? (<p>If you want to decrease 2kg in a month then you need to burn by general rule {14000} calories</p>):null}
            {mystate.TDEE!="" ? (<p>If you want to increase 2kg in a month then you need to save by general rule {14000} calories</p>):null}

            {/* <label>TDEE: {mystate.TDEE}</label><br/>
            <label>BMR: {mystate.BMR}</label><br/> */}

        </div>
    )
}
export default MainPage;