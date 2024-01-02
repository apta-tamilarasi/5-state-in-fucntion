
import React from "react"
import { useState } from "react";
import { useNavigate } from "react-router-dom"


const Resform=()=>{

    let nav=useNavigate()

    const [name,setname]=useState('')
    const [password,setpass]=useState('')

   const [boo,setboo]=useState(false)
  



   const obj=[
    {
        resname:"raji",
        password:'12345678'
    },

    {
        resname:"tamil",
        password:'apta1234'
    },

    {
        resname:"resh",
        password:'hashini1234'
    },

    {
        resname:"kalai",
        password:'skvani1234'
    }

   ]

    const handle=(e)=>{
        if(e.target.name==="name"){
            setname(e.target.value)
        }


        else if(e.target.name==="pass"){
            setpass(e.target.value)
           
        }
       
    }
    
    

    const sub=(e)=>{

    //    const dename= prompt('enter name')
    //    const depass= prompt('enter pass')

        e.preventDefault()

        
        if(name===''|| password===""){
            setboo(true)
        }

        else{

            let a=false
            let b=false
           
            
            obj.some((e)=>{
               
                return e.resname===name?
                (e.password===password )?a=true
                :(b=true):
                ''
            })  
            if(a===false && b===false){
                alert('name not correct and unsuccess')
            }

            else if ( b===true){

                alert('password not correct and unsuccess')
                
            }
            else{
                alert('success')
                nav('/About')

            }
            
        }
    }
    return <section>
      
    <form onSubmit={sub} style={{width:'50%',margin:"auto", padding:"20px",}}>
        <label>Name :</label>
        <input type="text" name="name" onChange={handle}></input><br></br>
        {/* <p style={{color:'red'}}>{nerror}</p> */}

        {
            name==='' && boo?<p style={{color:'red'}} > pls enter user name</p>:''
        }

       
        <label>Password :</label>
        <input type="password" name="pass" onChange={handle}></input><br></br>
        {/* <p style={{color:'red'}} >{eerror}</p> */}

        {
            password==='' && boo?
            <p style={{color:'red'}} >pls enter user name</p>:
            password!=='' && (password.length<8)?
            <p style={{color:'red'}} >pls must be 8 character</p>:''


        }

        <button>submit</button>

    </form>

   
    </section>
}

export default Resform

