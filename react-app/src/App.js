import React from "react";
//import "./App.css";
import Search from "./components/Search";
import Player from "./components/Player";

class App extends React.Component {
	state = {
		currentTab: "search",
		playing: false,
		searching: false,
		results: {
			searchInProgress: false,
			videos: []
		}
	};

	search = keyword => {
		this.setState({
			results: {
				searchInProgress: true
			}
		});
		let ajax_url = `https://radios.yt/wp-json/ryt/v1/search/?keyword=${keyword}`;

		fetch(ajax_url, {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(res => res.json())
			.then(response => {
				this.setState({
					results: {
						searchInProgress: false,
						videos: response.results
					}
				});
			});
	};

	play = id => {
		this.setState({ playing: this.state.results.videos[id] });
	};

	render() {
		return (
			<React.Fragment>
				<Player playing={this.state.playing} />
				<Search
					play={this.play}
					search={this.search}
					results={this.state.results}
				/>
			</React.Fragment>
		);
	}
}

export default App;
