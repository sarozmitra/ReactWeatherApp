var React = require('react');

//var WeatherMessage = React.createClass({	
//
//	render: function(){
//		var {temp, location} = this.props;
//		return(
//			<h3> Its it {temp} in {location}. </h3>
//		);
//	}
//
//});

//Stateless Functional components
var WeatherMessage = ({temp, location}) =>{	
	return(
		<h3> Its it {temp} in {location}. </h3>
	);
}

module.exports = WeatherMessage;