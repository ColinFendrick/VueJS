new Vue({
	el: "#exercise",
	data: {
		value: ""
	},
	methods: {
		alert: function() {
			alert("alert");
		},
		track: function(event) {
			this.value = event.target.value;
		}
	}
});