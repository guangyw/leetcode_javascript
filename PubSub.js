var PubSub = (function PubSub() {
	var events = {};
	
	function publish(event) {
		if (!events[event]) {
			return;
		}
		var args = Array.prototype.slice.call(arguments, 1);
		events[event].forEach(function(e) {
			e.callback.apply(e.scope, args);
		})
	}
	
	function subscribe(event, callback, scope) {
		if (!events[event]) {
			events[event] = [];
		}
		events[event].push({callback: callback, scope: scope});
	}
	
	return {
		publish: publish,
		subscribe: subscribe
	}
}());


//Usage:
// PubSub.subscribe('score', console.log, this);
// PubSub.subscribe('score', function(x,y) {
// 	console.log(x+y);
// }, this);

// PubSub.publish('score', 1, 2);

module.exports = PubSub;
