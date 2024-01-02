import React,{Component} from 'react'

import './Child.css'
//  import Parent from './Parent.js'

class Child extends Component{

    render(){
        let card=this.props
        console.log(this)
    // document.write(props)

    console.log(card)

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
                {card.phone.map((a,b) => {
                    return (
                        <div className="col" key={b}>
                            <div className="images">
                                <img src={a.src} alt="loading" />
                            </div>
                            <h3>{a.name}</h3>
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
}


export default Child