import React from 'react'

import Child from './Child.js'
// import funt from 'Parent.js'


import f1 from '../image/f1.jpg'
import f2 from '../image/f2.jpg'
import f3 from '../image/f3.jpg'
import f4 from '../image/f4.jpg'
import f5 from '../image/f5.jpg'
import f6 from '../image/f6.jpg'
import f7 from '../image/f7.jpg'
import f8 from '../image/f8.jpg'

const Parent = () => {
    let flower = [
        {
            src: f1,
            name: "Never",
            color: "Green",
            rate: "RS. 15,000",
            count:0
        },

        {
            src: f2,
            name: "Never Settle",
            color: "Blue",
            rate: "Rs. 14,500",
            count:0
        },

        {
            src: f3,
            name: "Real Me",
            color: "Blue with white",
            rate: "Rs. 16,000",
            count:0
        },

        {
            src: f4,
            name: "Vivo Y12",
            color: "Light Green",
            rate: "Rs. 20,000",
            count:0
        },

        {
            src: f5,
            name: "Oppo",
            color: "Pink with Skyblue",
            rate: "Rs. 22,000",
            count:0
        },

        {
            src: f6,
            name: "Vivo",
            color: "Red",
            rate: "Rs. 55,000",
            count:0
        },

        {
            src: f7,
            name: "Oppo A78",
            color: "Black",
            rate: "Rs. 25,000",
            count:0
        },

        {
            src: f8,
            name: "Vivo Y56",
            color: "Yellow",
            rate: "Rs. 30,000",
            count:0
        }

    ]


    let arr = []
    
    let b=true
    

    let fun = (val, rate) => {

        if(b===true){

            let x = flower.find((a) => {
            
                return a.name === val ?{...a,count:a.count++}:""
    
            })

            arr.push(x)
            b=false
        }


    else{

           let tem= arr.find((e)=>{
                return e.name===val
            })

            console.log("tem="+ tem)

            if(tem===undefined){

                let z = flower.find((a) => {
                    
                    return a.name === val?{...a,count:a.count++}:""
        
                })

                arr.push(z)

            }

            else{

                arr.map((a) => {
                   return a.name===val?{...a,count:a.count++}:a
                    }
                    )

                               
            }
          
        }
        
        // console.log("arr=")
        // console.log((arr))

        // var y = flower.filter((b) => {
        //     return b.rate < rate
        // })

        // console.log(y)
 

       
    }

    // var a=fun
    // console.log(a)




    return <section>

        <div style={{ textAlign: "center" }}>

            <h2>
                Props Topic
            </h2>

            <p>
                Props means Property
            </p>

            <Child mobile={flower} fun={fun} />




        </div>



    </section>
}




// console.log(fun)

export default Parent