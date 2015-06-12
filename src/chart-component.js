'use strict';

let vjs = require('video.js');

vjs.Chart = vjs.Button.extend({
	init: function(player, options) {
		vjs.Button.call( this, player, options);
	}
});

vjs.Chart.prototype.buttonText = 'button text';

vjs.Chart.prototype.options_ = {};

vjs.Chart.prototype.buildCSSClass = function() {
	return 'vjs-chart' + vjs.Button.prototype.buildCSSClass.call(this);
};

vjs.Chart.prototype.onClick = function ( e ) {
	alert("a");
};

/*vjs.Chart.prototype.createEl = function(tagName, props) {
	var container = vjs.createEl('div', {className: 'vjs-container'});
	this.contentEl_ = container;
	console.log("aaz");
	return container;
}*/
