'use strict';

require('./vpoll-player.less');

import vjs from 'video.js';
import io from 'socket.io-client';
import chart from 'chart.js';

window.chart = window.chart || chart;
window.vjs = window.vjs || vjs;
window.videojs = window.videojs || vjs;
window.vPollPlayer = vPollPlayer;

export default function vPollPlayer(elementId, options) {
  if (!options.socketUrl) throw new Error('options.socketUrl needs to be specified');

  let socket = window.socket = io(options.socketUrl);

  socket.on('message', (msg) => console.log(msg));

	return vjs(elementId, options);
};
