import React, { useState,useEffect } from 'react'

const Api=()=>{

    let [api,setapi]=useState()
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/albums')
        .then(response => response.json())
        .then(json => setapi(json))

   },[])


    return <div>
        {
            api?.map((e)=>{
                return <div>
                    {e.title}
                    </div>

            })
        }
      
      </div>
}

export default Api