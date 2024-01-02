import React, { useState } from "react"
import Useeffectchild from "./Useeffectchild.js"


const Useeffectparent=()=>{
    let [name,setname]=useState("Tamil")
    let [show,setshow]=useState(false)
    return <section>
        <h1>{name}</h1>
        <button onClick={()=>setname("Kalai")}>click</button><br></br><br/>
        <button onClick={()=>setshow(!show)}>view child</button><br></br><br/>
        {
            show?<Useeffectchild/>:''
        }

    </section>
}

export default Useeffectparent