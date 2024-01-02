import React,{useEffect, useState} from "react"
import { memo } from "react"

const Useeffectchild=()=>{
    let [name,setname]=useState("Child")
    let [count,setcount]=useState(0)
    console.log("update")

    useEffect(()=>{
        let x=setInterval(()=>{
            console.log('count')
            setcount((count)=>count+1)

        },3000)

        return()=>{
            clearInterval(x)
        }
        

    },[])
    return <section>
         <h1>{name}</h1>
        <button onClick={()=>setname("React")}>click</button>
        <h2>{count}</h2>
    </section>
}

export default memo(Useeffectchild)