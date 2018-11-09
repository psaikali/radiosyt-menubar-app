import React from "react";
import "../css/video.css";

class Video extends React.Component {
	render() {
		const { post_id, title, description, thumbnail } = this.props.details;
		return (
			<article
				className="video media"
				onClick={() => this.props.play(post_id)}
			>
				<div className="media">
					<figure style={{ backgroundImage: `url(${thumbnail})` }}>
						<img
							className="mr-3 align-self-center"
							src={thumbnail}
							alt={title}
						/>
					</figure>
					<div className="details media-body">
						<h4 className="card-title">{title}</h4>
						<p
							className="card-text"
							dangerouslySetInnerHTML={{ __html: description }}
						/>
						<button className="btn btn-primary">Listen</button>
					</div>
				</div>
			</article>
		);
	}
}

export default Video;
