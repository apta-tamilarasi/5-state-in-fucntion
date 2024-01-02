import React from 'react'

import Child from './Child.js'


import f1 from '../image/f1.jpg'
import f2 from '../image/f2.jpg'
import f3 from '../image/f3.jpg'
import f4 from '../image/f4.jpg'
import f5 from '../image/f5.jpg'
import f6 from '../image/f6.jpg'
import f7 from '../image/f7.jpg'
import f8 from '../image/f8.jpg'

const Parent =()=>{
    
    


//     let a=20
//     let name='apta'
//     let b=[1,2,3,4]
//     let c=[
//         {
//             name:'tamil',
//             age:20

//     },

//     {
//         name:'kalai',
//         age:22

// }
// ]

let mobile = [
    {
        src: f1,
        name: "Never Settle",
        color: "Green",
        rate: "RS. 15,000"
    },

    {
        src: f2,
        name: "Never Settle",
        color: "Blue",
        rate: "Rs. 14,500"
    },

    {
        src: f3,
        name: "Real Me",
        color: "Blue with white",
        rate: "Rs. 16,000"
    },

    {
        src: f4,
        name: "Vivo Y12",
        color: "Light Green",
        rate: "Rs. 20,000"
    },

    {
        src: f5,
        name: "Oppo",
        color: "Pink with Skyblue",
        rate: "Rs. 22,000"
    },

    {
        src: f6,
        name: "Vivo",
        color: "Red",
        rate: "Rs. 55,000"
    },

    {
        src: f7,
        name: "Oppo A78",
        color: "Black",
        rate: "Rs. 25,000"
    },

    {
        src: f8,
        name: "Vivo Y56",
        color: "Yellow",
        rate: "Rs. 30,000"
    }

]
    

    return <section>

        <div style={{textAlign:"center"}}>

            <h2>
                Props Topic
            </h2>

            <p>
                Props means Property
            </p>

            <Child phone={mobile}/>

        </div>

       

    </section>
}


export default Parent