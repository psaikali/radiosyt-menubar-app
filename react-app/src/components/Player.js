import React from "react";
import YouTubePlayer from "yt-player";

class Player extends React.Component {
	state = {
		player: false,
		paused: false
	};

	componentDidMount() {}

	componentDidUpdate(prevProps) {
		console.log(this.props);
		console.log(this.state.player);

		if (this.props.playing && this.state.player === false) {
			this.setState({
				player: new YouTubePlayer("#video-player", {
					autoplay: true,
					annotations: false,
					modestBranding: true,
					related: false,
					info: false
				})
			});
		}

		if (typeof this.state.player === "object") {
			this.state.player.load(this.props.playing.id, true);
			this.state.player.play();
		}
	}

	playVideo = () => {
		this.setState({ paused: false });
		this.state.player.play();
	};

	pauseVideo = () => {
		this.setState({ paused: true });
		this.state.player.pause();
	};

	render() {
		if (this.props.playing) {
			const { title, id, channel_title } = this.props.playing;

			return (
				<React.Fragment>
					<div id="video-player" />

					<nav className="video-actions">
						<ul>
							{this.state.paused ? (
								<li className="play" onClick={this.playVideo}>
									play
								</li>
							) : (
								<li className="pause" onClick={this.pauseVideo}>
									pause
								</li>
							)}
						</ul>
					</nav>

					<div className="video-details">
						<h2>
							{title}
							<span className="channel">by {channel_title}</span>
						</h2>
					</div>
				</React.Fragment>
			);
		} else {
			return <p>Not playing anything...</p>;
		}
	}
}

export default Player;
