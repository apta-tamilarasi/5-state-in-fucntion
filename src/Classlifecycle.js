import React,{Component, useEffect, useState} from "react"


const  Classlifecycle=()=>{

    var [count,setcount]=useState(0)
    var [name,setname]=useState('resh')

    // useEffect(()=>{
    //     console.log('mount')
    //     setInterval(()=>{
    //         setcount((count)=>count+1)

    //     },1000)
    // },[])

    useEffect(()=>{
        console.log('count')
        // setname('tamil')
        
    },[name])

    let change=()=>{
        // console.log('name')
        setname('tamil')
    }

    const time=()=>{
             setInterval(()=>{
             setcount((count)=>count+1)

       },1000)

    }



   

    return <section>
            <h2 onClick={time}>COUNT: {count}</h2>
            <h4 onClick={change}>{name}</h4>
    </section>
}



export default Classlifecycle