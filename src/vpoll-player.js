use 'strict';

let vjs = require('video.js');

window.vjs = window.vjs || vjs;
window.videojs = window.videojs || vjs;

module.exports = function vPollPlayer(elementId, options) {

	var player = vjs(elementId, options);


	return player;

};