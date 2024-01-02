import React, { useState } from 'react'

import './Child.css'




const Child = (props) => {

    console.log(props)
    // document.write(props)


    const ran = Math.floor(Math.random() * (10)) 
    console.log(ran)

    // var condition="false"
    var [condition,setCon]=useState('false')

    return <section>
        <div style={{textAlign:"center"}}>
            


            <div className="container">
            <button  onClick={()=>setCon("true")} style={{padding:"10px" , color:"black", borderRadius:"5px"}}>Click</button>

                
                      {props.question.map((a, b) => {


                    return   condition==='true'?a.id === ran?

                            <div key={b}>
                                <h2 onClick={() => props.quesans(a.id)}>
                                    {a.ques}
                                </h2>

                            </div>:
                            a.boolean==='true'?
                            '':
                            <div key={b}>
                                <h2>
                                    {a.ques}
                                </h2>
                                <p style={{color:'RED',fontSize:'20PX'}}>
                                    {a.ans}
                                </p>
                                {/* setCon('false') */}

                            </div>:''
                  
                })}
            </div>

        </div>




    </section>
}

export default Child