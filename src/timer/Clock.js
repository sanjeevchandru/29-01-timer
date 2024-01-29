import React, { useEffect, useState } from "react";
export const Clock=()=>{
    const [c,setc]=useState(0)
    const [t,sett]=useState(0)
    const [s,sets]=useState(0)
    const [isstart,setstart]=useState(false)
    useEffect(()=>{
        if(isstart){
        var x=setInterval(()=>{
            setc(c+1)
        },10)
    }   
    else{
        setc(c)
    }
    if(c>60){
        setc(0)
        sett(t+1)
    }
    if(t>60){
        sett(0)
        sets(s+1)
    }
    return ()=>{
        clearInterval(x)
            }
    },[c,isstart,s,t])
    const set=()=>{
        setc(0)
        sett(0)
        sets(0)
    }
    return(
        <div style={{padding:"5% 0"}}>
            <h4 style={{textAlign:"center",fontSize:"30px"}}>Timer</h4>
            <div style={{backgroundColor:"#fff",boxShadow:"0 0 20px #999",width:"30%",margin:"auto",textAlign:"center",border:"2px solid #999",padding:"20px"}}>

            <h1>{s+" : "+t+" : "+c}</h1>
            
            <div style={{display:"flex",justifyContent:"space-between"}}>
            <button onClick={()=>setstart(true)}>Start</button>
            <button onClick={()=>setstart(false)}>Stop</button>
            <button onClick={()=>set()}>Reset</button>
            </div>
        </div>
        </div>
    )
}
