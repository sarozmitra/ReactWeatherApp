var React = require('react');
var {Link} = require('react-router');

//Stateless Functional components
var Examples = (props) => {
	return(
		<div>
			<h1 className="text-center page-title">Examples</h1>
			<p>example page</p>

			<ol>
				<li>
					<Link to='/?location=London'>London, UK</Link>
				</li>
				<li>
					<Link to='/?location=Kolkata'>Kolkata, India</Link>
				</li>
			</ol>
		</div>
	);
}

module.exports = Examples;