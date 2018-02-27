new Vue({
	el: "#exercise",
	data: {
		name: "Colin",
		age: "27",
		imgSrc: "https://i.ytimg.com/vi/b3_lVSrPB6w/maxresdefault.jpg"
	},
	methods: {
		randomNumber: function() {
			return Math.random();
		}
	}
});