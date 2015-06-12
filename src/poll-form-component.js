'use strict';

let vjs = require('video.js');

vjs.formPoll = vjs.Component.extend({
	init: function(player, options) {
		vjs.Component.call( this, player, options);
	}
});

vjs.formPoll.prototype.options_ = {};

vjs.formPoll.prototype.buildCSSClass = function() {
	return 'vjs-poll-form' + vjs.Button.prototype.buildCSSClass.call(this);
};

videojs.formPoll.prototype.createEl = function(type, props) {

	 let overlay = videojs.createEl('div', {
            className: 'hide-el',
            id: 'vjs-form-overlay'
        });

	 	let formElements = '<fieldset><legend> Question to ask </legend>';
		 formElements += '<p><label for="question">Question: </label>';
		 formElements +=  '<input type="text" name="question" id="question" value=""></p></fieldset>';
		 formElements += '<fieldset><legend> Possible answers </legend>';
		 formElements +=  '<p><label for="alt_1">Alternative 1: </label>';
		 formElements +=  '<input type="text" name="question" id="alt_1" value=""></p>';
		 formElements +=  '<p><label for="alt_2">Alternative 2: </label>';
		 formElements +=  '<input type="text" name="question" id="alt_2" value=""></p></fieldset>';
		 formElements +=  '<p><input type="button" value="Submit" onClick="sendPoll()"></p>';

        let form = videojs.createEl('form', {
        	className: 'vjs-form',
        	innerHTML: formElements
        });

        overlay.appendChild(form);

        return overlay;
};
