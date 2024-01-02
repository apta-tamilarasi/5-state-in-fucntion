import React, { useEffect, useState } from "react"
import axios from "axios"

const Axios=()=>{
    let [a,seta]=useState()

    useEffect(()=>{
        fun()
    },[])
    const fun=()=>{
        axios.get(`https://jsonplaceholder.typicode.com/albums`)
        .then((r)=>seta(r.data))

    }
    return <section>
        {
            
            a?.map((e,i)=>{
                return <div key={i}>
                   {e.id +") "}  {e.title}
                </div>
            })
        }



        </section>
}
export default Axios