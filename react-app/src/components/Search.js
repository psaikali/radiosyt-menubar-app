import React from "react";

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
				<form className="form-inline" onSubmit={this.search}>
					<label htmlFor="keyword">Listen to</label>
					<input
						className="form-control form-control-lg"
						type="text"
						id="keyword"
						placeholder={this.randomKeyword()}
						ref={this.keywordRef}
						autoComplete="off"
					/>
				</form>
			</React.Fragment>
		);
	}
}

export default Search;
