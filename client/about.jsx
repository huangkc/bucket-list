About = React.createClass({

	hidePage () {
		ReactDOM.unmountComponentAtNode(document.getElementById("render-quad1"))
		ReactDOM.unmountComponentAtNode(document.getElementById("render-quad2"))
		ReactDOM.unmountComponentAtNode(document.getElementById("render-quad3"))
		ReactDOM.unmountComponentAtNode(document.getElementById("render-quad4"))
	},

	render () {
		return (
			<div className="text-container about">
 
				
			</div>
	  ) 
	}
})