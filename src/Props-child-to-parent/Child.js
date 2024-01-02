import React from 'react'

import './Child.css'




const Child = (props) => {

    console.log(props)
    // document.write(props)

    return <section>

        {/* <div>
            <p>
                Parent and child property
            </p>

            <div>
                <div>{props.name}</div>
                {props.obj.map((a)=>{
                    return <div style={{padding:"10px"}}>
                            {a.name}
                    </div>
                })}
            </div>
        </div> */}

        <div>


            <div className="container">
                
                {props.mobile.map((a,b) => {
                    return (
                        <div className="col" key={b}>
                            <div className="images">
                                <img src={a.src} alt="loading" />
                            </div>
                            <h2>{a.name}</h2>
                            <p>{a.color}</p>
                            <p>{a.rate}</p>

                            <div className='btn' onClick={()=>props.fun(a.name,a.rate)}>
                                BUY NOW
                            </div><br></br>
                            
                           

                        </div>


                    )
                })} 
                
            </div>

        </div>




    </section>
}

export default Child