import React from "react";
import Video from "./Video";

class SearchResults extends React.Component {
	render() {
		if (!this.props.results.searchInProgress) {
			return (
				<section className="results">
					{Object.keys(this.props.results.videos).map(key => (
						<Video
							key={key}
							play={this.props.play}
							details={this.props.results.videos[key]}
						/>
					))}
				</section>
			);
		} else {
			return (
				<div className="searching">
					<p>Looking...</p>
				</div>
			);
		}
	}
}

export default SearchResults;
