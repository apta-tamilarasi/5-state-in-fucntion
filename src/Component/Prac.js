import React, { Component } from "react"

import './prac.css'

import f1 from '../image/f1.jpg'
import f2 from '../image/f2.jpg'
import f3 from '../image/f3.jpg'
import f4 from '../image/f4.jpg'
import f5 from '../image/f5.jpg'
import f6 from '../image/f6.jpg'
import f7 from '../image/f7.jpg'
import f8 from '../image/f8.jpg'

class Prac extends Component {
    render() {
        let arr = [1, 2, 3, 4]

        let x = 10

        let details = [{
            name: "Tamil",
            work: "FED"
        },

        {
            name: "Kalai",
            work: "BED"
        }
        ]

        let flower = [
            {
                src: f1,
                name: "lilly",
                color: "white",
                rate: "20Rs"
            },

            {
                src: f2,
                name: "Red Rose",
                color: "red",
                rate: "30Rs"
            },

            {
                src: f3,
                name: "Tilly",
                color: "purple with white",
                rate: "20Rs"
            },

            {
                src: f4,
                name: "Pink Rose",
                color: "white",
                rate: "20Rs"
            },

            {
                src: f5,
                name: "Zinnia",
                color: "All color",
                rate: "20Rs"
            },

            {
                src: f6,
                name: "Sun flower",
                color: "yellow",
                rate: "20Rs"
            },

            {
                src: f7,
                name: "Larkspur",
                color: "Dark rose",
                rate: "20Rs"
            },

            {
                src: f8,
                name: "Hypiscus",
                color: "white",
                rate: "20Rs"
            }

        ]
        return (
            <div>
                {x}

                <div>
                    {details.map((a, b) => {
                        return (
                            <div style={{ color: "red", backgroundColor: "aqua" }} key={b}>
                                {a.name}
                                {a.work}

                                <p>{arr}</p>
                                <p>{arr[3]}</p>
                            </div>


                        )
                    })}

                </div>

                <div>
                    <div className="container">
                        {flower.map((a) => {
                            return (
                                <div className="col">
                                    <div className="images">
                                        <img src={a.src} alt="loading"/>
                                    </div>
                                    <p>{a.name}</p>
                                    <p>{a.color}</p>
                                    <p>{a.rate}</p>

                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default Prac