import React, { Component } from 'react';
import { FaSun } from 'react-icons/fa';
import { FaCloudSun } from 'react-icons/fa';
import { FaCloudSunRain } from 'react-icons/fa';
import { FaCloudShowersHeavy } from 'react-icons/fa';
import { FaCloud } from 'react-icons/fa';
import { FaSmog } from 'react-icons/fa';


class Weather extends Component {

	state = {
		temperature: undefined,
		conditionId: undefined,
		conditionDesc: undefined,
		loading: false
	}
	
	componentDidMount() {
		this.setState({ loading: true })
		fetch('https://api.openweathermap.org/data/2.5/weather?id=5913490&units=metric&appid=0eb712a9019f1049cc962226ba0dae09')
			.then(response => {
				return response.json();

			})
			.then(response => {
				this.setState({ temperature: Math.round(response.main.temp), conditionId: response.weather[0].id, conditionDesc: response.weather[0].description, loading: false })
			})
	}


	render() {	
		return (
		<div>
			<p>{this.getIcon()} {this.state.temperature}°C </p>				
		</div>	

		)
		
	}

	getIcon(){
		const cond = this.state.conditionId; 
		
		let icon;
		if(cond === 800){
			icon = <FaSun />;
		}else if(cond > 800 && cond < 804){
			icon = <FaCloudSun />;
		}else if(cond === 804){
			icon = <FaCloud />;
		}else if(cond >= 711 && cond <= 762 ){
			icon = <FaSmog />;
		}else if(cond >= 500 && cond <= 501){
			icon = <FaCloudSunRain />;
		}else if(cond >= 502 && cond <= 531){
			icon = <FaCloudShowersHeavy />;
		}

		return icon;
	}

}

export default Weather;