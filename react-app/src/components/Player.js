import React from "react";
//import YouTubePlayer from "yt-player";
import YouTube from "react-youtube";
import "../css/player.css";

class Player extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			player: false,
			paused: false
		};

		this.youtubeOptions = {
			// height: '390',
			// width: '640',
			playerVars: {
				// https://developers.google.com/youtube/player_parameters
				autoplay: 1
			}
		};
	}

	componentDidMount() {
		this.setState(() => ({
			// player: new YouTubePlayer("#video-player", {
			// 	autoplay: true,
			// 	annotations: false,
			// 	modestBranding: true,
			// 	related: false,
			// 	info: false,
			// 	events: {
			// 		onReady: () => console.log("ready"),
			// 		onStateChange: data => console.log(data)
			// 	}
			// })
		}));
	}

	componentDidUpdate(prevProps, prevState) {
		if (this.props.playing.id !== prevProps.playing.id) {
			// this.state.player.load(this.props.playing.id, true);
			// this.state.player.play();
		}
	}

	videoEmitedReady = event => {
		console.log("ready", event);

		this.setState({
			player: event.target
		});
	};

	videoEmitedError = event => {
		console.log("error", event);
	};

	videoEmitedStateChange = event => {
		console.log("stateChanged", event);
		// We can't read the video :(
		if (event.data === -1) {
			this.pauseVideo();
		}
	};

	handlePlayPause = () => {
		if (this.state.paused) {
			this.playVideo();
		} else {
			this.pauseVideo();
		}
	};

	playVideo = () => {
		this.setState({ paused: false });
		this.state.player.playVideo();
	};

	pauseVideo = () => {
		this.setState({ paused: true });
		this.state.player.pauseVideo();
	};

	render() {
		if (this.props.playing) {
			const { title, id, thumbnail, channel_title } = this.props.playing;

			return (
				<div id="player" className="sticky-top">
					<div className="youtube-player">
						<YouTube
							videoId={id}
							opts={this.youtubeOptions}
							onReady={this.videoEmitedReady}
							onError={this.videoEmitedError}
							onStateChange={this.videoEmitedStateChange}
						/>
					</div>

					<article className="video media">
						<div className="media">
							<figure
								style={{ backgroundImage: `url(${thumbnail})` }}
							>
								<img
									className="mr-3 align-self-center"
									src={thumbnail}
									alt={title}
								/>
								<figcaption>
									<button onClick={this.handlePlayPause}>
										{this.state.paused ? "Play" : "Pause"}
									</button>
								</figcaption>
							</figure>
							<div className="details media-body">
								<h4 className="card-title">
									{title}
									<span className="text-muted">
										by {channel_title}
									</span>
								</h4>
							</div>
						</div>
					</article>
				</div>
			);
		} else {
			return null;
		}
	}
}

export default Player;
