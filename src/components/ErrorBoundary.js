import React, {Component} from 'react';

class ErrorBoundary extends Component {
	constructor(props){
		super(props); //props passed to allow access to this.props in the constructor
		this.state = {
			hasError: false
		}
	}

	componentDidCatch(error, info){
		this.setState({hasError: true});
	}

	render(){
		
		if(this.state.hasError){
			return <h1>Oops. Something went wrong. </h1>
		}
		return this.props.children;
		
	}
}

export default ErrorBoundary;