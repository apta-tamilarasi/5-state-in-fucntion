// import React from "react";

// const Event=()=>{

//     const wel=()=>{
//         console.log('hi')
//     }
    
//     return <section>
//         <h1>Event Function</h1>
//         <button onClick={wel}>click me</button>
//     </section>
// }

// export default Event 



// CLASS Componet

import React,{Component} from "react";

class Event extends Component{

    render(){
        
        // hello()
        
        
        
    const wel=(a)=>{
        console.log(a)
  }

     return <section>
        <h1>Event Function</h1>
         <button onClick={()=>wel('hello')} id="btn">click me</button>
     </section>
 }

    }

// function hello(){
//         let btn=document.getElementById('btn')
//         console.log(btn)

//         // let para=document.createElement('div')

//     }

export default Event