import React from "react";
//import "./App.css";
import Player from "./components/Player";
import Search from "./components/Search";
import SearchResults from "./components/SearchResults";
import fakeVideos from "./fakeData";

class App extends React.Component {
	state = {
		playing: false,
		searching: false,
		results: {
			searchInProgress: false,
			videos: fakeVideos
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
		this.setState(() => ({ playing: this.state.results.videos[id] }));
	};

	render() {
		return (
			<React.Fragment>
				<Player playing={this.state.playing} />
				<Search search={this.search} results={this.state.results} />
				<SearchResults play={this.play} results={this.state.results} />
			</React.Fragment>
		);
	}
}

export default App;
