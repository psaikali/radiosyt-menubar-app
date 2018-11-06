import React from "react";
import SearchResults from "./SearchResults";

class Search extends React.Component {
	/**
	 * DOM references
	 */
	keywordRef = React.createRef();

	randomKeyword() {
		let keywords = [
			"electronic",
			"hip hop",
			"classical",
			"rock",
			"chill",
			"trance",
			"rap",
			"focus",
			"ambient",
			"hits"
		];
		let random_keyword =
			keywords[Math.floor(Math.random() * keywords.length)];

		return random_keyword;
	}

	search = event => {
		event.preventDefault();
		const keyword = this.keywordRef.current.value;
		this.props.search(keyword);
	};

	render() {
		return (
			<React.Fragment>
				<form onSubmit={this.search}>
					<label htmlFor="keyword">Listen to:</label>
					<input
						type="text"
						id="keyword"
						placeholder={this.randomKeyword()}
						ref={this.keywordRef}
					/>
				</form>
				<SearchResults
					play={this.props.play}
					results={this.props.results}
				/>
			</React.Fragment>
		);
	}
}

export default Search;
