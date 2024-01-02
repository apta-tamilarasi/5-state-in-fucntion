import React,{Component} from "react"
import live from '../../image/live.jpg'
import './About.css'
import {FaArrowDown} from 'react-icons/fa'


class  About extends Component{
	render(){
    return(
        <section className="about-section" data-aos="zoom-in" data-aos-duration="1200">
				<div className="about-container" id="about">
					<div className="about-row">
					<div className="about-col">
						<div className="about">
							<p>ABOUT</p>
							<h3>EVENT MANAGEMENT</h3>
						</div>
						<div className="learn">
							<div>
								<p><FaArrowDown/> Celebration forever specializes event management company in TAMILNADU. Our faculty put up quality and trustworthy services you can count on.</p><br/>
								<p><FaArrowDown/> The celebration forever take pride in expended its expertise to assure all events, including wedding, birthday party, entertainment, corporate, anniversary and other instants are conducted in the most unthinkable and memorable manner.</p><br/>
								<p><FaArrowDown/>As one of the best leading wedding event management company TAMILNADU has to offers, it is well-known for its varied ability familiarity in event management.</p><br/>
							</div>
							<div className="image">
								<img src={live}/>
							</div>
						</div>
					</div>
					</div>
				</div>
			</section>
    
)}
}

export default About