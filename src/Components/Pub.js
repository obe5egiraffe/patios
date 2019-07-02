import React, { Component } from 'react';
import { FaGlassCheers } from 'react-icons/fa';
import { FaWalking } from 'react-icons/fa'; 

const request = require('request');
const cheerio = require('cheerio');
const rp = require('request-promise');



const foursquare = require('react-foursquare')({
	clientID: '2SGSLYZ4K2SEVBGZQB2P34LD3HO3TDG2LDAUXDRVH2QHAIUN',
	clientSecret: 'OT4DJ3PMVPE1QNB0KNSMFD3SJK2VYLXE1RF2QXPE4ODIFSSZ'
})

const params = {
	"ll" : "51.037435,-114.068333",
	"categoryId" : "4bf58dd8d48988d11b941735",
	"radius" : "500",
	"openNow":"1",
	"sortByDistance":"1",
	"limit": "5"
};

class Pub extends Component {

	state = {
		pubs: {

		}
	}
	constructor(props) {
		super(props);
		this.showSpecials = this.showSpecials.bind(this);
		this.isOpen = this.isOpen.bind(this);

	}

	componentWillMount(){
		
		

	}


	componentDidMount(){
		const options = {
			uri: `http://www.shipandanchor.com/menus/dailyspecials.html`,
			transform: function(body){
				return cheerio.load(body);
			}
		}

		rp(options)
			.then(($) =>{
				console.log($);
			})
			.catch((err) =>{
				console.log(err);
			})

		
		
	}

	render(){
		const {pubs} = this.props;
		const date = new Date();
		const data = this.state.pubs;
		


		return(
		<React.Fragment>
        {pubs.map((pub, i) =>
        	<div className={this.happyHour(pub.happyhour[date.getDay()])} key={i}>
       		   <FaGlassCheers className="drinks" />
       		   <div className="content">
       		    <h2>{pub.title} <span><FaWalking />{pub.distance} mins</span></h2>
       			{this.isOpen(pub.hours[date.getDay()]) ?
       			<p><span className="open">OPEN</span></p> :
       		 	<p><span>CLOSED</span></p>}
       		   </div>
       		   
       		   <div onClick={this.showSpecials} className="specials-btn">
       		     <p>Specials</p>
       		     <p className="plus">+</p>
       		     
       		   </div>
       		   <div className="specials-wrap">
       		       <p>{!pub.specials[date.getDay()] ? "No Specials" : pub.specials[date.getDay()] }</p>
       		    
       		   </div>
       		</div>
        )}
        </React.Fragment>
        )
	}

	showSpecials(e){
		const specials = e.currentTarget.nextSibling
		specials.classList.toggle('open');
	}

	isOpen(hours){
		const hoursArray = hours.split(" - ");
		const now = new Date();
		let open = dateObj(hoursArray[0]);
		let close = dateObj(hoursArray[1]);
		//const time = date.getHours()+":"+date.getMinutes();
		
		if (open > close){
			let temp = open;
			open = close;
			close = temp.setTime(temp.getTime() + 12*60*60*1000);
		}
		//console.log(open, close);
		if(now < close && now > open){
			return true;
		} else {
			return false;
		}
		
		function dateObj(d){
			const parts = d.split(":");
			let date = new Date();
			date.setHours(parts[0]);
			date.setMinutes(parts[1]);
			return date;
		}
	}



	happyHour(hours){
		let classes="pub-single";
		const date = new Date();
		classes += this.isOpen(hours) ? " happy" : "";
		return classes;
	}

}

export default Pub;