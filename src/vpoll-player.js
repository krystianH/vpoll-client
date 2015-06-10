'use strict';

require('./vpoll-player.less');

import vjs from 'video.js';

window.vjs = window.vjs || vjs;
window.videojs = window.videojs || vjs;
window.vPollPlayer = vPollPlayer;

export default function vPollPlayer(elementId, options) {
	return vjs(elementId, options);
};
