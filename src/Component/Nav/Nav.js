import React from "react";
import './Nav.css'
import {FaBars} from 'react-icons/fa'
import download from '../../image/download.jpg'

const Nav=()=>{

    let a=[
        {
        name:"Tamil",
        work:"FED"
    },

    {
        name:"Kalai",
        work:"BED"
    },

    {
        name:"Durga",
        work:"UX"
    },

    {
        name:"Shenba",
        work:"UI"
    },

    {
        name:"APTA",
        work:"FED"
    }

]

   
    return(
        <div className="header">
            <div id="logo">
                   <img id="image" src={download} alt="waiting"/>
                    
                
            </div>

            <div id="content">
                <div>
                    HOME
                </div>

                <div>
                    ABOUT
                </div>

                <div>
                    SERVICES
                </div>

                <div>
                    ORDER
                </div>

                <div>
                    CONTACT
                </div>
            </div>

            <div id="bar">
                 <FaBars className="icon"/>
            </div>

            {/* <div>
               { a.map((v,i)=>{
                    return(<div>
                        <h1>{v.name}{i}</h1>
                        <h2>{v.work}</h2>
                        </div>)
                })
            }
            </div>

            <div>
                <img src={download} alt=""/>
            </div> */}
        </div>
    )
}

export default Nav