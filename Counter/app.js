new Vue({
	el: "#app",
	data: {
		counter: 0,
		result: "",
		x: 0,
		y: 0
	},
	computed: {
		output: function() {
			return this.counter > 5 ? "Greater than 5" : "Less than 5";
		}
	},
	methods: {
		updateCoordinates: function(event) {
			this.x = event.clientX;
			this.y = event.clientY;
		}
	}
});