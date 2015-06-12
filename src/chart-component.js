'use strict';

let vjs = require('video.js');

vjs.Chart = vjs.Button.extend({
  init(player, options) {
    vjs.Button.call(this, player, options);
  },
  buildCSSClass() {
    return 'vjs-chart' + vjs.Button.prototype.buildCSSClass.call(this);
  },
  onClick(evt) {
    alert("a");
  }
});

vjs.Chart.prototype.buttonText = 'button text';

vjs.Chart.prototype.options_ = {};
