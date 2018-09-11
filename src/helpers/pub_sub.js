const PubSub = {
	publish: function(channel, payload){
    console.log(`published on ${channel}. load was: ${payload}`);
		const event = new CustomEvent(channel, {
			detail: payload
		});
		document.dispatchEvent(event);
	},

	subscribe: function(channel, callback){
    console.log(`subscribed on ${channel}`);

		document.addEventListener(channel, callback);
	}
}

module.exports = PubSub;
