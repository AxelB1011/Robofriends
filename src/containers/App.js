import React, {Component} from 'react';
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import './App.css'
import Scroll from '../components/Scroll'
import ErrorBoundary from '../components/ErrorBoundary'

class App extends Component {
	constructor(){
		super()
		this.state = {
			robot: [],
			searchField: ''
		}
	}

	onSearchChange = (event) => {
		this.setState({searchField: event.target.value});
		// console.log(event.target.value);
		
		// console.log(fileredRobots);
	}

	render(){
		const {robot, searchField} = this.state;
		const fileredRobots = robot.filter(r => {
			return r.name.toLowerCase().includes(searchField.toLowerCase());
		});
		return !robot.length ?
		(<h1>Loading</h1>) :
		(
			<div className='tc'>
				<h1 className='f2'> RoboFriends </h1>
				<SearchBox searchChange={this.onSearchChange} />
				<Scroll>
					<ErrorBoundary>
						<CardList robots={fileredRobots} />
					</ErrorBoundary>
				</Scroll>
			</div>
		);
		
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(users => this.setState({robot: users}));
	}
}

export default App;