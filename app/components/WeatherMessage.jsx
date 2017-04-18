var React = require('react');

//Stateless Functional components
var WeatherMessage = ({temp, location}) =>{	
	return(
		<h3 className="text-center"> Its it {temp} in {location}. </h3>
	);
}

module.exports = WeatherMessage;