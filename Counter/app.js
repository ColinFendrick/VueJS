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
	watch: {
		// This fn runs whenever counter data changes
		counter: function(value) {
			var vm = this;
			setTimeout(function() {
				vm.counter = 0;
			}, 2000);
		}
	},
	methods: {
		updateCoordinates: function(event) {
			this.x = event.clientX;
			this.y = event.clientY;
		}
	}
});