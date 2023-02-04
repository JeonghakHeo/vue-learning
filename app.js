const app = Vue.createApp({
	data() {
		return {
			title: 'The Final Empire',
			author: 'Jerry',
			age: 45
		}
	},
	methods: {
		changeTitle() {
			this.title = 'Words of Radiance'
		}
	}
})


app.mount('#app')