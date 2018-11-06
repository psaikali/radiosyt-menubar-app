import React from "react";

class Video extends React.Component {
	render() {
		const { post_id, title, description, thumbnail } = this.props.details;
		return (
			<article onClick={() => this.props.play(post_id)}>
				<figure>
					<img src={thumbnail} alt={title} />
				</figure>
				<div className="details">
					<h2>{title}</h2>
					<p dangerouslySetInnerHTML={{ __html: description }} />
				</div>
			</article>
		);
	}
}

export default Video;
