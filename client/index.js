var app = new Vue({
	el: "#app",
	template: `	
	<div>
	<input id="tags" class="input-tags" type="text" data-role="taginput" data-random-color="true" data-max-tags="5" data-tag-trigger="Comma" v-model="tags"/>
	<div class="submit-button">
	<button v-on:click="submitData" class="button primary">Submit</button></div></div>
	`,
	data() {
		return {
			tags: ""
		};
	},
	methods: {
		submitData: function () {
			let inputValues = document.querySelector("#tags").value;
			console.log(inputValues);
		}
	}
});
