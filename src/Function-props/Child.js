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
                {props.flower.map((a) => {
                    return (
                        <div className="col">
                            <div className="images">
                                <img src={a.src} alt="loading" />
                            </div>
                            <p>{a.name}</p>
                            <p>{a.color}</p>
                            <p>{a.rate}</p>

                            <div className='btn'>
                                BUY NOW
                            </div>

                        </div>


                    )
                })}
            </div>

        </div>




    </section>
}

export default Child