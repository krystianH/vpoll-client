'use strict';

let vjs = require('video.js');

vjs.Chart = vjs.Component.extend({
	init: function(player, options) {
		vjs.Component.call( this, player, options);
	}
});

vjs.Chart.prototype.options_ = {};

vjs.Chart.prototype.createEl = function(tagName, props) {

	var container = vjs.createEl('div', {className: 'vjs-chart-component hidden'});
	var title = vjs.createEl('h3',{className: 'poll-title'});
	var canvas = vjs.createEl('canvas',{className: 'poll-chart', id: 'pollChart'})
	var closeButton = vjs.createEl('div',{className: 'close-thick'});

	closeButton.onclick = () => container.className += " hidden";

	container.appendChild(title);
	container.appendChild(canvas);
	container.appendChild(closeButton);

	this.contentEl_ = container;
	return container;
}
