'use strict';

let vjs = require('video.js');

vjs.Chart = vjs.Button.extend({
	init: function(player, options) {
		vjs.Button.call(this, player, options);
	},
  buildCSSClass: function() {
    return 'vjs-chart' + vjs.Button.prototype.buildCSSClass.call(this);
  },
  onClick: function(evt) {
    alert("a");
  }
});

vjs.Chart.prototype.buttonText = 'button text';

vjs.Chart.prototype.options_ = {};
